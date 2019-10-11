import React, { Component } from 'react'
import { Link } from "gatsby"
import { db } from "../firebase";
import firebase from "firebase";

import Layout from "../components/layout"

export default class test extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            count: ""
        }

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleCount = this.handleCount.bind(this);
    }

    handleName(event) {
        this.setState({name: event.target.value});
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handleCount(event) {
        this.setState({count: event.target.value});
    }
 
    render() {
        return (
            <Layout>
                <input type="text" value={this.state.name} onChange={this.handleName} className="name"/>
                <input type="text" value={this.state.email} onChange={this.handleEmail} className="email"/>
                <button onClick={this.submitBtn}>SUBMIT</button>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <p>{this.state.count}</p>
            </Layout>
        )
    }

    submitBtn = () => {
        console.log("clicked");
        const increment = firebase.firestore.FieldValue.increment(1);

        const statsRef = db.collection('pendaftar').doc('--stats--');
        const userRef = db.collection('pendaftar').doc(`${Math.random()}`)

        // db.collection('pendaftar').doc('--stats--').get().then(count => {
        //     console.log(count.data());
        // })

        db.collection('pendaftar').doc('--stats--').get().then(count => {
            let countString = count.data();
            console.log(countString.count);
            // if (countString.count < 5) {
            //     this.setState({count: "Aman"});
            // } else if(countString.count < 20) {
            //     this.setState({count: "Sedang"});
            // } else {
            //     this.setState({count: "Bahaya!!!"});
            // }

            // TODO: I don't know why but the counter always stuck at 1. It did work before I directly used setState i the if
            // else statement, but now even when they're commented it's still stuck at 1. The setState works though. Could be that
            // the counter is now more than 10 and I've never seen the counter shows double digits so that might be the reason?
        })

        const batch = db.batch();
        batch.set(userRef, {name: this.state.name});
        batch.update(userRef, {email: this.state.email});
        batch.set(statsRef, {count: increment}, {merge: true});
        batch.commit();
    }
}
