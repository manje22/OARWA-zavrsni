export default function makeLightBoxCompatible(imgs){
    const compatible = [];

    for (let i = 0; i  < imgs.length; i++) {
        const element = imgs[i];
        const compatibleElement = {src: element};
        console.log("comp el:", compatibleElement);
        compatible.push(compatibleElement);
    }

    console.log(compatible);
    return compatible;
}