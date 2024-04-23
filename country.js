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
        <h1>${data[i].name.official} </h1>
        <h3> Continent: ${data[i].status} </h3>
        <h3> Capital: ${data[i].capital} </h3>
        <h3> Region: ${data[i].region} </h3>
        <h3> Sub-Region: ${data[i].subregion} </h3>
        <h3> Currency: ${data[i].currencies} </h3>
        <h3> Population: ${data[i].population.toLocaleString()} </h3>
        <h3> Time Zone: ${data[i].timezones.toLocaleString()} </h3>
        <h3> Urdu Name: ${data[i].translations.urd.official} </h3>
        <h3> Border Countries: ${data[i].borders} </h3>
        </div>
        <div id="dtlCardImg"> <img src="${image}"> </div>
        `
    }
    
})