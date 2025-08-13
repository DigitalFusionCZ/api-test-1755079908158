'use client';

import React, { useState, useEffect } from 'react';

const Icon = ({ src, className = '' }: { src: string; className?: string }) => (
  <span
    className={`inline-block ${className}`}
    style={{
      backgroundColor: 'currentColor',
      maskImage: `url(${src})`,
      maskSize: 'contain',
      maskRepeat: 'no-repeat',
      WebkitMaskImage: `url(${src})`,
      WebkitMaskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
    }}
  ></span>
);

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Jan Novák | Web Developer & Designer";

    const createFavicon = (character: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#111827'; // Dark gray background
        ctx.fillRect(0, 0, 64, 64);
        ctx.font = 'bold 48px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#a5b4fc'; // Indigo color for text
        ctx.fillText(character, 32, 34);
      }
      return canvas.toDataURL('image/png');
    };

    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = createFavicon('J');

  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#about', label: 'O mně' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased" style={{ scrollBehavior: 'smooth' }}>
      <header className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors">
              Jan Novák
            </a>

            <nav className="hidden md:flex space-x-8">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} className="text-lg font-medium text-gray-300 hover:text-indigo-400 transition-colors">
                  {label}
                </a>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-label="Hlavní menu"
              >
                <Icon src={isMenuOpen ? "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" : "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg"} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 z-50 flex flex-col">
          <div className="pt-5 pb-6 px-4 sm:px-6">
            <div className="flex items-center justify-between">
                <a href="#" onClick={handleLinkClick} className="text-2xl font-bold text-white">
                  Jan Novák
                </a>
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                    aria-label="Zavřít menu"
                >
                    <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" className="w-6 h-6" />
                </button>
            </div>
            <div className="mt-12">
                <nav className="grid gap-y-8">
                    {navLinks.map(({ href, label }) => (
                        <a key={href} href={href} onClick={handleLinkClick} className="block text-center text-xl font-medium text-gray-300 hover:text-indigo-400 transition-colors">
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
          </div>
        </div>
      )}

      <main>
        <section id="hero" className="min-h-screen flex items-center justify-center text-center bg-gray-900 pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
                    <span className="block">Jan Novák</span>
                </h1>
                <p className="text-xl md:text-2xl text-indigo-300 max-w-3xl mx-auto mb-8">
                    Kreativní Web Developer & Designer specializující se na moderní a responzivní webové zážitky.
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                >
                    Spojme se
                </a>
            </div>
        </section>

        <section id="about" className="py-20 sm:py-32 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Tvořím digitální produkty, které fungují
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Jsem nezávislý webový vývojář a designér s vášní pro tvorbu čistého, funkčního a vizuálně poutavého kódu. Mým cílem je převést vaše nápady do podoby efektivních digitálních řešení, která nejen skvěle vypadají, ale především plní své cíle a oslovují vaši cílovou skupinu.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-white">Web Development</h3>
                    <p className="mt-2 text-gray-400">Vývoj moderních a rychlých webových stránek a aplikací na míru s využitím technologií jako React a Next.js.</p>
                </div>
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-white">UI/UX Design</h3>
                    <p className="mt-2 text-gray-400">Návrh intuitivních a uživatelsky přívětivých rozhraní, která zajišťují skvělý uživatelský zážitek.</p>
                </div>
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-white">SEO Optimalizace</h3>
                    <p className="mt-2 text-gray-400">Technická optimalizace webu pro vyhledávače s cílem zlepšit vaši viditelnost a organickou návštěvnost.</p>
                </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 sm:py-32 bg-gray-800/50 scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Máte projekt na mysli?</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                        Pojďme se pobavit o tom, jak vám mohu pomoci realizovat vaše vize.
                    </p>
                </div>

                <div className="mt-16 max-w-xl mx-auto space-y-8">
                    <div className="flex items-start sm:items-center space-x-4">
                        <div className="flex-shrink-0 bg-indigo-600 p-3 rounded-full text-white">
                            <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Email</h3>
                            <a href="mailto:kontakt@jannovak.dev" className="text-indigo-300 hover:text-indigo-400">kontakt@jannovak.dev</a>
                        </div>
                    </div>
                     <div className="flex items-start sm:items-center space-x-4">
                        <div className="flex-shrink-0 bg-indigo-600 p-3 rounded-full text-white">
                           <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Telefon</h3>
                            <a href="tel:+420123456789" className="text-indigo-300 hover:text-indigo-400">+420 123 456 789</a>
                        </div>
                    </div>
                     <div className="flex items-start sm:items-center space-x-4">
                        <div className="flex-shrink-0 bg-indigo-600 p-3 rounded-full text-white">
                            <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg" className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Lokalita</h3>
                            <p className="text-gray-300">Praha, Česká republika (k dispozici pro spolupráci na dálku)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-400">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Jan Novák. Všechna práva vyhrazena.
          </p>
          <p className="mt-2 text-sm">
            <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Vytvořeno s láskou od DigitalFusion
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}