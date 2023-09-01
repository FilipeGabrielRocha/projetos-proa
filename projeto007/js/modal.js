const botaoModal = document.querySelector('.fechar-modal')

const listaMeusProjetos = document.querySelectorAll('.project')

const divModal = document.querySelector('.modal')

listaMeusProjetos.forEach(item => {
    item.addEventListener('click', () => {
        divModal.classList.add('aberto')
    })
});

botaoModal.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('aberto')
})