import React from 'react';
import Breadcrumb from '../../../Shared/Breadcrumb/Breadcrumb';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <>
            <Breadcrumb title="Dashboard"></Breadcrumb>
            {/* author-profile-area */}
            <div className="author-profile-area gray-lite-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <Sidebar></Sidebar>
                        <div className="col-xl-8 col-lg-7 col-md-9"></div>
                    </div>
                </div>
            </div>
            {/* author-profile-area-end */}
        </>
    );
};

export default Dashboard;