import React from 'react';
import Table from "./Table";


const ReferalSec = () => {
    return (
        <div className="referal_section padded_sm">
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
    );
};

export default ReferalSec;