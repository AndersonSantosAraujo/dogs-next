"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import photoDelete from "@/actions/photo-delete";

export default function PhotoDeleteIndex({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);

    const confirm = window.confirm("Tem certezxa que deseja deletar?");

    if (confirm) {
      await photoDelete(id);
    }

    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
}
