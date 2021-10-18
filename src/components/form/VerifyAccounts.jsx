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
        <span className="flow-hr-xs">
          <button
            className="btn__pill"
            onClick={(e) => {
              showBvnInput();
              e.preventDefault();
            }}
          >
            BVN
          </button>

          <button
            className="btn__pill"
            onClick={(e) => {
              showPersonalAccountInput();
              e.preventDefault();
            }}
          >
            Personal Account Number
          </button>
        </span>
      </div>

      <div>
        {bvnInput ? (
          <div className="wrapper__input__vr">
            <small>Bank Verification Number (11-digits)</small>
            <input className="form__input" />
          </div>
        ) : (
          <div className="wrapper__space-between">
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
