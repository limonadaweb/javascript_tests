import { getNumber, getResult, getString, getLength } from '../src/basic';

describe("Variables en JS", () => {
    it("Completa todas las constantes que faltan", () => {

        const a = 10;
        const b = 1.34;
        const c = true;
        const d = "Buenos días";
        const e = "Pepe";
        const f = `Buenos días, ${e}`;  // Interpolación de cadenas

        expect(a).toBe(10);
        expect(b).toBe(1.34);
        expect(c).toBeTruthy();
        expect(d).toBe("Buenos días");
        expect(e).toBe("Pepe");
        expect(f).toBe("Buenos días, Pepe");
    });
});    
    it("Completa todas las variables que faltan para que las operaciones resulten correctamente", () => {

        let a = 11;
        let b = 0.34;
        let c = 10;
        let d = 100;
        let e = 340;
        let f = 10;
        let g = 3;
        let x = 4;
        let y = 5;

        expect(a + b).toBe(11.34);
        expect(a * c).toBe(110);
        expect(d - e).toBe(-340);
        expect(f ** g).toBe(1000);  // Exponenciación (10^3)
        expect(x % 2).toBe(0);      // Residuo de la división de x entre 2
        expect(y % 2).toBe(1);      // Residuo de la división de y entre 2
    });

    it("Completa todas las variables que faltan para que se cumplan las condiciones", () => {

        let a = 10;
        let b = 100;
        let c;
        let d = "Hola";
        let n = "Pepe";

        expect(a > 9).toBeTruthy();
        expect(a < 11).toBeTruthy();
        expect(b === 100).toBeTruthy();
        expect(c === undefined).toBeTruthy(); // c no tiene valor asignado
        expect(d !== "Hello").toBeTruthy();
        expect(n.startsWith('A')).toBeFalsy();  // "Pepe" no empieza con 'A'
    });

describe("condicionales en javascript", () => {
    it("completa el valor del resultado esperado (expected)", () => {
    
        let name = "Pepe";
        let result = "KO";
    
        if (name.length === 4) {  // "Pepe" tiene 4 letras
            result = "OK"
        }
    
        expect(result).toBe("OK");  // La variable `result` ahora es "OK"
        });
    
    it("comparando cadenas (strings)", () => {
    
        let a = 'a';
        let b = 'b';
        let result;
    
        if (a < b) {  // 'a' es menor que 'b' en términos de comparación de cadenas
            result = 'pikachu';
        } else {
            result = 'charmander';
            }
    
            expect(result).toBe("pikachu");
        });
    
    it("Interpolación de cadenas (strings) (1)", () => {
        let n = "Piña";
        let m = "Pepperoni";
        let q = 14;
        let result;
    
        if (q % 5 === 0) {  // 14 no es divisible por 5
            result = "Pizza con " + n;
        } else {
            result = "Pizza con " + m;
            }
    
            expect(result).toBe("Pizza con Pepperoni");
        });
    
    it("Interpolación de cadenas (strings) (2)", () => {
        let n = "Piña";
        let m = "Pepperoni";
        let q = 14;
        let result;
    
        if (q % 7 === 0) {  // 14 es divisible por 7
            result = `Pizza con ${n}`;
        } else {
            result = `Pizza con ${m}`;
            }
    
            expect(result).toBe("Pizza con Piña");
        });
    });


        // substituye ??? por el valor que tiene la variable "result"        
            expect(result).toBe("???");
    
    it("Interpolación de cadenas (strings) (2)", () => {
        let n = "Piña";
        let m = "Pepperoni";
        let q = 14;
        let result;

        // https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math#operadores_aritm%C3%A9ticos
        if (q % 7 === 0) {
            result = `Pizza con ${n}`;
        } else {
            result = `Pizza con ${m}`;
        };

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result).toBe("???");
    });


describe("Funciones en JS", () => {
    it('¿Cuál es el resultado de invocar la función getNumber?', () => {
        let result = getNumber();
        // substituye "???" por el valor que tiene la variable "result"
        expect(result).toBe("???");
    });
        let result = getNumber();
        expect(result).toBe(42);  // Supón que `getNumber` retorna 42
    });

    //it("¿Cuál es el resultado de invocar la función getResult?", () => {
      //  let result = getResult(10, 30, 2);
        // substituye "???" por el valor que tiene la variable "result"
        //it("Interpolación de cadenas (strings) (2)", () => {
        //let n = "Piña";        
        //expect(result).toBe("???");
    //});
    it("¿Cuál es el resultado de invocar la función getResult?", () => {
        let result = getResult(10, 30, 2);
        expect(result).toBe(50);  // Supón que la operación es (10 + 30) / 2
    });

    it("¿Cuál es el resultado de invocar la función getString?", () => {
        let result = getString("Cerebro", "Pinky");
        // substituye "???" por el valor que tiene la variable "result"        
        expect(result).toBe("Cerebro y Pinky");  // Concatenación
    });

    //it("¿Cuál es el resultado de invocar la función getLength?", () => {
        // substituye "???" por el resultado en cada caso
        //expect(getLength("khaleesi mother of dragons breaker of chains")).toBe("???");
        //expect(getLength("sarah")).toBe("???");
        //expect(getLength("bob")).toBe("???");
        //expect(getLength("robertson")).toBe("???");
    //});

    it("¿Cuál es el resultado de invocar la función getLength?", () => {
        expect(getLength("khaleesi mother of dragons breaker of chains")).toBe(42);  // Longitud de la cadena
        expect(getLength("sarah")).toBe(5);    // Longitud de la cadena
        expect(getLength("bob")).toBe(3);      // Longitud de la cadena
        expect(getLength("robertson")).toBe(9); // Longitud de la cadena
    });   