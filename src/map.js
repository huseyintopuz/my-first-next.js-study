import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Colors } from "./components/Colors";
import { NotFound } from "./components/NotFound";

function App() {
    const colorCodes = ["c10", "676", "750", "838","498"];
    return (
        <Router>
            <div className="App">
                <nav>
                    <NavLink to="/" exact activeStyle={{ fontWeight: "bold", color: "blue" }}>Home</NavLink>
                    <NavLink to="/about" activeStyle={{ fontWeight: "bold", color: "blue" }}>About</NavLink>
                    {colorCodes.map((code, index) =>
                        <NavLink key={index} to={`/colors/${code}`} activeStyle={{ fontWeight: "bold", color: "blue" }}>Colors</NavLink>
                    )}
                </nav>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/colors/:colorCode" component={Colors} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;