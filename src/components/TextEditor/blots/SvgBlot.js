import { Quill } from 'react-quill-new';

class SvgBlot extends Quill.import( 'blots/embed' ) {
    static create( value ) {
        const node = super.create();

        if ( 'string' === typeof value ) {
            node.innerHTML = value;
        } else {
            node.setAttribute( 'src', value.url || value );
            node.setAttribute( 'alt', value.alt || '' );
        }

        return node;
    }

    static value( node ) {
        return node.innerHTML || node.getAttribute( 'src' );
    }
}

SvgBlot.blotName = 'svg';
SvgBlot.tagName = 'div';
SvgBlot.className = 'ql-svg';

export default SvgBlot;
