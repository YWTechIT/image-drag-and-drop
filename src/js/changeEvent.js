const changeEvent = (event) => {
  const { target } = event;
  return target.files;
};

export default changeEvent;
