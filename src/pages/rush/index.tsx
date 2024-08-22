import QRCode from 'react-qr-code';
import headFactory from '../../utils/head-factory';
import useRushPage from '../../hooks/use-rush-page';
import './styles.css';

export default function Rush() {
  const data = useRushPage();

  return data.active ? (
    <div className="flex flex-col space-y-6 mt-4 md:space-y-0 md:mt-0 md:flex-row w-full px-8 lg:px-20 justify-between py-12">
      <div className="flex flex-col w-full md:w-2/5 justify-center items-center space-y-4">
        <h1 className="text-5xl font-bold mb-4 tracking-tight w-full">
          {data.title}
        </h1>
        <h4 className="text-xl ">{data.description}</h4>

        {/* TODO: use ReactQR for this */}
        <a href={data.groupMeLink}>
          <QRCode
            size={256}
            className="w-80 aspect-square object-cover"
            value={data.groupMeLink}
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
            backgroundImage: `url("${data.posterImageUrl}")`,
          }}
          className="max-w-full"
        ></div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col space-y-6 mt-4 md:space-y-0 md:mt-0 w-full px-8 lg:px-20 justify-start items-center py-12">
      <h1 className="text-3xl font-medium mb-4 text-gray-800 tracking-tight">
        Rush has ended this semester.
      </h1>
      <h3 className="text-lg text-gray-500">
        Check back early next semester to learn more about our rush events!
      </h3>
    </div>
  );
}

export const Head = headFactory({ title: 'Rush' });
