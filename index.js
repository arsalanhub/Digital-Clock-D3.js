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

svg
  .selectAll("rect")
  .data([squareData])
  .enter()
  .append("rect")
  .attr("height", (d) => d.height)
  .attr("width", (d) => d.width)
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("fill", (d) => d.color)
  .attr("margin", (d) => d.margin);

// var cnt = 0;
// setInterval(() => {
//   let time = new Date();
//   let h = time.getHours();
//   let m = time.getMinutes();
//   let s = time.getSeconds();
// }, 1000);
