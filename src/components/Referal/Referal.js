import React,{useState} from "react";
import {Link} from 'react-router-dom'
import Copy from '../../assets/imgs/copy.png';
import Logo from '../../assets/imgs/awabah-logo.png';
import Modal from './Modal'
import Table from "./Table";

const Referal = () => {
    // const [copySuccess, setSuccess] = useState('');

    return(
        <div className="referal_container">
            <div className="referal_header container-fluid d-none d-md-block d-lg-block">
                <h3>Awabah Referral Scheme</h3>
            </div>
            {/* <div className="sm-referal_header">
                <img src={Logo} alt="logo" />
            </div> */}
            <div className="referal_body col-lg-10 m-auto">
                <div className="referal_overview_container col-lg-12 my-5">
                    <div className="d-flex">
                        <div className="col-lg-4 mr-auto p-0 referal_overview">
                            <h2>Overview</h2>
                        </div>
                        <div className="d-flex referal_pension">
                            <p>YOUR PENSION ID <span>PEN123456 <img src={Copy} alt="" data-original-title="Copy to clipboard" onClick={() =>  navigator.clipboard.writeText('PEN123456')}/> </span></p>
                            <button className="btn btn-success ml-2 mr-0" data-toggle="modal" data-target="#referal">Add a referred user</button>
                            <Modal/>
                        </div>
                    </div>

                    <div className="referal_boxes">
                        <div className="colored_box">
                            <h6>YOUR REFERRAL CODE</h6>
                            <p className="boxes_refer">Share your referral code with friends to earn rewards</p>
                            <div className="pension_id">
                                <p>123456</p>
                                <img src={Copy} alt="" onClick={() =>  navigator.clipboard.writeText('123456')}/>
                            </div>
                        </div>
                        <div className="boxes">
                            <p className="title">Total Refered Users</p>
                            <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9 10C8.58718 10 7.32813 9.47322 6.39982 8.53553C5.47152 7.59785 4.95 6.32608 4.95 5C4.95 3.67392 5.47152 2.40215 6.39982 1.46447C7.32813 0.526784 8.58718 0 9.9 0C11.2128 0 12.4719 0.526784 13.4002 1.46447C14.3285 2.40215 14.85 3.67392 14.85 5C14.85 6.32608 14.3285 7.59785 13.4002 8.53553C12.4719 9.47322 11.2128 10 9.9 10ZM23.1 10C21.7872 10 20.5281 9.47322 19.5998 8.53553C18.6715 7.59785 18.15 6.32608 18.15 5C18.15 3.67392 18.6715 2.40215 19.5998 1.46447C20.5281 0.526784 21.7872 0 23.1 0C24.4128 0 25.6719 0.526784 26.6002 1.46447C27.5285 2.40215 28.05 3.67392 28.05 5C28.05 6.32608 27.5285 7.59785 26.6002 8.53553C25.6719 9.47322 24.4128 10 23.1 10ZM9.9 13.3333C11.773 13.3311 13.625 13.7325 15.3322 14.5108C17.0394 15.2891 18.5626 16.4264 19.8 17.8467V20H0V17.8467C1.23742 16.4264 2.76059 15.2891 4.4678 14.5108C6.17501 13.7325 8.02697 13.3311 9.9 13.3333ZM23.1 20V16.5867L22.275 15.6417C21.6452 14.9203 20.9552 14.2551 20.2125 13.6533C21.1605 13.4401 22.1288 13.3328 23.1 13.3333C24.973 13.3311 26.825 13.7325 28.5322 14.5108C30.2394 15.2891 31.7626 16.4264 33 17.8467V20H23.1Z" fill="#0275D8"/>
                            </svg>
                            <h2>0</h2>
                        </div>
                        <div className="boxes">
                            <p className="title">Total Active Users</p>
                            <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9 10C8.58718 10 7.32813 9.47322 6.39982 8.53553C5.47152 7.59785 4.95 6.32608 4.95 5C4.95 3.67392 5.47152 2.40215 6.39982 1.46447C7.32813 0.526784 8.58718 0 9.9 0C11.2128 0 12.4719 0.526784 13.4002 1.46447C14.3285 2.40215 14.85 3.67392 14.85 5C14.85 6.32608 14.3285 7.59785 13.4002 8.53553C12.4719 9.47322 11.2128 10 9.9 10ZM23.1 10C21.7872 10 20.5281 9.47322 19.5998 8.53553C18.6715 7.59785 18.15 6.32608 18.15 5C18.15 3.67392 18.6715 2.40215 19.5998 1.46447C20.5281 0.526784 21.7872 0 23.1 0C24.4128 0 25.6719 0.526784 26.6002 1.46447C27.5285 2.40215 28.05 3.67392 28.05 5C28.05 6.32608 27.5285 7.59785 26.6002 8.53553C25.6719 9.47322 24.4128 10 23.1 10ZM9.9 13.3333C11.773 13.3311 13.625 13.7325 15.3322 14.5108C17.0394 15.2891 18.5626 16.4264 19.8 17.8467V20H0V17.8467C1.23742 16.4264 2.76059 15.2891 4.4678 14.5108C6.17501 13.7325 8.02697 13.3311 9.9 13.3333ZM23.1 20V16.5867L22.275 15.6417C21.6452 14.9203 20.9552 14.2551 20.2125 13.6533C21.1605 13.4401 22.1288 13.3328 23.1 13.3333C24.973 13.3311 26.825 13.7325 28.5322 14.5108C30.2394 15.2891 31.7626 16.4264 33 17.8467V20H23.1Z" fill="#F9971E"/>
                            </svg>
                            <h2>0</h2>
                        </div>
                        <div className="boxes">
                            <p className="title">Total Pending Users</p>
                            <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9 10C8.58718 10 7.32813 9.47322 6.39982 8.53553C5.47152 7.59785 4.95 6.32608 4.95 5C4.95 3.67392 5.47152 2.40215 6.39982 1.46447C7.32813 0.526784 8.58718 0 9.9 0C11.2128 0 12.4719 0.526784 13.4002 1.46447C14.3285 2.40215 14.85 3.67392 14.85 5C14.85 6.32608 14.3285 7.59785 13.4002 8.53553C12.4719 9.47322 11.2128 10 9.9 10ZM23.1 10C21.7872 10 20.5281 9.47322 19.5998 8.53553C18.6715 7.59785 18.15 6.32608 18.15 5C18.15 3.67392 18.6715 2.40215 19.5998 1.46447C20.5281 0.526784 21.7872 0 23.1 0C24.4128 0 25.6719 0.526784 26.6002 1.46447C27.5285 2.40215 28.05 3.67392 28.05 5C28.05 6.32608 27.5285 7.59785 26.6002 8.53553C25.6719 9.47322 24.4128 10 23.1 10ZM9.9 13.3333C11.773 13.3311 13.625 13.7325 15.3322 14.5108C17.0394 15.2891 18.5626 16.4264 19.8 17.8467V20H0V17.8467C1.23742 16.4264 2.76059 15.2891 4.4678 14.5108C6.17501 13.7325 8.02697 13.3311 9.9 13.3333ZM23.1 20V16.5867L22.275 15.6417C21.6452 14.9203 20.9552 14.2551 20.2125 13.6533C21.1605 13.4401 22.1288 13.3328 23.1 13.3333C24.973 13.3311 26.825 13.7325 28.5322 14.5108C30.2394 15.2891 31.7626 16.4264 33 17.8467V20H23.1Z" fill="#3D663D"/>
                            </svg>
                            <h2>0</h2>
                        </div>
                    </div>
                    <div className="referal_section my-5">
                        <div className="referal_overview">
                            <h2>Referrals</h2>
                            <div className="search_referal">
                                <form>
                                    <div className="form-group col-lg-6 d-flex p-0">
                                        <div className="p-0 d-flex input_search">
                                            <input type="text" className="form-control" name="search" placeholder="Search referrals"/>
                                            <span>
                                                {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                                                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: "relative", right: "40px",top:"-2px"}}>
                                                    <path d="M13 13L9 9L13 13ZM10.3333 5.66667C10.3333 6.2795 10.2126 6.88634 9.97811 7.45252C9.74358 8.01871 9.39984 8.53316 8.9665 8.9665C8.53316 9.39984 8.01871 9.74358 7.45252 9.97811C6.88634 10.2126 6.2795 10.3333 5.66667 10.3333C5.05383 10.3333 4.447 10.2126 3.88081 9.97811C3.31462 9.74358 2.80018 9.39984 2.36683 8.9665C1.93349 8.53316 1.58975 8.01871 1.35523 7.45252C1.12071 6.88634 1 6.2795 1 5.66667C1 4.42899 1.49167 3.242 2.36683 2.36683C3.242 1.49167 4.42899 1 5.66667 1C6.90434 1 8.09133 1.49167 8.9665 2.36683C9.84167 3.242 10.3333 4.42899 10.3333 5.66667Z" stroke="#3D663D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                            </span>
                                        </div>
                                        <div className="d-flex p-0 filter_search">
                                            <span>
                                                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{top:"-2px"}}>
                                                    <path d="M1 1.66667C1 1.48986 1.07024 1.32029 1.19526 1.19526C1.32029 1.07024 1.48986 1 1.66667 1H12.3333C12.5101 1 12.6797 1.07024 12.8047 1.19526C12.9298 1.32029 13 1.48986 13 1.66667V3.39067C13 3.56746 12.9297 3.73701 12.8047 3.862L8.52867 8.138C8.40363 8.263 8.33337 8.43254 8.33333 8.60933V10.3333L5.66667 13V8.60933C5.66663 8.43254 5.59637 8.263 5.47133 8.138L1.19533 3.862C1.0703 3.73701 1.00004 3.56746 1 3.39067V1.66667Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </span>
                                            <select name="filter"> 
                                                <option> All </option>
                                                <option> Active users only </option>
                                                <option> Pending users only </option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <Table/>
                        </div>
                    </div>
                    <div className="referal_faq">
                        <div className="referal_overview">
                            <h2>Frequently Asked Questions</h2>
                            <Link to="/faq">Learn more about how referrals work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-angle-right" aria-hidden="true"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Referal;