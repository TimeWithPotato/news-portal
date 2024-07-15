// console.log('connected');

const loadNews = async news_id => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
        
        const res = await fetch(url);
        const data = await res.json();
        displayLoadNews(data.data[0]);
    }   
    catch (e) {
        console.log(e);
    }
}

const displayLoadNews = news => {
    // modal header or news header
    const h1 = document.getElementById('newsDetailsModalLabel');
    h1.classList.add('text-danger');
    h1.innerText = `${news.title ? news.title : 'No Title has Found'}`;

    // modal news container
    const modalNewsContainer = document.getElementById('modal-news-container');
    modalNewsContainer.innerHTML = ``;
    const modalNews = document.createElement('article');
    modalNews.classList.add('modal-news-details');
    modalNews.innerHTML = `          
              <img src="${news.thumbnail_url}" alt="">
            <div>
              <p>${news.details}</p>
            </div>`;

    modalNewsContainer.appendChild(modalNews);
}