import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

const propTypes = {
  /**
   * One or more button variant combinations
   *
   * buttons may be one of a variety of visual variants such as:
   *
   * `'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'`
   *
   * as well as "outline" versions (prefixed by 'outline-*')
   *
   * `'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light'`
   */
  variant: PropTypes.string,

  /**
   * Specifies a large or small button.
   *
   * @type ('sm'|'lg'|'xl')
   */
  size: PropTypes.string,

  /** Spans the full width of the Button parent */
  block: PropTypes.bool,

  /** Manually set the visual state of the button to `:active` */
  active: PropTypes.bool,

  /**
   * Disables the Button, preventing mouse events,
   * even if the underlying component is an `<a>` element
   */
  disabled: PropTypes.bool,

  /**
   * Defines HTML button type attribute.
   *
   * @default 'button'
   */
  type: PropTypes.oneOf(["button", "reset", "submit", null]),

  as: PropTypes.elementType,
}

const defaultProps = {
  variant: "primary",
  active: false,
  disabled: false,
  type: "button",
}

const Button = React.forwardRef(
  ({ variant, size, active, className, block, type, as, ...props }, ref) => {
    const classes = classNames(
      className,
      `btn`,
      active && "active",
      `btn-${variant}`,
      block && `btn-block`,
      size && `btn-${size}`
    )

    if (ref) {
      props.ref = ref
    }

    if (!as) {
      props.type = type
    }

    const Component = as || "button"
    return <Component {...props} className={classes} />
  }
)

Button.displayName = "Button"
Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
