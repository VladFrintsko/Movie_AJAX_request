let btn = document.querySelector("#ajax_btn");
let res = document.querySelector("#result");
let film = document.querySelector("#film");

// if you want testing this programm, please write me (telegram: FrintskoV)
// or open this link ( http://www.omdbapi.com ) and take your own key

secretKey = (someKey);
api = "http://www.omdbapi.com/?i=tt3896198&apikey=" + secretKey;


function getFilm() {
  res.innerHTML =
    '<div class="list-wrapper"><div>Title</div><div>Year</div><div>Poster</div></div>';
  let filmTitle = film.value;
  let url = api + "&s=" + filmTitle;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    console.log(xhr.responseText);
    console.log(xhr.status === 200);
    if (xhr.readyState === 4 && xhr.status === 200) {
      let parseObj = JSON.parse(xhr.responseText);
      let filmList = parseObj.Search;
      filmList.forEach((film) => {
          res.innerHTML += `<div class='list-wrapper'><div>${film.Title}</div><div>${film.Year}</div><div><img src='${film.Poster}'/></div></div>`; 
      });
    }
  };
}
film.addEventListener('keyup', event => {
  if (event.keyCode === 13){
    getFilm();
  }
});
btn.addEventListener("click", getFilm);
