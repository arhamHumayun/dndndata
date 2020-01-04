import React, { useRef, useEffect, useState }from 'react';
import './App.css';
import lol from './data/fixedCharacterList.json'
import AppHeader from './components/AppHeader.js'
import rd3 from 'react-d3-library'
import { select } from 'd3';
const RD3Component = rd3.Component;


function App(){

    var result = []
    for (var i = 0; i < lol.length; i++) {
      result.push(lol[i].level)
    }
    result.sort((a, b) => (a - b));

    console.log(result)

    const [data, setData] = useState(result);
    const svgRef = useRef();

    // useEffect is called on every data change
    useEffect(() => {
      console.log(svgRef)
      const svg = select(svgRef.current);
      svg
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("r", value => value * 2)
        .attr("cx", value => value * 5)
        .attr("cy", value => value * 5)
        .attr("stroke", "red")
    }, [data]);

    return (
      <div className="App">
        <AppHeader/>
        <svg ref={svgRef}></svg>

      </div>
    );

  }

  export default App;