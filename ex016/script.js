function Contar() {
    let inicioContagem = (document.getElementById("inicioContagem").value)
    let fimContagem = (document.getElementById("fimContagem").value)
    let passo = (document.getElementById("passos").value)
    let resultado = document.getElementById("resultado")

    if (inicioContagem.length == 0  || fimContagem.length == 0 || passo.length == 0) {
        resultado.innerHTML = "Impossilvel Contar "
        alert("[ERRO] Faltam Dados.")
    } else{ 
        resultado.innerHTML = "Contando: "
        let inicio = Number(inicioContagem)
        let fim = Number(fimContagem)
        let passos = Number(passo)

        if (passos <= 0) {
            alert("PASSO INVALIDO! Considerando PASSO 1")
            passos = 1
        }
        
        if (inicio < fim){
            //Contagem crescente 
            for (let i = inicio; i <= fim;  i += passos){
            resultado.innerHTML += `${i} \u{1F449} `
            }
        } else {
            //Contagem regresiva
            for (let i = inicio; i >= fim; i -= passos) {
                resultado.innerHTML += `${i} \u{1F449} `
            }
        }
        resultado.innerHTML += '\u{1F3C1}'
    }

}