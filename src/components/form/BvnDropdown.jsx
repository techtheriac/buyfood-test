import * as React from "react";
import Lock from "../icons/Lock";
import Caret from "../icons/Caret";
import Tick from "../icons/Tick";

const BvnDropDown = () => {
  const [showDropdown, setShowDropdown] = React.useState(true);

  const bvnCredentials = ["Full Name", "Phone Number", "Date of birth"];

  return (
    <div className="background--offwhite bvn__dropdown">
      <div className="container__drop__toggle">
        <div className="flow-hr-xs">
          <Lock />
          <small className="form__label-m">Why we need your BVN</small>
        </div>

        <div
          className="flow-hr-xs"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <small>{!showDropdown ? "Show" : "Hide"}</small>
          <Caret />
        </div>
      </div>
      {showDropdown && (
        <div className="container__bvn__credentials flow-vr-xs">
          <small className="text--muted--01 form__label-sm-thin">
            We only need access to your:
          </small>
          <ul className="flow-vr-xs">
            {bvnCredentials.map((credential, index) => {
              return (
                <li className="flow-hr-xs text--muted--01" key={index}>
                  <Tick fillColor="#56F2C3" />{" "}
                  <span className="form__label-sm-thin">{credential}</span>
                </li>
              );
            })}
          </ul>

          <p>
            🔒 Your bvn does not give us access to your bank account or
            transactions
          </p>
        </div>
      )}
    </div>
  );
};

export default BvnDropDown;
