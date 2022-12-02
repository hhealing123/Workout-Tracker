import React from 'react';
import MyProfile from '../components/MyProfile';
import DashboardWorkout from '../components/DashboardWorkout';
import History from '../components/History';


const Dashboard = () => {
    return (
        <header>
            <h1 className='header peak'>Welcome to Peak</h1>
            <div className="cards-wrap">
                <div className="card">
                    <DashboardWorkout />
                </div>
                <div className="card">
                    <MyProfile />
                </div>
                <div className="card">
                    <History />
                </div>
            </div>
            <h3 className='footer'>Maximize your performance</h3>
        </header>
    )
}

export default Dashboard