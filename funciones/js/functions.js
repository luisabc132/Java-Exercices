//EXERCISE 1
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Complete the following function to get the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//	 _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//	| T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//	|____________________________________________________________|
// 
// You can use 'result' variable to store the resulting letter.
// If your code works, the last three equalities will be "true"


/* 

function dniLetter( dni ) {
	var parcial,tipo; 
	var tabla;
	var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
	tabla = lockup.split("");
	tipo = typeof dni;
	if (tipo == 'number'){
		parcial = (dni % 23);
	
		if (dni < 0 || tipo == 'string') {
			var result = "Invalid parameter";
		}
		else {
			var result = tabla[parcial];
		}
	}
	else{
		var result = "Invalid parameter";
	}	

		return result;
}

console.log( dniLetter( 12345678 ) === 'Z');
console.log( dniLetter( 34667892 ) === 'S');
console.log( dniLetter( 92234488 ) === 'A');
console.log( dniLetter( -1 ) === 'Invalid parameter');
console.log( dniLetter( "A1234567" ) === 'Invalid parameter');
console.log(dniLetter(12345678));

*/


//EXERCISE 2
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Improve the exercise above to be able to perform this new functionality
// Of course it has to keep working as usual with right inputs.








//EXERCISE 3
//
// Restore the comments marks (/* */) of the previous exercises. First two exercises have to be commented 
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Write a function that takes an array of words and returns the length of the longest one.


/*
function findLongestWord( array_words ){
	var bandera = 0;
	for (i = 0; i < array_words.length; i++){
		if (array_words[i].length > bandera){
			bandera = array_words[i].length;			
		}
	}
	return bandera;	

}

console.log( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobby"] ) );
console.log( findLongestWord( ["Blanka", "Zangief", "Chun Li", "Guile"] )  );
console.log( findLongestWord( ["Red", "Blue", "Green"] ) );
*/



//EXERCISE 4
//
// Uncomment the exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// You have to complete the calculateAverage function (it is a few lines below), and it has
// to return the average of every number in a array instead of the "Not implemented yet" message.


/*
var array_lengths = [];
array_lengths.push( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobby"]) );
array_lengths.push( findLongestWord( ["Blanka", "Zangief", "Chun Li", "Guile"] ) );
array_lengths.push( findLongestWord( ["Red", "Blue", "Green"] ) );
array_lengths.push( findLongestWord( ["katerine michelangely", "yakeline briceño", "militsa ribas", "yelitse gomez"] ) );
array_lengths.push( findLongestWord( ["ninosca perez", "gloria perez", "katiuska parez", "betty olivo"] ) );
array_lengths.push( findLongestWord( ["maykelis", "andrea mora", "geraldine", "junita cortez"] ) );
array_lengths.push( findLongestWord( ["nayarit valencia", "anjomary montes", "vega ayuso", "yamile hermandez"] ) );
array_lengths.push( findLongestWord( ["emilse navarro", "luzmila diaz", "daniela alvarado", "marianela jaimes perez azulita"] ) );


//<place to add more lines>, read next commented text and you will understand

console.log( "These are the longest lengths of each group: " + array_lengths );
console.log( calculateAverage( array_lengths ) === 6 && "The average of longest lengths is: " + calculateAverage( array_lengths ))

function calculateAverage(array)
{
	var promedio=0,total=0;
	for (i = 0; i < array.length; i++){
		total=total+array[i];
	}
	promedio = total / array.length; 
	return promedio;
	console.log(total);
}
console.log(array_lengths);

console.log(calculateAverage(array_lengths));	
*/


// Now add more lengths to the array_lengths. You have to do it where <place to add more lines> is written. 
// You can use this structure: array_lengths.push( findLongestWord( [<add some elements>] ) );
// Don't foget to add words to the array. The longer the better!
// Now reload the page and see how changed the average.




//EXERCISE 5
//
// Restore the comments marks (/* */) of the previous exercises.
// Uncomment this exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
// As a condition you must use the object freqCounter.
// Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

/*

function charFreq( string ) {
	freqCounter = {};
    array_palabras=[];
    var ca=0,cb=0,cc=0,cd=0,ce=0,cf=0,cg=0,ch=0,ci=0,cj=0,ck=0,cl=0,cm=0,cn=0,cñ=0,co=0,cp=0,cq=0,cr=0,cs=0,ct=0,cu=0,cv=0,cw=0,cx=0,cy=0,cz=0;
    array_palabras= string.split("");
   
    for (i=0; i < array_palabras.length; i++){
    	if (array_palabras[i] == "a"){
    	
    		freqCounter["a"] = ++ca;
    	}
    	if (array_palabras[i] == "b"){
    	
    		freqCounter["b"] = ++cb;
    	}
    	
    	if (array_palabras[i] == "c"){
    	
    		freqCounter["c"] = ++cc;
    	}
    	
    	if (array_palabras[i] == "d"){
    	
    		freqCounter["d"] = ++cd;
    	}
    	
    	if (array_palabras[i] == "e"){
    	
    		freqCounter["e"] = ++ce;
    	}
    	
    	if (array_palabras[i] == "f"){
    	
    		freqCounter["f"] = ++cf;
    	}
    	
    	if (array_palabras[i] == "g"){
    	
    		freqCounter["g"] = ++cg;
    	}
    	
    	if (array_palabras[i] == "h"){
    	
    		freqCounter["h"] = ++ch;
    	}
    	
    	if (array_palabras[i] == "i"){
    	
    		freqCounter["i"] = ++ci;
    	}
    	
    	if (array_palabras[i] == "j"){
    	
    		freqCounter["j"] = ++cj;
    	}
    	
    	if (array_palabras[i] == "k"){
    	
    		freqCounter["k"] = ++ck;
    	}
    	
    	if (array_palabras[i] == "l"){
    	
    		freqCounter["l"] = ++cl;
    	}
    	
    	if (array_palabras[i] == "m"){
    	
    		freqCounter["m"] = ++cm;
    	}
    	
    	if (array_palabras[i] == "n"){
    	
    		freqCounter["n"] = ++cn;
    	}
    	
    	if (array_palabras[i] == "ñ"){
    	
    		freqCounter["ñ"] = ++cñ;
    	}
    	
    	if (array_palabras[i] == "o"){
    	
    		freqCounter["o"] = ++co;
    	}
    	
    	if (array_palabras[i] == "p"){
    	
    		freqCounter["p"] = ++cp;
    	}
    	
    	if (array_palabras[i] == "q"){
    	
    		freqCounter["q"] = ++cq;
    	}
    	
    	if (array_palabras[i] == "r"){
    	
    		freqCounter["r"] = ++cr;
    	}
    	
    	if (array_palabras[i] == "s"){
    	
    		freqCounter["s"] = ++cs;
    	}
    	
    	if (array_palabras[i] == "t"){
    	
    		freqCounter["t"] = ++ct;
    	}
    	
    	if (array_palabras[i] == "u"){
    	
    		freqCounter["u"] = ++cu;
    	}
    	
    	if (array_palabras[i] == "v"){
    	
    		freqCounter["v"] = ++cv;
    	}
    	
    	if (array_palabras[i] == "w"){
    	
    		freqCounter["w"] = ++cw;
    	}
    	
    	if (array_palabras[i] == "x"){
    	
    		freqCounter["x"] = ++cx;
    	}
    	
    	if (array_palabras[i] == "y"){
    	
    		freqCounter["y"] = ++cy;
    	}

    	if (array_palabras[i] == "z"){
    	
    		freqCounter["z"] = ++cz;
    	}
    



    }	
     console.log(freqCounter);



    
	
	return freqCounter;
}

counter = charFreq("abbabcbdbabdbdbabababcbcbab");
console.log( counter['a'] === 7);
console.log( counter.b === 14);
console.log( counter['c'] === 3);

counter = charFreq("xyyyxyxyxzyxyzyxyxyasdfz");
counter = charFreq("luis alberto briceño conteras");
console.log( counter.x === 7 );
console.log( counter['y'] === 10 );
console.log( counter.z === 3 );
console.log( counter['a'] === 1 );
console.log( counter['s'] === 1 );
console.log( counter.d === 1 );
console.log( counter['f'] === 1 );

*/


//BONUS EXERCISE
//
// Restore the comments marks (/* */) of the previous exercise
// Uncomment the exercise code deleting /* and */ chars
// Build a program that transform a boring array into an awesome array.
// The original array has to go through many processes, we divided every process
// in functions. You have to code these functions.
// Here you have some useful functions you can use wherever you need along the program.
// isFinite(), splice(), unshift(), push(), join(), sort(), Math.floor().
// These aren't all the needed functions, and also you can use different ones. They are only suggested functions.
// If you want to know what do they do or learn more functions, you can go to
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// http://www.w3schools.com/js/default.asp
// Use the search option in both of them to find a function.



function arrayAwesomenator( array ) 
{
	//array = deleteRubbish( array );
	//array = arrangeElements( array );
	//array = beautifyLetters( array );
	array = beautifyNumbers( array );
	//array = sortArray( array );
	//array = arrayToString( array );

	return array;
}


function deleteRubbish( array )
{
/*	var a;
	
	for (i=0; i < array.length; i++){
		if (array[i]=="*"){
			//delete array[i];
			array.splice(i, 1);
		} 
	}
	//It receives an array and returns it without '*' chars
	//Example:  deleteRubbish(['a',1,'*',5]) returns ['a',1,5]
	console.log(array);
	a = typeof array;
	console.log (a);
	for (i=0; i < array.length; i++){
		console.log(array[i]);
	}
*/
}


function arrangeElements( array )
{
/*	var array_string=[], array_number=[];
	for (i=0; i < array.length; i++){
		if (typeof array[i]=="string"){
			array_string.push(array[i]);
		}
		else {
			array_number.push(array[i]);
		}
	}
	array=[]
	array = array_number.concat(array_string);
	console.log(array);

	//It receives an array with numbers and letters mixed and returns it with its items arrange:
	//First goes the numbers and then the letters. The order of the elements together does not matter.
	//Example: arrangeElements(['B', 'a', 4 , 23, 'J']) returns [23, 4, 'B', 'a', 'J']
*/	
}




function beautifyLetters( array )
{
/*	var array_modificado=[];
	

	for (i=0; i < array.length; i++){
		aviso = typeof array[i];	
		if (aviso =="number"){
			array_modificado[i]=array[i];
		
		}
		else{
			if (aviso == "string" && (array[i]== "a" || array[i]== "A" || array[i]== "e" || array[i]== "E" || array[i]== "i" || array[i]== "I" || array[i]== "o" || array[i]== "O" || array[i]== "u" || array[i]== "U")) {//|| array[i]== "A" || array[i]== "e" || array[i]== "E" || array[i]== "i" || array[i]== "I" || array[i]== "o" || array[i]== "O" || array[i]== "u" || array[i]== "U") {
				array_modificado[i] = array[i].toLowerCase();
			}
			else{
				array_modificado[i] = array[i].toUpperCase();
				
			} 	
		}	 	
	
		
	}	
	array=[];
	array=array_modificado;
	console.log(array);
		



	//It receives an array with numbers and letters and returns it with uppercase vowels and lowercase consonants. Numbers remain unchanged
	//Example: beautifyLetters([1,5,7,'a','J',p,'E']) returns [1,5,7,'A','j',p,'E']
*/
}


function beautifyNumbers( array )
{
	for (i=0; i < array.length; i++){
		var c=0,ar=[],numero;
		if (typeof array[i] == "number"){
			
			while (array[i] > 9) {
				console.log("entro al while");
				numero = array[i].toString();								
				var sumando=0;
				for (j=0; j< numero.length; j++){
					sumando= sumando + parseInt(numero[j]);
					console.log(sumando);
				}
				array[i] = sumando;
				//console.log(sumando);
				//sNumber = array[i].toString();
				//console.log(sNumber);
				//for (var j = 0, len = sNumber.length; j < len; j += 1) {

				//	 output.push(+sNumber.charAt(j));
				//}
				//console.log(output);
				//for (var j = 0, sum = 0; i < output.length; sum += output[i++]);
				//array[i]=9;

				
			} 
		}

	}
	console.log(array);
	//console.log(array);


	//It receives an array with numbers and letters and returns it with its numbers beautified. Letters remain unchanged
	//Beautify process is to reduce a number into a single digit number by adding all its digits together: 
	// 123 = 6 because 1+2+3 = 6
	// 9 = 9
	// 9956 = 2 because 9+9+5+6 = 29 -> 2+9 = 11 -> 1+1 = 2
	// 793 = 1 because 7+9+3 = 19 -> 1+9 = 10 -> 1+0 = 1
	//Example: beautifyNumbers([23,59, 4,'A','b']) returns [5, 5, 4, 'A', 'b']
}

function sortArray( array )
{
	//It receives an array with numbers and letters and returns it with its items sorted. Numbers on one side and letters on the other.
	//Example: sortArray([5,5, 4, 1, 'j', A','b', 'E']) returns [1, 4, 5, 5, 'A', 'b', 'E', 'j']
}


function arrayToString( array )
{
	//It receives an array and returns a string with all its elements.
	//Example: arrayToString([1, 4, 5, 5, 'A', 'b', 'E', 'j']) returns "1455AbEj"
}

//console.log(arrayAwesomenator(["a", 6, "B", "F", "e", 8, 78, "J" ]) === "668Abfj");
//console.log(arrayAwesomenator(["*", "j", 6, "A", "F", "*", 8, "C", "b", "a", 78, "J", 43523, 1111, "r", "q", "y" ]) === "46688AAbcfjjqry");
//console.log(deleteRubbish(["a", "*", "B", "F", "*", 8, 78, "J" ]));
//console.log(arrangeElements(["a", 6, "B", "F", "*", 8, 78, "J" ]));
//console.log(beautifyLetters([5, "j", "k", "q", "A", 8, 78, "o" ]));
console.log(beautifyNumbers([9956, "j", "k", "q", "A", 8, 78, "o" ]));



