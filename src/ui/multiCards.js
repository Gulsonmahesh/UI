import React, { Fragment } from 'react';

const cardBodyText = 'Lorem ipsum dolor sir amet consectetur adipiscing  elit Cras suscipit arcu libero';
const cardBodyButtonText = 'Read More';
const cardBodyMain = [
    {title:'Responsive',icon:'fab fa-gratipay'}, {title:'Multi Purpose',icon:'fa fa-desktop'},
    {title:'Easy Customize',icon:'fa fa-location-arrow'}
];
const latestPosts = ['This is awesome post title', 'Awesome features are aewsome', 
'Create your own awesome Website', 'Wow, this is fourth post title'];
const contactUs = [
    {icon:'fas fa-envelope', innerText:'example@gmail.com'},
    {icon:'fas fa-phone', innerText:'+345 578 57 49 416'},
    {icon:'fas fa-home', innerText:'Enno inc | PO Box 23456 Little Lonsdale St, New York Victoria 8011 USA'}
];
export default function MultiCard (props) {
    return (
        <Fragment>
            <div className="row mt-2 justify-content-center">
                {
                    cardBodyMain.map((body, index) =>
                    <div key={index} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="card border-0 text-center">
                    <img className="card-img-top" src="holder.js/100x180/" alt="" />
                    <div className="card-body">
                        <h4 className="card-title mt-4">{body.title}</h4>
                        <div className="card-text ">
                            <i className={'text-info mt-4 ' + body.icon} aria-hidden="true"></i>
                            <p className="mt-3 pb-3"> {cardBodyText}</p>
                                <button type="button" className="btn btn-primary-outline border">{cardBodyButtonText}</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    )
                }
            </div>
            <div className="row mt-2 justify-content-center">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card border-0 text-center mt-2">
                    <div className="card-body">
                        <h4 className="card-title text-info">eNno</h4>
                        <p className="card-text text-left">{cardBodyText}{cardBodyText}</p>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card border-0 text-center mt-2">
                    <div className="card-body">
                        <h4 className="card-title">Latest Posts</h4>
                        <div className="card-text mt-4">
                            <ul className="list-group list-group-flush">
                                {
                                    latestPosts.map((post, index) =>
                                    <li key= {index} className='border-bottom text-left text-capitalize list-group-item'>{post}</li>
                                    ) 
                                }
                            </ul>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card border-0 text-center mt-2">
                    <div className="card-body">
                        <h4 className="card-title">Stay in touch</h4>
                        <div className="card-text font-weight-light">
                            {
                                contactUs.map((contact, index)=>
                                <div key={index} className="card border-0 pb-1">
                                <div className="card-body text-left">
                                    <i className={contact.icon}></i><span className='ml-2'>{contact.innerText}</span>
                                </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
}
