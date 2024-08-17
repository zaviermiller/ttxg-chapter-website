import { forwardRef } from 'react';
import { PillarData } from './use-about-page';

interface PillarSectionProps {
  data: PillarData;
}

const PillarSection = forwardRef(function PillarSection(
  { data }: PillarSectionProps,
  ref
) {
  return (
    // @ts-ignore
    <div ref={ref} className="w-full pt-12">
      <div className="w-full mb-24">
        <h1 className="text-5xl text-gray-900 font-bold tracking-tight text-center">
          {data.name}
        </h1>
      </div>
      <div className="flex flex-col w-full gap-12">
        <div className="flex flex-col md:flex-row w-full gap-12 md:gap-4 md:justify-between">
          <div className="flex flex-col md:flex-row w-full md:w-2/5">
            <p className="text-2xl">{data.section1Desc}</p>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-2/5">
            <img
              src={data.section1ImageUrl}
              alt="Chi Gamma brothers class of Spring 2023"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full gap-12 md:gap-4 md:justify-between">
          <div className="flex flex-col md:flex-row w-full md:w-2/5">
            <img
              src={data.section2ImageUrl}
              alt="A speaker giving a talk at the national Theta Tau conference"
            />
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-2/5">
            <p className="text-2xl">{data.section2Desc}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-12 md:gap-4 md:justify-between">
          <div className="flex flex-col md:flex-row w-full md:w-2/5">
            <p className="text-2xl">{data.section3Desc}</p>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-2/5">
            <img
              src={data.section3ImageUrl}
              alt="Chi Gamma brothers at the national Theta Tau conference"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default PillarSection;
