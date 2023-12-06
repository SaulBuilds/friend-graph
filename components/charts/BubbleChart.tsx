import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  } from 'chart.js';
  
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

interface BubbleChartProps {
  data: ChartData<'bubble'>;
  options?: ChartOptions<'bubble'>;
}

const BubbleChart: React.FC<BubbleChartProps> = ({ data, options }) => {
  return <Bubble data={data} options={options} />;
};

export default BubbleChart;
