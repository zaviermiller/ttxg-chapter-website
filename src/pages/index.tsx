import './styles.css';
import React from 'react';
import Marquee from 'react-fast-marquee';

import { useResponsive } from '../hooks/use-responsive';
import Button from '../components/Button';
import { Link } from 'gatsby';
import ImageScroller from '../components/ImageScroller';
import headFactory from '../utils/head-factory';

export default function Home() {
  const { smAndDown } = useResponsive();
  return (
      <div className="flex flex-col space-y-6 mt-4 md:space-y-0 md:mt-0 md:flex-row w-full px-8 lg:px-20 min-h-[calc(100vh-112px)]">
      <div className="flex flex-col w-full md:w-1/3 justify-center">
        <h1 id="title" className="text-5xl font-bold mb-4">
          Welcome to <span className="gradient-text">Theta Tau</span> at UTK
        </h1>
        {/* TODO: from contentful */}
        <h4 id="description" className="text-xl tracking-tight">
          Theta Tau is UTK&apos;s only co-ed professional engineering fraternity. The purpose
          of Theta Tau is to develop and maintain a high standard of
          professional interest among its members, and to unite them in a strong
          bond of fraternal fellowship.
        </h4>
        {/* Learn more button */}
        <div className="flex flex-row mt-4 space-x-4">
          <Link to="/about">
            <Button id="learn-more-btn" variant='filled' color='dark-red' textColor='white'>
              Learn More
            </Button>
          </Link>
          <Link to="/rush">
            <Button id="rush-btn" variant='outlined' color='dark-red' textColor='dark-red'>
              Rush
            </Button>
          </Link>
        </div>
      </div>
      {/* TODO: from contentful */}
      <div className="flex flex-col w-full md:w-2/3 flex-shrink justify-center space-y-4 md:pl-12 pb-6 md:pb-0">
        <ImageScroller direction="left" imageSrcs={['/img/brotherhood/camping.webp', '/img/brotherhood/movie.webp', '/img/brotherhood/group-letters.jpg']} />
        <ImageScroller direction="right" delay={1} imageSrcs={['/img/brotherhood/tailgate.jpg', '/img/brotherhood/bowling.jpg', '/img/brotherhood/kickball.jpg']} />
        <ImageScroller direction="left" imageSrcs={['/img/pd/initiation.jpg', '/img/pd/professional.jpg', '/img/pd/execs.jpg']} />
      </div>
    </div>
  );
}

export const Head = headFactory();