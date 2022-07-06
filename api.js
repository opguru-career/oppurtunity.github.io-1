$.ajax({
  type: "get",
  url: "http://api.weatherstack.com/current?access_key=48d93f856e9e35052a99c68a6d0cbb6f&query=Kolkata",
  success: function (response) {
    // console.log(response);
    var cd = response.current.weather_descriptions;
    var str = "";
    cd.map((item, index) => {
      // console.log(item);
      str = `<option>${item}</option>`;
    });
    $("#weather").html(str);
  },
});
var params = {
  access_key: "48d93f856e9e35052a99c68a6d0cbb6f",
  query: "Kolkata",
};
axios
  .get("http://api.weatherstack.com/current", params)
  .then((res) => {
    console.log("axios: ");
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
