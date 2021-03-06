import React from 'react';
import Breadcrumb from '../../../Shared/Breadcrumb/Breadcrumb';
import Sidebar from '../Sidebar/Sidebar';

const PayNow = () => {
    return (
        <>
            <Breadcrumb title="Pay Now"></Breadcrumb>
            {/* author-profile-area */}
            <div className="author-profile-area gray-lite-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <Sidebar></Sidebar>
                        <div className="col-xl-8 col-lg-7 col-md-9">
                            <div className="inventory-list-item h-100 d-flex align-items-center justify-content-center">
                                <h1>Payment system coming soon</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* author-profile-area-end */}
        </>
    );
};

export default PayNow;