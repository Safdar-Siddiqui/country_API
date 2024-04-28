let countryName = new URLSearchParams(location.search).get('name')
let cardDetails = document.querySelector(".details-card");
let themeButton = document.querySelector("#themeBtn");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then(function(data){
    return data.json();
})

.then(function(data){
    // console.log(data)
    
    for(var i=0; i<data.length; i++){
        
        if(data[i].currencies){
            var curr = Object.entries(data[i].currencies)[0][1].name;
        }
        else{
            curr = "No currency"
        }

        if(data[i].subregion){
            var subRegion = data[i].subregion;
        }
        else{
            subRegion = "No Sub Region found"
        }

        if(data[i].capital){
            var capitals = data[i].capital;
        }
        else{
            capitals = data[i].name.common + " has no capital city"
        }

        if (data[i].borders) {
            var border = data[i].borders.join(', ');
            // var borders = border.join(', ');
        }
        else{
            border = "No Border Countries"
        }

        if (data[i].timezones) {
            var timeZones = data[i].timezones.join(', ');
        } else {
            timeZones = "No Time Zone"
        }

        var image = data[i].flags.svg;
        var totalArea = data[i].area;
        var totalPopulation = data[i].population;
        var density = Math.round(totalPopulation / totalArea);

        cardDetails.innerHTML += `
        <div id="dtlCard-details">
            <h2>${data[i].name.official} </h2>
            <p> <b> Continent:</b> ${data[i].continents} </p>
            <p> <b> Capital: </b> ${capitals} </p>
            <p> <b> Region: </b> ${data[i].region} </p>
            <p> <b> Sub-Region: </b> ${subRegion} </p>
            <p> <b> Currency: </b> ${curr} </p>
            <p> <b> Population: </b> ${totalPopulation.toLocaleString()} </p>
            <p> <b> Area: </b> ${totalArea} Sq. KM </p>
            <p> <b> Density: </b> <i> ${density} </i> persons per Sq. KM </p>
            <p> <b> Time Zone: </b> ${timeZones} </p>
            <p> <b> Urdu Name: </b> ${data[i].translations.urd.official} </p>
            <div id="borders"> 
                <p> <b> Border Countries: </b> <span id="border-countries"> ${border} </span> </p>
            </div>
        </div>
        <div id="dtlCardImg"> <img src="${image}"> </div>
        `
    }
    
})

themeButton.addEventListener('click', function(){
    document.body.classList.toggle("dark");
    if(themeButton.innerHTML == "Dark_Mode"){
        themeButton.innerHTML = "Light_Mode";
    }
    else{
        themeButton.innerHTML = "Dark_Mode";
    }
})
