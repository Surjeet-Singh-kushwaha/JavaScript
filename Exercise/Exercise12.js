const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "brown",
    "pink",
    "teal",
    "lime",
    "indigo",
    "violet",
    "maroon",
    "olive",
    "navy",
    "coral",
    "turquoise",
    "gold"
  ];

let box = document.querySelectorAll(".box")

for(i=0;i<box.length;i++){
    boxColor= Math.floor(Math.random()*20)
    box[i].style.backgroundColor = colors[boxColor]
}
