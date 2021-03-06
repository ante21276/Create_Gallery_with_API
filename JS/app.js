  const countriesAPI = "https://restcountries.eu/rest/v2/all";
  let html = "<ul id='countriesList'>";
  let overlayInfo = "";

  $.getJSON(countriesAPI, function(data) {
      $.each(data, function(index, country) {
        html += "<li data-internalid=" + index + " class=" + country.region + ">";
        html +=  country.name + "</li>";
      }); //each
      html += "</ul>";
      $("#main").html(html);

      let $li = $("#countriesList li");
      $li.click(function(e) {

        let overlayInfo = "";
         $.each(data, function(index, country) {

           if(e.target.innerHTML === country.name) {
             overlayInfo += "<img  class='svg'  src='https://restcountries.eu/data/" + country.alpha3Code.toLowerCase()  +".svg' >";
             overlayInfo += '<p> Country:\xa0\xa0' + country.name + '</p>';
             overlayInfo += "<p> Region:\xa0\xa0" + country.region + "</p>";
             overlayInfo += "<p> Subregion:\xa0\xa0" + country.subregion + "</p>";
             overlayInfo += "<p> Capital:\xa0\xa0" + country.capital + "</p>";
             overlayInfo += "<p> Population:\xa0\xa0" + country.population.toLocaleString() + "</p>";
             overlayInfo += "<p> Area:\xa0\xa0" + country.area.toLocaleString() + " km</p>";
             overlayInfo += "<p> Native Name:\xa0\xa0" + country.nativeName + "</p>";
           }
        });
        $("#text").html(overlayInfo);
        document.getElementById("overlay").style.display = "block";

        let atribute = parseInt(e.target.getAttribute("data-internalid"));
        let prev = document.getElementById("prev");
        let next = document.getElementById("next");

         prev.addEventListener("click", () => {
           atribute -= 1;
           if (atribute < 1) {
             atribute = 249
           }

           let overlayInfo = "";
           $.each(data, function(index, country) {
             if (atribute === index) {
               overlayInfo += "<img  class='svg'  src='https://restcountries.eu/data/" + country.alpha3Code.toLowerCase()  +".svg' >";
               overlayInfo += "<p> Country:\xa0\xa0" + country.name + "</p>";
               overlayInfo += "<p> Region:\xa0\xa0" + country.region + "</p>";
               overlayInfo += "<p> Subregion:\xa0\xa0" + country.subregion + "</p>";
               overlayInfo += "<p> Capital:\xa0\xa0" + country.capital + "</p>";
               overlayInfo += "<p> Population:\xa0\xa0" + country.population.toLocaleString() + "</p>";
               overlayInfo += "<p> Area:\xa0\xa0" + country.area.toLocaleString() + " km</p>";
               overlayInfo += "<p> Native Name:\xa0\xa0" + country.nativeName + "</p>";
             }
           });
           $("#text").html(overlayInfo);
           document.getElementById("overlay").style.display = "block";
        });

        next.addEventListener("click", () => {
          atribute += 1;
          if (atribute > 249) {
            atribute = 0
          }
          let overlayInfo = "";
          $.each(data, function(index, country) {
            if (atribute === index) {
              overlayInfo += "<img  class='svg'  src='https://restcountries.eu/data/" + country.alpha3Code.toLowerCase()  +".svg' >";
              overlayInfo += "<p> Country:\xa0\xa0" + country.name + "</p>";
              overlayInfo += "<p> Region:\xa0\xa0" + country.region + "</p>";
              overlayInfo += "<p> Subregion:\xa0\xa0" + country.subregion + "</p>";
              overlayInfo += "<p> Capital:\xa0\xa0" + country.capital + "</p>";
              overlayInfo += "<p> Population:\xa0\xa0" + country.population.toLocaleString() + "</p>";
              overlayInfo += "<p> Area:\xa0\xa0" + country.area.toLocaleString() + " km</p>";
              overlayInfo += "<p> Native Name:\xa0\xa0" + country.nativeName + "</p>";
            }
          });
          $("#text").html(overlayInfo);
          document.getElementById("overlay").style.display = "block";
       });

      });
       let $close = $("#close");

       $close.click(function(e) {
         if (e.target.tagName = "span") {
           document.getElementById("overlay").style.display = "none";
         }
       });
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
    }); //eventListener
