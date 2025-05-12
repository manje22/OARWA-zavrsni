
function ImageGallery({imageData, onClickFn}) {

    const handleClickImage = (index) => {
        onClickFn(index);
    }
    return(
        <div className="grid grid-cols-3 gap-4 p-4">
            {imageData.map((slide, index) => (
                <div onClick={()=> handleClickImage(index)} key={index}>
                    <img src={slide.src} alt={"picture"} className="w-full h-auto object-cover rounded-lg hover:cursor-pointer"></img>
                </div>
            ))}
        </div>
    )
}

export default ImageGallery;