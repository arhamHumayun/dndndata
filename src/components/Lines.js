import React, { useRef, useEffect, useState } from 'react';
import { select, line, curveCardinal, axisBottom } from 'd3';


export default function Lines(){

    const [data, setData] = useState([0,50,40,70,20,10,55]);
    const svgRef = useRef();

    const xAxis = axisBottom()

    // useEffect is called on every data change
    useEffect(() => {
      console.log(svgRef)
      const svg = select(svgRef.current);
      const myLine = line()
                    .x((value, index) => index * 50)
                    .y(value => value)
                    .curve(curveCardinal)
      svg.selectAll("path")
         .data([data])
         .join("path")
         .attr("d", value => myLine(value))
         .attr("fill", "none")
         .attr("stroke", "blue");
    }, [data]);

    return (
        <div>
        <svg ref={svgRef}></svg>
        <br />
        <button onClick={() => setData(data.map(value => value + 5))}>
          Update data
        </button>
        <button onClick={() => setData(data.filter(value => value < 35))}>
          Filter data
        </button>
      </div>
        );
}
