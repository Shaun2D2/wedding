import React from 'react';

import './Footer.scss';

const Footer = () => (
    <div className="app-footer">
        <div className="app-footer__address">
            Regency Gardens <br />
            25 N Robson <br />
            Mesa, AZ 85201 <br />
        </div>
        <div className="app-footer__events">
            Ceremony: 4:30 - 5:00 PM <br />
            Reception: 5:00 - 10:00 PM <br />
        </div>
        <div className="app-footer__contact">
            Questions? contact us at <br />
            <a href="mailto:help@leslieshaunwedding.com">help@leslieshaunwedding.com</a>
        </div>
    </div>
);

export default Footer;