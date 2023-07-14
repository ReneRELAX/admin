const para = document.querySelector('o');
para.addEventListener('click', updateName)
function updateName(){
    let name= prompt('ingrese un nombre nuevo');
    para.textContent="Estudiante:  "+ name;
}