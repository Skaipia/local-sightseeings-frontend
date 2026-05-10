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
