import React from 'react';
import TextEditor from './TextEditor';

function Input( {
    setTitle,
    title,
    description,
    setDescription
} ) {

    const handleDescriptionChange = ( payload ) => {
        setDescription( payload );
    };

    return (
        <div className='flex flex-col gap-4'>
            {/* Title */}
            <div className='flex flex-col'>
                <label
                    htmlFor='blog-title'
                    className='mb-1 text-sm font-semibold text-gray-700'
                >
                    Post Title <span aria-hidden='true'>*</span>
                </label>

                <input
                    id='blog-title'
                    className='p-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none'
                    type='text'
                    placeholder='e.g.,This Is Probably a Brilliant Headline'
                    value={title}
                    onChange={( e ) => setTitle( e.target.value )}
                    data-testid='title-input'
                    aria-required='true'
                />
            </div>

            {/* Description */}
            <div className='flex flex-col'>
                <label
                    htmlFor='blog-desc'
                    className='mb-1 text-sm font-semibold text-gray-700'
                >
                    Content <span aria-hidden='true'>*</span>
                </label>

                <TextEditor
                    name='blog-desc'
                    value={description}
                    placeholder='A compelling summary will appear here once inspiration or caffeine arrive.'
                    onChange={handleDescriptionChange}
                    data-testid='description-input'
                    config={{
                        maxLength: 1000,
                        allowImageUploading: true,
                        allowHighlightBlock: true,
                        preserveWhitespace: true,
                    }}
                />
            </div>
        </div>
    );
}

export default Input;