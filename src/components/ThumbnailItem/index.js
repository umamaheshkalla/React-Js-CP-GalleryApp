import {Component} from 'react'

import './index.css'

class ThumbnaillItem extends Component {
  render() {
    const {imageDetails, onClickThumbnailImage, isActive} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = imageDetails
    const onClickImage = () => {
      onClickThumbnailImage(id)
    }
    const isActiveImageClass = isActive ? 'thumbnail-active' : 'thumbnail'

    return (
      <li className="list-item-container">
        <button className="button" onClick={onClickImage} type="button">
          <img
            className={isActiveImageClass}
            alt={thumbnailAltText}
            src={thumbnailUrl}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnaillItem
