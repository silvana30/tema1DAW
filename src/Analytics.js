import Chart from 'react-apexcharts'
import * as React from "react";
import {Component} from "react";

class Tabel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998] //nume medici  //spitale
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]//rating per medic  //rating per spital
            }]
        }
    }

    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320}/>
        )
    }
}

export default Tabel;