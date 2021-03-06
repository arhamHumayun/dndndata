import React, { useRef, useEffect, useState } from 'react';
import jsonData from '../data/fixedCharacterList.json'
import { select } from 'd3';

export default function CircleTime(){

    var result = []
    for (var i = 0; i < jsonData.length; i++) {
      result.push(jsonData[i].level)
    }
    result.sort((a, b) => (a - b));

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