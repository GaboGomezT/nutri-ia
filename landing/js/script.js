function menu() {
  const nav = document.getElementById('menuNav');
  const cont = document.getElementById('conP');
  if(nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
  if(cont.style.height === "60vh") {
    cont.style.height = "85vh";
  } else {
    cont.style.height = "60vh";
  }
}
