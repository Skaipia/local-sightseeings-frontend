import Link from 'next/link';

export default function Main() {
    return (
        <section
            className="relative w-full h-[100vh] min-h-[600px] md:h-[700px] lg:h-[850px] overflow-hidden flex items-end">
            <img
                src="/images/main-bg.jpg"
                alt="Самарская область — жемчужина на Волге"
                className="absolute inset-0 w-full h-full object-cover"/>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>

            <div
                className="relative z-10 w-full container mx-auto px-5 md:px-10 lg:px-12 max-w-[1440px] pb-10 md:pb-16 lg:pb-20">

                <div className="w-full max-w-full lg:max-w-[1344px]">

                    <h1 className="text-white text-[36px] md:text-[60px] lg:text-[84px] font-bold leading-[1.1] md:leading-[1.05] tracking-tight mb-5 md:mb-6">
                        Откройте Самарскую <span className="whitespace-nowrap">область —</span> <br
                        className="hidden md:block"/> жемчужину на Волге
                    </h1>
                    <p className="text-[#FAFAFA] text-[15px] md:text-[18px] lg:text-[20px] mb-8 md:mb-10 font-normal leading-snug max-w-[300px] md:max-w-2xl">
                        Достопримечательности, маршруты и статьи для самостоятельных путешествий.
                    </p>

                    <Link
                        href="/sightseeings"
                        className="inline-flex items-center justify-center bg-[#217EA6] hover:bg-[#1a6383] text-white text-[14px] md:text-[15px] font-semibold rounded-none transition-colors duration-200
                        h-[35px]
                        px-8 w-full sm:w-auto lg:w-[329px] lg:px-0">
                        Начать путешествие
                    </Link>
                </div>
            </div>
        </section>
    );
}
