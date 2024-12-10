function tabuada(){
    let numero = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(numero.value)
        tab.innerHTML = ''
        for( let i = 0 ; i <= 10 ; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${i*n}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}