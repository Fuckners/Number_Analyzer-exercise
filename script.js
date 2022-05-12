function pressionar(event) {
 
	var tecla = event.keyCode
    if (tecla == 13) {
        adicionar()
    }
}

let valores = []
let divres = document.createElement('div')
    divres.setAttribute('id', 'res')
let principal = document.querySelector('section#princ')


function adicionar() {
    let input_num = document.querySelector('input#numero')
    let num = Number(input_num.value)
    if (valores.indexOf(num) != -1) {
        window.alert('Este valor já foi digitado')
    } else if (num < 1 || num > 100) {
        window.alert('Valor inválido, digite um valor entre 1 e 100')
    }else{
        valores.push(num)
        let lista = document.querySelector('select#lista')
        let item = document.createElement('option')
        item.text = `Valor ${Number(num)} adicionado.`
        item.value = `Opt${valores.indexOf(Number(num))}`
        lista.appendChild(item)
    }
    divres.innerHTML = ''
    input_num.value = ''
    input_num.focus()
}


function finalizar() {
    let maior = 0
    let menor = 100
    let soma = 0
    for (let c = 0; c < valores.length; c++) {
        soma += valores[c]
        if (valores[c] > maior) {
            maior = valores[c]
        }
        if (valores[c] < menor) {
            menor = valores[c]
        }
    }
    let media = (soma / valores.length)
    divres.innerHTML = ''
    divres.innerHTML += `<p>Ao todo, ${valores.length} números foram cadastrados`
    divres.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    divres.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    divres.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    divres.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    principal.append(divres)
}