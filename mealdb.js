const searchFood = () => {
    const searchItem = document.getElementById('search-result');
    searchItem.innerText = '';
    const searchField = document.getElementById('search-field');
    const searchText= searchField.value;
    
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}

const displayFood = meals => {

    const searchItem = document.getElementById('search-result');

    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealID(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
            </div>
          </div>
        `
        searchItem.appendChild(div);

        console.log(meal);
    })
   // console.log(meals);
}

const loadMealID = mealId => {
    const mealDeatails = document.getElementById('meal-details');
    mealDeatails.innerText = '';
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
    //console.log(mealId);
}

const displayMealDetails = meal => {
    console.log(meal);
    const mealDeatails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
              <a href="${meal.strYoutube}" class="btn btn-primary"> Go SomeWhere </a>
            </div>
    `
    mealDeatails.appendChild(div);

    

}