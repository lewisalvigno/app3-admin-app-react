import React from "react";
import adminLayout from "../hoc/adminLayout"
import { Link } from 'react-router-dom';


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

  const ParkingRecette = ()=> {

    return(

      <div className="parking_recette" >

        <div>

          <div className="recette_circle" >

            25000
            
          </div>

        </div>

        <div>
          <span>Montant(FCFA)</span>
          <br/>
          <span>Parking A</span>

          <br/>
        </div>

      </div>

    )

  }

  const ParkingIncome = ()=> {

    return(

      <div className="parking_income_divs" > 

          <ParkingRecette />      
          <ParkingRecette />      
          <ParkingRecette />      
          <ParkingRecette />      

      </div>

        ) }

class Revenus extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return (
            <>

            <div className="row">
              <div className="recette_date" >Aujourd'hui</div>
            </div>
            <ParkingIncome />
            
        </>
        
        ) 
    }
}

export default adminLayout(Revenus);