"use client";

import Button from "@/components/Forms/Button";
import Input from "@/components/Forms/Input";
import ErrorMessage from "@/components/Helper/ErrorMessage";
import { useFormState, useFormStatus } from "react-dom";

import styles from "../styles.module.css";
import passwordLost from "@/actions/password-lost";
import { useEffect, useState } from "react";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button type="submit" disabled={pending}>
          Enviando...
        </Button>
      ) : (
        <Button type="submit">Enviar e-mail</Button>
      )}
    </>
  );
}

export default function LoginLostForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });
  const [url, setUrl] = useState(""); // 2ª solução

  useEffect(() => {
    setUrl(window.location.href.replace("lost", "reset"));
  }, []);

  return (
    <form className={styles.form} action={action}>
      <Input type="text" label="Email/Usuário" name="login" />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage error={state.error} />
      {state.ok ? (
        <p style={{ color: "#4c1" }}>E-mail enviado!</p>
      ) : (
        <FormButton />
      )}
    </form>
  );
}
