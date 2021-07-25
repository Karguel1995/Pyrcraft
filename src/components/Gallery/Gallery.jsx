import React from 'react';
import ImageGallery from 'react-image-gallery';
import "./Gallery.scss"
import greenHouse from './images/greenhouse-750-1000.jpg'
import bookshelf1 from './images/bookshelf1-750-1000.jpg'
import bookshelf2 from './images/bookshelf2.jpg'
import cupboard1 from './images/cupboard1.jpg'
import cupboard2 from './images/cupboard2.jpg'
import cupboard3 from './images/cupboard3.jpg'
import feeder from './images/feeder.jpg'
import rtvCupboard1 from './images/rtvCupboard1.jpg'
import rtvCupboard2 from './images/rtvCupboard2.jpg'
import rtvCupboard3 from './images/rtvCupboard3.jpg'
import rtvCupboard4 from './images/rtvCupboard4.jpg'
import metalTable1 from './images/metalTable1.jpg'
import metalTable2 from './images/metalTable2.jpg'
import metalTable3 from './images/metalTable3.jpg'
import metalTable4 from './images/metalTable4.jpg'

const images = [
  {
    original: greenHouse,
    thumbnail: greenHouse,
  },
  {
    original: bookshelf1,
    thumbnail: bookshelf1,
  },
  {
    original: bookshelf2,
    thumbnail: bookshelf2,
  },
  {
    original: cupboard1,
    thumbnail: cupboard1,
  },
  {
    original: cupboard2,
    thumbnail: cupboard2,
  },
  {
    original: cupboard3,
    thumbnail: cupboard3,
  },
  {
    original: feeder,
    thumbnail: feeder,
  },
  {
    original: rtvCupboard1,
    thumbnail: rtvCupboard1,
  },
  {
    original: rtvCupboard2,
    thumbnail: rtvCupboard2
  },
  {
    original: rtvCupboard3,
    thumbnail: rtvCupboard3,
  },
  {
    original: rtvCupboard4,
    thumbnail: rtvCupboard4,
  },
  {
    original: metalTable1,
    thumbnail: metalTable1,
  },
  {
    original: metalTable2,
    thumbnail: metalTable2,
  },
  {
    original: metalTable3,
    thumbnail: metalTable3,
  },
  {
    original: metalTable4,
    thumbnail: metalTable4,
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <ImageGallery items={images} />
    </div>
  );
}

export default Gallery;