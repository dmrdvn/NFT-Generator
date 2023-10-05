import React from 'react'

export default function Section(props) {
  switch(props.tag) {
    case 'section':
      return <section {...props}>{props.children}</section>
    case 'h1':
      return <h1 {...props}>{props.children}</h1>
    case 'h2':
      return <h2 {...props}>{props.children}</h2>
    case 'h3':
      return <h3 {...props}>{props.children}</h3>
    case 'h4':
      return <h4 {...props}>{props.children}</h4>
    case 'h5':
      return <h5 {...props}>{props.children}</h5>
    case 'h6':
      return <h6 {...props}>{props.children}</h6>
    case 'span':
      return <span {...props}>{props.children}</span>
    case 'p':
      return <p {...props}>{props.children}</p>
    case 'button':
      return <button {...props}>{props.children}</button>
    case 'footer':
      return <footer {...props}>{props.children}</footer>
    case 'header':
      return <header {...props}>{props.children}</header>
    default:
      return <div {...props}>{props.children}</div>
  }
}