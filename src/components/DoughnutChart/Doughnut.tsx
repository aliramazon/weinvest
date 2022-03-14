import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { DoughnutProps } from './DoughnutProps';

ChartJS.register(ArcElement, Tooltip, Legend);

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

export const DoughnutChart: React.FC<DoughnutProps> = ({
    labels,
    data,
    label
}) => {
    const config = {
        labels: labels,
        datasets: [
            {
                data: data,
                lebel: label,
                backgroundColor: [
                    'rgba(30, 94, 255, 0.5)',
                    'rgba(110, 11, 212, 0.5)',
                    'rgba(6, 165, 97, 0.5)',
                    'rgba(240, 20, 47, 0.5)',
                    'rgba(249, 150, 0, 0.5)'
                ],
                borderColor: [
                    'rgba(30, 94, 255, 1)',
                    'rgba(110, 11, 212, 1)',
                    'rgba(6, 165, 97, 1)',
                    'rgba(240, 20, 47, 1)',
                    'rgba(249, 150, 0, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    return (
        <Wrapper>
            <Doughnut data={config} options={{ maintainAspectRatio: false }} />
        </Wrapper>
    );
};
