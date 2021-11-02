import React from 'react'
import './App.css';
import Search from "./Components/Search";
import { getTopHeadlines } from "./actions/PostActions";
import { connect } from "react-redux";
import Posts from './Components/Posts'
import PropTypes from 'prop-types'

class App extends React.Component {
  componentDidMount() {
    this.props.getTopHeadlines();
  }

  static propTypes = {

    getTopHeadlines: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,

  };
  render() {

    const { loading, news } = this.props;
    console.log("Success")
    console.log(loading);
    return (

      <div className="App">
        <header className="App-header">
          <h1>NRead</h1>
        </header>

        <Posts load={loading} posts={news} />

      </div>

    );
  }
}

const mapStateToProps = state => ({
  news: state.posts.news,
  loading: state.posts.load
})


export default connect(mapStateToProps, { getTopHeadlines })(App);
