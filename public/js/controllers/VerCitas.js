let star = document.querySelectorAll('.star')
for (let i = 0; i <= 4; i++) {
    star[i].starval = i + 1
    star[i].addEventListener('click', function(e) {
        for (let y = 0; y <= i; y++) {
            star[y].classList.add('color')
        }
    })
}