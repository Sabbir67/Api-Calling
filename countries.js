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

        h3.innerText = `Country Name : ${country.name}`;
        div.appendChild(h3);

        p.innerText = `Capital : ${country.capital}
        Population : ${country.population}
        `;
        div.appendChild(p);

        countryDiv.appendChild(div);
        console.log(country);
    })



    
}


countries();