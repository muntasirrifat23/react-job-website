import React from 'react';
import './Statistics.css'
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const Statistics = () => {
    const data = [
        {
            name: "A 1",
            mark: 60
        },
        {
            name: "A 2",
            mark: 54
        },
        {
            name: "A 3",
            mark: 58
        },
        {
            name: "A 4",
            mark: 60
        },
        {
            name: "A 5",
            mark: 56
        },
        {
            name: "A 6",
            mark: 50
        },
        {
            name: "A 7",
            mark: 60
        },
        {
            name: "A 8",
            mark: 54
        },
    ];

    return (
        <div className='statistics'>
            <h2>My Assignment Marks</h2>
            <div>
                <ComposedChart
                    width={900}
                    height={500}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="mark" barSize={20} fill="green" />
                    <Line type="monotone" dataKey="name" stroke="red" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;