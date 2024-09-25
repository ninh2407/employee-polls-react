import { _saveQuestion, _saveQuestionAnswer } from './utils/_DATA';
import { fireEvent, render } from '@testing-library/react';
import Nav from './components/Nav';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from './store';
import NewQuestion from './components/NewQuestion';
import Login from './components/Login';

describe('_saveQuestion', () => {

  it('the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function', async () => {
    var question = {
      "optionOneText": "optionOneText",
      "optionTwoText": "optionTwoText",
      "author": "johndoe"
    }
    var result = await _saveQuestion(question);
    expect(result.author).toEqual(question.author);
    expect(result.optionOne.text).toEqual(question.optionOneText);
    expect(result.optionTwo.text).toEqual(question.optionTwoText);
  })

  it('the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function', async () => {
    var question = {
      "optionOneText": "banana",
      "optionTwoText": "apple",
      "author": "tylermcginnis"
    }
    var result = await _saveQuestion(question);
    expect(result.author).toEqual(question.author);
    expect(result.optionOne.text).toEqual(question.optionOneText);
    expect(result.optionTwo.text).toEqual(question.optionTwoText);
  })

  it('the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function', async () => {
    var question = {
      "optionOneText": "facebook",
      "optionTwoText": "top top",
      "author": "sarahedo"
    }
    var result = await _saveQuestion(question);
    expect(result.author).toEqual(question.author);
    expect(result.optionOne.text).toEqual(question.optionOneText);
    expect(result.optionTwo.text).toEqual(question.optionTwoText);
  })

  it('an error is returned if incorrect data is passed to the function', async () => {
    var question = {
      "optionOneText": "optionOneText",
      "optionTwoText": "optionTwoText",
      "author": "unknow"
    }
    await expect(_saveQuestion(question)).rejects.toEqual("user id not found");
  })

})

describe('_saveQuestionAnswer', () => {

  it('true is returned when correctly formatted data is passed to the function', async () => {
    var answer = {
      "authedUser": "johndoe",
      "qid": "8xf0y6ziyjabvozdd253nd",
      "answer": "optionTwo"
    }

    await expect(_saveQuestionAnswer(answer)).toBeTruthy();
  })

  it('true is returned when correctly formatted data is passed to the function', async () => {
    var answer = {
      "authedUser": "tylermcginnis",
      "qid": "8xf0y6ziyjabvozdd253nd",
      "answer": "optionOne"
    }

    await expect(_saveQuestionAnswer(answer)).toBeTruthy();
  })

  it('an error is returned if incorrect data is passed to the function', async () => {
    var answer = {
      "authedUser": "unknow",
      "qid": "8xf0y6ziyjabvozdd253nd",
      "answer": "optionTwo"
    }
    await expect(_saveQuestionAnswer(answer)).rejects.toEqual("user id not found");
  })


  describe('snapshot', () => {

    it('Snapshot nav', () => {
      var component = render(
        <Provider store={store}>
          <BrowserRouter>
            <Nav />
          </BrowserRouter>
        </Provider>
      );
      expect(component).toMatchSnapshot();
    })

    it('Snapshot login page', () => {
      var component = render(
        <Provider store={store}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </Provider>
      );
      expect(component).toMatchSnapshot();
    })

  })

  describe('firechange new question', () => {

    it('firechange new question', () => {
      var component = render(
        <Provider store={store}>
          <BrowserRouter>
            <NewQuestion />
          </BrowserRouter>
        </Provider>
      );

      var inputOptionOne = component.getByTestId("firstOption");
      var inputOptionTwo = component.getByTestId("secondOption");

      fireEvent.change(inputOptionOne, { target: { value: 'batman' } });
      fireEvent.change(inputOptionTwo, { target: { value: 'superman' } });
      expect(inputOptionOne.value).toBe("batman");
      expect(inputOptionTwo.value).toBe("superman");
    })
  })

})
