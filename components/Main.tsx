import Link from 'next/link';

export default function Main() {
    return (
        <section className="w-full">
            <div
                className="relative mx-auto flex h-[310px] w-full max-w-[1920px] items-end overflow-hidden md:h-[780px] lg:h-[800px]">
                <img
                    src="/images/main-bg.jpg"
                    alt="Самарская область — жемчужина на Волге"
                    className="absolute inset-0 h-full w-full object-cover object-[50%_50%]"/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent"/>

                <div className="relative z-10 w-full px-5 pb-6 md:px-8 md:pb-16 lg:px-8 lg:pb-20">

                    <div className="w-full max-w-full lg:max-w-[1120px]">

                        <h1 className="mb-4 text-[30px] font-semibold leading-[1.08] text-white md:mb-6 md:text-[64px] md:leading-[1.06] lg:text-[72px]">
                            Откройте Самарскую <span className="whitespace-nowrap">область —</span> <br
                            className="hidden md:block"/> жемчужину на Волге
                        </h1>
                        <p className="mb-4 max-w-[280px] text-[10px] font-normal leading-snug text-[#FAFAFA] md:mb-8 md:max-w-2xl md:text-[16px] lg:text-[18px]">
                            Достопримечательности, маршруты и статьи для самостоятельных путешествий.
                        </p>

                        <Link
                            href="/sightseeings"
                            className="inline-flex h-[28px] w-full items-center justify-center rounded-none bg-[#217EA6] px-8 text-[10px] font-semibold text-white transition-colors duration-200 hover:bg-[#1a6383] sm:w-[280px] md:h-[35px] md:w-[329px] md:text-[14px]">
                            Начать путешествие
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
