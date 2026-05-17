import { Quill } from 'react-quill-new';
const icons = Quill.import('ui/icons');

icons.undo = `
<svg viewBox="0 0 18 18">
	<polygon class="ql-fill ql-stroke" points="6 10 4 12 6 14 6 10"></polygon>
	<path
		class="ql-stroke"
		d="M8,13h4a2,2 0 1,0 0-4H4"
	></path>
</svg>
`;

icons.redo = `
<svg viewBox="0 0 18 18">
	<polygon class="ql-fill ql-stroke" points="12 10 14 12 12 14 12 10"></polygon>
	<path
		class="ql-stroke"
		d="M10,13H6a2,2 0 1,1 0-4h8"
	></path>
</svg>
`;

export const getToolbarModules = ({
    readOnly,
    allowImageUploading,
    allowHighlightBlock,
    handlers,
}) => {

    if (readOnly) {
        return false;
    }

    class SpanBlock extends Quill.import('blots/block') {
        static create() {
            const node = super.create();
            node.setAttribute('class', 'ql-editor__spanBlock');
            node.style.backgroundColor = '#f3f3f3';
            node.style.padding = '16px';
            node.style.borderRadius = '8px';
            node.style.fontSize = '14px';
            node.style.lineHeight = '22px';
            return node;
        }
    }
    SpanBlock.blotName = 'spanBlock';
    SpanBlock.tagName = 'div';
    Quill.register(SpanBlock);

    return {
        container: [
            [{ size: ['8px', '12px', '14px', '16px', '24px'] }],
            ['bold', 'italic', 'underline'],
            [{ align: [] }],
            [{ color: ['#282828', '#186997', '#ff2323', '#006666', '#fff33b'] }],
            [{ font: ['sans-serif', 'serif', 'monospace', 'Ubuntu-Regular'] }],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            allowImageUploading ? ['image'] : [],
            allowHighlightBlock ? ['spanBlock'] : [],
            ['undo', 'redo'],
        ],
        handlers,
    };
};

