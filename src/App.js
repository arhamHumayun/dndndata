import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import lol from './data/fixedCharacterList.json'
import AppHeader from './components/AppHeader.js'
import { select, line, curveCardinal } from 'd3';
import Circles from './components/Circles.js'
import Lines from './components/Lines.js'

function App(){

    var result = []
    for (var i = 0; i < lol.length; i++) {
      result.push(lol[i].level)
    }
    result.sort((a, b) => (a - b));

    console.log(result)

    const [data, setData] = useState([0,50,40,70,20,10,55]);
    const svgRef = useRef();

    // useEffect is called on every data change
    useEffect(() => {
      console.log(svgRef)
      const svg = select(svgRef.current);
      const myLine = line()
                    .x((value, index) => index * 50)
                    .y(value => value)
                    .curve(curveCardinal)
      // svg
      //   .selectAll("circle")
      //   .data(data)
      //   .join("circle")
      //   .attr("r", value => value * 2)
      //   .attr("cx", value => value * 5)
      //   .attr("cy", value => value * 5)
      //   .attr("stroke", "red")
      svg.selectAll("path")
         .data([data])
         .join("path")
         .attr("d", value => myLine(value))
         .attr("fill", "none")
         .attr("stroke", "blue");
    }, [data]);

    return (
      <div className="App">
        <AppHeader/>
        <Circles/>
        <Lines/>
      </div>
    );

  }

  export default App;