import React from 'react'
import { ThemeContext } from '../../theme'

const VerticalMenu = (props) => (
  <ThemeContext.Consumer>
    {theme => (
      <div
        className="ui secondary vertical pointing menu"
        style= {{ backgroundColor: theme.background, marginTop: '0.1rem' }}
      >
        <div className="ui orange header item" style={{ color: theme.foreground }}>TV Shows</div>
        <a href="#" className="active item" style={{ color: theme.foreground }}>
            I&apos;ve watched & loved
        </a>
        <a href="#" className="item" style={{ color: theme.foreground }}>
            I&apos;ve watched & hated
        </a>
        <a href="#" className="item" style={{ color: theme.foreground }}>
            I&apos;m currently watching
        </a>
      </div>
    )}

  </ThemeContext.Consumer>
)

export default VerticalMenu
