import React,{useState} from "react";
import {Link} from 'react-router-dom'
import Logo from '../../assets/imgs/awabah-logo.png';
import OverviewSec from "./OverviewSec";
import ReferalSec from "./ReferalSec";

const Referal = () => {
    // const [copySuccess, setSuccess] = useState('');

    return(
        <div className="referal_container">
            <div className="referal_header container-fluid d-none d-md-block d-lg-block">
                <h3>Awabah Referral Scheme</h3>
            </div>
            <div className="sm-referal_header text-center d-sm-block d-md-none d-lg-none">
                <img src={Logo} alt="logo" />
            </div>
            <div className="referal_body col-lg-10 m-auto">
                <div className="sm_referal_overview referal_overview_container col-lg-12 my-5">
                    <ul className="nav nav-pills mb-3 d-sm-block d-md-none d-lg-none" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Overview</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Referal</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <OverviewSec/>
                        </div>
                        <div className="tab-pane fade show_lg" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <ReferalSec/>
                        </div>
                    </div>
                </div>
                {/* <div className="referal_overview_container col-lg-12 my-5">
                    <OverviewSec/>
                    <ReferalSec/>
                    <div className="referal_faq">
                        <div className="referal_overview">
                            <h2>Frequently Asked Questions</h2>
                            <Link to="/faq">Learn more about how referrals work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-angle-right" aria-hidden="true"></i></span></Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Referal;