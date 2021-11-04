import React from 'react';
import Copy from '../../assets/imgs/copy.png';


const ShareCode = () => {
    return (
        <div className="colored_box">
            <h6>YOUR REFERRAL CODE</h6>
            <div className="colored_box_div">
                <p className="boxes_refer">Share your referral code with friends to earn rewards</p>
                <div className="pension_id">
                    <p>123456</p>
                    <img src={Copy} alt="" onClick={() =>  navigator.clipboard.writeText('123456')}/>
                </div>
            </div>
        </div>
    );
};

export default ShareCode;