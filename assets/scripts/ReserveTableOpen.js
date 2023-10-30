const button = document.getElementsByClassName('open-window')
const OpenWindow = document.getElementsByClassName('reserve-table-window')
const card = document.getElementsByClassName('reserve-table-window__inner')
const closeWindow = document.getElementsByClassName('close-window')


button[0].addEventListener('click', function(){
  OpenWindow[0].classList.add('active-window')
  card[0].classList.add('open-card')
  closeWindow[0].addEventListener('click', function(){
    OpenWindow[0].classList.remove('active-window')
    card[0].classList.remove('open-card')
  })
})
