"use client";

import Button from "@/components/Forms/Button";
import Input from "@/components/Forms/Input";
import ErrorMessage from "@/components/Helper/ErrorMessage";
import { useFormState, useFormStatus } from "react-dom";

import styles from "../styles.module.css";
import passwordReset from "@/actions/password-reset";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button type="submit" disabled={pending}>
          Resetando...
        </Button>
      ) : (
        <Button type="submit">Resetar senha</Button>
      )}
    </>
  );
}

export default function LoginResetForm({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form className={styles.form} action={action}>
      <Input type="password" label="Nova senha" name="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
