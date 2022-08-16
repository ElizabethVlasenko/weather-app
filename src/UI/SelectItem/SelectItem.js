import React from "react";
import "./SelectItem.scss";

export default function SelectItem(props) {
  //       <option name={result.Key} key={result.Key} value={result.LocalizedName}>
  // {result.Country.LocalizedName}
  // </option>
  return (
    <div
      key={props.Key}
      className="selectItem_container"
      onClick={props.action}
    >
      <h4 className="selectItem_header">{props.header}</h4>
      <p className="selectItem_details">{props.details}</p>
    </div>
  );
}
