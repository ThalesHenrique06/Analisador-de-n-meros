let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(num.value >= 1 && num.value <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor invalido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
   
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Adcione valores na lista para finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos] 
            if(maior < valores[pos]){
                maior = valores[pos]
            } 
            if(menor > valores[pos]){
                menor = valores[pos]
            }
        }    
        media = soma / valores.length

        res.innerHTML += ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados<p>`
        res.innerHTML += `<p>O maior número informado é ${maior}<p>`
        res.innerHTML += `<p>O menor número informado é ${menor}<p>`
        res.innerHTML += `<p>Somando todos os valoresm, temos${soma}<p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}<p>`
    }
}