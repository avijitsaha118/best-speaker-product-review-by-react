import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data= [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
       <LineChart width={400} height={600} data={data}>
           <CartesianGrid strokeDasharray="3 3" />
           <Line dataKey="revenue" stroke="#8884d8"></Line>
           <XAxis dataKey="month"></XAxis>
           <Tooltip></Tooltip>
           <Legend/>
           <YAxis dataKey="revenue"></YAxis>


       </LineChart>
    );
};

export default MyLineChart;