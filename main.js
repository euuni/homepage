document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}

function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function yellow() {
  document.body.style.backgroundColor = 'yellow'
}
function reset() {
  document.body.style.backgroundColor = 'linen'
}
function showbb() {
    document.getElementById('fig').src = 'img/baseball.jpeg'
    document.getElementById('desc').innerHTML =
      '⚾︎야구를 사랑할까말까⚾︎'
  }
  
  function showmv() {
    document.getElementById('fig').src = 'img/movie.jpeg'
    document.getElementById('desc').innerHTML =
      '👀영화 보는거 좋아해요.👀'
  }
  
  function showms() {
    document.getElementById('fig').src = 'img/music.jpg'
    document.getElementById('desc').innerHTML =
      '🎧︎음악듣기 좋아해요.🎧︎ '
  }
function hide() {
    document.getElementById('fig').src = ''
    document.getElementById('desc').innerHTML = ''
  }