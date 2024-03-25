import LoginLostForm from "@/components/Login/LoginLostForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Perdeu sua senha do site Dogs",
};

// export const dynamic = "force-dynamic"; // 1ª solução

export default async function LostPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LoginLostForm />
    </div>
  );
}
