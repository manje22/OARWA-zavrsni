function Banner({ picSrc, title, subTitle }) {
    return (
      <div
        className="w-full min-h-150 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${picSrc})` }}
      >
        <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center text-white">
          <h1 className="text-8xl font-bold">{title}</h1>
          <h3 className="text-2xl mt-2">{subTitle}</h3>
        </div>
      </div>
    );
  }
  
  export default Banner;
  