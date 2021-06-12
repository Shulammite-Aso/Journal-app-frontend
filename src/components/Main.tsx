import React from 'react';
import { Route, BrowserRouter, Redirect} from "react-router-dom";
import Home from './homePage/Home';
import App from './App';

function Main() {
    

    
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/app" component={App} />
      </BrowserRouter>
    )
}

export default Main;