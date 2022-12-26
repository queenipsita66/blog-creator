import { Card } from "@mui/material";
import { amber } from "@mui/material/colors";
import CAreaChart from "./CAreaChart";

export default {
    title: "Charts/AreaChart",
    component: CAreaChart,
};

export const CAreaChartStories = () => {
    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    const data = {
        labels: labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 1',
                data: [20, 39, 13, 8, 50, 41, 9],
                borderColor: 'rgb(43, 41, 171)',
                backgroundColor: 'rgb(99, 97, 242, 0.5)',
                lineTension: 0.4,
                radius: 6
            },
            {
                fill: true,
                label: 'Dataset 2',
                data: [30, 19, 9, 40, 50, 20, 60],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                lineTension: 0.4,
                radius: 6
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
    }
    return (
        <Card variant="outlined">
            <CAreaChart data={data} height={400} options={options} />
        </Card>
    )
}
