import { connect } from 'react-redux';
import { handleInitData } from "../actions/init";
import { useEffect, Fragment } from "react";
import LoadingBar from 'react-redux-loading-bar'
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Login from "./Login";
import HomePage from "./HomePage";
import Question from './Question';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import "../index.css";
import Page404 from './Page404';

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitData());
  }, [props]);

  return (
    <Fragment>
      <LoadingBar />
      <Nav />
      <div className="container">
        {props.loading === true ? null : (
          <Routes>
            <Route path="/login"exact element={<Login />} />
            <Route path="/" exact element={props.authedUser ? <HomePage /> : <Login/>} />
            <Route path="/homepage" exact element={props.authedUser ? <HomePage /> : <Login/>} />
            <Route path="/question/:id" element={<Question />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/add" element={props.authedUser ? <NewQuestion/> : <Login/>}/>
            <Route path="/error" element={<Page404/>}/>
          </Routes>
        )}
      </div>
    </Fragment>
  );
}
const mapStateToProps = ({ listUsers, authedUser }) => ({
  loading: listUsers === null,
  authedUser
});

export default connect(mapStateToProps)(App);