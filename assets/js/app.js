const btnStart = document.getElementById('btnStart');
const urlCateg = `https://opentdb.com/api_category.php`;
let i;
let correctAnswer;
let correctAnswersCounter;

btnStart.addEventListener('click', function(event) {
  getAnyTrivia();
});

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
      let videogames = `<div class="col s3">
        <a class="waves-effect waves-light btn pink btnCat" onclick=getVideogames();>${data.trivia_categories[5].name}</a>
      </div>`;
      let anime = `<div class="col s3">
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

function trueOrFalse() {
  fetch(`https://opentdb.com/api.php?amount=10&type=boolean`).
    then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let results = data.results;
      let i = 0;
      let question = results[i].question;
      let category = results[i].category;
      let difficulty = results[i].difficulty;
      correctAnswer = results[i].correct_answer;
      let wrongAnswer = results[i].incorrect_answers[i];
      correctAnswersCounter = 0;

      let questionsCont = `<div class="col s12 m8 offset-m2 center-align">
        <div class="card grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              <span class="pink-text text-accent-1">${category}</span> |
              <span class="teal-text text-lighten-1">${difficulty} </span> |
               Question number ${i + 1}</span>
            <p class="questions">${question}</p>
          </div>
          <div class="card-action">
            <a class="waves-effect waves-light btn pink" onclick="checkingAnswerTF();" id="True">true</a>
            <a class="waves-effect waves-light btn pink" onclick="checkingAnswerTF();" id="False">false</a>
          </div>
        </div>
      </div>`;
      document.getElementById('showingCategories').innerHTML = questionsCont;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function checkingAnswerTF() {
  console.log('Probando verdadero falso');
  /*
  let btnTrue = document.getElementById('True');
  let btnFalse = document.getElementById('False');
  let trueAttribute = btnTrue.getAttribute('id');
  // console.log(trueAttribute);
  let falseAttribute = btnFalse.getAttribute('id');
  // console.log(falseAttribute);

if (trueAttribute === correctAnswer && falseAttribute !== correctAnswer) {
  correctAnswersCounter++;
  i++
} if (falseAttribute === correctAnswer && trueAttribute !== correctAnswer) {
  correctAnswersCounter ++;
  i++
  }
  document.getElementById('pointsCounter').innerHTML = correctAnswersCounter;
  */
}

function multipleChoice() {
  fetch(`https://opentdb.com/api.php?amount=10&type=multiple`).
    then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let results = data.results;
      let i = 0;
      let question = results[i].question;
      let category = results[i].category;
      let difficulty = results[i].difficulty;
      let fourAnswers = [];
      correctAnswer = results[i].correct_answer;
      let wrongAnswers = results[i].incorrect_answers;
      // llevo alternativas incorrectas a un nuevo array
      fourAnswers = wrongAnswers;
      // agrego la alternativa correcta
      fourAnswers.push(correctAnswer);
      // desordeno las alternativas
      fourAnswers.sort();
      console.log(fourAnswers);
      correctAnswersCounter = 0;

      let questionsCont = `<div class="col s12 m8 offset-m2 center-align">
        <div class="card grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              <span class="pink-text text-accent-1">${category}</span> |
              <span class="teal-text text-lighten-1">${difficulty}</span> |
              Question number ${i + 1}
            </span>
            <p class="questions">${question}</p>
          </div>
          <div class="card-action">
            <a class="waves-effect waves-light btn pink btnMultiAnswers" onclick="checkingAnswerOfMulti();">${fourAnswers[0]}</a>
            <a class="waves-effect waves-light btn pink btnMultiAnswers" onclick="checkingAnswerOfMulti();">${fourAnswers[2]}</a>
            <a class="waves-effect waves-light btn pink btnMultiAnswers" onclick="checkingAnswerOfMulti();">${fourAnswers[1]}</a>
            <a class="waves-effect waves-light btn pink btnMultiAnswers" onclick="checkingAnswerOfMulti();">${fourAnswers[3]}</a>
          </div>
        </div>
      </div>`;
      document.getElementById('showingCategories').innerHTML = questionsCont;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function checkingAnswerOfMulti() {
  console.log('Holiwi');
}

/*
function getMusic() {
}


function getVideogames() {
}

function getAnime() {
} */
