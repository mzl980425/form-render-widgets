import React, { useState } from 'react'
import FormRender from 'form-render/lib/antd'
import SCHEMA from './schema.json'
import RichTextEditor from 'form-render-widgets'

export default function Demo() {
  const [formData, setData] = useState(SCHEMA.formData || {})
  const [valid, setValid] = useState([])

  const onSubmit = () => {
    console.log(formData)
    if (valid.length > 0) {
      alert(`校验未通过字段：${valid.toString()}`)
    } else {
      alert(JSON.stringify(formData, null, 2))
    }
  }

  return (
    <div style={{ padding: 60 }}>
      <FormRender
        {...SCHEMA}
        formData={formData}
        onChange={setData}
        onValidate={setValid}
        widgets={{
          editor: RichTextEditor
        }}
      />
      <button onClick={onSubmit}>提交</button>
    </div>
  )
}
