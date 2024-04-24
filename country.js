let countryName = new URLSearchParams(location.search).get('name')
let cardDetails = document.querySelector(".details-card");
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
        var image = data[i].flags.svg;

        cardDetails.innerHTML += `
        <div id="dtlCard-details">
            <h2>${data[i].name.official} </h2>
            <p> <b> Continent:</b> ${data[i].status} </p>
            <p> <b> Capital: </b> ${data[i].capital} </p>
            <p> <b> Region: </b> ${data[i].region} </p>
            <p> <b> Sub-Region: </b> ${data[i].subregion} </p>
            <p> <b> Currency: </b> ${data[i].currencies} </p>
            <p> <b> Population: </b> ${data[i].population.toLocaleString()} </p>
            <p> <b> Time Zone: </b> ${data[i].timezones.toLocaleString()} </p>
            <p> <b> Urdu Name: </b> ${data[i].translations.urd.official} </p>
            <p> <b> Border Countries: </b> ${data[i].borders} </p>
        </div>
        <div id="dtlCardImg"> <img src="${image}"> </div>
        `
    }
    
})