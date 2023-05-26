let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('btnLimpar')

let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

// Calcular media
function calcularMdia(n1, n2){
    return (n1 + n2) / 2
}

// Definir a situação final com base na media 

function situacaoFinal(mediaFinal){
    let situacaoFinal = ''

    if(mediaFinal >= 7){
        situacaoFinal = 'Aprovado(a)'
    }else if (mediaFinal <= 3){
        situacaoFinal = 'Reprovado(a)'
    }else{
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal 
}


// Formatar a caixa de situação final 

function formatarSituacao(situacaoFinal){
    switch(situacaoFinal)
{
    case 'Aprovado(a)':
        cxSituacao.classList.remove('reprovado')
        cxSituacao.classList.remove('recuperacao')
        cxSituacao.classList.add('aprovado')
        break
    case 'Reprovado(a)':
        cxSituacao.classList.remove('aprovado')
        cxSituacao.classList.remove('recuperacao')
        cxSituacao.classList.add('reprovado')
        break
    case 'Recuperação':
        cxSituacao.classList.remove('aprovado')
        cxSituacao.classList.remove('reprovado')
        cxSituacao.classList.add('recuperacao')
        break
}}
// Validar e gerar flash message
function validarNumero(numero){
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    if(num1 < 0  || num1 > 10 || num2 < 0 || num2 > 10){
        formulario.reset()
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0 '
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        },2000)
    }
}

// calcular a media apos o click no botão 

btnCalcular.addEventListener('click', function(e){
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = calcularMdia(nota1, nota2)

    if (isNaN(media) || media< 0) {
        cxSituacao.value = ''    
    }else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()

})

// Apos limpar Tirar as Class da CX Situacao

btnLimpar.addEventListener('click', function(){
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
})