"use client";

import { startTransition, useActionState, type FormEvent } from "react";
import type { FormState } from "@/app/actions/auth";

// Submitting via onSubmit instead of <form action> keeps typed values when the server returns an error;
// React 19 resets uncontrolled fields after every form action.
export function useFormAction(fn: (state: FormState, formData: FormData) => Promise<FormState>) {
  const [state, dispatch, pending] = useActionState(fn, undefined);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => dispatch(formData));
  }

  return { state, pending, onSubmit };
}
