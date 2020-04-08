import React from 'react'
import classes from './MenuToggle.module.scss'

const MenuToggle = props => {
  const cls = [
    classes.MenuToggle,
  ]

  if (props.isOpen) {
    cls.push(classes.open) 
  }

  return (
    <div
      className={cls.join(' ')}
      onClick={props.onToggle}
    >
    { props.isOpen ? 'Close' : 'Open' }
    </div>
  )
}

export default MenuToggle