import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import Slider from './Slider';
import Navigation from './Navigation';
import styles from '../Styles/Catalogue.module.css';

import recording1 from '../assets/img/0.1.jpg';
import recording2 from '../assets/img/0.2.jpg';
import recording3 from '../assets/img/0.3.jpg';
import recording4 from '../assets/img/0.4.jpg';
import recording5 from '../assets/img/0.5.jpg';
import recording6 from '../assets/img/0.6.jpg';
import recording7 from '../assets/img/0.7.jpg';
import recording8 from '../assets/img/0.8.jpg';

import ohrwurm1 from '../assets/img/1.1.jpg'
import ohrwurm2 from '../assets/img/1.2.jpg'
import ohrwurm3 from '../assets/img/1.3.jpg'
import ohrwurm4 from '../assets/img/1.4.jpg'
import ohrwurm5 from '../assets/img/1.5.jpg'
import ohrwurm6 from '../assets/img/1.6.jpg'
import ohrwurm7 from '../assets/img/1.7.jpg'

import erwachen1 from '../assets/img/2.6.jpg'
import erwachen2 from '../assets/img/2.5.jpg'
import erwachen3 from '../assets/img/2.3.jpg'
import erwachen4 from '../assets/img/2.2.jpg'
import erwachen5 from '../assets/img/2.4.png'

import rueckenwind1 from '../assets/img/3.1.jpg'
import rueckenwind2 from '../assets/img/3.2.jpg'
import rueckenwind3 from '../assets/img/3.3.jpg'
import rueckenwind4 from '../assets/img/3.4.jpg'
import rueckenwind5 from '../assets/img/3.5.jpg'

import kroshka1 from '../assets/img/4.1.jpg'
import kroshka2 from '../assets/img/4.2.jpg'
import kroshka3 from '../assets/img/4.3.jpg'
import kroshka4 from '../assets/img/4.4.jpg'
import kroshka5 from '../assets/img/4.5.jpg'
import kroshka6 from '../assets/img/4.6.jpg'
import kroshka7 from '../assets/img/4.7.jpg'

import derossi1 from '../assets/img/5.1.jpg'
import derossi2 from '../assets/img/5.2.jpg'
import derossi3 from '../assets/img/5.3.jpg'
import derossi4 from '../assets/img/5.4.jpg'

import ichSehe1 from '../assets/img/6.jpg'
import ichSehe2 from '../assets/img/6.1.jpg'
import ichSehe3 from '../assets/img/6.2.jpg'
import ichSehe4 from '../assets/img/6.3.jpg'
import ichSehe5 from '../assets/img/6.4.jpg'
import ichSehe6 from '../assets/img/6.5.jpg'

import nature1 from '../assets/img/7.jpg'
import nature2 from '../assets/img/7.1.jpg'
import nature3 from '../assets/img/7.2.jpg'
import nature4 from '../assets/img/7.3.jpg'
import nature5 from '../assets/img/7.4.jpg'
import nature6 from '../assets/img/7.5.jpg'
import nature7 from '../assets/img/7.6.jpg'
import nature8 from '../assets/img/7.7.jpg'
import nature9 from '../assets/img/7.8.jpg'
import nature10 from '../assets/img/7.9.jpg'
import nature11 from '../assets/img/7.10.jpg'
import nature12 from '../assets/img/7.11.jpg'
import nature13 from '../assets/img/7.12.jpg'
import nature14 from '../assets/img/7.13.jpg'
import nature15 from '../assets/img/7.14.jpg'
import nature16 from '../assets/img/7.15.jpg'

import installation1 from '../assets/img/installation1.jpg';
import installation2 from '../assets/img/installation2.jpg';
import installation3 from '../assets/img/installation3.jpg';
import installation4 from '../assets/img/installation4.jpg';
import installation5 from '../assets/img/installation5.jpg';
import installation6 from '../assets/img/installation6.jpg';

const imagesData: { [key: string]: { url: string, title?: string }[][] } = {
  films: [
    [
      { url: recording1, title: 'RECORDING 377' },
      { url: recording2 },
      { url: recording3 },
      { url: recording4 },
      { url: recording5 },
      { url: recording6 },
      { url: recording7 },
      { url: recording8 }
    ],
    [
      { url: erwachen1, title: 'Erwachen' },
      { url: erwachen2 },
      { url: erwachen3 },
      { url: erwachen4 },
      { url: erwachen5 },
    ],
    [
      { url: ohrwurm1, title: 'Ohrwurm' },
      { url: ohrwurm2 },
      { url: ohrwurm3 },
      { url: ohrwurm4 },
      { url: ohrwurm5 },
      { url: ohrwurm6 },
      { url: ohrwurm7 }
    ],
    [
      { url: rueckenwind1, title: 'Rückenwind' },
      { url: rueckenwind2 },
      { url: rueckenwind3 },
      { url: rueckenwind4 },
      { url: rueckenwind5 }
    ],
    [
      { url: kroshka1, title: 'Kroshka' },
      { url: kroshka2 },
      { url: kroshka3 },
      { url: kroshka4 },
      { url: kroshka5 },
      { url: kroshka6 },
      { url: kroshka7 }
    ],
    [
      { url: derossi1, title: 'A.Derossi' },
      { url: derossi2 },
      { url: derossi3 },
      { url: derossi4 }
    ]
  ],
  photos: [
    [
      { url: ichSehe1, title: 'Ich Sehe' },
      { url: ichSehe2 },
      { url: ichSehe3 },
      { url: ichSehe4 },
      { url: ichSehe5 },
      { url: ichSehe6 }
    ],
    [
      { url: nature1, title: 'Nature' },
      { url: nature2 },
      { url: nature3 },
      { url: nature4 },
      { url: nature5 },
      { url: nature6 },
      { url: nature7 },
      { url: nature8 },
      { url: nature9 },
      { url: nature10 },
      { url: nature11 },
      { url: nature12 },
      { url: nature13 },
      { url: nature14 },
      { url: nature15 }
    ]
  ],
  installation: [
    [
      { url: installation1, title: 'Tactile Music Interface' },
      { url: installation2 },
      { url: installation3 },
      { url: installation4 },
      { url: installation5 },
      { url: installation6 }
    ]
  ]
};

const Catalogue: React.FC = () => {
  const { title, id } = useParams<{ title: string; id: string }>();
  
  if (!title || !id) {
    return <div>Invalid parameters</div>;
  }

  const normalizedTitle = title.toLowerCase();
  const imageIndex = parseInt(id, 10);

  if (isNaN(imageIndex) || !imagesData[normalizedTitle] || !imagesData[normalizedTitle][imageIndex]) {
    return <div>Images not found</div>;
  }

  const images = imagesData[normalizedTitle][imageIndex];
  const navigate = useNavigate();
  const location = useLocation(); // Получаем текущий путь
  const handleImageClick = () => {
      navigate(`/${title}`); 
  };

  const path = location.pathname;
  const regex = /^\/(\w+)\/\d+$/;
  let resultPath = null;
  const match = path.match(regex);
  if (match) {
    resultPath = match[1];
  }
  return (
    <div className={`${styles.catalogueContainer} ${imagesData.key ? false : true}`}>
      <Navigation />
      <Slider 
        images={images} 
        onImageClick={handleImageClick} 
        sliderClassName={styles.catalogueSlider} 
        titleClassName={`${styles.catalogueTitle} ${resultPath !== "films" ? styles.watchButtonDisable : ''}`} 
      />
    </div>
  );
};

export default Catalogue;
