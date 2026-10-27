import Link from "next/link";
import { FileText } from "lucide-react";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
        <FileText className="h-4 w-4" />
      </span>
      Facturo
    </Link>
  );
}
