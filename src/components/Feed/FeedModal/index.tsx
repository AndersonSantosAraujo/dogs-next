"use client";
import { PhotoData } from "@/actions/photo-get";
import PhotoContent from "@/components/Photo/PhotoContent";
import styles from "./style.module.css";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname.includes("photo")) {
    return null;
  }

  function handleOutsideClick(event: MouseEvent<HTMLDivElement>) {
    if (event?.target === event?.currentTarget) router.back();
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <PhotoContent data={photo} single={false} />;
    </div>
  );
}
