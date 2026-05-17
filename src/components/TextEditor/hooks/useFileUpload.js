import { useState } from 'react';
import { nanoid } from 'nanoid';

const useFileUpload = ( {
    initialFiles = [],
    maxFileSize,
    maxFileSizeError,
} ) => {

    const [ uploadedFiles, setUploadedFiles ] = useState( initialFiles );
    const [ fileError, setFileError ] = useState( '' );

    const uploadFiles = ( files = [] ) => {
        setFileError( '' );

        const processedFiles = [];

        Array.from( files ).forEach( ( file ) => {
            if ( file.size > maxFileSize * 1024 * 1024 ) {
                setFileError( maxFileSizeError );
                return;
            }

            processedFiles.push( {
                id: nanoid(),
                name: file.name,
                size: file.size,
                type: file.type,
                file,
            } );
        } );

        const updatedFiles = [ ...uploadedFiles, ...processedFiles ];

        setUploadedFiles( updatedFiles );

        return {
            files: updatedFiles,
            error: '',
        };
    };

    return {
        uploadedFiles,
        fileError,
        uploadFiles,
    };
};

export default useFileUpload;