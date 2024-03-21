import RegisterForm from "@/components/Login/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registre-se | Dogs",
  description: "Crie sua conta no site Dogs",
};

export default async function RegisterPage() {
  return (
    <main className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <RegisterForm />
    </main>
  );
}
