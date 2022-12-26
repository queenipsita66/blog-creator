import { Chart as ChartJS, ArcElement, CategoryScale } from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, CategoryScale)

const CPieChart = (props: any) => {
    return (
        <Pie height={props.height} data={props.data} options={props.options} />
    )
}

export default CPieChart;