import React, { Fragment } from 'react';

const icons = [{icon: 'fab fa-facebook-f', id: 'fb'}, {icon: 'fab fa-twitter', id: 'tw' }, 
{icon: 'fab fa-linkedin-in', id: 'ln'}, {icon: 'fab fa-pinterest', id: 'pin'},
{icon: 'fab fa-google-plus-g', id: 'gp'}, {icon: 'fa fa-arrow-up', id: 'backtotop'}];

function onClickhandler(id) {
    if(id === 'backtotop'){
        window.scrollTo(0, 0);
    }
}
export default function Footer() {
    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <footer className="page-footer text-light">
                    <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 bg-info">
                        <div className="text-center">
                            <p><i className="far fa-copyright" aria-hidden="true"> </i> &nbsp;eNno Theme. All Rights Reserved.<br/>Designed by BootstrapMade</p>                            
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center bg-info">
                    <p className="mt-4">
                        {
                           icons.map((icon, index) => 
                           <i key={index} id={icon.id} className={icon.icon + ' mr-4'} onClick={() => onClickhandler(icon.id)}></i>
                           )
                        }                        
                    </p>                    
                    </div>
                    </div>
                </footer>
                </div>
            </div>
        </Fragment>
    )
}