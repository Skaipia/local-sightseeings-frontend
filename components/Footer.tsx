import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#FAFAFA]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center justify-center mb-6 md:mb-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <img src="/logo.svg" alt="logotype" className="w-12 h-12 text-gray-700"/>
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16">
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                Главная
                            </Link>
                            <Link href="/sightseeings" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                Достопримечательности
                            </Link>
                            <Link href="/routes" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                Маршруты
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                О проекте
                            </Link>
                        </nav>
                    
                        <div className="flex flex-col space-y-2">
                            <span className="text-gray-700 font-medium">Соц.сети</span>
                            <div className="flex space-x-4">
                                <a href="#" className="p-2 rounded-full transition-colors">
                                    <img src="/icons/max.svg" alt="Max" className="w-6 h-6"/>
                                </a>
                                <a href="#" className="p-2 rounded-full transition-colors">
                                    <img src="/icons/vk.svg" alt="VK" className="w-6 h-6"/>
                                </a>
                                <a href="https://rutube.ru/channel/26214635/" className="p-2 rounded-full transition-colors">
                                    <img src="/icons/rutube.svg" alt="Rutube" className="w-6 h-6"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}