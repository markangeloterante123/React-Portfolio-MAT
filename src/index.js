import React from 'react'
import ReactDom from  'react-dom'
import { BrowserRouter } from 'react-router-dom'//$ npm install --save react-router-dom

import App from './App'

import './assets/scss/main.scss'

import 'font-awesome/css/font-awesome.min.css';  //npm install --save font-awesome

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById('root'))