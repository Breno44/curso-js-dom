const criarTarefa = (evento) => { 

    evento.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const tarefa = document.querySelector('[data-task]') 
    const conteudo = `<p class="content">${valor}<p>`
    tarefa.innerHTML = conteudo
    input.value = "";
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)



