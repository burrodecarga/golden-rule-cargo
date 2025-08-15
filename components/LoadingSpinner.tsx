// LoadingSpinner.jsx
import React from 'react'

const LoadingSpinner=() => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
        }}>
            <div style={{
                border: '4px solid #f3f3f3', /* Light grey */
                borderTop: '4px solid #3498db', /* Blue */
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                animation: 'spin 1s linear infinite'
            }}></div>
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
        </div>
    )
}

export default LoadingSpinner