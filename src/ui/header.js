import React, {Fragment} from 'react';

export default function Header (props) {
    const menuItems = ['Home','Service', 'Blog','Portfolio','Contact'];
    return (
        <Fragment>
            <div className="row justify-content-center">
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav className="navbar navbar-expand-sm navbar-dark bg-info text-light">
                    <a className="navbar-brand" href="/"><h3 className='font-weight-light'>eNno</h3></a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    {
                       menuItems.map((menuItem, subindex) =>
                        <li key={subindex} className="nav-item">
                            <span className="nav-link">{menuItem}</span >
                        </li>
                       )
                    }                                        
                    </ul>
                    </div>
                </nav>
                </div>
            </div>                
        </Fragment>
    );
}
