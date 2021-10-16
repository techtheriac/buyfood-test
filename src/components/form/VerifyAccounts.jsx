import * as React from 'react';

const VerifyAccount = () => {

  const [showDropdown, setShowDropdown] = React.useState(false);
  const [bvnInput, setBvnInput] = React.useState(true);

  return (
    <div>
      <h1>Verify Account</h1>

      <div>
        <small>Select a verification method</small>
        <span>
          <button onClick={(event) => {
            event.preventDefault();
            setBvnInput(true)
          }}>bvn</button>
          <button onClick={(event) => {
            event.preventDefault();
            setBvnInput(false);
          }}>personal account number</button>
        </span>
      </div>

      <div>
        {
          bvnInput ?  (
            <div>
              <small>Bank Verification Number (11-digits)</small>
              <input />
            </div>
          ) : (
            <div>
              <div>
                <small>Account Number</small>
                <input />
              </div>

              <div>
                <small>Selec Bank</small>
                <input />
              </div>
            </div>
          )
        }
      </div>

        <div>
        {
          showDropdown && (
            <div>
              <small>Why we need access to your:</small>
              <ul>
                <li>Full Name</li>
                <li>Phone Number</li>
                <li>Date of birth</li>
              </ul>
              <hr />
              <p>Your bvn does not give us access to your bank account or transactions</p>
            </div>
          )
        }
      </div>
      
    </div>
  )
}

export default VerifyAccount;