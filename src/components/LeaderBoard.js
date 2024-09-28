import { connect } from 'react-redux';

const LeaderBoard = (props) => {
    return (
        <div className="homePage">
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Answerd</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(props.listUsers)
                            .sort(
                                (a, b) => {
                                    let keyA1 = Object.keys(a.answers).length;
                                    let keyB1 = Object.keys(b.answers).length;
                                    let keyA2 = a.questions.length;
                                    let keyB2 = b.questions.length;
                                    if (keyA1 < keyB1) {
                                        return 1;
                                    } else if (keyA1 > keyB1) {
                                        return -1;
                                    } else {
                                        return keyB2 - keyA2;
                                    }
                                })
                            .map(user => {
                                return (
                                    <tr key={user.id} id={user.id} >
                                        <td>
                                            <div>{user.name}</div>
                                            <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className="avatar" />
                                        </td>
                                        <td>{Object.keys(user.answers).length}</td>
                                        <td>{user.questions.length}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = ({ authedUser, listUsers }) => ({
    authedUser,
    listUsers
});

export default connect(mapStateToProps)(LeaderBoard);