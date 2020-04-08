import React, {Component} from 'react'
import classes from './quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    aciveQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 5,
        id: 1,
        answers: [
          {text: 'Черный', id: 1},
          {text: 'Синий', id: 2},
          {text: 'Красный', id: 3},
          {text: 'Белый', id: 4},
          {text: 'Синий', id: 5},
        ]
      },
      {
        question: 'В каком году основали Санкт Петербург',
        rightAnswerId: 4,
        id: 2,
        answers: [
          {text: '1700', id: 1},
          {text: '1795', id: 2},
          {text: '1900', id: 3},
          {text: '1288', id: 4},
        ]
      },
    ]
  }

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }  
    }
    
    const question = this.state.quiz[this.state.aciveQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })  

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            aciveQuestion: this.state.aciveQuestion + 1,
            answerState: null,
          })
        }

        window.clearTimeout(timeout)
      }, 1000)  
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        results,
      })
    }
  }

  isQuizFinished() {
    return this.state.aciveQuestion === this.state.quiz.length - 1
  }

  retryHandler = () => {
    this.setState({
      aciveQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          { this.state.isFinished 
            ? <FinishedQuiz 
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler} 
            />
            :  <ActiveQuiz 
            answerNumber={this.state.aciveQuestion + 1}
            question={this.state.quiz[this.state.aciveQuestion].question}
            answers={this.state.quiz[this.state.aciveQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLenght={this.state.quiz.length}
            state={this.state.answerState}
            />             
          }         
        </div>
      </div>
    )
  }
}

export default Quiz