import React, { Component } from "react"
import { Link } from "gatsby"
import { db } from "../firebase";
import firebase from "firebase";
import {Helmet} from "react-helmet";

import home from "../components/home.css"

import logos from "../images/logos.png"
import ganjar from "../images/ganjar.png"
import rk from "../images/rk.png"
import panrb from "../images/panrb.png"
import lan from "../images/lan.png"
import ismi from "../images/ismi.png"

import bg from "../images/bg.svg"
import bgMobile from "../images/bg-mobile.svg"

const IndexPage = () => (
  <div className="index-body">
    <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Seminar Nasional - Temu Admi 2019</title>
        <link rel="stylesheet" href="{home}" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700i&display=swap" rel="stylesheet" />
    </Helmet>

    <header>
      <div className="header-top">
        <div className="logo-wrapper">
          <img className="header-logo" src={logos} alt="" />
          <h2 className="header-title">SEMINAR<br />NASIONAL</h2>
          <p className="header-admi orange-text">Temu Admi 2019</p>
        </div>
        <div className="header-wrapper">
          <div className="title-container">
            <Link to="/registrasi" className="register-link">Registrasi Sekarang!</Link>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-subtitle">
          <h4>"Dynamic Governance: Wajah Baru Reformasi Birokrasi Indonesia"</h4>
        </div>  
      </div>
    </header>
    <div className="content-wrapper">
      <div className="main-grid">
        <div className="main-guest">
          <div className="guest-wrapper">
            <h2 className="orange-text">Pembicara</h2>
          </div>
          <div className="guest-grid"> 
            <div className="guest-detail">
              <h3>H. Ganjar Pranowo, S.H., M.I.P.</h3>
              <p>Gubernur Jawa Tengah</p>
            </div>
            <div className="guest-img-wrapper">
              <img src={ganjar} className="guest-img" alt="" />
            </div>            
          </div>
          <div className="guest-grid"> 
            <div className="guest-detail">
              <h3>Mochamad Ridwan Kamil, ST.,M.Ud</h3>
              <p>Gubernur Jawa Barat</p>
            </div>
            <div className="guest-img-wrapper">
              <img src={rk} className="guest-img" alt="" />
            </div>            
          </div>
          <div className="guest-grid"> 
            <div className="guest-detail">
              <h3>Drs. Syafruddin, M.Si</h3>
              <p>Menteri PAN-RB<br />(Periode 2014-2019)</p>
            </div>
            <div className="guest-img-wrapper">
              <img src={panrb} className="guest-img" alt="" />
            </div>            
          </div>
          <div className="guest-grid"> 
            <div className="guest-detail">
              <h3>Dr. Adi Suryanto, M.Si</h3>
              <p>Kepala Lembaga Administrasi Negara</p>
            </div>
            <div className="guest-img-wrapper">
              <img src={lan} className="guest-img" alt="" />
            </div>            
          </div>  
        </div>
        <div className="info-grid">
          <div className="border presale-info-wrapper">
            <div className="presale-header">
              <h2 className="orange-text margin10">HTM</h2>
              <p>Presale saat ini:</p>
              <p className="presale-status">Presale 1</p>
            </div>
            <div className="presale-info">
              <div className="presale-title">
                <h3 className="orange-text">Presale 1</h3>
                <h3 className="orange-text">Presale 2</h3>
                <h3 className="orange-text">Presale 3</h3> 
              </div>
              <div className="presale-price">
                <h3 className="italic-text">50k</h3>
                <h3 className="italic-text">60k</h3>
                <h3 className="italic-text">70k</h3>
              </div>
            </div>
          </div>
          <div className="border">
            <h2 className="orange-text margin10">Senin,<br/>4 November 2019</h2>
            <p>Auditorium<br />Universitas Sebelas Maret</p>
          </div>
          <div className="border moderator-wrapper">
            <h2 className="orange-text margin10">Moderator</h2>
            <img src={ismi} className="guest-img margin10" alt="" />
            <h4 className="margin10">Prof. Dr. Ismi Dwi<br />Astuti Nurhaeni, M.Si</h4>
            <p>Dekan FISIP UNS</p>
          </div>
        </div>
      </div>
      <div className="register-wrapper">
        <h2 className="orange-text margin2em">Registrasi Sekarang!</h2>
        <Link to="/registrasi" className="register-link">Registrasi</Link>
      </div>
    </div>
  </ div>
)

export default IndexPage
