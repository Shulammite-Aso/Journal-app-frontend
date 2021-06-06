import React from 'react';
import ReactDOM from 'react-dom';
import FindJournal from './components/FindJournal'
import './style.css'

class Main extends React.Component {
    render() {
        return (
            <div className="container">
              <h1 className="title">React journaling App</h1>
              <FindJournal/>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));