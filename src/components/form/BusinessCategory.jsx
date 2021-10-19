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
        <div className="flow-hr-xs toggle__btn__group">
        <input type="radio" name="pos" id="isPos" value="small" checked />
          <label 
            // onClick={(e) => e.preventDefault()} 
            for="isPos" 
            className="btn__pill no-margin">
            Yes
          </label>

          <input type="radio" name="pos" id="notPos" value="small" checked />
          <label 
            // onClick={(e) => e.preventDefault()} 
            for="notPos" 
            className="btn__pill">
            No
          </label>
        </div>
      </div>
    </div>
  );
};

export default BusinessCategory;
