const quotePost = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => display(data))
}

const display = data => {

    const bqt = document.getElementById('quote');
    //const p = document.createElement('p');
    bqt.innerText = data.quote;


    console.log(data);
}


quotePost();