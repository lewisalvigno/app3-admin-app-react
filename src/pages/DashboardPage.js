import React, {useEffect, useState} from "react";
import adminLayout from "../hoc/adminLayout"
import { Link } from 'react-router-dom';
// import useFetch from "./useFetch";
import axios from 'axios'




const Parking = ()=> {

  useEffect(()=>{
  axios.get("http://192.168.1.80/agents/")
  .then((res)=>{ 
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
})

  return(
    <div className="parking_him" >

    <div>
      <img className="parking_him_img" src={require('./../assets/images/parking0.jpg')} /> 
    </div>
    <div>

      <div className="parking_him_det"> <b>Parking A, rue du commerce</b> </div> 
      <div className="parking_him_det">Places totales:&nbsp; <h6>28</h6> </div>
      <div className="parking_him_det">Tarif/H:&nbsp; <h6>200</h6>&nbsp; FCFA </div>
      <div className="parking_him_live" >
        <div>
          <div> <div></div> &nbsp; <b> 7 </b> </div>
          <div> <div></div> &nbsp; <b> 21 </b> </div>
        </div>
        <button>Libre(s) &nbsp;&nbsp;  - &nbsp;&nbsp; Occupée(s) </button>
      </div>

    </div>

    </div>
  )
}

class DashboardPage extends React.Component {
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
              <span className="float-left"> </span>
              </Link>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
{/*         
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
        </div> */}

        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-dark o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-home"></i>
              </div>
              <div className="mr-5">Parkings
              </div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left"></span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>

       
      </div>

      <div className="dash_bottom" >

        <Parking/>
        {/* <Parking/>
        <Parking/>
        <Parking/> */}





        
      </div>
        </>
    }
}

export default adminLayout(DashboardPage);