import React from 'react';
import Grid from '@mui/material/Grid';
import DashboardWidget from './DashboardWidget';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import { ChartData } from 'chart.js';
import BubbleChart from '../charts/BubbleChart';

// Example data for BarChart
const barChartData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  // Example data for LineChart
  const lineChartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  const bubbleChartData: ChartData<'bubble'> = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
          { x: 30, y: 40, r: 20 },
          { x: 50, y: 20, r: 8 },
          { x: 70, y: 30, r: 15 },
          { x: 60, y: 25, r: 12 },
          { x: 80, y: 35, r: 18 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  
const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <DashboardWidget title="333" content="track 333 stats" />
      </Grid>
      <Grid item xs={12} md={6}>
        <DashboardWidget title="Widget 2" content="Content 2" />
      </Grid>
      <Grid item xs={12}>
        <BarChart data={barChartData} />
      </Grid>
      <Grid item xs={12}>
        <LineChart data={lineChartData} />
      </Grid>
      <Grid item xs={12}>
        <BubbleChart data={bubbleChartData} />
      </Grid>
      <Grid item xs={12}>
        <LineChart data={lineChartData} />
      </Grid>
      {/* Add more widgets or charts as needed */}
    </Grid>
  );
};

export default Dashboard;