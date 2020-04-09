import React, { Component } from 'react'
import classes from './QuizCreator.module.scss'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Inpit'
import Select from '../../UI/Select/Select'
import {createControl} from '../../form/FormFramework'

function createOptionControl(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: 'Значение не может быть пустым',
    id: number
  }, { required: true })
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Введите вопрос',
      errorMessage: 'Вопрос не может быть пустым'
    }, { required: true }),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}
export default class QuizCreator extends Component {

  state = {
    quiz: [],
    formControls: createFormControls(),
    rightAnswerId: 1
  }

  submitHandler = e => {
    e.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  changeHandler = (target, controlName) => {

  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const {label, errorMessage, value, valid, validation, touched} = this.state.formControls[controlName]

      return (
        <React.Fragment key={index}>
          <Input
            label={label}
            value={value}
            valid={valid}
            shoudValidate={!validation}
            touched={touched}
            errorMessage={errorMessage}
            onChange={e => this.changeHandler(e.target.value, controlName)}
          />
          { index === 0 ? <hr/> : null }
        </React.Fragment>
      )
    })
  }

  selectChangeHandler = e => {
    this.setState({
      rightAnswerId: +e.target.value
    })
  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div className={classes.Content}>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>
            
            { this.renderControls() }

            <Select
              label="Выберите правильный ответ"
              value={this.state.rightAnswerId}
              onChange={this.selectChangeHandler}
              options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4},
              ]}
            />

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