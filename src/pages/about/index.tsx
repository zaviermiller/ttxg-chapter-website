import { useRef } from "react";
import PillarCard from "../../components/PillarCard";
import pillars from "../../constants/pillars";
import headFactory from "../../utils/head-factory";

import './styles.css'

export default function AboutPage() {
  const profRef = useRef<HTMLDivElement | null>(null);
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const brotherhoodRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const refMap = {
    "professional": profRef,
    "service": serviceRef,
    "brotherhood": brotherhoodRef,
  }
  return (
    <div className="space-y-12 pt-10 md:mt-0 w-full px-8 lg:px-20">
      <div className="flex flex-row w-full justify-center flex-shrink mb-4">
        <h1 className="text-5xl font-bold mb-4 text-center tracking-tight">Our Pillars</h1>
      </div>

      {/* Pillars */}
      <div className="flex flex-col md:flex-row w-full flex-shrink gap-6">
        { pillars.map((pillar, i) => (
          <div id={pillar.id} className="flex flex-col w-full md:w-1/3 justify-center items-center space-y-4" key={i}>
            <PillarCard title={pillar.title} icon={pillar.icon} description={pillar.shortDesc} onClick={() => scrollTo(refMap[pillar.id as keyof typeof refMap])} />
          </div>
        ))}
      </div>
      {/* About theta tau and chi gamma */}
      <div className="flex flex-col w-full flex-shrink space-y-24 pt-12 justify-around">
        <div className="flex flex-col md:flex-row w-full justify-center gap-8">
          <div className="flex flex-col w-full md:w-1/2 justify-center space-y-4">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">About Chi Gamma</h2>
            <p className="text-gray-900 text-lg">
              Chi Gamma is the University of Tennessee, Knoxville&apos;s chapter of Theta Tau, located in the Southeast Region. We colonized in 2007, and then became established as a chapter two years later on January 31,  2009. Our chapter&apos;s founding fathers are Tryone Phillips, Ben Davis, Brandon Goodwin, John Scott, Calain Schuman, Norman Rivera, Nathan Robinson, Danny Smith, and Sergio Cristian de la Barrera Noyes, Jr. Chi Gamma has since received multiple national awards based on size, service, newsletter, and website. 
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/2 justify-center items-end space-y-4">
            {/* <Image src="/about/chi-gamma.webp" alt="The brothers of Chi Gamma" width="600" height="361" className="transition-all translate-x-10 opacity-0 ease-out duration-[.8s]" onLoadingComplete={(image) => image.classList.remove("translate-x-10", "opacity-0")} /> */}
            <img src="/img/about/chi-gamma.webp" alt="The brothers of Chi Gamma" width="650" height="361" />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row w-full justify-center gap-8">
          <div className="flex flex-col w-full md:w-1/2 justify-center space-y-4">
            <img src="/img/about/southeast.jpg" alt="Southeast regional conference" width="650" height="361" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 justify-center space-y-4">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">About Theta Tau</h2>
            <p className="text-gray-900 text-lg">
            Theta Tau was founded on October 15, 1904 by four engineering students at the University of Minnesota, College of Mines. The original name of Theta Tau was The Society of Hammer and Tongs, symbols of strength and unity. The original founding fathers of Theta Tau are Erich Schrader, William Lewis, Isaac Hanks, and Elwin Vinal. Theta Tau is the oldest and largest professional engineering fraternity, with chapters across the country, and members around the world.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-shrink justify-center pt-8">
        <img src="/img/crest.svg" alt="Theta Tau crest" className="h-auto" width="120" height="120" />
      </div>

      {/* Professionalism */}
      <div ref={profRef} className="w-full pt-12">
        <div className="w-full mb-24">
          <h1 className="text-5xl text-gray-900 font-bold tracking-tight text-center">Professional Development</h1>
        </div>
        <div className="flex flex-col w-full gap-12">
          <div className="flex flex-col md:flex-row w-full gap-12 md:gap-4 md:justify-between">
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
                <p className="text-2xl">
                  Chi Gamma is a society of engineering leaders. Through multiple professional sessions, our members develop communication, problem-solving, collaboration, and leadership skills. 
                </p>
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
              <img src="/img/pd/initiation.jpg" alt="Chi Gamma brothers class of Spring 2023" width="700" height="361" />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full gap-12 md:gap-4 md:justify-between">
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
              <img src="/img/pd/talk.jpg" alt="A speaker giving a talk at the national Theta Tau conference" width="650" height="361" />
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
                <p className="text-2xl">
                  Speakers from diverse engineering disciplines like industry recruiters and researchers, are invited to talk with members. All members have the chance to create a network of professionals in their field. 
                </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-12 md:gap-4 md:justify-between">
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
                <p className="text-2xl">
                  Members are able to succeed academically through weekly study groups, organization sessions, resume work shops, mock interviews, and a resource of older members in the engineering fields.  
                </p>
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
              STUDY DAY IMAGE
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Service */}
      <div ref={serviceRef} className="w-full pt-12">
        <div className="w-full mb-24">
          <h1 className="text-5xl text-gray-900 font-bold tracking-tight text-center">Service</h1>
        </div>
        <div className="flex flex-col w-full gap-12">
          <div className="flex flex-col md:flex-row w-full gap-12 md:gap-4 md:justify-between">
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
                <p className="text-2xl">
                  Chi Gamma plans many service projects and participates in outreach opportunities. These service events in the community create an environment for learning and personal growth for all members.
                </p>
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
              <img src="/img/service/service1.webp" alt="Chi Gamma brothers building a house at Habitat for Humanity Build Day" width="500" height="361" />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full gap-12 md:gap-4 md:justify-between">
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
              <img src="/img/service/fort-cleanup.jpg" alt="Chi Gamma brothers getting ready to clean up the Fort" width="500" height="361" />
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
                <p className="text-2xl">
                  Members complete over twelve service hours a semester. Volunteering is very important to Chi Gamma since we are all Volunteers, giving back to our community in any possible way. 
                </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-12 md:gap-4 md:justify-between">
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
                <p className="text-2xl">
                  Chi Gamma has served with Habitat for Humanity, Beardsley Farms, The Ronald McDonald House, Keep Knoxville Beautiful, Knoxville Area Rescue Ministry, Ijams Nature Center, and many more.
                </p>
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
              service image
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Brotherhood */}
      <div ref={brotherhoodRef} className="w-full pt-12">
        <div className="w-full mb-24">
          <h1 className="text-5xl text-gray-900 font-bold tracking-tight text-center">Brotherhood</h1>
        </div>
        <div className="flex flex-col w-full gap-12">
          <div className="flex flex-col md:flex-row w-full gap-12 md:gap-4 md:justify-between">
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
                <p className="text-2xl">
                  Chi Gamma holds many events throughout the semester, building lifelong bonds of fraternal friendship. Every member develops a network of lasting personal and professional relationships. 
                </p>
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
              <img src="/img/brotherhood/bowling.jpg" alt="Chi Gamma brothers after a game of kickball" width="650" height="500" />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full gap-12 md:gap-4 md:justify-between">
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
              <img src="/img/brotherhood/tailgate.jpg" alt="Chi Gamma brothers at a tailgate" width="600" height="500" />
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
                <p className="text-2xl">
                  Brotherhood activities occur almost every week! Some of our brotherhood events include tailgates, cookouts, movie nights, intramural sports, bowling, and more!
                </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-12 md:gap-4 md:justify-between">
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
                <p className="text-2xl">
                  Chi Gamma&apos;s biggest events are the cabin weekend and camping weekend where brothers and alumni spend a weekend together. In the Spring, Chi Gamma joins with other Theta Tau chapters for a formal. 
                </p>
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-2/5">
              cabin image
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export const Head = headFactory({ title: "About" })