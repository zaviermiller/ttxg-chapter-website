import QRCode from 'react-qr-code';
import headFactory from '../../utils/head-factory';
import './styles.css';

export default function Rush() {
  const link = "https://groupme.com/join_group/69067779/2hX0x5jU"
  return (
    // TODO: maybe get data back about whether or not rush is happening?
    <div className="flex flex-col space-y-6 mt-4 md:space-y-0 md:mt-0 md:flex-row w-full px-8 lg:px-20 justify-between py-12">
      <div className="flex flex-col w-full md:w-2/5 justify-center items-center space-y-4">
        <h1 className="text-5xl font-bold mb-4 tracking-tight w-full">
          It&apos;s Rush Season in Tennessee!
        </h1>
        <h4 className="text-xl ">
          Chi Gamma holds a recruitment week every fall and spring, which occurs
          at the beginning of the semester. Rush is normally five days of events
          designed to allow potential pledges to meet current members and see if
          Chi Gamma is right for them. Prospective pledges must be pursing a
          degree in the Tickle College of Engineering at the University of
          Tennessee. Chi Gamma looks for social, friendly, and academic driven
          students who will actively contribute to the success of the
          fraternity. Scan or click the QR code above to join the rush GroupMe
          for updates and information about rushing Theta Tau.
        </h4>

        {/* TODO: use ReactQR for this */}
        <a href={link}>
          <QRCode
            size={256}
            className="w-80 aspect-square object-cover"
            value={link}
          />
        </a>
      </div>
      <div className="flex flex-col w-full md:w-1/2 flex-shrink justify-center items-center space-y-4 md:pl-12">
        <div
          id="poster"
          style={{
            aspectRatio: 8.5 / 11,
            width: 580,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage:
              'url("https://static.wixstatic.com/media/a6c024_f22e0cc434b44d9594d3efbb66b76db2~mv2.png/v1/fill/w_455,h_606,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/USETHIS.png")',
          }}
          className="max-w-full"
        ></div>
      </div>
    </div>
  );
}

export const Head = headFactory({ title: 'Rush'});
