"use client";
import { useFormStatus } from "react-dom";

export function ButtonForm() {
  const status = useFormStatus();
  return <button disabled={status.pending}>Adicionar</button>;
}
