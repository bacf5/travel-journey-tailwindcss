import London from '../assets/tower-bridge.avif';

function Card(props) {
  console.log(props);
  return (
    <div className="max-w-2xl mx-auto">
      {' '}
      <div className="justify-items-start p-4 flex ">
        <img
          src={London}
          alt="london"
          className="object-contain rounded-xl hover:scale-110 transition ease-in"
          width={300}
        />

        <div className="font-Inter ml-4">
          <span className="font-semibold p-4">📍 United Kingdom</span>
          <span className="underline text-xs text-gray-400">
            <a href="link">view on Google Maps 🔗</a>
          </span>
          <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block m-5 hover:scale-105 transition ease-in">
            <span className="relative text-white font-bold text-lg ">
              Tower Bridge
            </span>
          </div>
          <br />
          <span className="text-xs font-semibold">
            (09 Nov, 2019 - 14 Nov, 2019)
          </span>
          <div className="text-left text-xs object-contain ml-6 pt-3">
            Tower Bridge is a Grade I listed combined bascule and suspension
            bridge in London, built between 1886 and 1894, designed by Horace
            Jones and engineered by John Wolfe Barry with the help of Henry Marc
            Brunel.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
