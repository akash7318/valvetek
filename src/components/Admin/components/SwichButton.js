import React, { useState } from 'react'

function SwichButton(props) {

    const [isChecked, setIsChecked] = useState(props.checked);

    const checked = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" onChange={checked} checked={isChecked} />
            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
    )
}

export default SwichButton