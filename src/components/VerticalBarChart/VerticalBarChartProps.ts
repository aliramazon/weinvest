export interface Dataset {
    label: string;
    data: number[];
}

export interface FinalDataset extends Dataset {
    backgroundColor: string;
}

export interface VerticalBarChartProps {
    datasets: Dataset[];
    labels: string[];
}
