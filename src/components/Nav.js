import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { setAuthedUser } from '../actions/authedUser';

const Nav = (props) => {
    const logOut = () => {
        props.dispatch(setAuthedUser(""));
    }

    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/homepage">Home Page</Link>
                </li>
                <li>
                    <Link to="/leaderboard">Leader Board</Link>
                </li>
                <li>
                    <Link to="/add">New</Link>
                </li>
                <li>
                    <Link to="/" onClick={logOut}>{props.authedUser ? "Log out" : "Log in"}</Link>
                </li>
                {props.authedUser && (
                <li>
                    User : {props.authedUser}
                </li>
            )}
            </ul>
        </nav>
    );
};

const mapStateToProps = ({ authedUser }) => ({
    authedUser
});

export default connect(mapStateToProps)(Nav);