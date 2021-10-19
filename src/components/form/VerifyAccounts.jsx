import * as React from "react";
import BvnDropdown from "./BvnDropdown";

const VerifyAccount = () => {
  const [showDropdown, setShowDropdown] = React.useState(true);
  const [bvnInput, setBvnInput] = React.useState(true);

  function showBvnInput() {
    setBvnInput(true);
  }

  function showPersonalAccountInput() {
    setBvnInput(false);
    setShowDropdown(false);
  }

  return (
    <div className="flow-vr-s">
      <h1 className="form__heading">Verify Account</h1>

      <div className="wrapper__input__vr">
        <small>Select a verification method</small>

        <span className="flow-hr-xs toggle__btn__group">
        <input type="radio" name="account" id="bvn" value="small" checked />
          <label
            for="bvn"
            className="btn__pill no-margin"
            onClick={(e) => {
              showBvnInput();
            }}
          >
            BVN
          </label>
          
          <input type="radio" name="account" id="personalAccount" value="small" />
          <label
            for="personalAccount"
            className="btn__pill"
            onClick={(e) => {
              showPersonalAccountInput();
            }}
          >
            Personal Account Number
          </label>
        </span>
      </div>

      <div>
        {bvnInput ? (
          <div className="wrapper__input__vr">
            <small>Bank Verification Number (11-digits)</small>
            <input className="form__input" />
          </div>
        ) : (
          <div className="wrapper__autofit">
            <div className="wrapper__input__vr">
              <small>Account Number</small>
              <input className="form__input" />
            </div>

            <div className="wrapper__input__vr">
              <small>Select Bank</small>
              <input className="form__input" />
            </div>
          </div>
        )}
      </div>

      <div>{bvnInput && <BvnDropdown />}</div>
    </div>
  );
};

export default VerifyAccount;
