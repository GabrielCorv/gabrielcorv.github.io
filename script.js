let menuVisible = false

function showHiddenMenu() {
  if (menuVisible) {
    document.getElementById('nav').classList = ''
    menuVisible = false
  } else {
    document.getElementById('nav').classList = 'responsive'
    menuVisible = true
  }
}

function select() {
  document.getElementById('nav').classList = ''
  menuVisible = false
}

function select() {
  var skills = document.getElementById('skills')
  var distance_bar = window.innerHeight - skills.getBoundingClientRect().top
  if (distance_bar >= 400) {
    let skill = document.getElementsByClassName('progress')
    skill[0].classList.add('javascript')
    skill[1].classList.add('htmlcss')
    skill[2].classList.add('photoshop')
    skill[3].classList.add('python')
    skill[4].classList.add('sql')
    skill[5].classList.add('comunication')
    skill[6].classList.add('teamplay')
    skill[7].classList.add('criative')
    skill[8].classList.add('dedication')
    skill[9].classList.add('management')
  }
}

window.onscroll = function () {
  select()
}
