let menuVisible = false
//função pra ocultar o menu
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
