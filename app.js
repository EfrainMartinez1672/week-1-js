const nombreUsuario = prompt("¿Cuál es tu nombre?");
let edadUsuario = parseInt(prompt("¿Cuántos años tienes?"));

// Validación de número
while (isNaN(edadUsuario)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
    edadUsuario = parseInt(prompt("Por favor, ingresa tu edad nuevamente (debe ser un número):"));
}

// Mensaje según la edad
if (edadUsuario < 18) {
    alert(`Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
} else {
    alert(`Hola ${nombreUsuario}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
}
