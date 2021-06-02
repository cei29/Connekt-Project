/* spinner-loader */
const loader = document.querySelector('.spinner-border')

window.onload = () => {
    loader.style.display = 'none'
}

/* edit-user */
const box = document.querySelectorAll('.edit-user .form-box, .edit-user input')

box.forEach(element => {
    element.onclick = () => {
        element.style.backgroundColor = '#fff';
        element.style.cursor = 'text'
    }
});