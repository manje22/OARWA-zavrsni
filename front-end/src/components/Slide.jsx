function Slide({num, count, imgSrc}) {
    return(
        <div>
            <div>{num}/{count}</div>
            <img src={imgSrc}></img>
        </div>
    );
}