import * as React from "react";
import BusinessCategory from "./BusinessCategory";
import SocialHandles from "./SocialHandles";
import VerifyAccount from "./VerifyAccounts";
import Tick from "../icons/Tick";

const FormContainer = () => {
  const [formIndex, setformIndex] = React.useState(1);
  
  return (
    <div className="flow-vr">
      <div className="form__wrapper__steps flow-hr-m container__form__progress">
        <div>
          {formIndex == 2 || formIndex == 3 ? (
            <span className="form__progress-tick">
              <Tick fillColor="#006AFF" />
            </span>          
          ) : (
            <span className="form__progress-pill">1</span>
          )}
          <small>Verify Account</small>
        </div>
        <div>
          { formIndex !== 3 ? (
            <span className="form__progress-pill">2</span>
          ) : (
            <span className="form__progress-tick">
              <Tick fillColor="#006AFF" />
            </span>
          )}
          <small>Social Handlers</small>
        </div>
        <p>
          {formIndex == 1 || formIndex == 2 ? (
            <span className="form__progress-pill">3</span>
          ) : (
            <span className="form__progress-tick">
              <Tick fillColor="#006AFF" />
            </span>
          )}
          <small>Business Category</small>
        </p>
      </div>

      <div className="my-m">
        <small className="text--muted">Step {formIndex}/3</small>
      </div>

      <form>
        <div>
          {formIndex == 2 ? (
            <SocialHandles />
          ) : formIndex == 3 ? (
            <BusinessCategory />
          ) : (
            <VerifyAccount />
          )}
        </div>

        <div className="container__btn__continue">
          <button
            className="btn__blue"
            onClick={(event) => {
              if (formIndex == 3) {
                return;
              }
              setformIndex(formIndex + 1);
              event.preventDefault();
            }}
          >
            {formIndex == 2
              ? "Confirm Social Handler"
              : formIndex == 3
              ? "Complete"
              : "Continue"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
