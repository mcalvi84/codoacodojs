//comision 2107 - MARIANO A CALVI

verif()
function verif(){
    edad = prompt("Ingrese su edad:")
    if (edad >= 18) {
        alert("El usuario es mayor de edad. Acceso concedido.")
        document.write("<h2>ACCESO AUTORIZADO </h2>")
        document.write("La edad ingresada es: " + edad + ". El acceso fue Autorizado.")
        
       }
    else {
        alert("El usuario es menor de edad. Acceso denegado.")
        document.write("<h2>ACCESO DENEGADO </h2>")
        document.write("La edad ingresada es: " + edad + ". El acceso fue denegado.")
        
    }
    }
var edad1 = prompt("Usuario Nº 1, ingrese su edad:")
var edad2 = prompt("Usuario Nº 2, ingrese su edad:")
var edad3 = prompt("Usuario Nº 3, ingrese su edad:")
if (edad1 > edad2 && edad1 > edad3){
    alert("El usuario 1 es el mayor")
    document.write("<h1>El usuario uno es el mas Grande</h1>") 
    document.write("La edad de " + edad1 + " años hace al usuario 1 el mayor.")
    
}
else if(edad2 > edad1 && edad2 > edad3){
    alert("El usuario 2 es el mayor")
    document.write("<h1>El usuario 2 es el mas Grande </h1>") 
    document.write("La edad de " + edad2 + " años hace al usuario 2 el mayor.")
    
}
else if(edad3 > edad1 && edad3 > edad2){
    alert("El usuario 3 es el mayor")
    document.write("<h1>El usuario 3 es el mas Grande </h1>") 
    document.write("La edad de " + edad3 + " años hace al usuario 3 el mayor.")
    
}