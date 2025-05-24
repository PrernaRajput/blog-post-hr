/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const PostDisplay = ( props ) => {
    const { records } = props;
    const deletePost = ( payload ) => {
        const found = records.filter( item => item.title !== payload.title );
        props.setRecords( found );
    }
    return (
        <div data-testid="posts-container" className="d-flex flex-wrap gap-3">
            {records && records.length > 0 ? (
                records.map( ( item, index ) => (
                    <div key={index} className="card m-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <button
                                className="btn btn-danger"
                                onClick={() => deletePost( item )}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ) )
            ) : null}
        </div>

    );
}

export default PostDisplay;
