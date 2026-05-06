import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="mb-[20px]">
            <div className="container mx-auto py-6 px-8 max-w-[1440px]">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-10 md:mb-0">
                        <Link href="/" className="inline-block">
                            <img
                                src="/images/logo.svg"
                                alt="ЗНАКОВЫЕ МЕСТА"
                                className="object-contain w-[140px] md:w-[155px] lg:w-[172.19px] h-auto"
                                style={{minHeight: '60px'}}
                            />
                        </Link>
                    </div>
                    <div
                        className="flex flex-col md:flex-row items-start space-y-10 md:space-y-0 md:space-x-16 lg:space-x-24">

                        <nav className="flex flex-col space-y-1.5">
                            <Link href="/" className="text-[14px] text-gray-800 hover:text-black transition-colors">
                                Главная
                            </Link>
                            <Link href="/sightseeings"
                                  className="text-[14px] text-gray-800 hover:text-black transition-colors">
                                Достопримечательности
                            </Link>
                            <Link href="/routes"
                                  className="text-[14px] text-gray-800 hover:text-black transition-colors">
                                Маршруты
                            </Link>
                            <Link href="/about"
                                  className="text-[14px] text-gray-800 hover:text-black transition-colors">
                                О проекте
                            </Link>
                        </nav>

                        <div className="flex flex-col space-y-4">
                            <span className="text-[16px] font-semibold text-black leading-none">
                                Соц.сети
                            </span>
                            <div className="flex space-x-3">
                                <a href="https://max.ru/join/FOGzABe6EiNdhb8vr61vu54go6tcOxD4VZD6GN_qlmQ"
                                   target="_blank" rel="noopener noreferrer"
                                   className="hover:opacity-80 transition-opacity">
                                    <img src="/images/social%20media/max.svg" alt="MAX" className="w-8 h-8"/>
                                </a>
                                <a href="https://vk.com/club237893137" target="_blank" rel="noopener noreferrer"
                                   className="hover:opacity-80 transition-opacity">
                                    <img src="/images/social%20media/vk.svg" alt="VK" className="w-8 h-8"/>
                                </a>
                                <a href="https://rutube.ru/channel/26214635/" target="_blank" rel="noopener noreferrer"
                                   className="hover:opacity-80 transition-opacity">
                                    <img src="/images/social%20media/rutube.svg" alt="Rutube" className="w-8 h-8"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
