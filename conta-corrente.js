class ContaCorrente{

    numero;
    nomeCliente;
    saldo;

    constructor(numero, nome, saldo = 0) {

        this.numero = numero;
        this.nomeCliente = nomeCliente;
        this.saldo = saldo;
    }

    consultarSaldo() {

        console.log("Saldo de "+ this.nome + " - R$" + this.saldo);
    }

    depositar(valorDeposito) {

        this.saldo += valorDesposito;
    }
}