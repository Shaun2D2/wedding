import React from 'react';

import './Section.scss';

const Section = ({ children }) => (
    <section className="container app-section">
        {children}
    </section>
);

export default Section;