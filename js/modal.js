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

    // modal footer or author details

    const modalFooter = document.getElementById('modal-footer');
    modalFooter.innerHTML = ``;
    modalFooter.innerHTML = `          
    <section class="modal-footer-container">
        <div class="modal-author-details">
              <!-- author details and published date -->
              <div>
                <img src="${news.author?.img}" alt="">
              </div>
              <div>
                <h5>${news.author?.name ? news.author.name : 'No Name has Found'}</h5>
                <p>${news.author?.published_date ? news.author.published_date : 'No Published Date has Found'}</p>
              </div>
        </div>
            <!-- total view -->
            <div class="total-view">
              <h5 class="text-danger">Total View</h5>
              <p>${news.total_view ? news.total_view : 'No Views has Found'}</p>
            </div>
            <!-- rating -->
            <div class="rating">
              <h5><span class="text-danger">Rating</span></h5>
              <h5><span>${news.rating?.badge ? news.rating.badge : 'No Rating has Found'}</span></h5>
              <h5><span>${news.rating?.number ? news.rating.number : 'No Rating Number has Found'}</span></h5>
            </div>
    </section>
           <div id="modal-close-button">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
           </div>`;
}