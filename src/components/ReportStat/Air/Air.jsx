import './Air.css'
import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2"

const Air = () => {

    const daylabel = Array.from({length:31}, (_,i) => i+1) 
    Chart.defaults.font.family =  "'Dongle', sans-serif"
    Chart.defaults.font.size = 20
    // Chart.defaults.color = "#FFFFFF"
    // Chart.defaults.borderColor = "#FFFFFF";

    return <div className="air-repo-container">

        <div className='air-rt-circle'>
            <img className='air-raw-icon-img-circle' src={"../assets/icon/raw_air_icon.png"} alt="air"/>
            {/* <div className='line-break'/> */}
            <div className='inner-tex'>MODERATE</div>
            <div className='avg-tex'>50</div>
            
        </div>

        <div className="air-param-container">
            <p>Air&nbsp;quality&nbsp;score&nbsp;(AVG)</p>
        </div>

        <div className='air-detail-tb-container'>
            <div className='air-detail-tb-header'>
                <img className='air-raw-icon-img' src={"../assets/icon/raw_air_icon.png"} alt="air"/>
                <p>Air&nbsp;Quality</p>
                <div></div>

            </div>
            <Line
                height= {180}
                data={{
                    labels: daylabel,
                    datasets: [
                        {
                        backgroundColor: '#6CB7D9',
                        color: '#FFFFFF',
                        borderColor: '#FFFFFF',
                        data: [45, 24, 17, 50, 60, 20, 80, 30, 23, 100, 70, 60, 40]
                        }
                    ],
                }}

                options = {{
                    layout: {
                        padding : 5
                    },
                    scales: {
                        x: {
                            border:{
                                display: false
                            },
                            grid:{
                                display : true,
                                color:'#FFFFFF'

                            },
                            ticks: {
                                maxRotation: 0,
                                minRotation: 0,
                                color: '#FFFFFF'
                            }
                        },
                        y: {
                            border:{
                                color:'#FFFFFF'

                            },
                            grid:{
                                display : false
                            },
                            ticks: {
                                callback: function(value, index, ticks) {
                                    return value;
                                },
                                color:'#FFFFFF'

                            },
                            max: 100,
                            beginAtZero: true
                        },
                        
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    </div>
}

export default Air;