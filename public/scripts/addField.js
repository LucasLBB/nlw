//Procurar o botão
//Quando clicar no botão 
document.querySelector("#add-time").addEventListener('click', cloneField);

//Executar uma ação
function cloneField() {
    //Duplicar os campos.Que Campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true); //cloneNode duplica o campo desse querySelector

    //Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input');

    //Para cada campo, limpar
    fields.forEach(function(field) {
        //field do momento e limpa ele
        field.value = "";
    })

    //Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
