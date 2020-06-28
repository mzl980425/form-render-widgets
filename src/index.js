import React, { useRef } from 'react'
import JoditEditor from 'jodit-react'

const RichTextEditor = ({ onChange, value, name, options, ...rest }) => {
  const editor = useRef(null)

  const handleSubmit = (value) => {
    onChange(name, value)
  }

  const handleChange = (value) => {}

  return (
    <div style={{ width: '100%' }}>
      <JoditEditor
        ref={editor}
        value={value}
        config={options}
        tabIndex={1} // tabIndex of textarea
        onBlur={handleSubmit}
        onChange={handleChange}
        {...rest}
      />
    </div>
  )
}

export default RichTextEditor
