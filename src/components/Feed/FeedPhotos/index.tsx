import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";

import styles from "./../styles.module.css";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, index) => (
        <li key={index} className={styles.photo}>
          <Link href={`/photo/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
            <span className={styles.preview}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
