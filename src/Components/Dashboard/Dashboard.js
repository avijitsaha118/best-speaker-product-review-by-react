import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';


const Dashboard = () => {
    return (
        <div>
            <h1 className='mt-3'>Dashboard Data info</h1>
            <div className='grid grid-cols-2 gap-2 mt-5'>
                <div>
                    <MyLineChart></MyLineChart>
                </div>
                <div>
                    <MyBarChart></MyBarChart>
                </div>
                <div>
                    <MyPieChart></MyPieChart>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;