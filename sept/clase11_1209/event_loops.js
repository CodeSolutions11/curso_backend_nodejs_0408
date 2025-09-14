// todo: Event Loop es el corazón de Node.js

// ? Fases del Event Loop
console.log("1. Código síncrono")

// * fase de tiempo -> Timer phase
setTimeout(()=> console.log("4. Timer"), 0)

// * Poll phase
setImmediate(()=> console.log("5. Immediate"))

// * Check phase
process.nextTick(() => console.log("2. Next Tick"))

Promise.resolve().then(()=> console.log("3. Promise"))

console.log("6. Mas código síncrono")