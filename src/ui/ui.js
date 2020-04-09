import React, { Fragment } from 'react';
import Carousel from './carousel';
import Cards from './cards';
import MultiCard from './multiCards';
import Footer from './footer';
import Header from './header';

export default function Ui() {
    return (
        <Fragment>
            <Header />
            <Carousel />
            <Cards />
            <MultiCard />
            <Footer />
        </Fragment>
    )
}