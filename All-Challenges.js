// Check for 65
function check65(a,b) {
    
    if ((a == 65 || b == 65) || a + b== 65) {    // Checks if a and b or sum is 65
        return "True ";      // Prints true if there is 65 
    }
    return "False";         // Prints false if there's no 65
}
console.log(check65(65,0));

//Ends here

//Space for contains 3
function Checks3(a,b){    
    if ((a == 3 || b == 3) || a + b== 3) {    // Checks if a and b or sum is 3
        return "True : Contains a 3";      // Prints true if there is 3
    }
    return "False : Does not contain a 3"; 
}
console.log(Checks3(7,3))
//Ends here

// Area of triangle
function triArea(s1,s2,s3){
    var p = (s1,s2,s3)/2;   // Calculates The Peri
    var ans = Math.sqrt(p*(p-1)*(p-2)*(p-3)) // Calculates Area of Tri

return "The area of triangle is = " + ans;
}
console.log(triArea(7,8,9)); // Prints Area of Tri
//Ends here

//Largest Value
function largeVal(a,b,c){
    if (a > b && a > c){
        return "a is the Largest";
    }
    else if (b > a && b > c){
        return "b is the Largest";
    }
    else 
        return "c is the Largest";
    }
    console.log(largeVal(110,2,10))
//Ends here

// time convertor
function timCon(a) {
    var h = Math.floor(a/60); // Converts to hour
    var m = a % 60;           // Converts to minutes
    return h +"hours"+ ":" + "minutes" + m; // Displays hours : minutes
}
console.log(timCon(360));

//Ends here 

