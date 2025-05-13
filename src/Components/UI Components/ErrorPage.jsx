import React from 'react'
import { useRouteError } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    const navigate = useNavigate();

    
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Oops! Page Not Found</h2>
        <h5 className="error-message">
          {error && <p>{error.data}</p>}
        </h5>
        <button id='home-button' onClick={() => navigate('/')}>
          Go to Homepage
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
