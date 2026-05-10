export default function Food() {
    const foodItems = [
        {
            name: "Калитки",
            image: "/images/food/kalitki.jpg"
        },
        {
            name: "Пахлава по-сызрански",
            image: "/images/food/pahlava.jpg"
        },
        {
            name: "Перепёчи",
            image: "/images/food/perepechi.jpg"
        },
        {
            name: "Самарская уха",
            image: "/images/food/soup.jpg"
        }
    ];

    return (
        <section className="w-full pb-9 md:pb-14 lg:pb-20">
            <div className="container mx-auto px-5 md:px-8 max-w-[1920px]">
                <h2 className="mb-6 text-[22px] font-semibold leading-tight text-[#171717] md:mb-10 md:text-[40px] lg:mb-12 lg:text-[42px]">
                    К нам едут за
                </h2>
                <div className="overflow-x-auto no-scrollbar lg:hidden -mx-5 md:-mx-8 px-5 md:px-8 pb-1">
                    <div className="flex w-max gap-4 md:gap-6">
                        {foodItems.map((item, index) => (
                            <article key={index} className="flex w-[126px] flex-col sm:w-[168px] md:w-[220px]">
                                <div className="relative mb-3 aspect-square overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-[11px] sm:text-[15px] md:text-[18px] font-semibold text-[#171717] leading-tight">
                                    {item.name}
                                </h3>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:grid lg:grid-cols-4 gap-6">
                    {foodItems.map((item, index) => (
                        <article key={index} className="flex flex-col">
                            <div className="relative aspect-square overflow-hidden mb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-[20px] font-medium text-[#171717]">
                                {item.name}
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
