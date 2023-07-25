// Anonyms function

// 1.1 (Printing Odd numbers in an array)

((n) => {
    let b=[];
    for (e=0; e<n; e++){
        if (e%2 !==0){
            b.push(e);
        }
    }
        console.log(b);
})(10)

// 1.2 (Convert all the strings to title caps in a string array)

let names = ["ganesh", "babu", "ravi", "sankar"];
(() => {
    let namesarray= [];
    for (i=0; i<names.length; i++){
        let cap = names[i][0].toUpperCase()+names[i].slice(1);
        namesarray.push(cap);
    }    
    console.log(namesarray);
})(names);

// 1.3 (Sum of all numbers in an array)

array = [1,2,3,4,5,6,7,8,9];
(() => {
   let sum = 0;
   for (o=0; o<array.length; o++) {
        sum+= array[o];
   }
   console.log(sum);
}
)(array);

// 1.4 (Return all the prime numbers in an array)

let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 19, 23, 29, 31, 37];
(() => {
        numArray = numArray.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
            }
            return true;
        });
        console.log(numArray);
})(); 


// 1.5 (Return all the palindromes in an array)

((wordarray) => {
    let r;
    let reverse = [];
    for (i=0; i<wordarray.length; i++){
        r = wordarray[i].split('').reverse().join('');
        if (wordarray[i] === r) {
            reverse.push(r);
        }
    }
    // console.log(wordarray);
    console.log(reverse);   
})(["ganesh","malayalam","HeH","Heh","baab"])

// 1.6 (Return median of two sorted array of the same size)

let numberAr1 = [25, 75, 50, 125, 100];
let numberAr2 = [150, 200, 175, 250, 225];

(() => {
    let n1 = numberAr1.length;
    let n2 = numberAr2.length;
    if (n1 == n2){
        let m = numberAr1.concat(numberAr2)
        m.sort((a, b) => a-b);
        let n = (m[(m.length/2)-1]+m[m.length/2]);
        // console.log(m);
        console.log(n/2);
    }
    else console.log("Two array are not equal");
})();

// 1.7 (Remove duplicates from an array)

let chars = ['A', 'B', 'A', 'C', 'B'];
(() => {
    let uniqueChars = [];
    chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});
console.log(uniqueChars);
})();

// 1.8 (Rotate an array by k times)

((items, k) => {
    for (i=0; i<k; i++){
        let last = items.pop();
        items.unshift(last);
        // return items;    
    }
    console.log(items);
})(["cpu", "moniter", "mouse", "keyboard", "pendrive"], 2)