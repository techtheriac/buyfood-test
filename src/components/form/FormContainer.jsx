import * as React from "react";
import BusinessCategory from "./BusinessCategory";
import SocialHandles from "./SocialHandles";
import VerifyAccount from "./VerifyAccounts";

const FormContainer = () => {
  const [formIndex, setformIndex] = React.useState(1);

  return (
    <div className="flow-vr">
      <div className="form__wrapper__steps flow-hr-m container__form__progress">
        <p>
          <span>1</span> Verify Account
        </p>
        <p>
          <span>2</span> Social Handlers
        </p>
        <p>
          <span>3</span> Business Category
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
