import React from 'react'


export default function (field) {
  return (
    <div class="form-group">
    <label htmlFor={field.name}>{field.label}</label>
    <select class="form-control" id={field.name}>
      <option>1</option>
      <option>2</option>
    </select>
  </div>
  )
}
