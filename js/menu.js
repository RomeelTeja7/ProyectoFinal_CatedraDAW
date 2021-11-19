

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})
var btn_menu = document.getElementById("btn_menu");
btn_menu.onclick = showmenu;

function showmenu() {
    document.getElementById("otroModo").classList.toggle("show");
  }