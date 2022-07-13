// const imagenes = [
//   'https://source.unsplash.com/WLxQvbMyfas',
//   'https://source.unsplash.com/JmuyB_LibRo',
//   'https://source.unsplash.com/3PeSjpLVtLg',
// ];

function Card(props) {
  // console.log(props);
  return (
    <div className="max-w-2xl mx-auto">
      {' '}
      <div className="justify-items-start p-4 flex ">
        <img
          src={props.imageUrl}
          alt="london"
          className="object-contain rounded-xl hover:scale-110 transition ease-in"
          width={300}
        />

        <div className="font-Inter ml-4">
          <span className="font-semibold p-4">📍 {props.location}</span>
          <span className="underline text-xs text-gray-400">
            <a href={props.googleMapsUrl}>view on Google Maps 🔗</a>
          </span>
          <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block m-5 hover:scale-105 transition ease-in">
            <span className="relative text-white font-bold text-lg ">
              {props.title}
            </span>
          </div>
          <br />
          <span className="text-xs font-semibold">
            ({`${props.startDate} - ${props.endDate}`})
          </span>
          <div className="text-left text-xs object-contain ml-6 pt-3">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
