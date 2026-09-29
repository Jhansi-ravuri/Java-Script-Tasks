// 1. FIND THE SUM OF DIGITS IN A GIVEN NUMBER 738
// let n=738
// let sum=0
// while(n>0){
//     let a=n%10
//     sum=sum+a
//     n=parseInt(n/10)
// }
// console.log("sum=",sum);


// 2. FIND THE AVERAGE OF DIGITS INA GIVEN NUMBER 624
// let n=624
// let sum=0
// let count=0
// while(n>0){
//     let a=n%10
//     sum=sum+a
//     count=count+1
//     n=parseInt(n/10)
// }
// console.log("average=",sum/count);

// 3. FIND THE SUM OF THE FIRST DIGIT AND LST DIGIT OF GIVEN NUMBER 936
// let n=936
// let sum=0
// let l_digit=n%10
// while(n>0){
//     a=n%10
//     n=parseInt(n/10)
// }
// console.log("sum=",l_digit+a);


// 4. FIND THE AVERAGE OF DIGITS THAT ARE DIVISIBLE BY 5
// let n=12575
// let sum=0
// let count=0
// while(n>0){
//     a=n%10
//     n=parseInt(n/10)
//     if(a%5==0){
//         sum=sum+a
//         count=count+1
//     }
// }
// console.log("average=",sum/count);


// 5. FIND THE DIFFERENCE BETWEEN THE LARGEST AND SMALLEST DIGIT
let n=58321
let large=0
let small=9
while(n>0){
    a=n%10
    n=parseInt(n/10)
    if(a>large){
        large=a
    }
    if(a<small){
        small=a
    }
}
console.log("difference=",large-small);




