function AmenityItem({ imgSrc, caption }) {
  return (
    <div className="flex flex-col items-center  rounded-4xl p-5 w-96 bg-gray-50 transition delay-150 duration-300 ease-in-out hover:bg-gray-50 hover:border-0 hover:scale-120 hover:shadow-lg">
      <img src={imgSrc} className="h-30 mb-10"></img>
      <p className="text-2xl font-bold">{caption}</p>
    </div>
  );
}

export default AmenityItem;
