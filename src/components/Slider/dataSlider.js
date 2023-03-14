import { v4 as uuid } from 'uuid'

const gallery1 = '/images/slideimg1.jpg'
const gallery2 = '/images/slideimg2.jpg'
const gallery3 = '/images/slideimg3.jpg'
const gallery4 = '/images/slideimg4.jpg'
const gallery5 = '/images/slideimg5.jpg'

const dataSlider = [
  {
    id: uuid(),
    image: gallery1,
    name: 'image1',
  },
  {
    id: uuid(),
    image: gallery2,
    name: 'image2',
  },
  {
    id: uuid(),
    image: gallery3,
    name: 'image3',
  },
  {
    id: uuid(),
    image: gallery4,
    name: 'image4',
  },
  {
    id: uuid(),
    image: gallery5,
    name: 'image5',
  },
]

export default dataSlider