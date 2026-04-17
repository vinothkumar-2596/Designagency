import { createElement } from 'react'

function Button({ as: Component = 'button', className = '', variant = 'primary', ...props }) {
  return createElement(Component, {
    className: `button button--${variant} ${className}`.trim(),
    ...props,
  })
}

export default Button
