import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAddQuestionAnswer } from '../actions/questions';
import Page404 from './Page404';

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const Question = (props) => {
    const handleVote = (e, option) => {
        e.preventDefault();
        let ans = {
            "qid": id,
            "authedUser": props.authedUser,
            "answer": option
        }
        props.dispatch(handleAddQuestionAnswer(ans));
    }

    if (!props.authedUser || !props.question) {
        return (<Page404 />);
    }

    const {
        id,
        author,
        optionOne,
        optionTwo
    } = props.question;

    return (
        <div className="container">
            {console.log(props)}
            <div>
                <h2>Poll by {author} </h2>
                <h2>Would You Rather</h2>
                <div className={`option-box ${optionOne.votes.includes(props.authedUser) ? "selected-option" : ""}`}>
                    <div>{optionOne.text}</div>
                    {optionOne.votes.includes(props.authedUser) || optionTwo.votes.includes(props.authedUser) ?
                        (<div>
                            <div>Voted: {optionOne.votes.length}</div>
                            <div>Percentage: {
                                Math.round(optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length) * 100)} %</div>
                        </div>)
                        :
                        (<button onClick={(e) => handleVote(e, "optionOne")} >Vote</button>)}
                </div>
                <div className={`option-box ${optionTwo.votes.includes(props.authedUser) ? "selected-option" : ""}`} >
                    <div>{optionTwo.text}</div>
                    {optionOne.votes.includes(props.authedUser) || optionTwo.votes.includes(props.authedUser) ?
                        (<div>
                            <div>Voted: {optionTwo.votes.length}</div>
                            <div>Percentage: {
                                Math.round(optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length) * 100)} %</div>
                        </div>)
                        :
                        (<button onClick={(e) => handleVote(e, "optionTwo")} >Vote</button>)
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ authedUser, questions }, props) => {
    const { id } = props.router.params;
    const question = questions[id];
    return {
        authedUser,
        question,
    };
};

export default withRouter(connect(mapStateToProps)(Question));