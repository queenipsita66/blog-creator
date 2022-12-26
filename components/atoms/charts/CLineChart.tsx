import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale)

const CLineChart = (props: any) => {
    return (
        <Line height={props.height} data={props.data} options={props.options} />
    )
}

export default CLineChart;