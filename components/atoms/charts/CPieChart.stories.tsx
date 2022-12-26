import { Card } from "@mui/material";
import CPieChart from "./CPieChart";

export default {
    title: "Charts/PieChart",
    component: CPieChart,
};

export const CPieChartStories = () => {
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    }

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                display: false
            },
            x: {
                display: false
            }
        },
    }
    return (
        <Card variant="outlined" sx={{padding: "1rem"}}>
            <CPieChart data={data} height={400} options={options} />
        </Card>
    )
}
