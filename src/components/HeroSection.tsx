import ReactPlayer from "react-player";
import Link from "next/link"; // or 'react-router-dom' depending on your framework

export default function HeroSection() {
  return (
    <section className="relative h-96 bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
      {/* 1. Video Background Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2">
          <ReactPlayer
            src="https://www.youtube.com/watch?v=GjIX6OB1GKg"
            playing={true}
            preload="auto"
            loop={true}
            muted={true}
            controls={false}
            fallback={<div className="absolute inset-0 bg-black/40" />}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "cover",
            }}
            config={{
              youtube: {
                cc_load_policy: 0,
                iv_load_policy: 3,
              },
            }}
          />
        </div>
      </div>

      {/* 2. Self-Fading Shield Overlay */}
      <div
        className="absolute inset-0 z-1 bg-black"
        style={{
          animation: "fadeOutShield 1s ease-in-out 2.5s forwards",
        }}
      />

      {/* 3. Overlay to darken video for text readability */}
      <div className="absolute inset-0 bg-black/40 z-2"></div>

      {/* 4. Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22><rect fill=%22%23000%22 width=%22100%22 height=%22100%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22%23fff%22 opacity=%220.1%22/></svg>')] bg-repeat z-3"></div>

      {/* 5. Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center relative px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            NJ Farming
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Learn, Train & Grow Your Pig Farming Business
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/training/offline"
              className="bg-yellow-400 text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              🎓 Offline Training
            </Link>
            <Link
              href="/training/books"
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              📚 Buy Books
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-800 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Injecting CSS Animation */}
      <style>{`
        @keyframes fadeOutShield {
          0% { opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; display: none; }
        }
      `}</style>
    </section>
  );
}
