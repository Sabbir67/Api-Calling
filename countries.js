const countries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => display(data))
}


const display = data => {
    const countryDiv = document.getElementById('countries');
    //Normal System
    // for(const cdata of data){
    //     const p = document.createElement('p');
    //     p.innerText = `
    //     Country Name : ${cdata.name}
        
    //     `;

    //     countryDiv.appendChild(p);

    //     console.log(cdata);
    // }

    data.forEach(country => {
        const div = document.createElement('div'); 
        const h3 = document.createElement('h3'); 
        const p = document.createElement('p');
        
        div.classList.add('sajan');

        div.innerHTML= `
            <h3> Country Name : ${country.name} </h3>
            <p>Capital : ${country.capital}</p>
            <p>Population : ${country.population}</p>
            <button onClick="loadCountryByName('${country.name}')">Click for more Details</button>
        `

        countryDiv.appendChild(div);
        console.log(country);
    })



    
}


const loadCountryByName = name => {

    const url = `https://restcountries.eu/rest/v2/name/${name}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));

   // console.log(name);
}

const displayCountryDetails = country => {

    const countryDeatils = document.getElementById('country-details');
    countryDeatils.innerHTML = `
    <h5>Country Name : ${country.name} </h5>
    <img width="200px" src="${country.flag}">


    `


    console.log(country);
}

countries();