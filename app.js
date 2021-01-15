//              Changing case

//Q 1

// var input = prompt("Enter your name");
// var userName = input.toUpperCase();
// alert(userName);


// Q2

// var input = prompt("Enter you full name");
// var gap = input.indexOf(" ");
// var name = input.slice(0,1).toUpperCase() + input.slice(1,gap) + " " + input.slice(gap++,gap+1).toUpperCase() + input.slice(gap+1);
// alert(name);



//     Strings: Measuring length and extracting parts


//  Q1



// var input = prompt("Enter your favourite  mobile model");
// var mob = input.length;
// document.write(mob);



//    Q2


// var input = prompt("Enter your name here");
// var name = input.charAt(input.length-1);
// alert(name);



//       Strings: finding segments


//    Q1


// var a = "Pakistani";
// var b = a.indexOf("n");
// document.write(b);



//    Q2




// Q3

// var a = "The quick brown fox jumps over the lazy dog";
// var b = a.indexOf(" ");
// document.write(b);



//  Strings: finding a character at a location

// Q1

// var a = "pakistani";
// var b = a.charAt(3);
// document.write(b);




// Strings: replacing characters

//  Q1


// var input = "Hyderabad";
// var a = input.replace("Hyder","Islam");
// document.write(a);

//   Q2


// var message ="Ali and Sami are best friends. They play cricket and football together."
// var a = message.replace(/and/g,"&");
// document.write(a);



//    Rounding numbers

//  Q1

//(i)

// var input =prompt("Enter the positive number" , 3.45214)


//(ii)

// var input =prompt("Enter the positive number" , 3.45214)
// var a = Math.round(input);
// document.write("<h1> " + "Math Round" + "</h1>" + "<br />" );
// document.write(  a   + "<br />");

//(iii)

// var input =prompt("Enter the positive number" , 3.45214)
// var b = Math.floor(input);
// document.write("<h1> " + "Math Floor" + "</h1>" + "<br />" );
// document.write(  b  + "<br />");

//(iv)

// var input =prompt("Enter the positive number" , 3.45214)
// var c = Math.ceil(input);
// document.write("<h1> " + "Math Ceil" + "</h1>" + "<br />" );
// document.write(  c  + "<br />");


// Q2


// (i)

// var input =prompt("Enter the negative number" , -2.648)

//(ii)

// var input =prompt("Enter the negative number" , -2.648)
// var a = Math.round(input);
// document.write("<h1> " + "Math Round" + "</h1>" + "<br />" );
// document.write(  a   + "<br />");


//(iii)

// var input =prompt("Enter the negative number" , -2.648)
// var b = Math.floor(input);
// document.write("<h1> " + "Math Floor" + "</h1>" + "<br />" );
// document.write(  b  + "<br />");


//(iv)

// var input =prompt("Enter the negative number" , -2.648)
// var c = Math.ceil(input);
// document.write("<h1> " + "Math Ceil" + "</h1>" + "<br />" );
// document.write(  c  + "<br />");



//   Converting strings to numbers, numbers to strings


//  Q1


// var a = "786";
// var b = Number(a);
// var c = typeof(a);
// var d = typeof(b)
// document.write("Type of "+" '"+ a +"' "+ "is "+ c+"<br />");
// document.write("Type of "+ b +" is "+d);

//  Q2

// var a = 23.45;
// var b = a.toString();
// var c = a + ' ';
// var d = c.replace('.','')
// document.write(d  +  "<br />");
// document.write(typeof(d))





//    Controlling the length of decimals

//  Q1

// var percentage = (30/45*100);
// var control = percentage.toFixed(2);
// document.write("Your percentage is "+control)