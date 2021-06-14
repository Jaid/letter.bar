import React, {useRef} from "react"
import {useDispatch, useSelector} from "react-redux"

import css from "./style.scss"

/**
  * @typedef {Object} Props
  * @prop {*} [className]
  * @prop {Object} input
  */

/**
 * @param {Props} props
 * @return {import("react").ReactElement}
 */
const TextBox = props => {
  const dispatch = useDispatch()
  const text = useSelector(state => state.text.value)
  const handleChange = event => {
    dispatch({
      type: "text/set",
      payload: event.target.value,
    })
  }
  return <textarea className={css.container} value={text} onChange={handleChange}/>
}

export default TextBox