import React, { Fragment, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
        <div className="row">
          <div className="col-xs-1-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Counter Demo</h1>
                  <p className="card-text">Counter : {count}</p>
                  <div className="btn-group" role="group" aria-label="Counter Assignment">
                  <button type="button" className="btn btn-primary mr-4" onClick={() => setCount(count + 1)}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <span className="ml-2">Increment Counter</span>
                  </button>
                  <button type="button" className="btn btn-warning" onClick={() => setCount(count - 1)}>
                    <i className="fa fa-minus" aria-hidden="true"></i>
                    <span className="ml-2">Decrement Counter</span>
                  </button>
                </div>
                </div>
              </div>
          </div>  
        </div>
    </Fragment>
  );
}

export default Counter;
