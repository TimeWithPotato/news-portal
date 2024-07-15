// console.log('connected');


// for news
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


// for blog

const blog = () => {
    // console.log('connected');

    const modalContainer = document.getElementById('modal-news-container');
    modalContainer.innerHTML =
        `
        <h3 class="text-primary">1.Difference Between var,let,const</h3>
        <p><span class="text-danger d-block">var:</span> var is used to declare variable. It is not block-scoped.This mean if we declare a variable with keyword var it will be hoisting and will be initialized with undefined.We can also re-declare a variable of type var.
        <span class="text-danger d-block">let:</span> variable declare with let is block-scoped or function-scoped. variable declare with let will be hoisted to the top without initialization and if we want to access it before initialize then it will give Reference Error. let allow re-initialized a variable.
        <span class="text-danger d-block">const:
        </span>
        variable declare with const is block or function scoped and will be hoisted to the top without initialization. If we want to access a variable of type const before initialization, it will give syntax error.
        </p>

        <h3 class="text-primary">2.Difference between arrow func and regular fun </h3>
        <p><span class="text-danger d-block">Regular Func:
        </span>Regular function has explicit return. Regular function can use the arguments object. Regular function has their own 'this' keyword.Regular function can be used as constructor.
        <span class="text-danger d-block">Arrow Func:</span>Arrow function has both explicit and implicit return. Arrow function cannot use the arguments object.Arrow function inherit the 'this' from it's environment lexical context.Arrow function cannot use as constructor.
        </p>

        <h3 class="text-primary">3.Difference between map,forEach,filter and find</h3>
        <p>
        <span class="text-danger d-block">map:
        </span>
        map iterates on an array and return a resuled array. Map use a callback function on each element of the array.
        <span class="text-danger d-block">forEach:
        </span>
        forEach is similar with map but forEach does not return any array.<span class="text-danger d-block">filter:</span>It returns an array after filtering an array on a certain condition.
        <span class="text-danger d-block">find:
        </span>
        It returns the first element that matches the required condition on an array.</p>

        <h3 class="text-primary">4.Why use template literals or sting</h3>
        <p>
        <span class="text-danger d-block">Template Literals:
        </span>
        Easy to maintain. It provides sting interpolation. It also provides multiline string that does not require escape sequences. It also provides tag embedding.
        </p>
        `;
}