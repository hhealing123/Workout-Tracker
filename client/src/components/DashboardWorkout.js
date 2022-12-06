import React from 'react'
import { Link } from 'react-router-dom';

const DashboardWorkout = () => {
    return (
        <div className="card-inner-dashboard">
            <Link className="link" to="/builder">Build A Workout</Link>
        </div>
    )
}

export default DashboardWorkout