import React, { Component } from 'react'
import { Link } from "gatsby"
import { db } from "../firebase";
import firebase from "firebase";
import {Helmet} from "react-helmet";

import backButton from "../images/backButton.svg";
import logo from "../images/logo.png"
import main from "../components/main.css"

export default class test extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            timedate: "",
            name: "",
            email: "",
            phone: "",
            count: "",
            presale: "",
            price: ""
        }

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleCount = this.handleCount.bind(this);
    }

    handleName(event) {
        this.setState({name: event.target.value});
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePhone(event) {
        this.setState({phone: event.target.value});
    }

    handleCount(event) {
        this.setState({count: event.target.value});
    }
 
    render() {
        var React = require('react');
        var ReactDOM = require('react-dom');
        var QRCode = require('qrcode-react');
        var randomString = require('random-string');

        return (
            <>
                <Helmet>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>Registrasi Seminar Nasional - Temu Admi 2019</title>
                    <link rel="stylesheet" href="{main}" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700i&display=swap" rel="stylesheet" />
                </Helmet>

                <div className="page-wrapper" onLoad={this.checkCount}>
                    <nav>
                        <div className="nav-section nav-back">
                            <Link to="/"><img src={backButton} alt=""/></Link>
                        </div>

                        <div className="nav-section nav-title">
                            <h3><em>Seminar Nasional</em></h3>
                            <p>Temu Admi 2019</p>
                        </div>

                        <div className="nav-section">
                            {/* Empty div */}
                        </div>
                    </nav>

                    <main className="registration-form">
                        <div className="main-header">
                            <h4>Registrasi Seminar Nasional</h4>
                        </div>

                        <div className="form-wrapper">
                            <label htmlFor="nameInput">Nama</label>
                            <input type="text" value={this.state.name} onChange={this.handleName} className="nameInput" />

                            <label htmlFor="phoneInput">Nomor Telepon</label>
                            <input type="text" value={this.state.phone} onChange={this.handlePhone} className="phoneInput"/>

                            <label htmlFor="emailInput">Alamat Email</label>
                            <input type="text" value={this.state.email} onChange={this.handleEmail} className="emailInput"/>

                            <button onClick={this.submitBtn} >Registrasi</button>
                        </div>
                    </main>

                    <main className="registration-summary">
                        <div className="main-header">
                            <h4>Ringkasan Transaksi</h4>
                        </div>

                        <div className="summary-wrapper">
                            <div className="summary-section qr-wrapper">
                                <p>{this.state.presale}</p>
                                <QRCode value={this.state.id} />
                                <h3>{this.state.id}</h3>
                                <h4>{this.state.price}</h4>
                            </div>

                            <div className="summary-section data-section">
                                <p>Nama Pemesan:</p>
                                <h3>{this.state.name}</h3>

                                <p>Nomor Telepon</p>
                                <h3>{this.state.phone}</h3>

                                <p>Email:</p>
                                <h3>{this.state.email}</h3>
                            </div>

                            <div className="summary-section place-wrapper">
                                <div className="grid-wrapper grid-border">
                                    <h3>4 November 2019</h3>
                                    <p>Open gate: 07:00 WIB</p>
                                </div>

                                <div className="grid-wrapper">
                                    <h3>Auditorium Universitas Sebelas Maret</h3>
                                </div>
                            </div>

                            <div className="summary-section">
                                <p>Dipesan pada {this.state.timedate} WIB</p>
                            </div>
                        </div>
                    </main>
                </div>
                <button onClick={this.checkCount}>Test</button>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <p>{this.state.count}</p>
                <p>{this.state.phone}</p>
            </>
        )
    }

    submitBtn = () => {
        var randomString = require('random-string');
        const timestamp = require('time-stamp');

        let uid = randomString({length: 6});
        this.setState({id: uid});

        let timeDate = timestamp('DD/MM/YYYY HH:mm:ss');
        this.setState({timedate: timeDate});

        console.log("Register");

        if (this.state.count < 25) {
            this.setState({price: "Rp 45.000", presale: "Presale 1"})
        } if (this.state.count < 45) {
            this.setState({price: "Rp 55.000", presale: "Presale 2"})
        } else {
            this.setState({price: "Rp 65.000", presale: "Presale 3"})
        }
        
        this.updateDb();
    }

    checkCount = () => {
        db.collection('pendaftar').doc('--stats--').get().then(count => {
            let stats = count.data();
            console.log(this.state.count);
            this.setState({count: stats.count});
        })
    }

    updateDb = () => {setTimeout(() => {
        console.log(this.state.timedate + this.state.presale);

        const increment = firebase.firestore.FieldValue.increment(1);

        const statsRef = db.collection('pendaftar').doc('--stats--');
        let timeinmillis = new Date().getTime().toString();
        const userRef = db.collection('pendaftar').doc(timeinmillis);

        const batch = db.batch();
        batch.set(userRef, {name: this.state.name});
        batch.update(userRef, {email: this.state.email});
        batch.update(userRef, {phone: this.state.phone});
        batch.update(userRef, {presale: this.state.presale});
        batch.update(userRef, {time: this.state.timedate});
        batch.update(userRef, {random: this.state.id});
        batch.set(statsRef, {count: increment}, {merge: true});
        batch.commit();        
        }, 1000);
    }
}
