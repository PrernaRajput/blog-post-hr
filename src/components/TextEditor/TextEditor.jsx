import React, { useEffect, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill-new';
import classNames from 'classnames';
import useQuillSetup from './hooks/useQuillSetup';
import useCharacterCounter from './hooks/useCharacterCounter';
import useFileUpload from './hooks/useFileUpload';
import { getToolbarModules } from './modules/toolbar.modules';

const TextEditor = ({
    value,
    onChange,
    config,
    placeholder,
    withError,
}) => {

    useQuillSetup();

    const editorRef = useRef(null);

    const charCount = useCharacterCounter(value);

    useEffect(() => {
        const quill = editorRef.current?.getEditor();

        if (!quill) { return; }

        quill.clipboard.addMatcher(
            Node.ELEMENT_NODE,
            (node, delta) => {

                delta.ops.forEach((op) => {
                    if (op.attributes) {
                        delete op.attributes.color;
                        delete op.attributes.background;
                        delete op.attributes.font;
                    }
                });

                return delta;
            }
        );
    }, []);

    const {
        uploadedFiles,
        fileError,
    } = useFileUpload({
        initialFiles: [],
        maxFileSize: config.maxFileSize,
        maxFileSizeError: config.maxFileSizeError,
    });

    const modules = useMemo(() => {
        return {
            toolbar: getToolbarModules({
                readOnly: config.readOnly,
                allowImageUploading: config.allowImageUploading,
                allowHighlightBlock: config.allowHighlightBlock,
                handlers: {
                    undo: () => {
                        editorRef.current?.getEditor()?.history?.undo();
                    },
                    redo: () => {
                        editorRef.current?.getEditor()?.history?.redo();
                    },
                },
            }),
            clipboard: {
                matchVisual: true,
                allowed: {
                    tags: ['svg']
                }
            },
        };
    }, [config]);

    const className = classNames('lib-text-editor', {
        'lib-text-editor--error': withError || fileError,
    });

    return (
        <div className={className}>
            <ReactQuill
                ref={editorRef}
                value={value}
                onChange={onChange}
                modules={modules}
                placeholder={placeholder}
                readOnly={config.readOnly}
            />

            {config.maxLength && (
                <div>
                    {charCount}/{config.maxLength}
                </div>
            )}
        </div>
    );
};

export default TextEditor;