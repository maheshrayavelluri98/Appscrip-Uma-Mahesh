import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ProductList from './components/ProductList'
import './App.css'

class App extends React.Component {
  state = {
    isSidebarVisible: true,
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isSidebarVisible: !prevState.isSidebarVisible,
    }))
  }

  render() {
    const {isSidebarVisible} = this.state
    return (
      <Router>
        <div className="app">
          <Header toggleSidebar={this.toggleSidebar} />{' '}
          <div className="content">
            {isSidebarVisible && <Sidebar />}{' '}
            <Switch>
              <Route
                path="/category/:category"
                render={props => (
                  <ProductList category={props.match.params.category} />
                )}
              />
              <Route path="/" render={() => <ProductList category="all" />} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
