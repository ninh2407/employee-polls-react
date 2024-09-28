import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = (props) => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState("new");

    const showPoll = (id) => {
        navigate(`../question/${id}`);
    }

    const formatDate = (timestamp) => {
        const d = new Date(timestamp)
        const time = d.toLocaleTimeString('en-US')
        return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
    }

    const handleToggle = (e) => {
        e.preventDefault();
        setToggle(e.target.value);
    }

    return (
        <div className="container">
            <select onChange={handleToggle} id="questionOption">
                <option value="new">New question</option>
                <option value="done">Done</option>
            </select>
            {toggle === "new" ?
                (
                    <div className='question-container' >
                        {
                            Object.values(props.questions)
                                .filter(ques => !ques.optionOne.votes.includes(props.authedUser) && !ques.optionTwo.votes.includes(props.authedUser))
                                .sort((a, b) => b.timestamp - a.timestamp)
                                .map(ques => {
                                    return (
                                        <div className='question-box' key={ques.id}>
                                            <div>{ques.author}</div>
                                            <div>{formatDate(ques.timestamp)}</div>
                                            <button onClick={(e) => showPoll(ques.id)}>Show</button>
                                        </div>
                                    )
                                })
                        }
                    </div>
                )
                :
                (
                    <div className='question-container'>
                        {
                            Object.values(props.questions)
                                .filter(ques => ques.optionOne.votes.includes(props.authedUser) || ques.optionTwo.votes.includes(props.authedUser))
                                .sort((a, b) => b.timestamp - a.timestamp)
                                .map(ques => {
                                    return (
                                        <div className='question-box' key={ques.id}>
                                            <div>{ques.author}</div>
                                            <div>{formatDate(ques.timestamp)}</div>
                                            <button onClick={(e) => showPoll(ques.id)}>Show</button>
                                        </div>
                                    )
                                })
                        }
                    </div>
                )
            }
        </div>
    );
};

const mapStateToProps = ({ authedUser, questions }) => ({
    authedUser,
    questions
});

export default connect(mapStateToProps)(HomePage);