function getShape() {
  var sides = document.getElementById("num-input").value;
  console.log(sides);
  let shape = "";
  const shapes = [
    "Henagon",
    "Digon",
    "Trigon",
    "Tetragon",
    "Pentagon",
    "Hexagon",
    "Heptagon",
    "Octagon",
    "Nonagon",
    "Decagon",
    "Hendecagon",
    "Dodecagon"
  ];
  var message = `A ${shapes[sides-1]} Has ${sides} Sides`;
  if (sides >= 1 && sides <= 12) {
    document.getElementById("generatedcode").innerHTML = message;
  } else {
    document.getElementById("generatedcode").innerHTML = "please enter a valid number 1-12 ";
  }
}
