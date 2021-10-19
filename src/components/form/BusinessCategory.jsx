import * as React from "react";

const BusinessCategory = () => {
  let fadeContainer = React.useRef(null);

  React.useEffect(() => {
    fadeContainer.classList.add("fade");
  }, []);

  return (
    <div
      ref={(el) => {
        fadeContainer = el;
      }}
      className="flow-vr-s"
    >
      <h1 className="form__heading">Business Category</h1>

      <div className="wrapper__autofit">
        <div className="wrapper__input__vr">
          <small className="form__label-sm">Type of your business</small>

          <select className="form__input">
            <option value="Option 1"></option>
          </select>
        </div>

        <div className="wrapper__input__vr">
          <small className="form__label-sm">Business category</small>

          <select className="form__input">
            <option value="Option 1"></option>
          </select>
        </div>
      </div>

      <div className="wrapper__input__vr">
        <small className="form__label-sm">
          Do you use POS Machines for your business?
        </small>
        <div className="flow-hr-xs toggle__btn__group">
          <input
            type="radio"
            name="pos"
            id="isPos"
            value="small"
            defaultChecked
          />
          <label htmlFor="isPos" className="btn__pill no-margin">
            Yes
          </label>

          <input type="radio" name="pos" id="notPos" value="small" />
          <label htmlFor="notPos" className="btn__pill">
            No
          </label>
        </div>
      </div>
    </div>
  );
};

export default BusinessCategory;
