import { useMemo } from 'react';

const useToolbarHandlers = ( editorRef ) => {

    return useMemo( () => {
        return {
            undo: () => {
                const quill = editorRef.current?.getEditor();
                quill?.history?.undo();
            },

            redo: () => {
                const quill = editorRef.current?.getEditor();
                quill?.history?.redo();
            },

            bottomAlign: function() {
                const quill = this.quill;
                const editorElement = quill.root;

                editorElement.classList.toggle(
                    'ql-editor--bottom-aligned'
                );
            },
        };
    }, [ editorRef ] );
};

export default useToolbarHandlers;