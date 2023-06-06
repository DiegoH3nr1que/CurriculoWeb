
const trocartemabtn = document.querySelector("#trocar-tema");
trocartemabtn.addEventListener("change", function(){
  document.body.classList.toggle("dark");
});

function toggleDarkMode(){
  document.body.classList.toggle("Dark");
}

trocartemabtn.addEventListener("change", function(){
  toggleDarkMode();

  localStorage.removeItem("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("dark",1);
  }
});