let container = document.querySelector(".containerMovieItems");


let linkData = "http://api.tvmaze.com/search/shows?q=porn";

let creatTemplate = (data) => {

    let genres = [];

    if (data.show.genres.length) {
       genres = data.show.genres.reduce((acc , item) => {
            return acc + "," + item
        })
    }else {

        genres = "unwere"
    }

    return `
        <div class="item">
            <img src="${data.show.image ? data.show.image.medium : ''} " alt="">
            <div class="description">
                <div><span>Score:</span>${data.score}</div>
                <div><span>Genres:</span>${genres}</div>
                <div><span>Name:</span>${data.show.name}</div>
                <div><span>Type:</span>${data.show.type}</div>
            </div>
    `
}

fetch(linkData)
.then((resolve) => resolve.json())
.then(res =>  {
    if (res) {
        res.forEach(element => {
           
            container.innerHTML += creatTemplate(element);
            
        });
    }
} );
