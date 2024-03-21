"use client";

import userPost from "@/actions/user-post";
import Button from "@/components/Forms/Button";
import Input from "@/components/Forms/Input";
import ErrorMessage from "@/components/Helper/ErrorMessage";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

import styles from "./styles.module.css";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button type="submit" disabled={pending}>
          Cadastrando...
        </Button>
      ) : (
        <Button type="submit">Cadastrar</Button>
      )}
    </>
  );
}

export default function RegisterForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/account";
  }, [state.ok]);

  return (
    <form className={styles.form} action={action}>
      <Input type="text" label="Usuário" name="username" />
      <Input type="email" label="E-mail" name="email" />
      <Input type="password" label="Senha" name="password" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
