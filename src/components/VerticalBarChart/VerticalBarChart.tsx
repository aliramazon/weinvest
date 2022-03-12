import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { VerticalBarChartProps, FinalDataset } from './VerticalBarChartProps';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const bgColors = [
    'rgba(30, 94, 255, 0.2)',
    'rgba(110, 11, 212, 0.2)',
    'rgba(6, 165, 97, 0.2)',
    'rgba(240, 20, 47, 0.2)',
    'rgba(249, 150, 0, 0.2)'
];

export const VerticalBarChart: React.FC<VerticalBarChartProps> = ({
    labels,
    datasets
}) => {
    const finalDatasets = datasets.map((dataset, idx) => {
        const copy: FinalDataset = {
            ...dataset,
            backgroundColor: bgColors[idx]
        };
        return copy;
    });

    const finalData = {
        labels: labels,
        datasets: finalDatasets
    };

    return <Bar data={finalData} options={{ maintainAspectRatio: false }} />;
};
