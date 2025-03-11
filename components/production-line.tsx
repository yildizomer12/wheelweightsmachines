'use client';

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslations } from '@/hooks/use-translations';
import { useRouter, useParams } from 'next/navigation';

type ProductKey = 
  | "components.productCards.decoiler.title"
  | "components.productCards.decoiler.features.capacity"
  | "components.productCards.decoiler.features.mandrel"
  | "components.productCards.decoiler.features.tension"
  | "components.productCards.flattening.title"
  | "components.productCards.flattening.features.processing"
  | "components.productCards.flattening.features.output"
  | "components.productCards.flattening.features.cost"
  | "components.productCards.chopping.title"
  | "components.productCards.chopping.features.capacity"
  | "components.productCards.chopping.features.technology"
  | "components.productCards.chopping.features.marking"
  | "components.productCards.taping.title"
  | "components.productCards.taping.features.config"
  | "components.productCards.taping.features.monitoring"
  | "components.productCards.taping.features.output"
  | "components.productCards.weights.title"
  | "components.productCards.weights.features.coating"
  | "components.productCards.weights.features.accuracy"
  | "components.productCards.weights.features.combinations";

const products: { title: ProductKey; image: string; features: ProductKey[]; route: string }[] = [
  {
    title: 'components.productCards.decoiler.title',
    image: "/images/decoiler-machine.png",
    features: [
      'components.productCards.decoiler.features.capacity',
      'components.productCards.decoiler.features.mandrel',
      'components.productCards.decoiler.features.tension'
    ],
    route: "decoiler-machine"
  },
  {
    title: 'components.productCards.flattening.title',
    image: "/images/wire-flattening-machine.png",
    features: [
      'components.productCards.flattening.features.processing',
      'components.productCards.flattening.features.output',
      'components.productCards.flattening.features.cost'
    ],
    route: "wire-flattening-machine"
  },
  {
    title: 'components.productCards.chopping.title',
    image: "/images/chopping-marking-machine.png",
    features: [
      'components.productCards.chopping.features.capacity',
      'components.productCards.chopping.features.technology',
      'components.productCards.chopping.features.marking'
    ],
    route: "chopping-and-marking-machine"
  },
  {
    title: 'components.productCards.taping.title',
    image: "/images/taping-packaging-machine.png",
    features: [
      'components.productCards.taping.features.config',
      'components.productCards.taping.features.monitoring',
      'components.productCards.taping.features.output'
    ],
    route: "taping-and-packaging-machine"
  },
  {
    title: 'components.productCards.weights.title',
    image: "/images/wheel-weights.png",
    features: [
      'components.productCards.weights.features.coating',
      'components.productCards.weights.features.accuracy',
      'components.productCards.weights.features.combinations'
    ],
    route: "wheel-weights"
  }
];

export function ProductionLine() {
  const router = useRouter();
  const { lang } = useParams() as { lang: string };
  const { t } = useTranslations();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isManualControl, setIsManualControl] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: false,
    align: 'start',
    slidesToScroll: 1
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    }
  }, [emblaApi]);

  const resetAutoplay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsManualControl(false);
    }, 1000);
  }, []);

  const scrollPrev = useCallback(() => {
    setIsManualControl(true);
    if (emblaApi) emblaApi.scrollPrev();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollNext = useCallback(() => {
    setIsManualControl(true);
    if (emblaApi) emblaApi.scrollNext();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const handleMouseDown = useCallback(() => {
    setIsManualControl(true);
    resetAutoplay();
  }, [resetAutoplay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container py-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
            {t('pages.home.production.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('pages.home.production.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('pages.home.production.subtitle')}
          </p>
        </div>

        <div className="relative py-4">
          <button
            onClick={scrollPrev}
            className="fixed-nav-button left-0 -translate-x-1/2"
            style={{ zIndex: 10 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="fixed-nav-button right-0 translate-x-1/2"
            style={{ zIndex: 10 }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="embla relative">
            <div 
              ref={emblaRef}
              className={`${isManualControl ? "" : "animate-carousel"} overflow-visible`}
              onMouseDown={handleMouseDown}
            >
              <div className={`flex ${!isLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
                {[...products, ...products, ...products].map((product, index) => (
                  <div key={index} className="flex-[0_0_25%] min-w-0 px-4 py-4">
          <div onClick={() => router.push(`/${lang}/${product.route}`)} className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:z-[100] flex flex-col cursor-pointer h-full relative shadow-lg hover:shadow-xl">
                      <div className="aspect-w-4 aspect-h-4 w-full relative">
                        <img
                          src={product.image}
                          alt={t(product.title)}
                          className="w-full h-full object-contain bg-gray-100 p-4"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-4">{t(product.title)}</h3>
                        <ul className="space-y-2 mb-6 flex-grow">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
                              <span className="w-1.5 h-1.5 bg-[#0065A1] rounded-full mr-2"></span>
                              {t(feature)}
                            </li>
                          ))}
                        </ul>
                        <button className="flex items-center justify-center w-full px-4 py-2 bg-[#e6f0f7] text-gray-700 rounded-md hover:bg-[#d9e7f2] transition-colors duration-200">
                          <span>{t('pages.home.production.learnMore')}</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .embla {
            position: relative;
            z-index: 1;
            overflow: hidden;
            padding: 20px 0;
            margin: -20px 0;
          }

          .fixed-nav-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background-color: white;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4A5568;
            transition: all 0.2s;
            cursor: pointer;
            border: none;
            outline: none;
          }

          .fixed-nav-button:hover {
            color: var(--accent);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .animate-carousel {
            animation: carousel 40s linear infinite;
          }

          .animate-carousel:hover {
            animation-play-state: paused;
          }

          @keyframes carousel {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
