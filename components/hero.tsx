'use client';

import { Play, FileText, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { VideoModal } from './video-modal';
import { QuoteDialog } from './quote-dialog';
import { useTranslations } from '@/hooks/use-translations';
import { usePathname } from 'next/navigation';
import { DialogTrigger } from '@/components/ui/dialog';

export function Hero() {
  const { t } = useTranslations();
  const pathname = usePathname();
  const isChoppingPage = pathname?.endsWith('/chopping-and-marking-machine') ?? false;
  const isTapingPage = pathname?.endsWith('/taping-and-packaging-machine') ?? false;
  const isWirePage = pathname?.endsWith('/wire-flattening-machine') ?? false;
  const isDecoilerPage = pathname?.endsWith('/decoiler-machine') ?? false;
  const isWheelWeightsPage = pathname?.endsWith('/wheel-weights') ?? false;
  const isFaqPage = pathname?.endsWith('/faq') ?? false;
  const isRotaryPunchPage = pathname?.endsWith('/rotary-punch') ?? false;
  const isAboutPage = pathname?.endsWith('/about-us') ?? false;
  const isBlogPage = pathname?.endsWith('/blogs') ?? false;
  const isProductPage = (isChoppingPage || isTapingPage || isWirePage || isDecoilerPage || isWheelWeightsPage) && 
    !isFaqPage && !isRotaryPunchPage && !isAboutPage && !isBlogPage;

  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBackgroundVideoPlaying, setIsBackgroundVideoPlaying] = useState(!isWirePage);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const backgroundVideoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isWirePage) {
      const timer = setTimeout(() => {
        setIsVideoReady(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setIsVideoReady(true);
    }
  }, [isWirePage]);

  const handleVideoStateChange = (isPlaying: boolean) => {
    if (isWirePage) return;
    
    setIsBackgroundVideoPlaying(isPlaying);

    if (backgroundVideoRef.current?.contentWindow) {
      try {
        backgroundVideoRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: isPlaying ? 'playVideo' : 'pauseVideo'
          }),
          '*'
        );
      } catch (error) {
        console.error('Error controlling background video:', error);
      }
    }
  };

  const getBackgroundVideo = () => {
    if (isChoppingPage) {
      return "https://www.youtube.com/embed/6exCLLHulhU?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=6&playlist=6exCLLHulhU&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
    }
    if (isTapingPage) {
      return "https://www.youtube.com/embed/Kk1yIkIKUMQ?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=33&playlist=Kk1yIkIKUMQ&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
    }
    if (isWirePage) {
      return "https://www.youtube.com/embed/CUrBRxySXI8?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=0&playlist=CUrBRxySXI8&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
    }
    if (isDecoilerPage) {
      return "https://www.youtube.com/embed/iaVqUmbvuHM?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=0&playlist=iaVqUmbvuHM&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
    }
    if (isWheelWeightsPage) {
      return "https://www.youtube.com/embed/CUrBRxySXI8?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=144&playlist=CUrBRxySXI8&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
    }
    return "https://www.youtube.com/embed/CUrBRxySXI8?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=144&playlist=CUrBRxySXI8&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
  };

  const getHeroTranslations = () => {
    if (isChoppingPage) {
      return {
        tag: t("machines.chopping.hero.tag"),
        title: t("machines.chopping.hero.title"),
        description: t("machines.chopping.hero.description"),
      };
    }
    if (isTapingPage) {
      return {
        tag: t("machines.taping.hero.tag"),
        title: t("machines.taping.hero.title"),
        description: t("machines.taping.hero.description"),
      };
    }
    if (isWirePage) {
      return {
        tag: t("machines.wire.hero.title"),
        title: t("machines.wire.hero.subtitle"),
        description: t("machines.wire.hero.description"),
      };
    }
    if (isDecoilerPage) {
      return {
        tag: t("machines.decoiler.hero.tag"),
        title: t("machines.decoiler.hero.title"),
        description: t("machines.decoiler.hero.description"),
      };
    }
    if (isWheelWeightsPage) {
      return {
        tag: t("pages.wheelWeights.hero.badge"),
        title: t("pages.wheelWeights.hero.title"),
        description: t("pages.wheelWeights.hero.description"),
      };
    }
    if (isRotaryPunchPage) {
      return {
        title: "Rotary Punch Technology"
      };
    }
    if (isAboutPage) {
      return {
        title: t("pages.about.hero.title")
      };
    }
    if (isBlogPage) {
      return {
        title: "Blog"
      };
    }
    if (isFaqPage) {
      return {
        title: t("pages.faq.title"),
      };
    }
    return {
      tag: t("components.hero.tag"),
      title: t("components.hero.title"),
      description: t("components.hero.description"),
    };
  };

  const heroContent = getHeroTranslations();

  const stats = [
    { value: '100,000', label: t('components.hero.stats.production') },
    { value: '%50', label: t('components.hero.stats.material') },
    { value: '±0.5g', label: t('components.hero.stats.accuracy') },
    { value: '83,300', label: t('components.hero.stats.efficiency') },
    { value: '10+', label: t('components.hero.stats.experience') }
  ];

  return (
    <>
      <div className="h-16 bg-white w-full"></div>
      <div className={`relative ${isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'min-h-[20vh]' : isProductPage ? 'min-h-[50vh]' : 'min-h-[80vh]'} max-h-fit transition-colors duration-700 overflow-hidden bg-gradient-to-b from-[#EEF2F6] to-white`}>
        <div className={`transition-opacity duration-700 ${isWirePage || isVideoReady || isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 w-full h-full">
            <div className={`absolute inset-0 bg-black/30 z-10`}></div>
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {isWirePage ? (
                <img
                  src="/images/production-line.jpg"
                  alt="Production Line"
                  className="absolute w-full h-full object-cover"
                />
              ) : isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? (
                <img
                  src={isFaqPage ? "/images/faq_background.jpg" : 
                      isRotaryPunchPage ? "/images/technology-background.jpg" : 
                      isAboutPage ? "/images/about-background.jpg" : 
                      "/images/blog-background.jpg"}
                  alt={isFaqPage ? "FAQ Background" : 
                      isRotaryPunchPage ? "Technology Background" : 
                      isAboutPage ? "About Background" :
                      "Blog Background"}
                  className="absolute w-full h-full object-cover brightness-[0.4]"
                />
              ) : (
                <iframe
                  ref={backgroundVideoRef}
                  className="absolute w-[130%] h-[130%] scale-[1.75] origin-center transform-gpu"
                  src={getBackgroundVideo()}
                  title={isChoppingPage ? "Chopping and Marking Machine" : isTapingPage ? "Taping and Packaging Machine" : "Wheel Weights Production"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="eager"
                  width="1920"
                  height="1080"
                />
              )}
            </div>
          </div>
        </div>

        <div className={`container relative z-20 flex items-center justify-center ${isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'min-h-[20vh]' : isProductPage ? 'min-h-[50vh]' : 'min-h-[80vh]'} max-h-fit`}>
          <div className="text-center py-16">
            <div className="max-w-3xl mx-auto px-4">
              <div className="space-y-6">
                { !isFaqPage && !isRotaryPunchPage && !isAboutPage && !isBlogPage && (
                  <span className={`inline-block px-4 py-1.5 text-sm font-semibold rounded-full transition-colors duration-700 ${isWirePage || isVideoReady ? 'bg-white/10 text-white' : 'bg-[#cfe2ee] text-[#0065A1]'}`}>
                    {heroContent.tag}
                  </span>
                )}
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight transition-colors duration-700 ${isWirePage || isVideoReady || isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'text-white' : 'text-gray-900'} ${isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'whitespace-nowrap' : ''}`}>
                  {heroContent.title}
                </h1>
                { !isFaqPage && !isRotaryPunchPage && !isAboutPage && !isBlogPage && (
                  <>
                    <p className={`text-lg leading-relaxed transition-colors duration-700 ${isWirePage || isVideoReady ? 'text-white/90' : 'text-gray-600'}`}>
                      {heroContent.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                      {isProductPage ? (
                        <>
                          <QuoteDialog>
                            <DialogTrigger asChild>
                              <Button
                                variant={isWirePage || isVideoReady ? 'white' : 'default'}
                                className="gap-2 transition-colors duration-700"
                              >
                                <FileText className="w-4 h-4" />
                                {t('menu.getQuote')}
                              </Button>
                            </DialogTrigger>
                          </QuoteDialog>
                          {!isWirePage && (
                            <Button
                              variant={isVideoReady ? 'outline-white' : 'outline'}
                              className="gap-2 transition-colors duration-700"
                              onClick={() => setIsModalOpen(true)}
                            >
                              <Play className="w-4 h-4" />
                              {t('components.hero.watchPlaylist')}
                            </Button>
                          )}
                        </>
                      ) : (
                        <>
                          <Button
                            variant={isVideoReady ? 'white' : 'default'}
                            className="gap-2 transition-colors duration-700"
                            onClick={() => setIsModalOpen(true)}
                          >
                            <Play className="w-4 h-4" />
                            {t('components.hero.watchPlaylist')}
                          </Button>
                          <Button
                            variant={isVideoReady ? 'outline-white' : 'outline'}
                            className="gap-2 transition-colors duration-700"
                          >
                            <Calculator className="w-4 h-4" />
                            {t('components.hero.calculateROI')}
                          </Button>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {!isProductPage && !isFaqPage && !isRotaryPunchPage && !isAboutPage && !isBlogPage && (
              <div className="max-w-5xl mx-auto mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className={`p-6 rounded-xl transition-all duration-700 ${
                      isVideoReady
                        ? 'border-white hover:border-white/80 bg-white/5 hover:bg-white/10'
                        : 'bg-white shadow-lg hover:shadow-xl'
                    }`}>
                      <div className={`text-3xl font-bold mb-2 transition-colors duration-700 text-center ${
                        isVideoReady ? 'text-white' : 'text-gray-900'
                      }`}>{stat.value}</div>
                      <div className={`text-sm font-medium transition-colors duration-700 text-center ${
                        isVideoReady ? 'text-white/90' : 'text-gray-500'
                      }`}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onVideoStateChange={handleVideoStateChange}
        />
      </div>
    </>
  );
}
