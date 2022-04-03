var container = d3.select(".container");
var svg = container
  .append("svg")
  .attr("height", window.innerHeight)
  .attr("width", window.innerWidth);

let digits = [
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  [
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
];

let squareData = {
  height: 45,
  width: 45,
  x: 0,
  y: 0,
  color: "blue",
  margin: 5,
};

let makeDigit = (d) => {
  let digitData = [];
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      let currSquare = { ...squareData };
      currSquare.x = j * (currSquare.width + currSquare.margin) + d;
      currSquare.y = i * (currSquare.width + currSquare.margin);

      //   if (j == 1 && i > 0 && i <= 5) currSquare.color = "white";
      digitData.push(currSquare);
    }
  }
  return digitData;
};

let clockData = [];
let gap = 0;
for (let i = 0; i < 6; i++) {
  let d = i * (3 * (squareData.width + squareData.margin) + 10);
  if (i == 2) {
    gap += squareData.width;
  } else if (i == 4) {
    gap += squareData.width;
  }
  clockData.push(makeDigit(d + gap));
}

let virtualObjects = [];
for (let i = 0; i < 6; i++) {
  virtualObjects.push(svg.selectAll("rect").data(clockData[i]));
}

// let digitData = makeDigit();
let render = () => {
  for (let i = 0; i < 6; i++) {
    virtualObjects[i]
      .enter()
      .append("rect")
      .data(clockData[i])
      .attr("height", (d) => d.height)
      .attr("width", (d) => d.width)
      .attr("fill", (d) => d.color)
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("margin", (d) => d.margin);
  }
};

let updateDigits = (s) => {
  //   console.log(digitData.length);
  let p = 0;
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 3; c++) {
      if (digits[s][r][c] === 0) digitData[p++].color = "white";
      else digitData[p++].color = "blue";
    }
  }
};

render();

setInterval(() => {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  updateDigits(s % 10);
  render();
}, 1000);
