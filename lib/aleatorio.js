class Aleatorio {

    gerarNumeroAleatorio(inicio, fim) {
        this.resultado = Number.MIN_SAFE_INTEGER;

        if (inicio < 0 || fim < 0) {
            this.resultado = -1;
        } else {
            if (inicio >= fim) {
                this.resultado = -1;
            }
            else {
                this.resultado = Math.floor(Math.random() * (fim - inicio) + inicio);
            }
        }
    }
}

module.exports = Aleatorio;