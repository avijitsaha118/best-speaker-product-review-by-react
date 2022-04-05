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
                    <p>Revenue Graph</p>
                    <MyLineChart></MyLineChart>
                </div>
                <div>
                    <p>Sell and Revenue Graph</p>
                    <MyBarChart></MyBarChart>
                </div>
                <div className='mt-3'>
                    <p>Compartive info Graph</p>
                    <MyPieChart></MyPieChart>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;