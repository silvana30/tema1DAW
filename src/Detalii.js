import * as React from "react";
import Navbar from "./Navbar";

import Medic from "./Medic";
import Jumbotron from "./Jumbotron";
import t from './locale';
import Tabel from "./Analytics";
import Chart from 'react-apexcharts'

class Detalii extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'detalii',
            brand: 'ReactStrap',
            series: [{
                name: 'rating',
                data: []//rating per medic  //rating per spital
            }],
            lista: [],
            listaVal: [],
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: [] //nume medici  //spitale
                }
            }

        };
        this.getMyDoctors(props);
        this.getMyDoctors = this.getMyDoctors.bind(this);
        this.updateData = this.updateData.bind(this);
        this.getRatings=this.getRatings.bind(this);

    };

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });
    };


    updateData() {
        var series = {...this.state.series};
        console.log("serii:::::::", JSON.stringify(series));
        console.log("serieee:::::",series[1]);
        series[0].data = this.state.listaVal;
        console.log(this.state);
    }

    async getRatings(idDoctor) {
        const response = await fetch('http://localhost/larapi-master/public/comments/' + idDoctor
            , {
                method: 'GET',
            });
        const res = await response.json();
        console.log("raspuns get comm",res);
        this.state.listaVal.push(res.comment);
        this.updateData()
    }

    getMyDoctors(props) {
        var names = [];
        console.log("props cu medici:::", props.location.medici);
        for (let medic of props.location.medici) {
            // var categ = {...this.state.options.xaxis};
            // var names = categ.categories;
            console.log("categ:::::::", medic.nume);

            this.state.lista.push(medic.nume);
            console.log("lista d enume::::", names);
            this.getRatings(medic.id);
            // const axios = require('axios');
            // axios.get('http://localhost/larapi-master/public/comments/'+medic.id)
            //     .then(this.handleReq)
            //     // })
            //     .catch(function (error) {
            //         console.log(error);
            //     });

        }
        // this.setState({lista: {names}});
        this.updateState();
    }

    updateState() {
        var options = {...this.state.options};
        options.xaxis.categories = this.state.lista;
        console.log("categ:::::::", options);
        this.setState({options});

        // this.setState(prevState => ({
        //     ...prevState, options: {
        //         ...prevState.options, xaxis: {
        //             ...prevState.options.xaxis, categories: this.state.lista
        //         }
        //     }
        // }));
    }

    render() {
        var {brand, currentPage} = this.state;
        var medici = this.props.location.medici;


        // var categ={...this.state.options.xaxis};
        // categ.categories=names;
        // this.setState({categ});
        // this.setState(prevState=>({
        //     ...prevState,options:{
        //         ...prevState.options, xaxis:{
        //             ...prevState.options.xaxis,categories:names
        //         }
        //     }
        // })


        console.log("medici ", JSON.stringify(medici));
        console.log("stateeee::::::::::", this.state);
        // const {data} = this.props.location;
        return (
            <div class={"doctors"}>
                <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                {/*<Page currentPage={currentPage} />*/}
                <Jumbotron jumboTitle={t("team")} jumboText={t("description")}>
                </Jumbotron>
                <div className={"med-units"}>


                    {
                        medici.map((elem, ind) => {
                            return (
                                <Medic key={ind}
                                       nume={elem.nume}
                                       pozaProfil={elem.poza_profil}
                                       specializare={elem.specializare}
                                       anAbsolvire={elem.an_absolvire}
                                />
                            );
                        })
                    }
                    {/*<Tabel/>*/}
                    <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320}/>
                </div>


            </div>
        )
    }
}


export default Detalii;