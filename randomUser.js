const randomUser = () =>  {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => display(data))
}

const display = data => {

    const sec = document.getElementById('section'); 
    
    const buddies = data.results;
    for(const buddy of buddies){
        const div = document.createElement('div');
        div.innerText = `
        
        Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} 
        Email : ${buddy.email} 
        Age : ${buddy.dob.age}
        Gender : ${buddy.gender}
        Location : ${buddy.location.country}


        `;
        sec.appendChild(div);
        
        
        console.log(buddy);
    }


     

     
}

randomUser();