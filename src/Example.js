import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        // src: 'https://ama.com.au/sites/default/files/iStock_000006188244Large%5B1%5D_1.JPG'
        src:'https://images.pexels.com/photos/1282308/pexels-photo-1282308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        header: 'Sunt 23 de ani de când sănătatea a devenit pentru noi mai mult decât o profesie, o pasiune. Sunt milioane de pacienți care au apelat la noi în căutarea celor mai bune soluții la nevoile lor medicale, iar încrederea lor că întâlnesc la HealthCare profesioniști pasionați, gata oricând să îi ajute, este cea mai importantă resursă a activității noastre.'
        // caption: 'Slide 1',
        // header: 'Slide 1 Header'
    },
    {
        // src: 'https://blog-boom.com/wp-content/uploads/2017/06/Medical-tourim-featured-picture.jpg'
        src:'https://images.pexels.com/photos/905874/pexels-photo-905874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        header: 'Sunt 23 de ani de când sănătatea a devenit pentru noi mai mult decât o profesie, o pasiune. Sunt milioane de pacienți care au apelat la noi în căutarea celor mai bune soluții la nevoile lor medicale, iar încrederea lor că întâlnesc la HealthCare profesioniști pasionați, gata oricând să îi ajute, este cea mai importantă resursă a activității noastre.'

        // altText: 'Slide 2',
        // caption: 'Slide 2',
        // header: 'Slide 2 Header'
    },
    {
        src: 'https://www.enhancedcare.ca/wp-content/uploads/2015/07/banner_slider_212-1.jpg',
        header: 'Sunt 23 de ani de când sănătatea a devenit pentru noi mai mult decât o profesie, o pasiune. Sunt milioane de pacienți care au apelat la noi în căutarea celor mai bune soluții la nevoile lor medicale, iar încrederea lor că întâlnesc la HealthCare profesioniști pasionați, gata oricând să îi ajute, este cea mai importantă resursă a activității noastre.'

        // altText: 'Slide 3',
        // caption: 'Slide 3',
        // header: 'Slide 3 Header'
    }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;