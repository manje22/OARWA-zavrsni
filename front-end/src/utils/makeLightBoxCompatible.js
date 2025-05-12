export function makeLightBoxCompatible(array){
    const compatible = [];

    array.forEach(element => {
        const compatibleElement = {src: element}
        compatible.push(compatibleElement);
    });

    return compatible;
}