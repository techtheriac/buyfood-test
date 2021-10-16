import * as React from 'react';
import FormContainer from '../form/FormContainer'

const Layout = ({}) => {
  return(
    <main className="container__main">
      <div className="container__side background--gold">
        <figure>
          <img src="https://res.cloudinary.com/techtheriac/image/upload/c_scale,w_259/v1634420285/image_1_zugip5.jpg" width="259" height="253" alt="brand image" />
        </figure>
      </div>

      <div>
      <div>
        <button>Logout</button>
      </div>
        <FormContainer />
      </div>
    </main>
  )
}

export default Layout;