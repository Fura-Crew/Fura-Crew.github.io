const MenuBlock = document.getElementById('mobile-menu-block')
const MenuButton = document.getElementById('mobile-menu__button')
const MenuList = document.getElementById('mobile-menu-nav-block')

MenuButton.addEventListener('click', function(){
  MenuButton.classList.toggle('mobile-menu__button__close')
  MenuList.classList.toggle('open-list')
  console.log("click!")
})
