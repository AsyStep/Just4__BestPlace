const exitModal = document.getElementById('exit')
const sendModal = document.getElementById('sendModal')

const modal = document.getElementById('modal')

const openModalBtn = document.getElementById('openModal')

function openModal(event) {
    modal.classList.add('open')
    document.body.style.overflow = "hidden"
}

function closeModal(event) {
    modal.classList.remove('open')
    document.body.style.overflow = "auto"
}

openModalBtn.onclick = openModal
sendModal.onclick = closeModal
exitModal.onclick = closeModal