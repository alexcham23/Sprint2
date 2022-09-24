var palabras = [
    'ALURA',
    'ESCUELAS',
    'AFINIDAD',
    'PROGRAMAR',
    'ORACLE',
    'YOUTUBE'
  ]
 /* module.exports={
     "palabra":palabras
  }*/
function guardar(resultado) {
    const palabra = document.getElementById('texto1').value;
    let palabra1 = palabra.toUpperCase();
    if (palabra1.length < 8 && palabra1 != "") {
      palabras.push(palabra1);
      window.location.href = "game.html";
    } else if (palabra1.length == 0 || palabra == "") {
      alert('Por favor escriba la palabra a guardar')
    } else if (palabra1.length() >= 8 && palabra1 != "") {
      alert('Palabra demasiado grande')
    }
  
    document.getElementById("texto1").value = "";
}