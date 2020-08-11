//procurar o botão
document.querySelector('#add-time')
//quando clicar no botão dispara o evento de click e chama a função
.addEventListener('click',cloneField)

//Executar uma ação
function cloneField(){
    //duplicar os campos. Que campos?
    var newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function (field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })
    //Colocar na página:Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}