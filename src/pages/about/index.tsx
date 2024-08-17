import { useRef } from 'react';
import PillarCard from '../../components/PillarCard';
import pillars from '../../constants/pillars';
import headFactory from '../../utils/head-factory';
import useAboutPage from '../../hooks/use-about-page';
import PillarSection from '../../components/PillarSection';

import './styles.css';

export default function AboutPage() {
  const profRef = useRef<HTMLDivElement | null>(null);
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const brotherhoodRef = useRef<HTMLDivElement | null>(null);

  const data = useAboutPage();

  const scrollTo = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const refMap = {
    professional: profRef,
    service: serviceRef,
    brotherhood: brotherhoodRef,
  };
  return (
    <div className="space-y-12 pt-10 md:mt-0 w-full px-8 lg:px-20">
      <div className="flex flex-row w-full justify-center flex-shrink mb-4">
        <h1 className="text-5xl font-bold mb-4 text-center tracking-tight">
          Our Pillars
        </h1>
      </div>

      {/* Pillars */}
      <div className="flex flex-col md:flex-row w-full flex-shrink gap-6">
        {pillars.map((pillar, i) => (
          <div
            id={pillar.id}
            className="flex flex-col w-full md:w-1/3 justify-center items-center space-y-4"
            key={i}
          >
            {/* TODO: use card desc from contentful */}
            <PillarCard
              title={pillar.title}
              icon={pillar.icon}
              description={pillar.shortDesc}
              onClick={() => scrollTo(refMap[pillar.id as keyof typeof refMap])}
            />
          </div>
        ))}
      </div>
      {/* About theta tau and chi gamma */}
      <div className="flex flex-col w-full flex-shrink space-y-24 pt-12 justify-around">
        <div className="flex flex-col md:flex-row w-full justify-center gap-8">
          <div className="flex flex-col w-full md:w-1/2 justify-center space-y-4">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              About Chi Gamma
            </h2>
            <p className="text-gray-900 text-lg">{data.aboutChiGammaDesc}</p>
          </div>
          <div className="flex flex-col w-full md:w-1/2 justify-center items-end space-y-4">
            <img
              src={data.aboutChiGammaImageUrl}
              alt="The brothers of Chi Gamma"
              width="650"
              height="361"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row w-full justify-center gap-8">
          <div className="flex flex-col w-full md:w-1/2 justify-center space-y-4">
            <img
              src={data.aboutThetaTauImageUrl}
              alt="Southeast regional conference"
              width="650"
              height="361"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 justify-center space-y-4">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              About Theta Tau
            </h2>
            <p className="text-gray-900 text-lg">{data.aboutThetaTauDesc}</p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-shrink justify-center pt-8">
        <img
          src="/img/crest.svg"
          alt="Theta Tau crest"
          className="h-auto"
          width="120"
          height="120"
        />
      </div>

      {/* Professionalism */}
      <PillarSection data={data.pdSection} ref={profRef} />

      <hr />

      {/* Service */}
      <PillarSection data={data.serviceSection} ref={serviceRef} />

      <hr />

      {/* Brotherhood */}
      <PillarSection data={data.brotherhoodSection} ref={brotherhoodRef} />
    </div>
  );
}

export const Head = headFactory({ title: 'About' });
