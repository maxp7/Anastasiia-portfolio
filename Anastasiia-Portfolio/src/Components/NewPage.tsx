import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from './Slider';
import film1 from '../assets/img/film1.jpg';
import film2 from '../assets/img/film2.jpg';
import film3 from '../assets/img/film3.jpg';
import film4 from '../assets/img/film4.jpg';

const imagesData: { [key: string]: string[][] } = {
  Films: [
    [film1, film2, film3, film4], // sliderImagesFilm0
    [film4, film3, film2, film1], // sliderImagesFilm1
    [film2, film3, film1, film4], // sliderImagesFilm2
    [film2, film3, film1, film4], // sliderImagesFilm3
  ],
  Photos: [
    [film1, film2, film3, film4], // sliderImagesPhoto0
    [film4, film3, film2, film1], // sliderImagesPhoto1
    [film2, film3, film1, film4], // sliderImagesPhoto2
    [film2, film3, film1, film4], // sliderImagesPhoto3
  ],
};

const NewPage: React.FC = () => {
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
      <h1>New Page</h1>
      <p>Category: {title}</p>
      <p>Image ID: {id}</p>
    </div>
  );
};

export default NewPage;
