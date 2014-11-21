function getData(url, onSuccess) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function() {
    if (request.status === 200) {
      console.log(request);
      onSuccess(request.response);
    }
  };
  request.send(null);
}