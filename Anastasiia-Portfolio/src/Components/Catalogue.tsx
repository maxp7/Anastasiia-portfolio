import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from './Slider';
import CatalogueDescription from './CatalogueDescription';

import film1 from '../assets/img/film1.jpg';
import film2 from '../assets/img/film2.jpg';
import film3 from '../assets/img/film3.jpg';
import film4 from '../assets/img/film4.jpg';

import queen1 from '../assets/img/queen1.jpg'
import queen2 from '../assets/img/queen2.jpg'
import queen3 from '../assets/img/queen3.jpg'
import queen4 from '../assets/img/queen4.jpg'
import queen5 from '../assets/img/queen5.jpg'
import queen6 from '../assets/img/queen6.jpg'
import queen7 from '../assets/img/queen7.jpg'
import queen8 from '../assets/img/queen8.jpg'
import queen9 from '../assets/img/queen9.jpg'

import street1 from '../assets/img/street1.jpg'
import street2 from '../assets/img/street2.jpg'
import street4 from '../assets/img/street4.jpg'
import street5 from '../assets/img/street5.jpg'
import street6 from '../assets/img/street6.jpg'
import street7 from '../assets/img/street7.jpg'
import street8 from '../assets/img/street8.jpg'
import street9 from '../assets/img/street9.jpg'
import street10 from '../assets/img/street10.jpg'
import street11 from '../assets/img/street11.jpg'
import street12 from '../assets/img/street12.jpg'
import street13 from '../assets/img/street13.jpg'
import street14 from '../assets/img/street14.jpg'

import biene1 from '../assets/img/biene1.jpg'
import biene2 from '../assets/img/biene2.jpg'
import biene3 from '../assets/img/biene3.jpg'
import biene4 from '../assets/img/biene4.jpg'
import biene5 from '../assets/img/biene5.jpg'
import biene6 from '../assets/img/biene6.jpg'

import portraits1 from '../assets/img/portraits1.jpg'
import portraits2 from '../assets/img/portraits2.jpg'
import portraits3 from '../assets/img/portraits3.jpg'
import portraits4 from '../assets/img/portraits4.jpg'
import portraits5 from '../assets/img/portraits5.jpg'
import portraits6 from '../assets/img/portraits6.jpg'
import portraits7 from '../assets/img/portraits7.jpg'
import portraits8 from '../assets/img/portraits8.jpg'

import dejavu1 from '../assets/img/dejavu1.jpg'
import dejavu2 from '../assets/img/dejavu2.jpg'
import dejavu3 from '../assets/img/dejavu3.jpg'
import dejavu4 from '../assets/img/dejavu4.jpg'
import dejavu5 from '../assets/img/dejavu5.jpg'
import dejavu6 from '../assets/img/dejavu6.jpg'

const imagesData: { [key: string]: string[][] } = {
  Films: [
    [film1, film2, film3, film4], 
    [film4, film3, film2, film1], 
    [film2, film3, film1, film4], 
    [film2, film3, film1, film4], 
  ],
  Photos: [
    [queen1, queen2, queen3, queen4,queen5,queen6,queen7,queen8,queen9], 
    [street1, street2,street4,street5,street6,street7,street8,street9,street10,street11,street12,street13,street14], 
    [biene1, biene2,biene3,biene4,biene5,biene6],
    [portraits1,portraits2,portraits4,portraits5,portraits6,portraits7, portraits8],
    [dejavu1, dejavu2,dejavu3,dejavu4,dejavu5,dejavu6]
  ],
};

const Catalogue: React.FC = () => {
  const { title, id } = useParams<{ title: string; id: string }>();

  // Проверяем, что title и id не являются undefined
  if (!title || !id) {
    return <div>Invalid parameters</div>;
  }

  // Преобразуем id в число и проверяем его
  const imageIndex = parseInt(id, 10);
  if (isNaN(imageIndex) || !imagesData[title] || !imagesData[title][imageIndex]) {
    return <div>Images not found</div>;
  }

  const images = imagesData[title][imageIndex];

  return (
    <div>
      <Slider images={images} />
      <CatalogueDescription title={title} id={id} />
    </div>
  );
};

export default Catalogue;
