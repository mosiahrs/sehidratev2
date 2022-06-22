function calcular(){
    let bebeu = window.document.getElementById('entrada')
    let res = window.document.getElementById('saida')
    let qtd = Number(bebeu.value)

    res.innerHTML = `<p> Você bebeu <b>${qtd} litros</b> de água, Parabéns está se hidratando direitinho</p><br><p>Gabriel se orgulha de você</p>`

    if(qtd < 3){
        res.innerHTML = `<br><p>Você não está se hidratando direitinho!<br> É preciso pelo menos <strong> 2 lts</strong> de água por dia <br><br>Gabriel não vai ficar orgulhoso de você</p>`
    }
}
