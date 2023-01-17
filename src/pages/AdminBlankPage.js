import React, {useEffect, useState} from "react";
import adminLayout from "../hoc/adminLayout"
import { Link } from 'react-router-dom';
import axios from 'axios'
import Pusher from 'pusher-js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Parking = (props)=> {

  const [data, setData] = useState([])
  const [parkingUsed, setParkingUsed] = useState(0)
  // <Parking parkingAddress={parking.parkingAddress} parkingCapacity={parking.parkingCapacity} parkingPrice={parking.parkingPrice} />
  // {require('./../assets/images/parking0.jpg')}
  

    return(
      <div className="parking_him" >
  
      <div>
        <img className="parking_him_img" src={require('./../assets/images/parking0.jpg')} /> 
      </div>
      <div>
  
        <div className="parking_him_det"> <b>{props.parkingAddress}</b> </div> 
        <div className="parking_him_det">Places totales:&nbsp; <h6> {props.parkingCapacity} </h6> </div>
        <div className="parking_him_det">Tarif/H:&nbsp; <h6> {props.parkingPrice} </h6>&nbsp; FCFA </div>
        <div className="parking_him_live" >
          <div>
            <div> <div></div> &nbsp; <b> {props.parkingFree} </b> </div>
            <div> <div></div> &nbsp; <b> {props.parkingUsed} </b> </div>
          </div>
          <button>Libre(s) &nbsp;&nbsp;  - &nbsp;&nbsp; Occupée(s) </button>

        </div>
  
      </div>
  
      </div>
    )
  } 

  

  const DashBottom = ()=> {

    const [parkings, setParkings] = useState([])
    const [curr_parking, setCurr_parking] = useState(0)
    const [currParkingName, setCurrParkingName] = useState("")
    const [parkingUsed, setParkingUsed] = useState(0)
    const notify = (parking) => {
      toast.success(`Nouveau paiement: ${parking}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    // useEffect(()=>{
    
    //   Pusher.logToConsole = true;

    //   var pusher = new Pusher('e6cb6a190c13322ba2c2', {
    //     cluster: 'eu'
    //   });
  
    //   var channel = pusher.subscribe('my-channel');
    //   channel.bind('my-event', function(data) {
    //     alert(JSON.stringify(data.message));
    //   });

    //   },[])
    let curr_p_name = ""

    const allo = (name, num)=>{

      setCurrParkingName(name)
      setCurr_parking(num)
      console.log(currParkingName)
      console.log(curr_parking)

      notify(name)

    }

    useEffect(()=>{

      Pusher.logToConsole = true;

      var pusher = new Pusher('e6cb6a190c13322ba2c2', {
        cluster: 'eu'
      });
  
      var channel = pusher.subscribe('my-channel');
      channel.bind('my-event', function(data) {
        // alert(JSON.stringify(data.message));
        // localStorage.setItem(data.message, 1);
        // notify(data.message)
        curr_p_name = data.message
        // allo()

        if (localStorage.getItem(data.message) !== null) {

          let curr_p = ( parseInt(localStorage.getItem(data.message)))
          localStorage.setItem(data.message, curr_p+1)
          allo(data.message, curr_p+1)

        }else{

          localStorage.setItem(data.message, 1)
          allo(data.message, 1)

        }

      // }

      });

      axios.get("http://192.168.1.80:8000/parkings/")
      .then((res)=>{ 
        setParkings(res.data)

      })
      .catch((err)=>{
        console.log(err)
      })


     
    },[])
    

    

    return(
      <div className="dash_bottom" >

      {/* <Parking/> */}
      {/* <Parking/>
      <Parking/>
      <Parking/> */}

      {


        parkings.map((parking)=>{


        let curr_place = 0
        let freeP = parking.parkingCapacity - curr_place

        if (currParkingName === parking.parkingName) {

          curr_place = curr_parking
          freeP = parking.parkingCapacity - curr_parking

        }

          if (localStorage.getItem(parking.parkingName) !== null) {

            curr_place = ( parseInt(localStorage.getItem(parking.parkingName)))

            freeP = parking.parkingCapacity - curr_place

          }
        
          return <Parking key={parking.id} parkingAddress={parking.parkingAddress} parkingCapacity={parking.parkingCapacity} parkingFree={freeP} parkingUsed={curr_place} parkingPrice={parking.parkingPrice} />
        })
      }

{/* <button onClick={notify("Parking B")}>Notify !</button> */}
<ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      
    </div>
    )

  }


class AdminBlankPage extends React.Component {
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
        
        {/* <div className="col-xl-3 col-sm-6 mb-3">
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

        {/* <div className="col-xl-3 col-sm-6 mb-3">
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
        </div> */}

       
      </div>

     <DashBottom />
        </>
    }
}

export default adminLayout(AdminBlankPage);