export default function Quote() {
    return (
        <section className="w-full py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-5 md:px-10 lg:px-12 max-w-[1440px]">
                <div className="max-w-[570px] ml-auto">
                    <blockquote className="text-[16px] leading-[1.6] font-normal text-[#171717] mb-8">
                        "Самарцы — люди открытые и основательные. Скажут "пойдём на Волгу" — значит, до утра.
                        Не спешат, но делают всё с душой. Гостя встретят как родного, за столом не отпустят голодным.
                        И главное — не "Самара", а "Самара-город" — так только местные говорят, и в этом слышится и
                        гордость, и теплота."
                    </blockquote>
                    <cite className="block text-right text-[16px] font-normal text-[#171717] not-italic">
                        из путевых заметок волжского старожила
                    </cite>
                </div>
            </div>
        </section>
    );
}
