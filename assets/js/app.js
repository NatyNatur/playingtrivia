onst btnStart = document.getElementById('btnStart');
const urlCateg = `https://opentdb.com/api_category.php`;
let i;
let correctAnswer;
let correctAnswersCounter;

btnStart.addEventListener('click', function(event) {
  getAnyTrivia();
})

function getTrivia() {
  fetch(urlCateg)
    .then(function(response) {
    // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let html = [];

      let generalK = `<div class="col s3">
        <a class="waves-effect waves-light btn pink btnCat" id="generalKn" onclick=getGeneral();>${data.trivia_categories[0].name}</a>
        </div>`;
      let music = `<div class="col s3">
        <a class="waves-effect waves-light btn pink btnCat" onclick=getMusic();>${data.trivia_categories[3].name}</a>
      </div>`;
      let videogames =`<div class="col s3">
        <a class="waves-effect waves-light btn pink btnCat" onclick=getVideogames();>${data.trivia_categories[5].name}</a>
      </div>`;
      let anime =`<div class="col s3">
        <a class="waves-effect waves-light btn pink btnCat" onclick=getAnime();>${data.trivia_categories[6].name}</a>
      </div>`;

      html.push(generalK + music + videogames + anime);

    document.getElementById('showingCategories').innerHTML = html;
    })
    .catch(function(error) {
      console.log(error);
    });
    btnStart.remove();
}


function getAnyTrivia() {
  let html = [];
  let trufal = `<div class="col s3 offset-s3">
        <a class="waves-effect waves-light btn pink btnCat" onclick=trueOrFalse();>True or False</a>
        </div>`;
  let multiChoice = `<div class="col s6">
        <a class="waves-effect waves-light btn pink btnCat" onclick=multipleChoice();>Multiple choice</a>
        </div>`;
  html.push(trufal + multiChoice);
  document.getElementById('showingCategories').innerHTML = html;
  btnStart.remove();
}

