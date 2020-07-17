var arr = []
//var nPts = 20
var dataGenerated = false
var plotGenerated = false
const svgWidth = 500
const svgHeight = 300
var chartMargin = 10
var gapBar = 20

function getRandomIntArray(n=10, min=1, max=100) 
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        arr = []
        for (i=0; i< n; i++){
            arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
        }
        return arr
    }

function genData()
{

if (dataGenerated===true){
    return;
}

nPts = parseInt(document.getElementById("nPts").value)
if (document.getElementById("nPts").value===""){
    nPts = 10
}

if (nPts > 20) {
    return;
}

arr = getRandomIntArray(n=nPts,min=30,max=100)

d3.select("#data-show")
.append("p")
.style('font-size', '16')
.text("Following data is generated: "+ arr)

dataGenerated = true
}

function barchart()
{
    if (dataGenerated===false){
        return;
    }

    if (plotGenerated===true){
        return;
    }

    d3.select('#barchart-div')
        .append("svg")
        .attr("id","svg-box")
        .attr("width",svgWidth+"px")
        .attr("height",svgHeight+"px")
        .style("border","solid 2px black")

    var xWidth = (svgWidth-chartMargin)/(nPts) - gapBar
    
    var yScale = d3.scaleLinear()
        .domain([0,d3.max(arr)])
        .range([0,svgHeight-2*chartMargin])

    d3.select("#svg-box")
    .selectAll("rect")
    .data(arr)
    .enter()
    .append("rect")
    .attr("x",(d,i) => chartMargin+i*(xWidth+gapBar))
    .attr("y", d => svgHeight - yScale(d))
    .attr("width", xWidth)
    .attr("height", d => yScale(d))
    .style("fill", "orange")
    .style("stroke", "red")
    .style("stroke-width", "1px")
    .exit()
    .data(arr)
    .enter()
    .append("text")
    .attr("x",(d,i) => chartMargin+i*(xWidth+gapBar)+(xWidth/4))
    .attr("y", d => svgHeight - yScale(d) - 5)
    .text((d) => d)
    .style("font-size","15")

    plotGenerated = true
}
