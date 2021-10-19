import * as React from "react";

const SocialHandles = () => {
  return (
    <div className="flow-vr-s">
      <div>
        <h1 className="form__heading">Social Handles</h1>
        <small className="text--muted">
          Enter your business social handles
        </small>
      </div>

      <div className="wrapper__input__vr">
        <small className="form__label-sm">Enter your abeg tag</small>
        <input placeholder="@" className="form__input" />
      </div>

      <div className="wrapper__autofit">
        <div className="wrapper__input__vr">
          <small className="form__label-sm">Instagram</small>
          <input placeholder="@" className="form__input" />
        </div>

        <div className="wrapper__input__vr">
          <small className="form__label-sm">Twitter</small>
          <input placeholder="@" className="form__input" />
        </div>
      </div>
    </div>
  );
};

export default SocialHandles;
