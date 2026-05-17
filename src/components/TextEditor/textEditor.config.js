import { noop } from 'lodash';
import PropTypes from 'prop-types';

export const config = {
    readOnly: false,
    maxLength: null,
    required: false,
    withoutBorder: false,
    preserveWhitespace: true,
    allowImageUploading: false,
    allowHighlightBlock: true,
    autoFocus: false,

    uploadButtonConfig: {
        allowFileUpload: false,
        icon: '',
        maxFileSize: 10,
        maxFileSizeError: '',
        acceptedFileTypes: null,
    },
};

export const defaultProps = {
    name: 'textEditor',
    placeholder: '',
    theme: 'snow',
    onChange: noop,
    value: '',
    config,
    errorMessage: '',
    withError: false,
    files: [],
};

export const propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    theme: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    withError: PropTypes.bool,
    errorMessage: PropTypes.string,
    files: PropTypes.array,

    config: PropTypes.shape( {
        readOnly: PropTypes.bool,
        maxLength: PropTypes.number,
        required: PropTypes.bool,
        withoutBorder: PropTypes.bool,
        preserveWhitespace: PropTypes.bool,
        allowImageUploading: PropTypes.bool,
        allowHighlightBlock: PropTypes.bool,
        autoFocus: PropTypes.bool,

        uploadButtonConfig: PropTypes.shape( {
            allowFileUpload: PropTypes.bool,
            icon: PropTypes.string,
            maxFileSize: PropTypes.number,
            maxFileSizeError: PropTypes.string,
            acceptedFileTypes: PropTypes.array,
        } ),
    } ),
};