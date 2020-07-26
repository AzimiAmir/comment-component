import React from 'react'
import faker from 'faker'

const Avatar = (props) => {
  return (
  <img
    width="50"
    height="50"
    alt={props.name}
    src={faker.image.avatar()}
  />
  )
}

export default React.memo(Avatar)