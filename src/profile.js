const btn_app_place = document.querySelector('.btn_app_place')
const btn_save = document.querySelector('.btn_save')
const btn_edit = document.querySelector('.btn_edit')

btn_edit.onclick = e => {
    btn_app_place.classList.add("close")
    btn_edit.classList.add("close")
    btn_save.classList.remove("close")
}
btn_save.onclick = e => {
    btn_app_place.classList.remove("close")
    btn_edit.classList.remove("close")
    btn_save.classList.add("close")
}