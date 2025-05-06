
const hideOnClickOutside = (ref) => (event) => {
    return (ref.current && ref.current.contains(event.target)) ? true : false
};


export default hideOnClickOutside;