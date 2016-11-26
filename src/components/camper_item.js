/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable */

import React from "react";

const CamperItem = props => {
  return (
    <tr>
      <td className="numberTh">{props.i+1}</td>
      <td><img className="avatarImage" src={props.camper.img} alt="Avatar image"></img>{props.camper.username}</td>
      <td className="align-right">{props.camper.recent}</td>
      <td className="align-right">{props.camper.alltime}</td>
    </tr>
  );
};

CamperItem.PropType = {
  camper: React.PropTypes.object
};

export default CamperItem;
