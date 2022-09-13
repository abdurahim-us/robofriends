import React  from "react";
import Cardlist from '../components/Cardlist';
import Searchbox from "../components/Searchbox";
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        return this.setState({ searchField: event.target.value })
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
       
        return !robots.length ? 
        <h1>Loading...</h1> : 
                (<div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <Searchbox onSearchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>)
    }

}

export default App