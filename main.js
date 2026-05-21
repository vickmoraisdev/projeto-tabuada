function result(){
    let txtnum = document.getElementById('txtnum')
    let num = Number(txtnum.value)
    let res = document.getElementById('res')

    res.innerHTML = ''
    if(txtnum.value === ''){
        window.alert('[ERRO] Informe um valor válido.')
        res.innerHTML = 'Digite um número acima'
    } else{
        for(let c = 1; c <= 10; c++){
            res.innerHTML += `${num} x ${c} = ${num*c} <br>`
        }
    }
}