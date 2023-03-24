import './Light.css'
import { FaChevronCircleRight} from 'react-icons/fa'
import { FaChevronCircleLeft} from 'react-icons/fa'
import Chart from 'chart.js/auto'
import { Link } from 'react-router-dom'
import { Bar } from "react-chartjs-2"

const Light = () => {

    const daylabel = Array.from({length:31}, (_,i) => i+1) 
    Chart.defaults.font.family =  "'Dongle', sans-serif"
    Chart.defaults.font.size = 20

    return <div className="light-repo-container">
        <Link to = {"/air-quality"} style={{textDecoration:'none'}}>
            <button className="view-air-but">View air quality statistic</button>
        </Link>
        
        <div className='light-rt-circle-nv-container'>
            <Link to={"/humidity"} className='humid-nav-bub'>
                <FaChevronCircleLeft/>
            </Link>
            <div className='light-rt-circle'>50%</div>
            <Link to={"/temperature"} className='heat-nav-bub'>
                <FaChevronCircleRight/>
            </Link>
        </div>

        <div className="light-param-container">
            <p>Min: 26%</p>
            <p>Max: 29%</p>
            <p>Avg: 27%</p>
        </div>

        <div className='light-detail-tb-container'>
            <div className='light-detail-tb-header'>
                <img className='light-raw-icon-img' src={"../assets/icon/raw_light_icon.png"} alt="light"/>
                <p>Light&nbsp;Intensive</p>
                <div></div>

            </div>
            <Bar
                height= {150}
                data={{
                    labels: daylabel,
                    datasets: [
                        {
                        backgroundColor: '#FFCE6F',
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
                                color:'000000'
                            },
                            grid:{
                                display : false
                            },
                            ticks: {
                                maxRotation: 0,
                                minRotation: 0
                            }
                        },
                        y: {
                            border:{
                                color:'000000'
                            },
                            grid:{
                                display : false
                            },
                            ticks: {
                                callback: function(value, index, ticks) {
                                    return value + '%';
                                }
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

export default Light;