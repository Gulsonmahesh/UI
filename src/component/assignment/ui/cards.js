import React, {Fragment} from 'react';

export default function Cards (props) {
    return (
        <Fragment>
            <div className="row justify-content-center mt-2">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="card border-0 ">
                    <div className="card-body">
                        <h4 className="card-title text-center">Multi Purpose Theme</h4>
                        <p className="card-text text-center">
                            Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page.
                        </p>
                    </div>
                </div> 
                </div>               
            </div>
        </Fragment>
    )
}