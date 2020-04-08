import React from 'react'
import { Link } from 'react-router-dom'
import classes from './FinishedQuiz.module.scss'
import Button from '../../UI/Button/Button'

const FinishedQuiz = props => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        { props.quiz.map((quizItem, index) => {
          console.log(props.results)
          return (
            <li className={classes[props.results[quizItem.id]]} key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              { quizItem.question }
            </li>
          )
        }) }
      </ul>

      <p>
        { Object
          .values(props.results)
          .filter(res => res === 'success')
          .length
        } из { props.quiz.length }
      </p>

      <div>
        <Button onClick={props.onRetry} type="primary">
          Повторить
        </Button>
        <Link to="/">
          <Button type="success">
            Перейти в список тестов
          </Button>
        </Link>
        
        <i className="fa-comments-o"></i>
        {/* <button onClick={props.onRetry}>Повторить</button> */}
      </div>
    </div>
  )
}

export default FinishedQuiz