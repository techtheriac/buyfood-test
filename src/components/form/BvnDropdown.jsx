import * as React from "react";
import Lock from "../icons/Lock";
import Caret from '../icons/Caret';

const BvnDropDown = () => {
  const [showDropdown, setShowDropdown] = React.useState(true);

  return (
    <div className="background--offwhite bvn__dropdown">
      <div className="container__drop__toggle">
        <div className="flow-hr-xs">
          <Lock />
          <small>Why we need your BVN</small>
        </div>
        
        <div className="flow-hr-xs" onClick={() => setShowDropdown(!showDropdown)}>
          <small>{!showDropdown ? "Show" : "Hide"}</small>
          <Caret />
        </div>
      </div>
      {showDropdown && (
        <div>
          <small>Why we need access to your:</small>
          <ul>
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>Date of birth</li>
          </ul>
          <hr />
          <p>
            Your bvn does not give us access to your bank account or
            transactions
          </p>
        </div>
      )}
    </div>
  );
};

export default BvnDropDown;
