// Write your code here.
import './index.css'
import {Component} from 'react'

class ThumbnailItem extends Component {
  renderThumbnails = () => {
    const {imagesList, onClickUpdateId, selectedImageId} = this.props

    return imagesList.map(eachItem => {
      const {thumbnailUrl, id, thumbnailAltText} = eachItem

      const onClickThumbnail = () => {
        onClickUpdateId(id)
      }

      const buttonName =
        id === selectedImageId ? 'selected-list-item' : 'list-item'

      return (
        <li  key={id}>
          <button
           
            className={buttonName}
            onClick={onClickThumbnail}
            type="button"
          >
            <img
              src={thumbnailUrl}
              className="thumbnail-image"
              alt={thumbnailAltText}
            />
          </button>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="thumbnail-container">
        <h1 className="heading">Nature Photography</h1>
        <p className="description">Nature Photography by Rahul</p>
        <ul className="thumbnails-list-container">{this.renderThumbnails()}</ul>
      </div>
    )
  }
}

export default ThumbnailItem
