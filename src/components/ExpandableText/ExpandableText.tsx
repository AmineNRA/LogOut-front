import { useState } from "react";

type ExpandableTextProps = {
    text: string,
    amountOfWords: number
}

export default function ExpandableText({ text, amountOfWords }: ExpandableTextProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const splittedText = text.split(' ');
    const itCanOverflow = splittedText.length > amountOfWords;
    const beginText = itCanOverflow ?
        splittedText.slice(0, amountOfWords).join(' ') :
        text;
    const endText = splittedText.slice(amountOfWords).join(' ');

    return (
        <p>
            {beginText}
            {itCanOverflow && <span>...</span>}
            <span className={`${!isExpanded && 'hidden'}`}>{endText}</span>
            <span className='text-app-hover cursor-pointer'
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Voir moins' : 'Voir plus'}</span>
        </p>
    )
}