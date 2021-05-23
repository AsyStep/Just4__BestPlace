const filterBtns = document.querySelectorAll(".filters-item.window .name");
const filterWindow = document.querySelectorAll(".filters-item .filter__window");
const confirmBtn = document.querySelectorAll('.filters-item.window .btn button')
let openWindow = null
filterBtns.forEach((el, i) => {
    el.onclick = (e) => {
        const window = filterWindow[i]
        if (openWindow != window && openWindow != null) {
            openWindow.classList.remove('open')

        }
        if (openWindow != window) {
            openWindow = window
            openWindow.classList.add("open")
        }
    }
})

confirmBtn.forEach(el => {
    el.onclick = (e) => {
        if (openWindow != null) {
            openWindow.classList.remove('open')
            openWindow = null
        }
    }

})