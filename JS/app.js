$(document).ready(function() {
  let $li = $("#region li");
  let countriesAPI = "https://restcountries.eu/rest/v2/all";
  let html = "<ul>";
  $.getJSON(countriesAPI, function(data) {
      $.each(data, function(index, country) {
        html += "<li>" + country.name + "</li>";
      }); //each
      html += "</ul>"
      $("#main").html(html)

      $li.click(function(e) {
        $("#main li").hide()
        // if()
        // $.each(data, function(index, country) {
        //   html += "<li>" + country.name + "</li>";
        // }); //each
        // html += "</ul>"
        // $("#main").html(html)

      });
  });  //JSON



})
