import React from "react";

function Input ( { setTitle, title, description, setDescription } ) {

    const handleTitleChange = ( e ) => {
        setTitle( e.target.value )
    }
    const handleDescriptionChange = ( e ) => {
        setDescription( e.target.value )
    }
    return (
        <div className="layout-column justify-content-center align-items-center">
            <input className="w-100" type="text" placeholder="Enter Title" value={title} onChange={handleTitleChange}
                data-testid="title-input" />
            <textarea className="mt-10 w-100" placeholder="Enter Description" value={description}
                onChange={handleDescriptionChange} data-testid="description-input" />
        </div>
    );
}

export default Input;
