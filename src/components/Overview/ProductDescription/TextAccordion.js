import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const TextAccordion = ({title, text}) => {

    return (
        <Accordion allowZeroExpanded="true" className="accordion-wrapper">
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <p className="accordion-title">+ {title}</p>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="accordion-text">{text}</p>
                    </AccordionItemPanel>
                </AccordionItem>
        </Accordion>
    )
}

export default TextAccordion;