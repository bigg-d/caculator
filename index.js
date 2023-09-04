var input = document.getElementById('input')
var numbers = document.querySelectorAll('.number')
var operators = document.querySelectorAll('.operator')
var dotBtn = document.getElementById('dotBtn')
var clearBtn = document.getElementById('clearBtn')
var equalBtn = document.getElementById('equalBtn')
var checkResult = false
numbers.forEach(function(number){
  number.addEventListener('click',function(e) {
    checkResult = false
    let currentString = input.innerHTML
    let lastChar = currentString[currentString.length-1]
    if(checkResult == false){
      input.innerHTML += e.target.innerHTML
    }
    else if(checkResult == true && lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === ':'){
      checkResult = false
      input.innerHTML += e.target.innerHTML
    }
    else {
      checkResult = false
      input.innerHTML =''
      input.innerHTML += e.target.innerHTML
    }
  })
})

operators.forEach(function(operator) {
  operator.addEventListener('click',function(e) {
    let currentString = input.innerHTML
    let lastChar = currentString[currentString.length -1]
    if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === ':'){
      let newString = currentString.substring(0, currentString.length -1)
      input.innerHTML = newString + e.target.innerHTML
    } else if(currentString.length == 0){
      alert("Nhap mot so")
    } else {
      input.innerHTML += e.target.innerHTML
    }
  })
})

equalBtn.addEventListener('click',function(){
  var currentString = input.innerHTML
  var numbers = currentString.split(/\+|\-|\*|\:/g)
  var operators = currentString.replace(/[0-9]|\./g,'').split('')
  var displayResult = false

  var multiply = operators.indexOf("*")
  while(multiply != -1){
    numbers.splice(multiply,2,parseFloat(numbers[multiply])*parseFloat(numbers[multiply+1]))
    operators.splice(multiply,1)
    multiply = operators.indexOf("*")
  }

  var divide = operators.indexOf(":")
  while(divide != -1){
    numbers.splice(divide,2,numbers[divide] / numbers[divide+1])
    operators.splice(divide,1)
    divide = operators.indexOf(":")
  }
  var add = operators.indexOf("+")
  while(add != -1){
    numbers.splice(add,2,parseFloat(numbers[add])+parseFloat(numbers[add+1]))
    operators.splice(add,1)
    add = operators.indexOf("+")
  }

  var subtract = operators.indexOf("-")
  while(subtract != -1){
    numbers.splice(subtract,2,parseFloat(numbers[subtract])-parseFloat(numbers[subtract+1]))
    operators.splice(subtract,1)
    subtract = operators.indexOf("-")
  }
  input.innerHTML = numbers[0]
  checkResult = true
})

dotBtn.addEventListener("click",function(e){
  var currentString = input.innerHTML
  var dot = '.'
  if(currentString.includes(dot)){}
  else{
    input.innerHTML += e.target.innerHTML
  }
})

clearBtn.addEventListener("click",function(){
  input.innerHTML = ''
})


