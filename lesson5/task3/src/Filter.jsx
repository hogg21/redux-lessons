import React from "react";

const Filter =({filterText,count,filter})=>{
    
    return (
      <div className="filter">
        <span className="filter__count">{count}</span>
        <input
          type="text"
          className="filter__input"
          onChange={(e)=>{e.preventDefault();filter(e.target.value)}}
          value={filterText}
        />
      </div>
    );
  }


export default Filter;