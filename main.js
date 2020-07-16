

// // example : hello 

// let str = 'hello'

// console.log(str.length)

// console.log(str[0])

// console.log(str[1])

// console.log(str[2])

// console.log(str[3])

// console.log(str[4])

// // find out point 5 place 

// let start = str.length - 1

// console.log(start)

// //find out point 4 place 




// /// interView Exam  /// 

// function returnWord(string) {

//   // point last word 


//   let string = 'Hello'

//   for (let i = newPoint.length; pointStart > i; i--) {

//     // how to get array [last one array //

//     //擷取字串ＨＥＬＬＯ - ＥＬＬＯ＝Ｈ //  slice 
//     let word1 = 'hello' 

//     word1.slice(pointStart,)

//     let pointStart = 0
//     let pointEnd = word1.indexOf(`  `, poinStart)
//     let textslice = content.slice(pointStart, pointEnd) 

//     slice 
//   }

//   console.log(string)


// }

function reverseString(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result;
}

let str2 = "Hello";
reverseString(str2); // "olleH"

console.log(reverseString(str2))


