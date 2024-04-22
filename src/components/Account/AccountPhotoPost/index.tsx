"use client";

import photoPost from "@/actions/photo-post";
import Button from "@/components/Forms/Button";
import Input from "@/components/Forms/Input";
import ErrorMessage from "@/components/Helper/ErrorMessage";
import React, { useEffect, useState } from "react";
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
        <Button type="submit">Enviar</Button>
      )}
    </>
  );
}

export default function AccountPhotoPost() {
  const [img, setImg] = useState("");
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });

  function handleImageChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) setImg(URL.createObjectURL(target.files[0]));
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form className={styles.form} action={action}>
        <Input type="text" label="Nome" name="nome" />
        <Input type="number" label="Peso" name="peso" />
        <Input type="number" label="Idade" name="idade" />
        <Input
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleImageChange}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
}
