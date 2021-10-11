import React from 'react'
function Buttontest({label}) {
    return (
        <button data-testid="button" className="px-4 py-2 bg-blue-600 rounded-lg shadow-lg text-white ">
            {label}
        </button>
    )
}

export default Buttontest
