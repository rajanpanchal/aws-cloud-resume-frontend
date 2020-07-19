
function updateCounter(){
fetch("https://api.rajanpanchal.net/Prod/getVisitorCounter")
  .then(response => response.text())
  .then((body) => {
    document.getElementById("counter").innerHTML=body
  })
  .catch(function(error) {
    console.log(error); 
  });  
}  
