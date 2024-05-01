const accessKey = "1vgvSl301AniC0qbhX1gT6ymHX0BQQwgoHzFp11NObE"


const FormEL = document.querySelector('form')
const inputEL = document.getElementById("Search-input")
const searchResults = document.querySelector('.search-results')
const showMore = document.getElementById("show-more-button")


let inputData  =   "";
let page = 1;

async function searchImages() {
  inputData = inputEL.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`


const response = await fetch(url);
const data = await response.json();
const results = data.results;
console.log(results)

if(page === 1){
  searchResults.innerHTML = "";
}

results.forEach((result) => {
 const imageWrapper = document.createElement('div')
 imageWrapper.classList.add('search-result');
 imageWrapper.innerHTML = `
 <img src="${result.urls.small}" alt="${result.alt_description}">

<a href="${result.links.html}" target="_blank">${result.alt_description}</a>
 `
 searchResults.appendChild(imageWrapper);
});

page++
if(page > 1 ){
  showMore.style.display = 'block'
}

}

FormEL.addEventListener("submit", (event) => {
event.preventDefault(); 
page = 1;
searchImages();
})


showMore.addEventListener("click", () => {
searchImages();


})
