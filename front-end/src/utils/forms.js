function HandleChange(event, data, setData) {
    const {name, value} = event.target;
    setData({...data, [name]:value});

}

export {HandleChange}