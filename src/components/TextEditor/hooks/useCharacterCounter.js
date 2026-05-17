import { useMemo } from 'react';
import { stripHtmlTags } from '../utils/stripHtmlTags';

const useCharacterCounter = ( value = '' ) => {

    return useMemo( () => {
        return stripHtmlTags( value ).length;
    }, [ value ] );
};

export default useCharacterCounter;