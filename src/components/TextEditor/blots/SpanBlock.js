import { Quill } from 'react-quill-new';

class SpanBlock extends Quill.import( 'blots/inline' ) {
    static create() {
        const node = super.create();

        node.classList.add( 'ql-editor__spanBlock' );

        return node;
    }
}

SpanBlock.blotName = 'spanBlock';
SpanBlock.tagName = 'div';

export default SpanBlock;
