import React from "react";

const Checkbox = (props) => {
  return (
    <tr>
      <td>
        <input
          key={props.id}
          onClick={props.handleCheckChieldElement}
          type="checkbox"
          checked={props.isChecked}
          value={props.value}
        />{" "}
      </td>
      <td>{props.value}</td>
    </tr>
  );
};
export default Checkbox;
