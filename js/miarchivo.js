function operacion(a, b) {
    return a + b;
}

function main() {
    for (let i = 0; i < 10; i++) {
        let a = Math.floor(Math.random() * 10);
        let b = Math.floor(Math.random() * 10);
        let resultado = operacion(a, b);
        console.log(`Operación: ${a} + ${b} = ${resultado}`);
    }
}

main();