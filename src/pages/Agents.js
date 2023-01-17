import React from 'react'
import adminLayout from "../hoc/adminLayout"
import { Link } from 'react-router-dom';


class Agents extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
            <div className="row">
        {/* <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-comments"></i>
              </div>
              <div className="mr-5">26 New Messages!</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">Voir Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div> */}
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-dark o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-thumb-tack"></i>
              </div>
              <div className="mr-5">Transactions</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <Link  tag="a" className="" to="/blank-page" >
              <span className="float-left">Voir Details</span>
              </Link>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-dark o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-user"></i>
              </div>
              <div className="mr-5">Agents
              </div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">Voir Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-dark o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-shopping-cart"></i>
              </div>
              <div className="mr-5">Parkings
              </div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">Voir Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>

       
      </div>

      <div className="dash_bottom" >
{/* 
        <Parking/>
        <Parking/>
        <Parking/>
        <Parking/> */}
        
      </div>
        </>
    }
}

export default adminLayout(Agents);
