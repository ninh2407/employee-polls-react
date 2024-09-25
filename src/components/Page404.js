import { connect } from 'react-redux';

const Page404 = (props) => {
    return (
        <div className='container'>
            <h1>404</h1>
            <h3>PAGE NOT FOUND</h3>
        </div>
    );
};

const mapStateToProps = ({ authedUser }) => ({
    authedUser
});

export default connect(mapStateToProps)(Page404);