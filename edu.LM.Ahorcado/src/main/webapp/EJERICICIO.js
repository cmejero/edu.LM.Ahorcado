/**
* Juego del ahorcado modo wordle
*/
var letras = []
var palabra = []
var adivinado = []
/*guardar palabra a pedir adivinar*/
function guardar() {
	palabra = prompt ("introduce la palabra a adivinar");
	/*creamos un array lleno de * que sea igual a la longitud de la palabra*/
	adivinado = palabra.split("");
	adivinado.fill("*");
	/*creo array de la palabra si igualase estaría apuntando al mismo lugar y de modificar uno modificaría el otro*/
	palabra=palabra.split("");
	/*reseteo todas las letras dichas antes*/
	letras = []
	/*muestro los cuadros para que el usuario vea la longitud de la palabra*/
	mostrar()
}
/*funcion pedir letra*/
function pedir() {
	let letter;
	do
		letter=prompt("introduce una letra")
	while(Number(letter)||letter.length>1||repe(letter)||letter=="")
	/*se analiza si es un número O si son varias letras O si está repetida O si está vacía*/
	
	/*añado la letra dicha al array de letras para que no se pueda repetir mas*/
	letras.push(letter);
	
	/*ahora compruebo si se encuentra dentro de la palabra*/
	comprobar (letter);	
}
/*comprueba la letra, si es correcta usa mostrar*/
function comprobar(letra){
	/*recorro la palabra*/
	for (i=0; i<palabra.length; i++){
		/*si es igual esa posición a la letra dicha*/
		if (palabra[i]==letra){
			alert ("has acertado");
			adivinado[i]=letra;
			mostrar()
			/*si ya no hay * en adivinado, el juego ha terminado*/
			if (!adivinado.some((valor)=>valor=="*"))
				alert("has ganado, la palabra era: "+palabra.join(""));
		}
	}
	if (!palabra.some((valor)=>valor==letra))
		alert("has fallado")
}
/*funcion mostrar en pantalla*/
function mostrar() {
  let texto=""
  adivinado.forEach(function (i) {
		if (i != "*")
			texto = texto + '<p style="background-color:green;margin-right:5%;padding:0.5rem;border:solid black;font-size:2rem;">' +i+ "</p>"
		else
			texto = texto + '<p style="background-color:red;margin-right:5%;padding:0.5rem;border:solid black;font-size:2rem;color:red;"> x</p>'
	 })
	
	 document.getElementById("palabra").innerHTML=(texto)
}
/*funcion comprobar repetido*/
function repe(letra) {
	return letras.some((valor) => letra == valor)
}

