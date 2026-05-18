// TODO временная заглушка
const TEST_IDS = ["1", "2", "3", "4", "5"];

export function generateStaticParams() {
  return TEST_IDS.map((id) => ({
    id: id,
  }));
}
//TODO добавить апи для получения всех достопримечательностей и их id если будем использовать github pages
// export async function generateStaticParams() {
//   const res = await fetch('.../sightseeings');
//   const data = await res.json();
//   return data.map((item: { id: string | number }) => ({
//     id: String(item.id),
//   }));
// }

export default function SightseeingDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-5 md:px-8 max-w-[1920px] py-10">
        <h1 className="text-[32px] md:text-[48px] font-semibold text-[#171717] mb-6">
          Sightseeing Details
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#555]">
          ID: {params.id}
        </p>

      </div>
    </main>
  );
}
