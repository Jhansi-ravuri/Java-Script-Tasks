// 1. PRINT THE NUMERS 10 T0 150 WHICH ARE DIVISIBLE BY 3 AND 5
// for(let i=10;i<=150;i=i+1){
//     if(i%3==0 && i%5==0){
//         console.log(i);  
//     }
// }

// 2. COUNT HOW MANY NUMBERS FROM 200 TO 50 ARE DIVISIBLE BY 7
// let count=0
// for(let i=200;i>=50;i=i-1){
//     if(i%7==0){
//         count=count+1
//     }
// }
// console.log("count=",count);

// 3. PRINT NUMBERS FROM 120 DOWN TO 20 THAT ARE NOT DIVISIBLE BY 5
// for(let i=120;i>=20;i=i-1){
//     if(i%5!=0){
//         console.log(i);  
//     }
// }

// 4. FIND THE AVERAGE OF ALL EVEN NUMBERS IN THE RANGE FROM 10 T0 100
// let sum=0
// let count=0
// for(let i=10;i<=100;i=i+1){
//     sum=sum+i
//     count=count+1
// }
// console.log("Average =",sum/count);

// 5. FIND THE AVERAGE OF ALL FACTORS OF A GIVEN NUMBER
let n=12
let sum=0
let count=0
for(let i=1;i<=n;i=i+1){
    if(n%i==0){
        sum=sum+i
        count=count+1 
    }
}
console.log("Average of a factors=",sum/count);


