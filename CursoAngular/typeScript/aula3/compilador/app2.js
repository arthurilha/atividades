"use strict";
class carro {
    constructor(modelo, numeroPortas, velocidade) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroPortas = numeroPortas;
        this.velocidade = velocidade;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    para() {
        this.velocidade = 0;
    }
    valocidadeAtual() {
        return this.velocidade;
    }
}
class concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = '';
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
class pessoa {
    constructor(nome, carroPreferido) {
        this.nome = '';
        this.carroPreferido = '';
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    compraCarro() {
        this.carro;
    }
    dizerCarroPossui() {
        return this.carro;
    }
}
let dados = new pessoa('arthur', 'ferrari');
