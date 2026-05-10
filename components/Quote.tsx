export default function Quote() {
    return (
        <section className="w-full py-10 md:py-16 lg:py-20">
            <div className="container mx-auto px-5 md:px-8 max-w-[1920px]">
                <div className="max-w-[570px] ml-auto lg:mr-[250px]">
                    <blockquote className="mb-5 text-[13px] font-normal leading-[1.45] text-[#171717] md:mb-7 md:text-[16px] md:leading-[1.55]">
                        “Самарцы — люди открытые и основательные. Скажут “пойдём на Волгу” — значит, до утра.
                        Не спешат, но делают всё с душой. Гостя встретят как родного, за столом не отпустят голодным.
                        И главное — не “Самара”, а “Самара-город” — так только местные говорят, и в этом слышится и
                        гордость, и теплота.”
                    </blockquote>
                    <cite className="block text-right text-[13px] font-normal text-[#171717] not-italic md:text-[16px]">
                        из путевых заметок волжского старожила
                    </cite>
                </div>
            </div>
        </section>
    );
}
