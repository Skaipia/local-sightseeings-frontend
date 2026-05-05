import Main from '@/components/Main';
import Quote from '@/components/Quote';
import Routes from '@/components/Routes';
import FAQ from '@/components/FAQ';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Main/>
            <Quote/>
            <main className="container mx-auto px-5 md:px-8 py-16">
                <Routes/>
                <FAQ/>
            </main>
        </div>
    );
}
