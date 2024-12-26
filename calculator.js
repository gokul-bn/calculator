// This function clears all the values
 function clearScreen() {
      document.getElementById("result").value = "";
  }
  
// This function displays the values
  function display(value) {
      document.getElementById("result").value += value;
  }

  function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}


//  function calculate() {
//      var p = document.getElementById("result").value;
     
//      // Use Function constructor to evaluate the expression
//      try {
//          var q = new Function('return ' + p)();
//          document.getElementById("result").value = q;
//      } catch (error) {
//          document.getElementById("result").value = "Error101";
//      }
//  }