    const svgWidth = "300px"
    const svgHeight = "120px"

    boxDone = false
    circlesDone = false
    ellipsesDone = false
    polygonsDone = false 
    lineDone = false
    pathDone = false

    function generateBox() 
    {
        if (boxDone===true){
            return;
        }
        d3.select('#box')
        .append("svg")
        .attr("id","svg-box")
        .attr("width",svgWidth)
        .attr("height",svgHeight)
        .style("border","solid 2px black")

        d3.select("#svg-box")
        .append("rect")
        .attr("x",50)
        .attr("y",50)
        .attr("width",75)
        .attr("height",40)
        .attr("fill","green")

        boxDone = true
    }

    function generateCircles() 
    {
        if (circlesDone===true){
            return;
        }
        d3.select('#circles')
        .append("svg")
        .attr("id","svg-circles")
        .attr("width",svgWidth)
        .attr("height",svgHeight)
        .style("border","solid 2px black")

        d3.select("#svg-circles")
        .append("circle")
        .attr("cx",30)
        .attr("cy",30)
        .attr("r",20)
        .attr("fill","red")

        d3.select("#svg-circles")
        .append("circle")
        .attr("cx",170)
        .attr("cy",60)
        .attr("r",50)
        .attr("fill","blue")

        circlesDone = true
    }

    function generateEllipses() 
    {
        if (ellipsesDone===true){
            return;
        }
        d3.select('#ellipses')
        .append("svg")
        .attr("id","svg-ellipses")
        .attr("width",svgWidth)
        .attr("height",svgHeight)
        .style("border","solid 2px black")

        d3.select("#svg-ellipses")
        .append("ellipse")
        .attr("cx",120)
        .attr("cy",60)
        .attr("rx",30)
        .attr("ry",55)
        .attr("fill","blue")

        d3.select("#svg-ellipses")
        .append("ellipse")
        .attr("cx",90)
        .attr("cy",40)
        .attr("rx",40)
        .attr("ry",20)
        .attr("fill","red")
        .style("border","solid 8px black")

        ellipsesDone = true
    }

    function generatePolygons() 
    {
        if (polygonsDone===true){
            return;
        }
        d3.select('#polygons')
        .append("svg")
        .attr("id","svg-polygons")
        .attr("width",500)
        .attr("height","200px")
        .style("border","solid 2px black")

        d3.select("#svg-polygons")
        .append("polygon")
        .attr("points","120,10 200,110 70,150 23,134")
        .style("fill","lime")
        .style("stroke","red")
        .style("stroke-width",2)


        d3.select("#svg-polygons")
        .append("polygon")
        .attr("points","380,20 450,150 180,140 255,195")
        .style("fill","green")
        .style("stroke","brown")
        .style("stroke-width",2)

        ellipsesDone = true
    }

    function generateLine()
    {
        if (lineDone===true){
            return;
        }

        x1 = document.getElementById("line-x1").value
        y1 = document.getElementById("line-y1").value
        x2 = document.getElementById("line-x2").value
        y2 = document.getElementById("line-y2").value

        if (x1.length===0){
            x1 = '20'
        }
        if (y1.length===0){
            y1 = '20'
        }
        if (x2.length===0){
            x2 = '275'
        }
        if (y2.length===0){
            y2 = '100'
        }

        d3.select('#line')
        .append("svg")
        .attr("id","svg-line")
        .attr("width",svgWidth)
        .attr("height",svgHeight)
        .style("border","solid 2px black")

        d3.select("#svg-line")
        .append("line")
        .attr("x1",x1)
        .attr("y1",y1)
        .attr("x2",x2)
        .attr("y2",y2)
        .style("stroke-width",4)
        .style("stroke","blue")

        lineDone = true
    }

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
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

    function getPath(xarr, yarr)
    {
        nPts = xArray.length
        pathStr = "M"+xArray[0]+ " "+yArray[0]+" "
        for (i=1;i<nPts;i++){
            coord = "L"+xarr[i]+" "+yarr[i]
            pathStr+=coord+" "
        }

        pathStr = pathStr.substring(0,pathStr.length-1)
        return pathStr
    }

    function generatePath()
    {
        if (pathDone===true){
            return;
        }

        nPts = 10 // Number of points

        d3.select('#path')
        .append("svg")
        .attr("id","svg-path")
        .attr("width",svgWidth)
        .attr("height",svgHeight)
        .style("border","solid 2px black")

        // Random int arrays
        xArray = getRandomIntArray(min=10,max=200,n=nPts)
        yArray = getRandomIntArray(min=10,max=100, n=nPts)

        for (i=0;i<nPts;i++){

        }
        pathStr = "M"+xArray[0]+ " "+yArray[0]+" "
        for (i=1;i<nPts;i++){
            coord = "L"+xArray[i]+" "+yArray[i]
            pathStr+=coord+" "
        }

        pathStr = getPath(xArray,yArray)

        d3.select("#svg-path")
        .append("path")
        .attr("d",pathStr)
        .style("stroke-width",2)
        .style("stroke","blue")
        .style("fill","none")

        pathDone = true
    }