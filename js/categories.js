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

// Function to get the category name based on category_id
const numberOfNews = async (category_id) => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/categories`;
        const res = await fetch(url);
        const data = await res.json();
        const category = data.data.news_category.find(cat => cat.category_id === category_id);
        return category ? category.category_name : 'Unknown Category';
    }
    catch (e) {
        console.log(e);
        return 'Unknown Category';
    }
}

//   Load the category news 
const loadCategoryNews = async category_id => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
        const res = await fetch(url);
        const data = await res.json();
        displayCategoryNews(data.data, category_id);
    }
    catch (e) {
        console.log(e);
    }
}

// display the category news
const displayCategoryNews = async (newsArray, category_id) => {
    let i = 0; // for total number of news 
    const articleContainer = document.getElementById('article-container');
    articleContainer.innerHTML = ''; // Clear previous news
    newsArray.forEach(news => {

        // console.log(news._id);
        i++;
        if (news.details.length > 200) {
            news.details = news.details.slice(0, 200);
        }
        const newsContainer = document.createElement('div');
        newsContainer.classList.add('news-container');
        newsContainer.innerHTML = `                   
         <img src="${news.thumbnail_url}" alt="">
         <!-- class news-text here -->
                    <div class="news-text">
                        <h5 class="text-center">${news.title}</h5>
                        <p>${news.details} ...</p>
                   <!-- class news-author here -->    
                        <div class="news-author">
                            <div class="author-container">
                            <!-- Author image -->
                                <div class="author-img-container">
                                 <img class="author-img" src="${news.author.img}" alt="">
                                 </div>
                                 <!-- Author name and published date -->
                                <div>
                                    <h5>${news.author?.name ? news.author.name : 'No name found'}</h5>
                                    <p>${news.author?.published_date ? news.author.published_date : 'No Published Date Found'}</p>
                                </div>
                            </div>
                            <!-- class news-views here -->
                            <div class="news-views">
                                <img src="resources/carbon_view.png" alt="">
                                <h5>${news.total_view}</h5>
                            </div>
                            <div class="me-3">
                                <button onclick="loadNews('${news._id}')" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#newsDetailsModal">
                                    <img src="resources/bi_arrow-right-short.png" alt="">
                                  </button>
                            </div>
                        </div>
                    </div>`;
        
        articleContainer.appendChild(newsContainer);
    });

    const categoryName = await numberOfNews(category_id);
    const numberOfNewsElement = document.getElementById('number-of-news');
    numberOfNewsElement.innerHTML = `${i} items found in <span>${categoryName}</span>`;
}

loadCatagories();
