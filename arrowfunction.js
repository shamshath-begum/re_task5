// Arrow function

// 1.1 (Printing Odd numbers in an array)

let oddNumber2= (n) => {
    let b2=[];
    for (e=0; e<n; e++){
        if (e%2 !==0){
            b2.push(e);
        }
    }
        console.log(b2);
}
oddNumber2(10)

// 1.2 (Convert all the strings to title caps in a string array)

let captilize1 = (names) => {
    let namesarray2= [];
    for (i=0; i<names.length; i++){
        let cap = names[i][0].toUpperCase()+names[i].slice(1);
        namesarray2.push(cap);
    }    
    console.log(namesarray2);
}
captilize1(["ganesh", "babu", "ravi", "sankar"]);

// 1.3 (Sum of all numbers in an array)

array2 = [1,2,3,4,5,6,7,8,9];
let addingArray2 = () => {
   let sum2= 0;
   for (o=0; o<array2.length; o++) {
        sum2+= array2[o];
   }
   console.log(sum2);
}
addingArray2(array2);

// 1.4 (Return all the prime numbers in an array)

let numArray2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 19, 23, 29, 31, 37]
    let primeNumber2 = () => {
        numArray2 = numArray2.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
          }
          return true;
        });
        console.log(numArray2);
    }
primeNumber2(); 

// 1.5 (Return all the palindromes in an array)

let palindrome2 = (wordarray) => {
    let r2;
    let reverse2 = [];
    for (i=0; i<wordarray.length; i++){
        r2 = wordarray[i].split('').reverse().join('');
        if (wordarray[i] === r2) {
            reverse2.push(r2);
        }
    }
    // console.log(wordarray);
    console.log(reverse2);   
}
palindrome2(["ganesh","malayalam","HeH","Heh","baab"])

// 1.6 (Return median of two sorted array of the same size)

let numberAr12 = [25, 75, 50, 125, 100];
let numberAr22 = [150, 200, 175, 250, 225];

let findMedian2 = () => {
    let n12 = numberAr12.length;
    let n22 = numberAr22.length;
    if (n12 == n22){
        let m2 = numberAr12.concat(numberAr22)
        m2.sort((a, b) => a-b);
        let n2 = (m2[(m2.length/2)-1]+m2[m2.length/2]);
        // console.log(m);
        console.log(n2/2);
    }
    else console.log("Two array are not equal");
}
findMedian2();

// 1.7 (Remove duplicates from an array)

let chars2 = ['A', 'B', 'A', 'C', 'B'];
let removeDuplicate2 = () => {
    let uniqueChars2= [];
    chars2.forEach((c) => {
    if (!uniqueChars2.includes(c)) {
        uniqueChars2.push(c);
    }
});
console.log(uniqueChars2);
}
removeDuplicate2();

// 1.8 (Rotate an array by k times)

let rotateRight2 = (items, k) => {
    for (i=0; i<k; i++){
        let last2 = items.pop();
        items.unshift(last2);
        // return items;    
    }
    console.log(items);
}
rotateRight2(["cpu", "moniter", "mouse", "keyboard", "pendrive"], 2)