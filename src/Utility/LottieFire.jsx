import { useState } from 'react';
import Lottie from 'lottie-react';
import GreenFire from '../assets/Fire.json'; 

// Placeholder - you'll replace this with your actual JSON
const placeholderAnimation = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 60,
  "w": 200,
  "h": 200,
  "nm": "Placeholder",
  "ddd": 0,
  "assets": [],
  "layers": []
};

function LottieFire({ animationData = placeholderAnimation, isLit = false }) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {isLit && (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{
            width: '100%',
            height: '100%',
          }}
          className="drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]"
        />
      )}
    </div>
  );
}

// Demo Component
export default function LottieFireDemo() {
  const [isLit, setIsLit] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8 p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-emerald-500 mb-8">
        Lottie Fire Component
      </h1>

      {/* Main Demo */}
      <div className="flex flex-col items-center gap-6">
        {/* Goblet Container */}
        <div 
          onClick={() => setIsLit(!isLit)}
          className="relative w-40 h-52 bg-zinc-900/80 rounded-xl flex items-center justify-center border-2 border-emerald-500/30 cursor-pointer hover:border-emerald-500/60 transition-all"
        >
          {/* Placeholder Goblet */}
          <div className="relative w-20 h-24 bg-gradient-to-b from-zinc-800 to-black rounded-t-lg border-2 border-zinc-700">
            {/* Goblet rim */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-5 bg-zinc-800 border-2 border-zinc-700 rounded-full"></div>
            
            {/* Goblet stem */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-8 bg-zinc-800 border-2 border-zinc-700"></div>
            
            {/* Goblet base */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-3 bg-zinc-800 border-2 border-zinc-700 rounded-full"></div>
          </div>

          {/* Fire on top */}
          <div className="absolute top-8">
            <LottieFire animationData={GreenFire} isLit={isLit} />
          </div>

          {/* Glow effect when lit */}
          {isLit && (
            <div className="absolute inset-0 bg-emerald-500/10 rounded-xl blur-xl animate-pulse"></div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsLit(!isLit)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            isLit 
              ? 'bg-emerald-500/20 border border-emerald-500 text-emerald-500 hover:bg-emerald-500/30' 
              : 'bg-emerald-500 border border-emerald-500 text-black hover:bg-emerald-600'
          }`}
        >
          {isLit ? 'Extinguish Fire' : 'Light the Goblet'}
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-12 max-w-2xl bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-emerald-500 mb-4">
          Setup Instructions:
        </h3>
        <div className="space-y-3 text-gray-300 text-sm">
          <p className="flex items-start gap-2">
            <span className="text-emerald-500 font-bold">1.</span>
            <span>Download your fire animation JSON from LottieFiles</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-emerald-500 font-bold">2.</span>
            <span>Save it in your project: <code className="bg-black px-2 py-1 rounded text-emerald-400">src/assets/fire.json</code></span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-emerald-500 font-bold">3.</span>
            <span>Import it: <code className="bg-black px-2 py-1 rounded text-emerald-400">import fireData from './assets/fire.json'</code></span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-emerald-500 font-bold">4.</span>
            <span>Pass to component: <code className="bg-black px-2 py-1 rounded text-emerald-400">&lt;LottieFire animationData={'{fireData}'} isLit={'{true}'} /&gt;</code></span>
          </p>
        </div>

        <div className="mt-6 p-4 bg-black rounded-lg">
          <p className="text-emerald-500 font-semibold mb-2">Component Props:</p>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><code className="text-emerald-400">animationData</code> - Your Lottie JSON object</li>
            <li><code className="text-emerald-400">isLit</code> - Boolean to show/hide fire</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-500 text-sm">
            ⚠️ Currently showing placeholder. Once you paste your JSON, I'll integrate it and modify the colors to green!
          </p>
        </div>
      </div>
    </div>
  );
}