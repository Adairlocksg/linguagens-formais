function gerarSentenca() {
    var regraGeral = document.getElementById("P").value.replaceAll(" ", "");
    var regras = regraGeral.split(",");
    regraGeral = [];
    var regraTerminal = [];


    for (i = 0; i < regras.length; i++) {
        regraGeral.push(regras[i].split("=")[0]);
        regraTerminal[i] = regras[i].split("=")[1].split("|");
    }

    let varInicial = document.getElementById("S").value;
    let varFinal = varInicial;
    let count = 0;
    const element = document.createElement('div');
    let resultado = null;


    while (varFinal.toLowerCase() != varFinal) {

        for (i = 0; i < regraTerminal.length; i++) {
            console.log(regraTerminal[i]);
            if (varFinal.includes(regraGeral[i])) {
                varFinal = varFinal.replace(regraGeral[i], regraTerminal[i][Math.floor(Math.random() * regraTerminal[i].length)]);
                count++;
                if (resultado == null) {
                    resultado = varFinal;
                } else {
                    resultado = resultado + "<br>" + varFinal;
                }
            }
        }
    }

    resultado = resultado + " - Obteve " + count + " derivações!";
    element.innerHTML = resultado;
    document.body.appendChild(element);
}