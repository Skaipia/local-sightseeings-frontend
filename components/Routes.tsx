import Link from 'next/link';

const routes = [
    {
        id: 1,
        title: 'Сёла с душой',
        image: '/images/routes/villages-soul.jpg',
        href: '/routes/villages'
    },
    {
        id: 2,
        title: 'Святые места',
        image: '/images/routes/holy-places.jpg',
        href: '/routes/holy-places'
    },
    {
        id: 3,
        title: 'Купеческая Самара',
        image: '/images/routes/merchant-samara.jpg',
        href: '/routes/merchant-samara'
    },
    {
        id: 4,
        title: 'Заводы и космос',
        image: '/images/routes/factories-space.jpg',
        href: '/routes/factories-space'
    },
    {
        id: 5,
        title: 'Волжские просторы',
        image: '/images/routes/volga-expanses.jpg',
        href: '/routes/volga-expanses'
    }
];

export default function Routes() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-5 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12">
                    Популярные маршруты
                </h2>
                <div className="hidden lg:grid grid-cols-3 gap-6">
                    {/* First row - 2 cards */}
                    <Link href={routes[0].href}
                          className="group relative overflow-hidden aspect-[4/3] block">
                        <img
                            src={routes[0].image}
                            alt={routes[0].title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        <h3 className="absolute bottom-4 left-4 right-4 text-white text-2xl font-semibold">
                            {routes[0].title}
                        </h3>
                    </Link>

                    <Link href={routes[1].href}
                          className="group relative overflow-hidden aspect-[4/3] block">
                        <img
                            src={routes[1].image}
                            alt={routes[1].title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        <h3 className="absolute bottom-4 left-4 right-4 text-white text-2xl font-semibold">
                            {routes[1].title}
                        </h3>
                    </Link>
                    <Link href={routes[4].href} className="group relative overflow-hidden row-span-2 block">
                        <img
                            src={routes[4].image}
                            alt={routes[4].title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        <h3 className="absolute bottom-4 left-4 right-4 text-white text-2xl font-semibold">
                            {routes[4].title}
                        </h3>
                    </Link>
                    <Link href={routes[2].href}
                          className="group relative overflow-hidden aspect-[4/3] block">
                        <img
                            src={routes[2].image}
                            alt={routes[2].title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        <h3 className="absolute bottom-4 left-4 right-4 text-white text-2xl font-semibold">
                            {routes[2].title}
                        </h3>
                    </Link>
                    <Link href={routes[3].href}
                          className="group relative overflow-hidden aspect-[4/3] block">
                        <img
                            src={routes[3].image}
                            alt={routes[3].title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        <h3 className="absolute bottom-4 left-4 right-4 text-white text-2xl font-semibold">
                            {routes[3].title}
                        </h3>
                    </Link>
                </div>
                <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
                    {routes.slice(0, 4).map((route) => (
                        <Link key={route.id} href={route.href}
                              className="group relative overflow-hidden aspect-[4/3] block">
                            <img
                                src={route.image}
                                alt={route.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                            <h3 className="absolute bottom-4 left-4 right-4 text-white text-2xl font-semibold">
                                {route.title}
                            </h3>
                        </Link>
                    ))}
                    <Link href={routes[4].href}
                          className="group relative overflow-hidden aspect-[21/9] md:col-span-2 block">
                        <img
                            src={routes[4].image}
                            alt={routes[4].title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        <h3 className="absolute bottom-4 left-4 right-4 text-white text-2xl font-semibold">
                            {routes[4].title}
                        </h3>
                    </Link>
                </div>
                <div className="grid md:hidden grid-cols-1 gap-6">
                    {routes.map((route) => (
                        <Link key={route.id} href={route.href}
                              className="group relative overflow-hidden aspect-[4/3] block">
                            <img
                                src={route.image}
                                alt={route.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                            <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-semibold">
                                {route.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}