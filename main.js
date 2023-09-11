const toggle = document.querySelector('.toggle-btn');
toggle.addEventListener('click', (e) => {
    document.querySelector('.nav').classList.toggle('nav-invisible');
});