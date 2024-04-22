import AccountPhotoPost from "@/components/Account/AccountPhotoPost";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Postar | Minha Conta",
};

export default async function PostPage() {
  return <AccountPhotoPost />;
}
