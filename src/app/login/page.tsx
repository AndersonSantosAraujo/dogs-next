import LoginForm from "@/components/Login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrar | Dogs",
  description: "Entre em sua conta no site Dogs",
};

export default async function LoginPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  );
}
