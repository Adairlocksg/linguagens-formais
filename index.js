function gerarSentenca() {
    const regraProducao = document.getElementById("Regra").value.replaceAll(" ", "");
    const regras = regraProducao.split(",");
    const regraGeral = [];
    const regraTerminal = [];

    for (i = 0; i < regras.length; i++) {
        regraGeral.push(regras[i].split("=")[0]);
        regraTerminal[i] = regras[i].split("=")[1].split("|");
    }

    let varInicial = document.getElementById("Inicial").value;
    let varFinal = varInicial;
    let count = 0;
    let resultado = '';
    const element = document.createElement('div');

    while (varFinal.toLowerCase() != varFinal) {
        for (i = 0; i < regraTerminal.length; i++) {
            if (varFinal.includes(regraGeral[i])) {
                varFinal = varFinal.replace(regraGeral[i], regraTerminal[i][Math.floor(Math.random() * regraTerminal[i].length)]);
                count++;
              
                resultado = resultado + "<br>" + varFinal;
            }
        }
    }

    resultado = resultado + " - Obteve " + count + " derivações!";
    element.innerHTML = resultado;
    document.body.appendChild(element);
}