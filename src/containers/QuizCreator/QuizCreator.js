import React, { Component } from 'react'
import classes from './QuizCreator.module.scss'
import Button from '../../UI/Button/Button'

export default class QuizCreator extends Component {
  submitHandler = e => {
    e.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div className={classes.Content}>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>
            <input type="text"></input>
            <hr/>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>

            <select></select>

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Добавить вопрос
            </Button>
            <Button
              type='success'
              onClick={this.createQuizHandler}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    )
  }
}