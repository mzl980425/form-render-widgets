# form-render-widgets

[![NPM](https://img.shields.io/npm/v/form-render-widgets.svg)](https://www.npmjs.com/package/form-render-widgets) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i form-render-widgets
# or
yarn add form-render-widgets
```

## Usage

```jsx
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
```

schema.json file:

```json
{
  "propsSchema": {
    "type": "object",
    "properties": {
      "inputName": {
        "title": "简单输入框",
        "type": "string"
      },
      "inputName2": {
        "title": "简单输入框",
        "type": "string",
        "ui:widget": "editor"
      }
    },
    "required": []
  },
  "formData": {}
}
```

## License

MIT © [](https://github.com/)
