$(document).ready(function() {
  let countriesAPI = "https://restcountries.eu/rest/v2/all";
  let html = "<ul id='countriesList'>";
  $.getJSON(countriesAPI, function(data) {
      $.each(data, function(index, country) {
        html += "<li class=" + country.region + ">"
        html +=  country.name + "</li>"
      }); //each
      html += "</ul>"
      $("#main").html(html)
  }); //json




  let $liRegion = $("#region li");

  $liRegion.click(function(e) {
    let countriesList = document.getElementById("countriesList");
    let countriesItems = countriesList.getElementsByTagName("li");
    for(let i = 0; i <countriesItems.length; i++) {
      if (e.target.id === "All") {
        countriesItems[i].style.display = "block";
      }
      else if (e.target.id !== countriesItems[i].className) {
        countriesItems[i].style.display = "none";
      }
      else {
        countriesItems[i].style.display = "block";
      }
    }
  });
    let search = document.getElementById("search");

    search.addEventListener("keyup", function(e) {
      let countriesList = document.getElementById("countriesList");
      let countriesItems = countriesList.getElementsByTagName("li");
      let term = $.trim($(this).val()).toLowerCase();
      for(let i = 0; i <countriesItems.length; i++) {
        let altText = countriesItems[i].innerHTML.toLowerCase();
        if (altText.indexOf(term) > -1) {
          $(countriesItems[i]).removeClass("hide").fadeIn(1000); //Show elements that fit the search criteria
        } else {
          $(countriesItems[i]).fadeOut(500).addClass("hide"); //Hide elements that don't fulfil the search criteria
        }
      } //loop
    }) //eventListener
}); // document
