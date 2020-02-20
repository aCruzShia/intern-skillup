import React, { useState } from 'react'

interface Props {
  parentCount: number
}

export default function Header({ parentCount }: Props) {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      This is Header component, You have clicked {count} times.
      <br />
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click header
      </button>
      <div>Parent has clicked {parentCount} times.</div>
    </div>
  )
}
