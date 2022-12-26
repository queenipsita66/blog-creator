import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale)

const CBarChart = (props: any) => {
    return (
        <Bar height={props.height} data={props.data} options={props.options} />
    )
}

export default CBarChart;