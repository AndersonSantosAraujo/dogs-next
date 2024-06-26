import photosGet from "@/actions/photos-get";
import Feed from "@/components/Feed";

export default async function Home() {
  const { data } = await photosGet();

  return (
    <section className="container mainContainer">
      {data?.length && <Feed photos={data} />}
    </section>
  );
}
