import React, {Fragment} from 'react';

const imageList = [
    {src: "la", alt: "First slide"},
    {src: "chicago", alt: "Second slide"},
    {src: "ny", alt: "Third slide"}
];
const slider = [
    {className: 'carousel-control-prev', dataSlide: 'prev', classIcon: 'carousel-control-prev-icon', classText: 'Previous'},
    {className: 'carousel-control-next', dataSlide: 'next', classIcon: 'carousel-control-next-icon', classText: 'Next'},
]

const Carousel = () => {
    return (
        <Fragment>
           <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">  
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        {
                            imageList.map((image, index) =>
                                <li key={index} data-target="#carouselId" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                            )
                        }                        
                    </ul>
                    <div className="carousel-inner" role="listbox">
                        {
                            imageList.map((image, index) =>
                            <div key={index} className={"carousel-item "+ (index === 0 ? 'active' : '')}>
                                <img src={require(`../images/${image.src}.jpg`)} alt={image.alt} />
                            </div>
                            )
                        }
                    </div>
                    {
                        slider.map((slide, index) =>
                        <a  key ={index } className={slide.className} href="#carouselId" role="button" data-slide={slide.dataSlide}>
                            <span className={slide.classIcon} aria-hidden="true"></span>
                            <span className="sr-only">{slide.classText}</span>
                        </a>
                        )
                    }                    
                </div>
            </div>
            </div>
            <br/>
        </Fragment>
    );
}
 
export default Carousel;