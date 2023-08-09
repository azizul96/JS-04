
// function cubeNumber(number){
//     if(typeof number !== "number"){
//         return "Please provide me a number";
//     }
//     else{
//         const result = number * number *number;
//         return result;
//     }
// }

// console.log(cubeNumber(3));




// function matchFinder(string1, string2){
//     if(typeof string1 !== "string" || typeof string2 !== "string"){
//         return "Please provide string type value";
//     }
//     else{
//         if(string1.includes(string2)){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }
// console.log(matchFinder("“Peter Parker", "pet"));


// function sortMaker(arr){
//     if(arr.length > 2 || arr[0] < 0 || arr[1] < 0 ){
//         return "Invalid Input"
//     }
//     else if(arr[0] === arr[1]){
//         return "equal"
//     }
//     else if(arr[0] < arr[1]){
//         const bigNumber = arr[0];
//         arr[0] = arr[1]
//         arr[1] = bigNumber;
//         return arr; 
//     }
//     else{
//         return arr;
//     }

// }
// const myArr = [0,1,9]
// console.log(sortMaker(myArr));






// function findAddress(obj){
//     const streetNumber = obj.street || "__"
//     const houseNumber = obj.house || "__"
//     const societyStatus = obj.society || "__"

//     const address = streetNumber +","+ houseNumber +","+ societyStatus;
//     return address;
// }
// let obj = {street: 10}
// console.log(findAddress(obj));




// function canPay(changeArray, totalDue){
//     if(changeArray.length === 0){
//         return "The array is empty"
//     }
//     else{
//         let myMoney = 0;
//         for (let i=0; i<changeArray.length; i++) {
//             myMoney = myMoney + changeArray[i]   
//         }
//         if(totalDue <= myMoney){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }

// }
// const arr = [];
// const due = 10;
// console.log(canPay(arr, due));