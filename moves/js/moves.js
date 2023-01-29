


let Api;

async function getApi(){
let res= await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1%27`)
let finalRes = await res.json()
Api = finalRes.results
displayMovies()
}
getApi()



function displayMovies(){
let container= ``
for( let i=0 ; i<Api.length; i++){
    container+= `
<div class="col-md-3">
        <div class="movie position-relative shadow-lg rounded">
            <div class="rate position-absolute end-0 top-0">
            <span>${Api[i].vote_average}</span>
            </div>
<img class=" card-img-top w-100" src="https://image.tmdb.org/t/p/w500/${Api[i].poster_path}" alt="">
        </div>
    </div>`
    }
    document.getElementById('showData').innerHTML=container
    
 }

// // -----------------------
 $(document).ready(()=> $('body').css('overflow' , 'auto'))



