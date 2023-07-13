 function imc() {
   var peso = parseFloat(document.getElementById("peso").value)
   var altura = parseFloat(document.getElementById("altura").value)

   if (altura > 3) {
     alert("A Altura deve ser em metros! Ex: 1.45, 1.83.")
   } else {
     var imc = peso / (altura * altura)

     if (imc <= 16.9) {
       alert("Muito Abaixo do Peso")
     } else if (imc >= 17 && imc <= 18.4) {
       alert("Abaixo do Peso")
     } else if (imc >= 18.5 && imc <= 24.9) {
       alert("Peso Normal")
     } else if (imc >= 25 && imc <= 29.9) {
       alert("Acima do Peso")
     } else if (imc >= 30 && imc <= 34.9) {
       alert("Obesidade Grau 1")
     } else if (imc >= 35 && imc <= 40) {
       alert("Obesidade Grau 2")
     } else if (imc > 40) {
       alert("Obesidade Grau 3")
     }
   }
 }
