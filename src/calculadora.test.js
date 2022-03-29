import calculadora from "./calculadora.js";

describe("Calculadora de Cadenas", () => {
    it("deberia tomar en cuenta cadena vacia retornando 0", () => {
      expect(calculadora("")).toEqual(0);
    });
  });
