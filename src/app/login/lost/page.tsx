import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Perdeu sua senha do site Dogs",
};

export default async function LostPage() {
  return (
    <main>
      <h1>Lost</h1>
    </main>
  );
}
