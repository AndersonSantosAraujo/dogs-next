import photosGet from "@/actions/photos-get";
import userGet from "@/actions/user-get";
import Feed from "@/components/Feed";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conta | Minha Conta",
};

export default async function AccountPage() {
  const { data: user } = await userGet();
  const { data } = await photosGet({ user: user?.username });

  return (
    <main>
      {data?.length ? (
        <Feed photos={data} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            Nenhuma foto encontrada.
          </p>
          <Link
            href={"account/post"}
            className="button"
            style={{ display: "inline-block" }}
          >
            Postar Fotos
          </Link>
        </div>
      )}
    </main>
  );
}
