let container = document.getElementById("container");
let themeButton = document.querySelector("#themeBtn");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

let allCountries;

fetch("https://restcountries.com/v3.1/all")
.then(function(data){
    return data.json()
})

.then((data)=>{
    renderCountries(data);
    allCountries = data;
})

.catch(function(error){
    console.log(error)
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

function renderCountries(data){
    container.innerHTML = "";
    for(var i=0; i < data.length; i++){
        var commonName = data[i].name.common; 
        var capitalName = data[i].capital; 
        var populations = data[i].population;
        var regionName = data[i].region;
        var image = data[i].flags.svg;
        container.innerHTML += `
        <div class="card">
            <img src="${image}">
            <div class="card-content">
                <div class = "cardTitle">
                    <h2> <a href="country.html?name=${data[i].name.common}" target="_blank"> ${commonName} </a> </h2>
                </div>
                <div class="content"> 
                    <h4> <span> Capital: </span>  ${capitalName}  </h4>
                    <h5> <span> Population: ${populations.toLocaleString()} </span> </h5>
                    <h5><span> Region: ${regionName} </span></h5>
                </div>
            </div>
        </div>
    
        `
    }

}

searchInput.addEventListener('input', (e)=>{
    // let inputText = searchInput.value;
    // if(e.key == "Enter"){
            let filteredCountry = allCountries.filter((country)=> country.name.common.toLowerCase().includes(e.target.value.toLowerCase()) )     
            renderCountries(filteredCountry);
    // }
})