import { Audio } from "@/components/audio";
import Gallery from "@/components/gallery";
import {Point, YandexMap} from "@/components/map";

const images = [
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
];

export default function AboutPage() {
    const places : Point[] = [
    {
      coordinates: [54.312579, 48.382514],
    }
  ];
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-16 max-w-4xl">

              <Gallery images={images}/>
              <YandexMap center={[54.312579, 48.382514]} zoom={9} points={places}/>
              <Audio src=""/>
            </main>
        </div>
    );
}