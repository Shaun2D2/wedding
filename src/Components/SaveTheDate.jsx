import React from 'react';

import Section from './Section';

import './SaveTheDate.scss';

const SaveTheDate = () => (
    <Section customClass="savethedate" container={false}>
        <div className="container">
            <div className="savethedate__wrapper">
                <div className="savethedate__date">
                    <div className="savethedate__text-date">
                        Monday, January 31
                    </div>
                    <div className="savethedate__text-year">
                        2022
                    </div>
                </div>
                <div className="savethedate__seperator" />
                <div className="savethedate__address">
                    <p className="savethedate__address-time">Four Oclock in the evening</p>
                    <p className="savethedate__venue">Regency Gardens</p>
                    <p className="savethedate__address-info">25 N Robson, Mesa, AZ 85201</p>
                    <p className="savethedate__events">Dinner and Dancing to follow</p>
                </div>
            </div>
        </div>
    </Section>
);

export default SaveTheDate;