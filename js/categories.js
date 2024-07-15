const loadCatagories = async () => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/categories`;
        const res = await fetch(url);
        const data = await res.json();
        displayCategories(data.data.news_category);
    }
    catch (e) {
        console.log(e);
    }
}

// display the categories
const displayCategories = categorieses => {

    // console.log(categorieses);
    const categoriesContainer = document.getElementById('categories-container');
    categorieses.forEach(categories => {
        const categoriesDiv = document.createElement('div');
        categoriesDiv.innerHTML = `
            <li onclick="loadCategoryNews('${categories.category_id}')" class="nav-item categories-text">
                <a class="nav-link link-primary" href="#">${categories.category_name}</a>
            </li>`;
        
        categoriesContainer.appendChild(categoriesDiv);
    });
}

//   Load the category news 
const loadCategoryNews = async category_id => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;

        const res = await fetch(url);
        const data = await res.json();
        displayCategoryNews(data.data);
    }
    catch (e) {
        console.log(e);
    }
}

// display the category news
const displayCategoryNews = newsArray => {
    // console.log(newsArray);
    
    newsArray.forEach(news => {
        console.log(news);
    })
}

loadCatagories();