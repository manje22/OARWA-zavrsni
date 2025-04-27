function AmenityItem({ imgSrc, caption }) {
  return (
    <div className="flex flex-col items-center border-3 border-black rounded-4xl p-5 w-96">
      <img src={imgSrc} className="h-30 mb-10"></img>
      <p className="text-2xl font-bold">{caption}</p>
    </div>
  );
}

export default AmenityItem;
