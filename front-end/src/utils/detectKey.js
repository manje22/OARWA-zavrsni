const detectKey = (key) => (event) => {
    console.log(event.key);
    return event.key === key ? true: false
  };

export default detectKey;