import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import MovieHero from './Components/MovieHero'
import './index.css';
import * as firebase from 'firebase/app';
import { firebaseConfig } from '../src/config/firebase';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<Router><MovieHero /></Router>, document.getElementById('root'));
