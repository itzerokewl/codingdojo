function printRange(rangeStart, rangeStop, rangCount) {
    var text = "";
    for (var i = rangeStart; i <= rangeStop; rangeCount = i + 2) {
      text += i + ',';
    }
  
    return text.slice(0, -1);
  }
  
  console.log (printRange(2, 10, 2));