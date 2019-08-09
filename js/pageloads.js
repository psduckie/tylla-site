function pull_file(path) {
//  alert(typeof path);
  if(typeof path != "string") {
//    alert("Not a string");
    return "Error: Invalid path.  Path must be a string.";
  }
//  alert("A string");
  fetch(path)
  .then(function() {
    alert(path & " passed.");
  })
  .catch(function() {
    alert(path & " failed.");
  })
}

function load_navbar() {
  document.getElementById("navbar").innerHTML =
    '<object type="text/html" data="navbar.html" style="width: 100%"></object>';
}

function load_homepage() {
  load_navbar();
}

function load_storylines() {
  load_navbar();
}