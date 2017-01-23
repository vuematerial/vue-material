const getServerRequestParameters = (page, pageSize, sortBy, sortType) => {
  const params = {
    page: page,
    pageSize: pageSize,
    per_page: pageSize,
    sortBy: sortBy,
    sortType: sortType
  };

  return Object.keys(params).map(function(key) {
    return `${key}=${encodeURIComponent(params[key])}`;
  }).join('&');
};

const getResponseData = (response) => {
  if (typeof response.body === 'undefined') {
    return response;
  }

  return response.body;
};

const getData = (data, http = null, httpHeaders = {}) => {
  return new Promise((resolve, reject) => {
    if (typeof data !== 'string') {
      resolve(data);
      return;
    }

    if (http !== null && typeof http.get !== 'undefined') {
      http.get(data).then((response) => {
        resolve(getResponseData(response));
      }, { headers: httpHeaders })
      .catch(function(reason) {
        reject(new Error(reason));
      });

      return;
    }

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(getResponseData(this.response)));
      } else if (this.readyState === 4) {
        reject(new Error(this.statusText));
      }
    };

    request.onerror = function() {
      reject(new Error(`XMLHttpRequest Error: ${this.statusText}`));
    };

    request.open('GET', data);

    Object.entries(httpHeaders).forEach(([key, value]) => {
      request.setRequestHeader(key, value);
    });

    request.send();
  });
};

export { getData, getServerRequestParameters };
