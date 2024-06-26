import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from './Slider';
import styles from '../Styles/Catalogue.module.css';

import film1 from '../assets/img/film1.jpg';
import film2 from '../assets/img/film2.jpg';
import film3 from '../assets/img/film3.jpg';
import film4 from '../assets/img/film4.jpg';

import queen1 from '../assets/img/queen1.jpg';
import queen2 from '../assets/img/queen2.jpg';
import queen3 from '../assets/img/queen3.jpg';
import queen4 from '../assets/img/queen4.jpg';
import queen5 from '../assets/img/queen5.jpg';
import queen6 from '../assets/img/queen6.jpg';
import queen7 from '../assets/img/queen7.jpg';
import queen8 from '../assets/img/queen8.jpg';
import queen9 from '../assets/img/queen9.jpg';

import street1 from '../assets/img/street1.jpg';
import street2 from '../assets/img/street2.jpg';
import street4 from '../assets/img/street4.jpg';
import street5 from '../assets/img/street5.jpg';
import street6 from '../assets/img/street6.jpg';
import street7 from '../assets/img/street7.jpg';
import street8 from '../assets/img/street8.jpg';
import street9 from '../assets/img/street9.jpg';
import street10 from '../assets/img/street10.jpg';
import street11 from '../assets/img/street11.jpg';
import street12 from '../assets/img/street12.jpg';
import street13 from '../assets/img/street13.jpg';
import street14 from '../assets/img/street14.jpg';

import biene1 from '../assets/img/biene1.jpg';
import biene2 from '../assets/img/biene2.jpg';
import biene3 from '../assets/img/biene3.jpg';
import biene4 from '../assets/img/biene4.jpg';
import biene5 from '../assets/img/biene5.jpg';
import biene6 from '../assets/img/biene6.jpg';

import portraits1 from '../assets/img/portraits1.jpg';
import portraits2 from '../assets/img/portraits2.jpg';
import portraits3 from '../assets/img/portraits3.jpg';
import portraits4 from '../assets/img/portraits4.jpg';
import portraits5 from '../assets/img/portraits5.jpg';
import portraits6 from '../assets/img/portraits6.jpg';
import portraits7 from '../assets/img/portraits7.jpg';
import portraits8 from '../assets/img/portraits8.jpg';

import dejavu1 from '../assets/img/dejavu1.jpg';
import dejavu2 from '../assets/img/dejavu2.jpg';
import dejavu3 from '../assets/img/dejavu3.jpg';
import dejavu4 from '../assets/img/dejavu4.jpg';
import dejavu5 from '../assets/img/dejavu5.jpg';
import dejavu6 from '../assets/img/dejavu6.jpg';

import installation1 from '../assets/img/installation1.jpg';
import installation2 from '../assets/img/installation2.jpg';
import installation3 from '../assets/img/installation3.jpg';
import installation4 from '../assets/img/installation4.jpg';
import installation5 from '../assets/img/installation5.jpg';
import installation6 from '../assets/img/installation6.jpg';

const imagesData: { [key: string]: { url: string; }[][] } = {
  films: [
    [
      { url: film1 },
      { url: film2,  },
      { url: film3, },
      { url: film4,  }
    ],
    [
      { url: film1,  },
      { url: film2,  },
      { url: film3, },
      { url: film4,}
    ],
    [
      { url: film1,  },
      { url: film2, },
      { url: film3,  },
      { url: film4, }
    ],
    [
      { url: film1, },
      { url: film2,  },
      { url: film3, },
      { url: film4,  }
    ]
  ],
  photos: [
    [
      { url: queen1, },
      { url: queen2, },
      { url: queen3,},
      { url: queen4,  },
      { url: queen5,  },
      { url: queen6,  },
      { url: queen7, },
      { url: queen8, },
      { url: queen9, }
    ],
    [
      { url: street1,  },
      { url: street2,  },
      { url: street4,   },
      { url: street5, },
      { url: street6, },
      { url: street7, },
      { url: street8,},
      { url: street9,},
      { url: street10,},
      { url: street11,  },
      { url: street12,  },
      { url: street13,  },
      { url: street14, }
    ],
    [
      { url: biene1, },
      { url: biene2, },
      { url: biene3,  },
      { url: biene4,  },
      { url: biene5, },
      { url: biene6, }
    ],
    [
      { url: portraits1,  },
      { url: portraits2, },
      { url: portraits3, },
      { url: portraits4,  },
      { url: portraits5,  },
      { url: portraits6, },
      { url: portraits7,  },
      { url: portraits8,  }
    ],
    [
      { url: dejavu1,  },
      { url: dejavu2,  },
      { url: dejavu3, },
      { url: dejavu4,  },
      { url: dejavu5,  },
      { url: dejavu6, }
    ]
  ],
  installation: [
    [
      { url: installation1, },
      { url: installation2,  },
      { url: installation3,  },
      { url: installation4,  },
      { url: installation5,  },
      { url: installation6,  }
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

  return (
    <div className={styles.container}>
      <Slider images={images} />
    </div>
  );
};

export default Catalogue;
