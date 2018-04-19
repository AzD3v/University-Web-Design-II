// Resolução da ficha de trabalho nº 2

// Exercício 1)

// Alínea a)
let a = 123;
let b = 321;

if(a > b) {

		console.log(a);

} else {

		console.log(b);

}

// Alínea b)
let x = 20;
let y = -5;
let z = 15;
let resultado = 0;

if(x > y && y > z) {

		if(y > z) {

				resultado = x  + " " + y + " " + z;

		} else {

				resultado = x + " " + z + " " + y;

		}

} else if(y > x && y > z) {

		if(x > z) {

				resultado = y + " " + x +  " " + z;

		} else {

				resultado = y + " " z + " " + x;

		}

} else if(z > x && z > y) {

		if(x > y) {

				resultado = z + " " + x + " " + y;

		} else {

				resultado = z + " " + y + " " + z;

		}

}

// Alínea c)
let a = -7;
let b = -4;
let c = -6;
let d = 0;
let e = -13;

if (a > b && a > c && a > d && a > e) {

		console.log(a);

} else if(b > a && b > c && b > d && b > e) {

		console.log(b);

} else if(c > a && c > b && c > d && c > e) {

		console.log(c);

} else if(d > a && d > b && d > c && d > e) {

		console.log(d);

} else {

		console.log(e);

}

// Alínea d)
let resultado = "";

for(let i = 0; i <= 15; i++) {

		if(i % 2 == 0) {

				console.log(i + " é par");

		} else {

				console.log(i + " é ímpar");

		}

}

// Alínea e)
// i)
let arr = ["ab", "a", "abcd", "abc"];
let maior;

if(arr.length != 0) {

		maior = arr[0];

		for(let value of arr) {

				if(value.length > maior.length) {

						maior = value;

				}

		}

} else {

		maior = 0;

}

console.log("A string maior é: '"maior"'");

// Alínea e)
// ii)
let arr = ["ab", "a", "abcd", "abc"];
let maior = arr[0];
let menor = arr[0];

for(let value of arr) {

		if(value.length > maior.length) {

				maior = value;

		}

		if(value.length < menor.length) {

				menor = value;

		}

}

console.log(maior);
console.log(menor);

// Alínea f)
// 1º modo de resolução
let string = "abcdefg";
let arr = string.split('');
let resultado = "";

for(let i = arr.length; i > 0; i--) {

		resultado = resultado + arr[i - 1];

}

console.log(resultado);

// Alínea f)
// 2º modo de resolução
let string = "abcdefg";
let resultado = string.split('');
let resultado = string.reverse();
let resultado = string.join('');
console.log(resultado);

// Alínea f)
// 3º modo de resolução
let string = "abcdefg";
let resultado = string.split('').reverse().join('');
console.log(resultado);

// Alínea g)
let resultado = "";

for(let i = 1; i <= 5; i++) {

		for(let j = 1; j <= i; j++) {

			resultado = resultado + "*";

		}

		resultado = resultado + "\n";

}

console.log(resultado);

let char = "";

for(let i = 0; i < 5; i++){

			char = char + "*";

			console.log(char);

}


