import React from 'react';
import classNames from 'classnames';

import './Section.scss';

const Section = ({ children, customClass = null, container = true }) => (
    <section className={classNames('app-section', customClass, { container })}>
        {children}
    </section>
);

export default Section;