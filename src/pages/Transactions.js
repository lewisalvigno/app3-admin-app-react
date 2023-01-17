import React, {useEffect, useState} from "react";
import adminLayout from "../hoc/adminLayout"
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios'
import Pusher from 'pusher-js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const Parking = ()=> {
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
          <button>Détails</button>
        </div>
  
      </div>
  
      </div>
    )
  }


  const TransactionTable = ()=> {




    const [data, setData] = useState([])

    useEffect(()=>{

        Pusher.logToConsole = true;

        var pusher = new Pusher('', {
          cluster: 'eu'
        });
    
        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {
        //   alert(JSON.stringify(data.message));
        //   notify(data.message)

          axios.get("http://192.168.1.80:8000/paiements/")
        .then((res)=>{ 
        //   console.log(res.data)
            setData(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })

  
        });
        
        axios.get("http://192.168.1.80:8000/paiements/")
        .then((res)=>{ 
        //   console.log(res.data)
            setData(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
      }, [])



    return(

        <div className="d-flex text-muted">
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
    
        <table className="table">
            <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>ID</th>
                    <th>ClientId</th>
                    <th>Parking</th>
                    <th>Duree</th>
                    <th>Montant</th>
                    <th>Date</th>
                    <th>Periode</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

            {
                data.map((item, index)=>{

                    return(
                        <tr key={item.id} >
                            <td><input type="checkbox"/></td>
                            <td>{item.id}</td>
                            <td>{item.clientId}</td>
                            <td>{item.parking}</td>
                            <td>{item.duree}</td>
                            <td>{item.montant}</td>
                            <td>{item.date}</td>
                            <td>{item.periode}</td>
                            <td>
                                <div className="dropdown table-action-dropdown">
                                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                        <div className="dropdown-divider"></div>
                                        <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    )

                })
            }
{/* 
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>Tarun Dhiman</td>
                    <td>tarun.dhiman@abc.com</td>
                    <td>Website</td>
                    <td>23-aug-2019</td>
                    <td>26-aug-2019</td>
                    <td>26-aug-2019</td>
                    <td>26-aug-2019</td>
                    <td>
                        <div className="dropdown table-action-dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                <div className="dropdown-divider"></div>
                                <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
                */}
               
            </tbody>
        </table>
    </div>

    )

  }


class Transcations extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return (
        <>
        
        <div className="row">

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
              {/* <span className="float-left">Voir Details</span> */}
              </Link>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>

        </div>

            <br/>

       
            <TransactionTable/>
            
        </>
        
        ) 
    }
}

export default adminLayout(Transcations);
