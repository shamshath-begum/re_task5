// Anonyms function

// 1.1 (Printing Odd numbers in an array)

let oddNum= function (n) {
    let b1=[];
    for (e=0; e<n; e++){
        if (e%2 !==0){
            b1.push(e);
        }
    }
        console.log(b1);
}
oddNum(10)

// 1.2 (Convert all the strings to title caps in a string array)

let captilize = function (names) {
    let namesarray1= [];
    for (i=0; i<names.length; i++){
        let cap = names[i][0].toUpperCase()+names[i].slice(1);
        namesarray1.push(cap);
    }    
    console.log(namesarray1);
}
captilize(["ganesh", "babu", "ravi", "sankar"]);

// 1.3 (Sum of all numbers in an array)

array1 = [1,2,3,4,5,6,7,8,9];
let addingArray = function () {
   let sum = 0;
   for (o=0; o<array1.length; o++) {
        sum+= array1[o];
   }
   console.log(sum);
}
addingArray(array1);

// 1.4 (Return all the prime numbers in an array)

let numArray1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 19, 23, 29, 31, 37]
    let primeNumber = function () {
        numArray1 = numArray1.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
          }
          return true;
        });
        console.log(numArray1);
    }
primeNumber(); 

// 1.5 (Return all the palindromes in an array)

let palindrome = function (wordarray) {
    let r1;
    let reverse1 = [];
    for (i=0; i<wordarray.length; i++){
        r1 = wordarray[i].split('').reverse().join('');
        if (wordarray[i] === r1) {
            reverse1.push(r1);
        }
    }
    // console.log(wordarray);
    console.log(reverse1);   
}
palindrome(["ganesh","malayalam","HeH","Heh","baab"])

// 1.6 (Return median of two sorted array of the same size)

let numberAr11 = [25, 75, 50, 125, 100];
let numberAr21 = [150, 200, 175, 250, 225];

let findMedian = function () {
    let n11 = numberAr11.length;
    let n21 = numberAr21.length;
    if (n11 == n21){
        let m1 = numberAr11.concat(numberAr21)
        m1.sort((a, b) => a-b);
        let n1 = (m1[(m1.length/2)-1]+m1[m1.length/2]);
        // console.log(m);
        console.log(n1/2);
    }
    else console.log("Two array are not equal");
}
findMedian();

// 1.7 (Remove duplicates from an array)

let chars1 = ['A', 'B', 'A', 'C', 'B'];
let removeDuplicate1 = function () {
    let uniqueChars1 = [];
    chars1.forEach((c) => {
    if (!uniqueChars1.includes(c)) {
        uniqueChars1.push(c);
    }
});
console.log(uniqueChars1);
}
removeDuplicate1();

// 1.8 (Rotate an array by k times)

let rotateRight1 = function (items, k) {
    for (i=0; i<k; i++){
        let last1 = items.pop();
        items.unshift(last1);
        // return items;    
    }
    console.log(items);
}
rotateRight1(["cpu", "moniter", "mouse", "keyboard", "pendrive"], 2)