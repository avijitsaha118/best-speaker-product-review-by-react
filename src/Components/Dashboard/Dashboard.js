import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';


const Dashboard = () => {
    return (
        <div className='chart'>
        <h3>This is dashboard</h3>   
        <MyLineChart></MyLineChart> 
        <br/>
        <MyBarChart></MyBarChart>   
        <br/>
        <MyPieChart></MyPieChart>    
        </div>
        
    );
};

export default Dashboard;