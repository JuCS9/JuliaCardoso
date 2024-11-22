// Exercício 1: Cálculo de Média

//1.
function somarNotas(nota1, nota2, nota3, nota4) {
    return nota1 + nota2 + nota3 + nota4;
}


function calcularMedia(somaDasNotas, quantidadeDeNotas) {
    const media = somaDasNotas / quantidadeDeNotas;
    return media >= 6 ? "Aprovado" : "Reprovado";
}


describe("Teste de integração para Cálculo de Média", function() {
    it("Deve verificar se a soma de quatro notas está correta", function() {
        const soma = somarNotas(5, 7, 6, 8);
        expect(soma).toBe(26); 
    });

    it("Deve calcular a média corretamente e aprovar o aluno", function() {
        const soma = somarNotas(7, 7, 7, 7); 
        const resultado = calcularMedia(soma, 4); 
        expect(resultado).toBe("Aprovado"); 
    });

    it("Deve calcular a média corretamente e reprovar o aluno", function() {
        const soma = somarNotas(4, 5, 6, 5); 
        const resultado = calcularMedia(soma, 4); 
        expect(resultado).toBe("Reprovado"); 
    });
});


// Exercício 2: Triplo do Número

function multiplicar(a, b) {
    return a * b;
}

function calcularTriplo(valor) {
    return valor * 3;
}


function teste1() {
    const numero1 = 5;
    const numero2 = 3;
    const resultadoMultiplicacao = multiplicar(numero1, numero2);
    const resultadoTriplo = calcularTriplo(resultadoMultiplicacao);
    console.log(`Teste 1: (5 * 3) * 3 = ${resultadoTriplo}`);
}


function teste2() {
    const numero1 = -4;
    const numero2 = -2;
    const resultadoMultiplicacao = multiplicar(numero1, numero2);
    const resultadoTriplo = calcularTriplo(resultadoMultiplicacao);
    console.log(`Teste 2: (-4 * -2) * 3 = ${resultadoTriplo}`); 
}

function teste3() {
    const numero1 = 7;
    const numero2 = -3;
    const resultadoMultiplicacao = multiplicar(numero1, numero2);
    const resultadoTriplo = calcularTriplo(resultadoMultiplicacao);
    console.log(`Teste 3: (7 * -3) * 3 = ${resultadoTriplo}`); 
}


teste1();
teste2();
teste3();

// Funções principais
function calcularDesconto(valorTotal) {
    if (valorTotal <= 100) {
        return 0.05; // 5% de desconto
    } else if (valorTotal <= 500) {
        return 0.10; // 10% de desconto
    } else {
        return 0.15; // 15% de desconto
    }
}

function aplicarDesconto(valorTotal, desconto) {
    return valorTotal - (valorTotal * desconto);
}

// Testes com Jest
describe("Cálculo de Desconto", () => {
    test("Deve aplicar desconto de 5% para compras até R$ 100", () => {
        const valorTotal = 100;
        const desconto = calcularDesconto(valorTotal);
        const valorFinal = aplicarDesconto(valorTotal, desconto);
        expect(valorFinal).toBeCloseTo(95.00);
    });

    test("Deve aplicar desconto de 10% para compras entre R$ 101 e R$ 500", () => {
        const valorTotal = 300;
        const desconto = calcularDesconto(valorTotal);
        const valorFinal = aplicarDesconto(valorTotal, desconto);
        expect(valorFinal).toBeCloseTo(270.00);
    });

    test("Deve aplicar desconto de 15% para compras acima de R$ 500", () => {
        const valorTotal = 600;
        const desconto = calcularDesconto(valorTotal);
        const valorFinal = aplicarDesconto(valorTotal, desconto);
        expect(valorFinal).toBeCloseTo(510.00);
    });
});
