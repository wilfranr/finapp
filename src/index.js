import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
//import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
require ('dotenv').config()

ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
    , document.getElementById('root'))