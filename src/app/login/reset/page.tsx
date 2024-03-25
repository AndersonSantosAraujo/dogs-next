import LoginResetForm from "@/components/Login/LoginResetForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar | Dogs",
  description: "Resete sua sua senha do site Dogs",
};

type ResetParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetPage({ searchParams }: ResetParams) {
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <LoginResetForm keyToken={searchParams.key} login={searchParams.login} />
    </div>
  );
}
