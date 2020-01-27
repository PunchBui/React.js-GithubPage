import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header.js'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Post} />
        <Route path="/projects" component={Project} />
      </div>
    )
  }
}

export default App