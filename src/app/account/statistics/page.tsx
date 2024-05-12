import dynamic from "next/dynamic";
import statsGet from "@/actions/stats-get";
// import Statistics from "@/components/Account/Statistics";
import { Metadata } from "next";

// Importação diãmica para o LazyLoading
const Statistics = dynamic(() => import("@/components/Account/Statistics"), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
});

export const metadata: Metadata = {
  title: "Estatísticas | Minha Conta",
};

export default async function StatisticsPage() {
  const { data } = await statsGet();

  if (!data) return null;
  return (
    <section>
      <Statistics data={data} />
    </section>
  );
}
