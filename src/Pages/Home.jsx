import React from 'react';

import Hero from '../Components/Hero';
import Section from '../Components/Section';
import Nav from '../Components/Navigation';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import SaveTheDate from '../Components/SaveTheDate';

import './Home.scss';

const Home = () => (
    <div className="home">
        <Nav />
        <Hero />
        <SaveTheDate />
        <Section>
            <Card>
                Vivamus congue nulla felis, semper laoreet urna porttitor semper. Nullam a enim erat. Nullam tempus massa eu purus faucibus vulputate. Proin convallis tortor diam, in aliquam neque lacinia non. Nullam bibendum ut lectus a convallis. Integer eu libero et orci dignissim imperdiet. Morbi condimentum, arcu in sagittis aliquet, nulla nunc semper tortor, feugiat ornare urna risus nec mi. Nullam vel augue id sem lobortis molestie ut et neque. Vestibulum urna erat, consequat sed turpis et, placerat fermentum justo. Vestibulum aliquam, magna vitae finibus pulvinar, mauris leo aliquam erat, eu finibus purus ex eu justo. Proin at lacinia enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In condimentum fermentum mi, at ultricies sapien pellentesque ac. Duis quis dapibus neque. Pellentesque porta turpis ac libero sagittis pharetra.
            </Card>
        </Section>
        <Footer />
    </div>
);

export default Home;