import Link from 'next/link';
import Routes from '@/components/Routes';
import FAQ from '@/components/FAQ';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <main className="container mx-auto px-5 md:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Discover Local Sightseeings
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore amazing landmarks, historical sites, and hidden gems in your area
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Link
                        href="/sightseeings"
                        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                            Browse Sightseeings
                        </h2>
                        <p className="text-gray-600">
                            Explore our collection of local attractions
                        </p>
                    </Link>

                    <Link
                        href="/about"
                        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                            About Us
                        </h2>
                        <p className="text-gray-600">
                            Learn more about our mission
                        </p>
                    </Link>

                    <Link
                        href="/contact"
                        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                            Contact
                        </h2>
                        <p className="text-gray-600">
                            Get in touch with us
                        </p>
                    </Link>
                </div>
                <Routes/>
                <FAQ/>
            </main>
        </div>
    );
}
