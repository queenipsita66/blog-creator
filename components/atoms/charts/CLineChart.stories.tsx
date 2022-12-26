import { Card } from "@mui/material";
import CLineChart from "./CLineChart";

export default {
    title: "Charts/LineChart",
    component: CLineChart,
};

export const CLineChartStories = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }

    const options = {
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
            <CLineChart data={data} height={400} options={options} />
        </Card>
    )
}
