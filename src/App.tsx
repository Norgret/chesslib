import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/css/landing-page.css';

export default function App() {
  return (
    <div id="landing-page">
      <div className="transparent-overlay"></div>
      <div className="nav">
        <div className="left">
          <div className="nav-link">
            <a href="/browse" className="link">
              <i className="icon fa fa-compass"></i>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="nav-link">
            <a href="/login" className="link">
              <i className="icon fa fa-sign-in"></i>
            </a>
          </div>
          <div className="nav-link">
            <a href="/profile" className="link">
              <i className="icon fa fa-user"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="text title">
          Chesslib Home
        </div>
      </div>
    </div>
  );
}