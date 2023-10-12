const openBtn = document.getElementById('open_modal')
const closeBtn = document.getElementById('close_modal')
const modal = document.getElementById('modal')

openBtn.addEventListener('click', () => {
  modal.style.display = 'block'
  openBtn.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
  openBtn.style.display = 'block'
})