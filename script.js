let btn=document.querySelector('#btn');
btn.addEventListener('click', function () {
    let click=document.createElement('h3')
    let letters=document.createTextNode('The Tribe Must Consolidate');
    click.appendChild(letters);
    click.classList.add('animate__animated', 'animate__rubberBand');
    document.querySelector('#pop').appendChild(click)
}, { once: true })