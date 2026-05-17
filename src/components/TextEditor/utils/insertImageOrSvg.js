import { IMAGE_TYPE } from 'constants/common';
import { get, isEmpty } from 'lodash';

export const insertImageOrSvg = ( {
    imageSrc,
    signature,
    editorValue,
} ) => {

    const imageClass = 'lib-text-editor__reactQuill__signature';

    if ( IMAGE_TYPE.IMAGE === get( signature, 'type', '' ) ) {
        const image = `
            <br />
            <img
                src="${imageSrc}"
                alt="${get( signature, 'altText', '' )}"
                class="${imageClass}"
            />
        `;

        return `${editorValue}${image}`;
    }

    const base64SVG = `data:image/svg+xml;base64,${btoa( imageSrc )}`;

    const image = `
        <br />
        <img
            src="${base64SVG}"
            alt="${get( signature, 'altText', '' )}"
            class="${imageClass}"
        />
    `;

    return isEmpty( editorValue )
        ? image
        : `${editorValue}${image}`;
};