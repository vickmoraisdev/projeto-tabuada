function result(){
    let txtnum = document.getElementById('txtnum')
    let num = Number(txtnum.value)
    let res = document.getElementById('res')
    let tab = document.getElementById('seltab')

    tab.innerHTML = ''
    if(txtnum.value === ''){
        window.alert('[ERRO] Informe um valor válido.')
        tab.innerHTML = '<option>Digite um número acima</option>'
    } else{
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
}