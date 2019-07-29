import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import MovieHero from './components/MovieHero'

ReactDOM.render(<Router><MovieHero /></Router>, document.getElementById('root'));
