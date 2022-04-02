var container = d3.select(".container");
var svg = container
  .append("svg")
  .attr("height", window.innerHeight)
  .attr("width", window.innerWidth);

let squareData = {
  height: 45,
  width: 45,
  x: 0,
  y: 0,
  color: "blue",
  margin: 5,
};

let makeDigit = () => {
  let digitData = [];
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      let currSquare = { ...squareData };
      currSquare.x = j * (currSquare.width + currSquare.margin);
      currSquare.y = i * (currSquare.width + currSquare.margin);

      if (j == 1 && i > 0 && i <= 5) currSquare.color = "white";
      digitData.push(currSquare);
    }
  }
  return digitData;
};

let render = () => {
  let digitData = makeDigit();
  svg
    .selectAll("rect")
    .data(digitData)
    .enter()
    .append("rect")
    .attr("height", (d) => d.height)
    .attr("width", (d) => d.width)
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y)
    .attr("fill", (d) => d.color)
    .attr("margin", (d) => d.margin);
};

render();

// var cnt = 0;
// setInterval(() => {
//   let time = new Date();
//   let h = time.getHours();
//   let m = time.getMinutes();
//   let s = time.getSeconds();
// }, 1000);
