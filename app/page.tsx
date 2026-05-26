import Main from '@/components/Main';
import Quote from '@/components/Quote';
import Food from '@/components/Food';
import Visits from '@/components/Visits';
import Routes from '@/components/Routes';
import FAQ from '@/components/FAQ';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Main/>
            <Quote/>
            <Food/>
            <Visits/>
            <main>
                {/*<Routes/>*/}
                <FAQ/>
            </main>
        </div>
    );
}
