import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/">
                    <img className="parkit_logo" alt="Alt content" src={require('./../assets/images/app_ico0.png')} />
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Link tag="a" className="" to="/">
                            <i className="fa fa-dashboard"></i> Tableau de bord
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/blank-page">
                            <i className="fa fa-thumb-tack"></i> Parkings
                        </Link>
                    </li>
                    {/* <li className="border-top my-3"></li> */}
                    <li className="mb-1">
                        <Link tag="a" className="" to="/transactions">
                        <i className="fa fa-exchange" aria-hidden="true"></i> Transactions
                        </Link>
                    </li>

                    {/* <li className="mb-1">
                        <Link tag="a" className="" to="/typography">
                        <i className="fa fa-exchange" aria-hidden="true"></i> Typo
                        </Link>
                    </li> */}

                    {/* <li className="mb-1">
                        <Link tag="a" className="" to="/agents-list">
                        <i className="fa fa-user" aria-hidden="true"></i> Agents 
                        </Link>
                    </li> */}

                    {/* <li className="mb-1">
                        <Link tag="a" className="" to="/revenus">
                        <i className="fa fa-money" aria-hidden="true"></i> Revenus 
                        </Link>
                    </li> */}
                    
                    {/* collapsable list item example */}
                    {/* <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Opportunity
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Overview</a></li>
                            <li><a href="#" className="rounded">Weekly</a></li>
                            <li><a href="#" className="rounded">Monthly</a></li>
                            <li><a href="#" className="rounded">Annually</a></li>
                        </ul>
                        </div>
                    </li> 
                    <li className="border-top my-3"></li> */}
                   
                </ul>
            </PerfectScrollbar>
            <div className="dropdown fixed-bottom-dropdown">
                <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://via.placeholder.com/50" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <span>Park-It Admin</span>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><Link className="dropdown-item" to="/profile"><i className="fa fa-user-circle" aria-hidden="true"></i> Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/login"><i className="fa fa-sign-out" aria-hidden="true"></i> Se déconnecter</Link></li>
                </ul>
            </div>
        </div>
    }
}

export default Sidebar;