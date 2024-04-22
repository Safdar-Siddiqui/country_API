let container = document.getElementById("container"); 

fetch("https://restcountries.com/v3.1/all")
.then(function(data){
    return data.json()
})

.then(function(data){
    for(var i=0; i < data.length; i++){
        console.log(data[i]);
        var commonName = data[i].name.common; 
        var capitalName = data[i].capital; 
        var populations = data[i].population;
        // var currencyName = data[i].status;
        // var currencyName = data[i].currencies.name;
        // var currencyName = data[i].currencies;
        var regionName = data[i].region;
        var image = data[i].flags.svg;
        // console.log(flag)
        // console.log(data[i].name.official);
        container.innerHTML += `
        <div class="card">
            <img src="${image}">
            <div class="card-content">
                <div class = "cardTitle">
                    <h2> <a href="/country_detail.html?name=${data[i].name.common}" target="_blank"> ${commonName} </a> </h2>
                </div>
                <div class="content"> 
                    <h4> <span> Capital: </span>  ${capitalName}  </h4>
                    <h5> <span> population: ${populations} </span> </h5>
                    <h5><span> Region: ${regionName} </span></h5>
                </div>
            </div>
        </div>
        `
    }
})

.catch(function(error){
    console.log(error)
})