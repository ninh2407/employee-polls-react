import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from '../actions/questions';
import { handleInitData } from '../actions/init';

const NewQuestion = (props) => {
    const navigate = useNavigate();

    const handleSaveQuestion = (e) => {
        e.preventDefault();
        let question = { 
            "optionOneText": document.getElementById("firstOption").value,
            "optionTwoText": document.getElementById("secondOption").value, 
            "author" : props.authedUser
        }
        console.log(question);
        props.dispatch(handleAddQuestion(question));
        props.dispatch(handleInitData());
        navigate("/homepage");
    }
    return (
        <div className='container'>
            <h2>
                Would You Rather
            </h2>
            <h4>
                Create Your Own Poll
            </h4>
            <div>
                <div>
                    First Option
                </div>
                <div>
                    <input type="text" data-testid="firstOption" id="firstOption" />
                </div>
            </div>
            <div>
                <div>
                    Second Option
                </div>
                <div>
                    <input type="text" data-testid="secondOption" id="secondOption" />
                </div>
            </div>
            <button onClick={handleSaveQuestion}>Submit</button>
        </div>
    );
};

const mapStateToProps = ({ listUsers, authedUser }) => ({
    listUsers,
    authedUser
});

export default connect(mapStateToProps)(NewQuestion);