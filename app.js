document.getElementById('search-btn').addEventListener('click', function () {
    const inputName = document.getElementById('input-name').value;
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputName + '')
        .then(res => res.json())
        .then(data => {

            for (let i = 0; i < data.meals.length; i++) {
                const foodName = data.meals[i];
                 
             
                const ul = document.getElementById('itregrant')
                const h1=document.createElement('h1')
                h1.innerText='Ingredient';
        
                const li = document.createElement('li'); 
                li.innerText = foodName.strIngredient1;

                const li1 = document.createElement('li');
                li1.innerText = foodName.strIngredient2;

                const li2 = document.createElement('li');
                li2.innerText = foodName.strIngredient3;

                const li3= document.createElement('li');
                li3.innerText= foodName.strIngredient4;

                const li4= document.createElement('li');
                li4.innerText= foodName.strIngredient5;

                ul.appendChild(h1);
                ul.appendChild(li);
                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);
                ul.appendChild(li4);
            }
        })
        .catch(err=>alert('Not avaiable this item'))
});




