import React from 'react'
import { ThemeContext } from '../../theme'
import { NavLlink } from 'react-router-dom'
import PropTypes from 'prop-types'

const VerticalMenu = ({ albums, albumsPathname }) => (
  <ThemeContext.Consumer>
    {theme => (
      <div
        className="ui secondary vertical menu"
        style={{ backgroundColor: theme.background, marginTop: '0.1rem' }}
      >
        <div className="header item" style={{ color: theme.foreground }}>
          Albums
        </div>
        {albums.map(album => (
          <NavLlink to={`${albumsPathname}/${album.id}`} activeClassName="item" key={album.id}>
            {album.name}
          </NavLlink>
        ))}
      </div>
    )}
  </ThemeContext.Consumer>
)

VerticalMenu.propTypes = {
  albums: PropTypes.object,
  albumsPathname: PropTypes.string,
  map: PropTypes.func,
}

export default VerticalMenu