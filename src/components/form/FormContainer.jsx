import * as React from 'react';
import BusinessCategory from './BusinessCategory';
import SocialHandles from './SocialHandles';
import VerifyAccount from './VerifyAccounts';

const FormContainer = () => {
  const [routeIndex, setRouteIndex] = React.useState(1);

  return (
    <div>
      <div>
        <p><span>1</span> Verify Account</p>
        <p><span>2</span> Social Handlers</p>
        <p><span>3</span> Business Category</p>
      </div>

      <div>
        <small>Step {routeIndex}/3</small>
      </div>

      <div>

      {
        routeIndex == 2 ? (
          <SocialHandles />
        ) : 
        routeIndex == 3 ? (
          <BusinessCategory />
        ) : (
          <VerifyAccount /> 
        )
        
      }
        
      </div>


      <div>
        <button onClick={() => {
          if(routeIndex == 3) {
            return;
          }
          setRouteIndex(routeIndex + 1)}
        }
        >
          {
            routeIndex == 2 ? "Confirm Social Handler" : routeIndex == 3 ? "Complete" : "Continue"
          }
        </button>
      </div>

    </div>
  )
}

export default FormContainer;