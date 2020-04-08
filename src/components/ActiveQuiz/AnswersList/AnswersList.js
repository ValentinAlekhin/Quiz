import React from 'react'
import classes from './AnswersList.module.scss'

const AnswersList = props => (
  <ul className={classes.AnswersList}>
    { props.answers.map((answer, index) => {
      return (
        <AnswerItem 
          state={props.state ? props.state[answer.id] : null}
          answer={answer} 
          key={index}
          onAnswerClick={props.onAnswerClick}
        />
      )
    }) }
  </ul>
)

const AnswerItem = props => {
  // console.log(props.answer.id)
  const cls = [classes.AnswerItem]
  if (props.state) {
    cls.push(classes[props.state])
  }
  // console.log(cls)

  return (
    <li className={cls.join(' ')} onClick={() => props.onAnswerClick(props.answer.id)}>
      { props.answer.text }
    </li>
  )
}

export default AnswersList