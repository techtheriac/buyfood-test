import * as React from "react";

const BusinessCategory = () => {
  return (
    <div className="flow-vr-s">
      <h1 className="form__heading">Business Category</h1>

      <div className="wrapper__autofit">
        <div className="wrapper__input__vr">
          <small>Type of your business</small>
          <input className="form__input" />
        </div>

        <div className="wrapper__input__vr">
          <small>Business category</small>
          <input className="form__input" />
        </div>
      </div>

      <div className="wrapper__input__vr">
        <small>Do you use POS Machines for your business?</small>
        <div className="flow-hr-xs">
          <button onClick={(e) => e.preventDefault()} className="btn__pill">
            Yes
          </button>
          <button onClick={(e) => e.preventDefault()} className="btn__pill">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCategory;
