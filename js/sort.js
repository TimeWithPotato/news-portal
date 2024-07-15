// sort function
const sortNewsByViews = async category_id => {
    const defaultA = document.getElementById('dropdown-toggle');
    defaultA.innerHTML = ``;
    defaultA.innerText = 'Views';

    try {
        const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
        const res = await fetch(url);
        const data = await res.json(); 
        sort(data.data,category_id);
    }
    catch (e) {
        console.log(e);
    }

}

const sort = (newsArray,category_id) => {
    for (let i = 0; i < newsArray.length; i++){
        for (let j = 0; j < newsArray.length; j++){
            if (newsArray[j]?.total_view > newsArray[j + 1]?.total_view) {
                let tempObj = newsArray[j];
                newsArray[j] = newsArray[j + 1];
                newsArray[j + 1] = tempObj;
             }
        }
    }
    
    // newsArray.forEach(news => {
    //     console.log(news);
    // })
    displayCategoryNews(newsArray, category_id);
}