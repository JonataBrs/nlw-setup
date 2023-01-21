const form = document.querySelector('#form-habits') /* O que vem depois do const receb o nome de variável */
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')


/* existem vários eventos, todos eles irão disparar uma função. */
button.addEventListener('click',add)
/* após o click será acionado a função 'add' */
form.addEventListener("change", save)



/* função serve para agrupar códigos */
function add() { /* essa é responsável por add os novos dias  */
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5) 
    /* new date é específico para a data de hoje  */
   
    const dayExists = nlwSetup.dayExists (today)

    if (dayExists) {
        alert("Dia já incluso🛑")
        return
    }  
   
    alert('Adicionado com sucesso✅')
    nlwSetup.addDay(today)
}


function save() { /* será responsavel por salvar o progesso */
   localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()
