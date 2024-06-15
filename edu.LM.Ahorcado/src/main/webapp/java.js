
var pedirPalabra = []
var palabraAdivinar = []
var letra = []
var terminado = false;
var contador = 5;
var fechaInicio;
var fechaIntroducirLetra
let diferenciaLetras
var fechaFin = "";
var tiempoPartida
var arrayIntentos = []
let aux
let partidaFinalizada = false

console.log(fechaFin)

function pedir() {

	contador = 5;
	letra = []

	pedirPalabra = prompt("Introduzca la palabra secreta").toLowerCase();

	pedirPalabra = pedirPalabra.split("")
	console.log(pedirPalabra)




	for (let i = 0; i < pedirPalabra.length; i++) {

		palabraAdivinar.push("*")

	}

	arrayIntentos.push([palabraAdivinar.join(""), contador, diferenciaLetras])
	mostrarTabla()

	for (let i in arrayIntentos)
		console.log(arrayIntentos[i])
}



let pedirLetraUsu
function pedirLetra() {

	fechaInicio = new Date();



	if (contador > 0) {

		do {
			pedirLetraUsu = prompt("Introduzca una letra").toLowerCase();




		} while (pedirLetraUsu.length > 1 || letra.some((i) => pedirLetraUsu == i));

		letra.push(pedirLetraUsu);



		comprobar(pedirLetraUsu)
	}
	else {

		fechaFin = new Date();
		partidaFinalizada = true
		alert("Has perdido")
		


	}

	calculoFecha()

}




function comprobar(pedirLetraUsu) {

	let letraEncotrada = false;


	for (let i = 0; i < pedirPalabra.length; i++) {

		if (pedirPalabra[i] == pedirLetraUsu) {


			palabraAdivinar[i] = pedirLetraUsu
			letraEncotrada = true;




		}

	}


	if (letraEncotrada != true) {

		contador--
		fechaIntroducirLetra = new Date()
	}

	if (arrayIntentos.length > 4) {
		arrayIntentos.splice(0, 1)
	}
	arrayIntentos.push([palabraAdivinar.slice().join(""), contador, diferenciaLetras]);




	if (!palabraAdivinar.some((i) => i == "*")) {

		fechaFin = new Date()
		partidaFinalizada = true
		

		document.getElementById("mostrar2").innerHTML = ("Has ganado, la palabra era: " + pedirPalabra.join(""))

		if (contador >= 4) {

			alert("Magnifico")
		}
		else if (contador >= 2) {

			alert("Bien")
		}
		else if (contador >= 1) {

			alert("Por poco")
		}



	}
	else if (!pedirPalabra.some((i) => i == pedirLetraUsu)) {

		alert("Has fallado")


	}



	fechaIntroducirLetra = new Date()



	mostrarTabla()
}


function calculoFecha() {

	let calculo1 = fechaIntroducirLetra.getTime() - fechaInicio.getTime()

	diferenciaLetras = calculo1 / 1000

	let calculo2 = fechaFin.getTime() - fechaInicio.getTime()
	let minutos = Math.floor(calculo2 / (1000 * 60));
	
	let segundos = Math.floor((calculo2 / 1000) % 60);
	tiempoPartida = "minutos: " + Math.floor(minutos) + " segundos: " + Math.floor(segundos)
}



function mostrarTabla() {




	let escritura = document.getElementById("mostrar");

	escritura.innerHTML = "";


	for (let i in arrayIntentos) {
		escritura.innerHTML += ("<tr><td>" + arrayIntentos[i][0] + "</td><td>" + arrayIntentos[i][1] + "</td><td>" + arrayIntentos[i][2])

	}

}

function mostrarTiempo() {


	if (partidaFinalizada != false)
		document.getElementById("tiempo").innerHTML = (tiempoPartida)









}



