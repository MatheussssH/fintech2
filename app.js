import {ContaCorrente} from 'conta-corrente.js';

const conta1 = new ContaCorrente(1, "Luiz", 1200);
conta1.consultaSaldo();

conta1.depositar(5000);
conta1.consultaSaldo();

const conta2 = new ContaCorrente(2, "Ana", 200);
conta2.consultaSaldo();
conta2.depositar(7000);

conta2.consultaSaldo;