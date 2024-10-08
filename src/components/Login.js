import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const Login = (props) => {

    const handleLogin = (e) => {
        e.preventDefault();
        props.dispatch(setAuthedUser(document.getElementById("userId").value));
    } 
    return (
        <div className='container'>
            <div> Please select user </div>
            <select id="userId">
                {Object.keys(props.listUsers).map((id) => {
                    return <option key={id} value={id}>{id}</option>
                })}
            </select>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

const mapStateToProps = ({ listUsers, authedUser }) => ({
    listUsers,
    authedUser
});

export default connect(mapStateToProps)(Login);