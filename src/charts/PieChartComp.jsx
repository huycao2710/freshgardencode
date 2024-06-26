import React from 'react'
import { PieChart as RechartPieChart, Pie, Cell, Tooltip, ResponsiveContainer, Text } from 'recharts'; // Import Text component
import { convertDataChart } from '../util';

const PieChartComponent = (props) => {
    const data = convertDataChart(props.data, 'paymentMethod')
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, ...rests }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        console.log('{ cx, cy, midAngle, innerRadius, outerRadius, percent, index }', { cx, cy, midAngle, innerRadius, outerRadius, percent, index, rests })
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RechartPieChart width={400} height={400}>
                {/* Add the title */}
                <Text x="50%" y="20" textAnchor="middle" dominantBaseline="middle" fontSize={20} fontWeight="bold">
                    Phương thức thanh toán
                </Text>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell - ${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </RechartPieChart>
        </ResponsiveContainer>
    )
}

export default PieChartComponent
