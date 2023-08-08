
// function cubeNumber(number){
//     if(typeof number !== "number"){
//         return "Please provide me a number";
//     }
//     else{
//         const result = number * number *number;
//         return result;
//     }
// }

// // console.log(cubeNumber(4))

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
// // console.log(matchFinder("John Doe", "ohn"));


// function sortMaker(arr){
//     if( arr[0]<0 || arr[1]<0 ){
//         return "Invalid Input"
//     }
//     else if(arr[0] === arr[1]){
//         return "equal"
        
//     }
//     else if(arr.sort((a,b) => b-a)){

//         return arr;  
//     }
    
// }
// const numbers = [4,-2];

// // console.log(sortMaker(numbers))






// function findAddress(obj){
//     const streetNumber = obj.street || "__"
//     const houseNumber = obj.house || "__"
//     const societyStatus = obj.society || "__"

//     const address = streetNumber +","+ houseNumber +","+ societyStatus;
//     return address;
// }
// let obj = {street: 10, house: "15A", society: "Earth Perfect"}
// console.log(findAddress(obj));




function canPay(changeArray, totalDue){
    if(changeArray.length === 0){
        return "The array is empty"
    }
    else{
        let littleMoney = 0;
        for (let i=0; i<changeArray.length; i++) {
            littleMoney = littleMoney + changeArray[i]   
        }
        if(totalDue <= littleMoney){
            return true;
        }
        else{
            return false;
        }
    }

}
const arr = [1,5,5];
const due = 10;
console.log(canPay(arr, due));