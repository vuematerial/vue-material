const debounce = (callback, limit) => {
  var wait = false;

  return () => {
    if (!wait) {
      callback.call();
      wait = true;

      window.setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
};

export default debounce;
