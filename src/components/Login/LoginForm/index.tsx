"use client";

import login from "@/actions/login";
import Button from "@/components/Forms/Button";
import Input from "@/components/Forms/Input";
import ErrorMessage from "@/components/Helper/ErrorMessage";
import { useEffect } from "react";
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

  useEffect(() => {
    if (state.ok) window.location.href = "/account";
  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input type="text" label="Usuário" name="username" />
        <Input type="password" label="Senha" name="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
