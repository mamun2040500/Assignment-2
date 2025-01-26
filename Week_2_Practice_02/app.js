const loadallproduct = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => {
            displayProduct(data);
        });
}

const displayProduct = (productsdata) => {
    const prodCont = document.getElementById("product-container");
    const input_info = document.getElementById("input");
    input_info.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            document.getElementById("search").click()
        }
    });

    products = productsdata.meals;
    const products_filtered = products.filter(p => p.strMeal.includes(input_info.value));
    
    const cnt = products_filtered.length;
    
    prodCont.innerHTML = ''

    if (cnt == 0) {
        prodCont.innerHTML = `<h1>Not found</h1>`;
        return;
    }
    products_filtered.forEach(product => {
        const div = document.createElement("div");
        console.log(product);
        div.classList.add("col-3");
        div.onclick = () => {
            showDetails(product);
        };
        div.innerHTML = `
                <img class="img-fluid" src="${product.strMealThumb}" alt=""/>
                <h1>${product.strMeal}</h1>
                `;
        prodCont.appendChild(div);
        //         console.log(product);
    });
};

const showDetails = (product) => {
    const swImg = document.getElementById("cart-container");
    swImg.innerHTML = `
                    <img class="card-img" src="${product.strMealThumb}" alt=""/>
                    <h1>${product.strMeal}</h1>
                    <h3>Ingredients:</h3>
                    <h5>${product.strIngredient1}</h5>
                    <h5>${product.strIngredient2}</h5>
                    <h5>${product.strIngredient3}</h5>
                    <h5>${product.strIngredient4}</h5>
                    <h5>${product.strIngredient5}</h5>
                    <h5>${product.strIngredient6}</h5>
                    <h5>${product.strIngredient7}</h5>
                    <h5>${product.strIngredient8}</h5>
                    <h5>${product.strIngredient9}</h5>
                    <h5>${product.strIngredient10}</h5>
                    <h5>${product.strIngredient11}</h5>
                    <h5>${product.strIngredient12}</h5>
                    <h5>${product.strIngredient13}</h5>
                    <h5>${product.strIngredient14}</h5>
                    <h5>${product.strIngredient15}</h5>
                    <h5>${product.strIngredient16}</h5>
                    `;
                    swImg.appendChild(div);

};

loadallproduct()