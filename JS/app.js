$(document).ready(function() {
  let url = "https://restcountries.eu/rest/v2/all";

  $.getJSON(url, function(data) {
    $.each(data, function(index, value) {
      if(value.name === "Croatia") {
        console.log(value)
      }
    });
  });
}); //Ready DOM
