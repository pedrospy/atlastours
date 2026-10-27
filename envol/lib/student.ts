import "server-only";
import { requireStudent } from "./auth";
import { accessOffer, canAccess, flatLessons, getCourse } from "./course";
import { db } from "./db";

export async function studentContext() {
  const student = await requireStudent();
  const [course, progress] = await Promise.all([
    getCourse(),
    db.lessonProgress.findMany({ where: { studentId: student.id }, select: { lessonId: true, completedAt: true } }),
  ]);
  const offer = accessOffer(student.orders);
  const done = new Set(progress.map((p) => p.lessonId));
  const lessons = flatLessons(course).map((l) => ({
    ...l,
    unlocked: l.freePreview || canAccess(offer, l.module.tier),
    done: done.has(l.id),
  }));
  const unlocked = lessons.filter((l) => l.unlocked);
  const core = lessons.filter((l) => l.module.tier === "essentiel");
  const completedAt = progress.reduce<Date | null>((max, p) => (!max || p.completedAt > max ? p.completedAt : max), null);
  return {
    student,
    offer,
    course,
    lessons,
    progress: unlocked.length ? Math.round((unlocked.filter((l) => l.done).length / unlocked.length) * 100) : 0,
    nextLesson: unlocked.find((l) => !l.done) ?? unlocked[0] ?? null,
    certified: Boolean(offer) && core.length > 0 && core.every((l) => l.done),
    completedAt,
  };
}
