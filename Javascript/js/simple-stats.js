// Simple summar stats computation
// With a simple D3.js applet to draw a bar chart
// Dr. Tirthajyoti Sarkar, Fremont, CA (May 2020)

// Select all buttons by their common class and extract individual button objects 
const allBttns = document.querySelectorAll(".bttn")
const clearBttn = allBttns[0]
const randBttn = allBttns[1]
const computeBttn = allBttns[2]

const inputArea = document.querySelector("#array")

inputArea.addEventListener('keypress',function(e){
    if (e.key==='Enter'){
        summaryCalc();
    };
});

// Clear button event listener
clearBttn.addEventListener('click',clearInput)
// Random number generation button event listener
randBttn.addEventListener('click',genRandom)
// Compute summary stat button event listener
computeBttn.addEventListener('click',summaryCalc)

// Function to clear input
function clearInput()
{
    document.getElementById("array").value = "";
};

// Function to generate random numbers
function genRandom(){
    let randomArray = []
    for (let i=0; i<10; i++){
        randomArray.push(Math.floor(100*Math.random()))
    }
    document.getElementById("array").value = randomArray.toString();
}

// Function to compute summary stats
function summaryCalc()
{
    let array = document.getElementById("array");
    array2 = array.value.split(",").map(function (item) {
    return parseFloat(item, 3);
});


if (array2.length===1) {
    document.getElementById("numElements").innerHTML = '';
    document.getElementById("max").innerHTML = '';
    document.getElementById("min").innerHTML = '';
    document.getElementById("sum").innerHTML = '';
    document.getElementById("mean").innerHTML = '';
    document.getElementById("stdDev").innerHTML = '';
}
else{
// Number of input
numInput = array2.length
document.getElementById("numElements").innerHTML = 'There are <strong>'+numInput+'</strong> numbers in total.';
// Max
    max = Math.max(...array2)
    document.getElementById("max").innerHTML = '<strong>'+max+'</strong>';

// Min
min = Math.min(...array2)
document.getElementById("min").innerHTML = '<strong>'+min+'</strong>';

// Sum
    sum = array2.reduce(function(acc, val) { return acc + val; }, 0);
    document.getElementById("sum").innerHTML = '<strong>'+sum.toFixed(3)+'</strong>';

// Mean
getMean =  (data) => {
    return data.reduce(function (a, b) {
        return Number(a) + Number(b);
    }) / data.length;
}
    mean = getMean(array2);
    document.getElementById("mean").innerHTML = '<strong>'+mean.toFixed(3)+'</strong>';
    
// Standard deviation
getSD = function (data) {
    let m = getMean(data);
    return Math.sqrt(data.reduce(function (sq, n) {
            return sq + Math.pow(n - m, 2);
        }, 0) / (data.length - 1));
}
    stdDev = getSD(array2);
    document.getElementById("stdDev").innerHTML = '<strong>'+stdDev.toFixed(3)+'</strong>';
}

//Width and height
var leftMargin = 50;  // Space to the left of first bar; accomodates y-axis labels
var rightMargin = 10; // Space to the right of last bar
var margin = {left: leftMargin, right: rightMargin, top: 10, bottom: 10};
let w = margin.left + 500 + margin.right;
let h = 100;
let barPadding = 5;

d3.select("svg").remove();

let newDiv = document.createElement("div")
newDiv.classList.add('barchart');
document.body.appendChild(newDiv)
let svg = d3.select(".barchart")
.append("svg")
.attr("width", w)
.attr("height", h+100);

let yScale = d3.scaleLinear()
                     .domain([0, d3.max(array2)])
                     .range([0, h]);

let yAxisScale = d3.scaleLinear()
                    .domain([d3.min(array2), d3.max(array2)])
                    .range([h - yScale(d3.min(array2)), 0 ]);

svg.selectAll("rect")
    .data(array2)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
        return i * (w /array2.length);  //Bar width of 20 plus 1 for padding
        })
    .attr("y", function(d, i) { return h - Math.max(0, yScale(d));})
    .attr("width", w / array2.length - barPadding)
    .attr("height", function(d) {
            return Math.abs(yScale(d));
        });
    
var yAxis = d3.axisLeft(yAxisScale);
svg.append('g')
        .call(yAxis);
    //.attr('transform', function(d) {
        //return 'translate(' + margin.left + ', -20)';
   // })
    }