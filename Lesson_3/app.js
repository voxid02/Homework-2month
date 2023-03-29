                                           //Homeworke N3
 // 1)

var name = prompt("What is your name ")
  console.log("Hello! ", name )

// 2)

 var a = prompt("введите первое число")
 var b = prompt("введите второе число")
  function min(a,b){
       console.log( a<b ? a : a===b ? "Equals" : b)
}
  min(a,b)

//3)
var summCount = prompt('Введите любое положительное число')
var summ = 0
for (var i = 1; i <= summCount; i++ ) {
     summ += i
}
console.log(summ)

//4)

var number = prompt('Введите число от 2 до 10')
for(var i = 1; i <= 10; i++){
     console.log(number + ' x ' + i  + ' = ' + number * i)
}













