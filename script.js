function calculate() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
  
    if (!isNaN(sideA) && !isNaN(sideB)) {
      var sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
      document.getElementById('result').innerHTML = 'c oldal: ' + sideC.toFixed(2);
    } else {
      document.getElementById('result').innerHTML = 'Kérlek adj meg értékeket mindkét oldalnak!';
    }
  }