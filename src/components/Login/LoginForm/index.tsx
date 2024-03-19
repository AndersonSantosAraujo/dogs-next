"use client";

import login from "@/actions/login";
import Button from "@/components/Forms/Button";
import { useFormState, useFormStatus } from "react-dom";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button type="submit" disabled={pending}>
          Enviando...
        </Button>
      ) : (
        <Button type="submit">Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action}>
        <input type="text" name="username" placeholder="Usuário" />
        <input type="password" name="password" placeholder="Senha" />
        <FormButton />
        <p>{state?.error}</p>
      </form>
    </>
  );
}
