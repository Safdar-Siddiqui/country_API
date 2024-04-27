let countryName = new URLSearchParams(location.search).get('name')
let cardDetails = document.querySelector(".details-card");
let themeButton = document.querySelector("#themeBtn");
// var img = document.getElementById('img');
// console.log(countryName)

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then(function(data){
    return data.json();
})

.then(function(data){
    // console.log(data)
    
    // var countryFlag = document.createElement("img");
    // countryFlag.src = data.flags.svg;
    // img.append(countryFlag);

    for(var i=0; i<data.length; i++){

        // if(data[i].currencies){
        //     var curr = Object.entries(data.currencies).map((currency)=>currency.name.common).join(', ');
        // }
        console.log(data[i])

        
        if(data[i].currencies){
            var curr = Object.entries(data[i].currencies)[0][1].name;
        }
        else{
            curr = "No currency"
        }


        if (data[i].borders) {
            var border = data[i].borders
            var borders = border.join(', ');
            // console.log(borders);
        }
        else{
            border = "No Border Countries"
        }

        // console.log(curr + " hh ");

        var image = data[i].flags.svg;

        cardDetails.innerHTML += `
        <div id="dtlCard-details">
            <h2>${data[i].name.official} </h2>
            <p> <b> Continent:</b> ${data[i].continents} </p>
            <p> <b> Capital: </b> ${data[i].capital} </p>
            <p> <b> Region: </b> ${data[i].region} </p>
            <p> <b> Sub-Region: </b> ${data[i].subregion} </p>
            <p> <b> Currency: </b> ${curr} </p>
            <p> <b> Population: </b> ${data[i].population.toLocaleString()} </p>
            <p> <b> Time Zone: </b> ${data[i].timezones.toLocaleString()} </p>
            <p> <b> Urdu Name: </b> ${data[i].translations.urd.official} </p>
            <div id="borders"> 
                <p> <b> Border Countries: </b> <span id="border-countries"> ${borders} </span> </p>
            </div>
        </div>
        <div id="dtlCardImg"> <img src="${image}"> </div>
        `

        

    }
    
})

themeButton.addEventListener('click', function(){
    document.body.classList.toggle("dark");
    if(themeButton.innerHTML == "Light_Mode"){
        themeButton.innerHTML = "Dark_Mode";
    }
    else{
        themeButton.innerHTML = "Light_Mode";
    }
})