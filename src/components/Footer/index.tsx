import { execMembers } from "../../constants";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

export default function Footer() {
  return <div className="w-full py-8 bg-stone-800 flex flex-col md:px-24 xl:px-48 gap-8 mt-8">
    <div className="flex flex-col md:flex-row w-full justify-around align-center gap-8 md:gap-0 px-12 md:px-0">
      <img src="/img/crest.svg" className="object-contain h-auto" width="100" height="100" alt="Theta Tau crest"/>

      <div className="text-white flex flex-col justify-center">
        <a href="mailto:contact@tennesseethetatau.org" className="text-lg hover:underline">contact@tennesseethetatau.org</a>
        <div className="flex flex-row">
          <a href="smth">
            <IconBrandInstagram size={42} stroke={1} />
          </a>
          <a href="smth">
            <IconBrandLinkedin size={42} stroke={1} />
          </a>
          <a href="smth">
            <IconBrandFacebook size={42} stroke={1}/>
          </a>
          <a href="smth">
            <IconBrandTwitter size={42} stroke={1}/>
          </a>
        </div>
      </div>

      <div className="text-white flex flex-col justify-center">
        <p className="font-bold">Contacts</p>
        { execMembers.map((em, i) => (
          <p key={i} className="py-1">{em.position}: {em.name}</p>
        ))}
      </div>
      <div className="text-white flex flex-col justify-center">
        <p className="font-bold">Links</p>
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/rush" className="hover:underline">Rush</a>
      </div>
    </div>
    <div className="flex flex-col w-full justify-center">
      <p className="text-white text-center">© 2024 Theta Tau Chi Gamma</p>
    </div>
  </div>;
}
