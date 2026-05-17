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
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col'>
                <label
                    htmlFor='blog-title'
                    className='mb-3 text-sm font-black uppercase tracking-[0.15em] text-gray-700'
                >
                    Post Title
                </label>

                <input
                    id='blog-title'
                    className='blog-input'
                    type='text'
                    placeholder='Write a headline people remember'
                    value={title}
                    onChange={( e ) => setTitle( e.target.value )}
                    data-testid='title-input'
                    aria-required='true'
                />
            </div>

            <div className='flex flex-col'>
                <label
                    htmlFor='blog-desc'
                    className='mb-3 text-sm font-black uppercase tracking-[0.15em] text-gray-700'
                >
                    Content
                </label>

                <TextEditor
                    name='blog-desc'
                    value={description}
                    placeholder='Craft an article worth sharing with the world.'
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
