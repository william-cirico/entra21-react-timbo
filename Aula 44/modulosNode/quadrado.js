module.exports = class Quadrado {
    constructor(largura) {
        this.largura = largura;
    }

    area() {
        return this.largura ** 2;
    }
}