import { useEffect } from 'react';
import { Quill } from 'react-quill-new';
import SvgBlot from '../blots/SvgBlot';
import SpanBlock from '../blots/SpanBlock';

let isSetupDone = false;

const useQuillSetup = () => {
    useEffect( () => {
        if ( isSetupDone ) {
            return;
        }

        Quill.register( SvgBlot );
        Quill.register( SpanBlock );

        const SizeStyle = Quill.import( 'attributors/style/size' );
        SizeStyle.whitelist = [ '8px', '12px', '14px', '16px' ];

        Quill.register( SizeStyle, true );

        isSetupDone = true;
    }, [] );
};

export default useQuillSetup;