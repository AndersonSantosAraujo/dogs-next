"use client";

import login from "@/actions/login";
import Button from "@/components/Forms/Button";
import Input from "@/components/Forms/Input";
import ErrorMessage from "@/components/Helper/ErrorMessage";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

import styles from "./styles.module.css";

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
      <form className={styles.form} action={action}>
        <Input type="text" label="Usuário" name="username" />
        <Input type="password" label="Senha" name="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <Link className={styles.lost} href="/login/lost">
        Perdeu a senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/register">
          Cadastro
        </Link>
      </div>
    </>
  );
}
