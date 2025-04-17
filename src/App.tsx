import React, { useState } from 'react';
import { Donut, Menu } from 'lucide-react';

function App() {
  const websites = [
  "https://oct82.com/",
  "https://www.crossdivisions.com/",
  "http://tencents.info/",
  "https://existentialcrisis.com/",
  "https://memory.toys/maze/easy/",
  "http://www.patience-is-a-virtue.org/",
  "https://pixelsfighting.com/",
  "https://iamawesome.com/",
  "http://scroll-o-meter.club/",
  "https://boringboringboring.com/",
  "https://thisisnotajumpscare.com/",
  "https://doughnutkitten.com/",
  "https://corgiorgy.com/",
  "http://chillestmonkey.com/",
  "https://crouton.net/",
  "https://unicodesnowmanforyou.com/",
  "https://wutdafuk.com/",
  "http://www.partridgegetslucky.com/",
  "https://strobe.cool/",
  "https://nullingthevoid.com/",
  "https://lacquerlacquer.com/",
  "http://www.ismycomputeron.com/",
  "https://clicking.toys/peg-solitaire/solid/",
  "https://potatoortomato.com/",
  "https://hackertyper.com/",
  "https://www.yesnoif.com/",
  "https://imaninja.com/",
  "https://greatbignothing.com/",
  "https://memory.toys/monkey-challenge/easy/",
  "https://www.bouncingdvdlogo.com/",
  "https://toybox.toms.toys/",
  "https://loopedforinfinity.com/",
  "https://remoji.com/",
  "https://optical.toys/troxler-fade/",
  "https://www.ripefordebate.com/",
  "https://dadlaughbutton.com/",
  "https://papertoilet.com/",
  "http://buildshruggie.com/",
  "http://yeahlemons.com/",
  "https://zoomquilt.org/",
  "http://wowenwilsonquiz.com/",
  "https://card.toys/",
  "https://number.toys/",
  "http://chihuahuaspin.com/",
  "https://www.calm.com/",
  "https://notdayoftheweek.com/",
  "https://optical.toys/thatcher-effect/",
  "https://www.trashloop.com/",
  "https://www.omfgdogs.com/",
  "https://www.doublepressure.com/",
  "https://tunnelsnakes.com/",
  "http://spaceis.cool/",
  "https://www.blankwindows.com/"
];

  const [isLoading, setIsLoading] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openRandomWebsite = () => {
    setIsLoading(true);
    const randomIndex = Math.floor(Math.random() * websites.length);
    const website = websites[randomIndex];
    window.open(website, '_blank');
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col lg:flex-row">
      {/* Mobile Navigation */}
      <nav className="lg:hidden w-full flex items-center justify-between p-4 bg-white/80 shadow-md fixed top-0 left-0 z-40">
        <span className="font-bold text-xl text-pink-600 font-display">Bored Button</span>
        <button
          className="hamburger"
          aria-label="Open navigation menu"
          aria-expanded={isNavOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      {isNavOpen && (
        <div className="mobile-nav" id="mobile-menu" role="navigation">
          <button
            className="hamburger mb-8"
            aria-label="Close navigation menu"
            onClick={() => setIsNavOpen(false)}
          >
            <span style={{ transform: 'rotate(45deg) translate(6px, 6px)' }} />
            <span style={{ opacity: 0 }} />
            <span style={{ transform: 'rotate(-45deg) translate(6px, -6px)' }} />
          </button>
          <a href="#root" className="text-2xl font-bold text-pink-600 mb-6" onClick={() => setIsNavOpen(false)}>Home</a>
          <a href="#bored-button" className="text-xl mb-4" onClick={() => setIsNavOpen(false)}>Bored Button</a>
          <a href="#about" className="text-xl mb-4" onClick={() => setIsNavOpen(false)}>About</a>
          <a href="#blog" className="text-xl mb-4" onClick={() => setIsNavOpen(false)}>Blog</a>
        </div>
      )}

      {/* Left Ad */}
      <div className="hidden lg:block w-64 p-4">
        <ins className="adsbygoogle"
             style={{ display: 'block', height: '100vh' }}
             data-ad-client="ca-pub-6902316452778520"
             data-ad-slot="9261634114"
             data-ad-format="vertical"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-between p-8 pt-24 lg:pt-8">
        <div className="flex-grow flex flex-col items-center justify-center max-w-2xl w-full text-center space-y-8">
          <h1 className="text-6xl font-black text-gray-800 mb-4 font-display" id="bored-button">
            Bored?
          </h1>
          
          <div className="relative group">
            <button
              onClick={openRandomWebsite}
              disabled={isLoading}
              className={`
                w-32 h-32
                rounded-full
                bg-red-500 hover:bg-red-600
                shadow-lg hover:shadow-xl
                transform hover:scale-105
                transition-all duration-300
                disabled:opacity-50
                relative
                before:content-['']
                before:absolute
                before:inset-0
                before:rounded-full
                before:border-4
                before:border-red-300
                before:animate-ping
                before:opacity-75
                ${isLoading ? 'animate-pulse' : ''}
              `}
              style={{ touchAction: 'manipulation' }}
              aria-label="Bored Button"
            >
              <Donut size={40} className="text-white mx-auto" />
            </button>
          </div>

          <p className="text-xl font-medium text-gray-600 mb-2">
            Go ahead, press the Bored Button™
          </p>

          <div className="prose prose-lg text-gray-600 space-y-4 max-w-2xl">
            <p className="italic">
              I am bored. I'm so bored. I'm bored at school.
              I'm bored at work. I'm bored to tears. I'm bored to death.
            </p>
            <p>
              Do you find yourself saying any of the above? If so, you've reached the right website.
              Clicking the red button will instantly take you to one of hundreds of interactive websites
              specially selected to alleviate boredom.
            </p>
            <p className="font-semibold">
              So go ahead and give it a try. Press the Bored Button and be bored no more.
            </p>
          </div>

          {/* Buy Me a Coffee Section */}
          <div className="mt-8">
            <a 
              href="https://www.buymeacoffee.com/rohitkonge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
                alt="Buy Me A Coffee" 
                className="h-12"
              />
            </a>
            <p className="text-sm text-gray-600 mt-2">
              If this site made you smile, you can buy me a coffee ☕
            </p>
          </div>

          {/* Bottom Ad */}
          <div className="w-full max-w-[728px] mx-auto mt-8">
            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client="ca-pub-6902316452778520"
                 data-ad-slot="4090505394"  
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </div>
        </div>

        <footer className="w-full text-center text-gray-500 mt-8">
          <p>© 2000-2025 Bored Button LLC</p>
        </footer>
      </div>

      {/* Right Ad */}
      <div className="hidden lg:block w-64 p-4">
        <ins className="adsbygoogle"
             style={{ display: 'block', height: '100vh' }}
             data-ad-client="ca-pub-6902316452778520"
             data-ad-slot="9261634114"
             data-ad-format="vertical"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
    </div>
  );
}

export default App;