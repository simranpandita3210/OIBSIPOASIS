function convertTemperature() {
  // Get input values
  var inputTemp = document.getElementById("temperature").value;
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;


  // Perform conversion
  var result;
  if (fromUnit === "Celsius") {
      if (toUnit === "Fahrenheit") {
          result = (inputTemp * 9/5) + 32;
      } else if (toUnit === "Kelvin") {
          result = parseFloat(inputTemp) + 273.15;
      } else {
          result = inputTemp;
      }
  } else if (fromUnit === "Fahrenheit") {
      if (toUnit === "Celsius") {
          result = (inputTemp - 32) * 5/9;
      } else if (toUnit === "Kelvin") {
          result = (inputTemp - 32) * 5/9 + 273.15;
      } else {
          result = inputTemp;
      }
  } else if (fromUnit === "Kelvin") {
      if (toUnit === "Celsius") {
          result = inputTemp - 273.15;
      } else if (toUnit === "Fahrenheit") {
          result = (inputTemp - 273.15) * 9/5 + 32;
      } else {
          result = inputTemp;
      }
  }
    document.getElementById("result").innerHTML = "Result: " + result.toFixed(2);
    var clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", clearResult);
  
    function clearResult() {
      document.getElementById("result").innerHTML = "";
    } 
  }

  
