import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import Slider from './Slider';
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
import erwachen5 from '../assets/img/2.4.webp'

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

import nature1 from '../assets/img/7.webp'
import nature2 from '../assets/img/7.1.webp'
import nature3 from '../assets/img/7.2.jpg'
import nature4 from '../assets/img/7.3.jpg'
import nature5 from '../assets/img/7.4.webp'
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


import marvels1 from '../assets/img/8.1.webp'
import marvels2 from '../assets/img/8.2.webp'
import marvels3 from '../assets/img/8.3.jpg'
import marvels4 from '../assets/img/8.4.webp'
import marvels5 from '../assets/img/8.5.jpg'
import marvels6 from '../assets/img/8.6.jpg'
import marvels7 from '../assets/img/8.7.webp'
import marvels8 from '../assets/img/8.8.jpg'
import marvels9 from '../assets/img/8.9.jpg'
import marvels10 from '../assets/img/8.10.jpg'
import marvels11 from '../assets/img/8.11.jpg'
import marvels12 from '../assets/img/8.12.jpg'
import marvels13 from '../assets/img/8.13.webp'
import marvels14 from '../assets/img/8.14.jpg'
import marvels15 from '../assets/img/8.15.jpg'
import marvels16 from '../assets/img/8.16.jpg'
import marvels17 from '../assets/img/8.17.jpg'


import queen1 from '../assets/img/9.1.jpg'
import queen2 from '../assets/img/9.2.jpg'
import queen3 from '../assets/img/9.3.jpg'
import queen4 from '../assets/img/9.4.jpg'
import queen5 from '../assets/img/9.5.jpg'
import queen6 from '../assets/img/9.6.jpg'
import queen7 from '../assets/img/9.7.jpg'

import installation1 from '../assets/img/installation6.jpg';
import installation2 from '../assets/img/installation2.jpg';
import installation3 from '../assets/img/installation3.jpg';
import installation4 from '../assets/img/installation4.jpg';
import installation5 from '../assets/img/installation5.jpg';
import installation6 from '../assets/img/installation1.jpg';

import recordingBlurred1 from '../assets/img/0.1b.webp'
import recordingBlurred2 from '../assets/img/0.2b.webp'

const imagesData: { [key: string]: { url: string, placeholder?: string, title?: string, description?: string}[][] } = {
  films: [
    [
      { url: recording1, placeholder: recordingBlurred1, title: 'RECORDING 377' },
      { url: recording2, placeholder: recordingBlurred2},
      { url: recording3, },
      { url: recording4,  },
      { url: recording5,  },
      { url: recording6, },
      { url: recording7,  },
      { url: recording8,  }
    ],
    [
      { url: erwachen1, title: 'ERWACHEN' },
      { url: erwachen2 },
      { url: erwachen3 },
      { url: erwachen4 },
      { url: erwachen5 },
    ],
    [
      { url: ohrwurm1, title: 'OHRWURM' },
      { url: ohrwurm2 },
      { url: ohrwurm3 },
      { url: ohrwurm4 },
      { url: ohrwurm5 },
      { url: ohrwurm6 },
      { url: ohrwurm7 }
    ],
    [
      { url: rueckenwind1, title: 'RÜCKENWIND' },
      { url: rueckenwind2 },
      { url: rueckenwind3 },
      { url: rueckenwind4 },
      { url: rueckenwind5 }
    ],
    [
      { url: kroshka1, title: 'KROSHKA' },
      { url: kroshka2 },
      { url: kroshka3 },
      { url: kroshka4 },
      { url: kroshka5 },
      { url: kroshka6 },
      { url: kroshka7 }
    ],
    [
      { url: derossi1, title: 'A.DEROSSI' },
      { url: derossi2 },
      { url: derossi3 },
      { url: derossi4 }
    ]
  ],
  photos: [ [
    { url: nature1, title: 'SEALED TIME' },
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
  ],
    [
      { url: ichSehe1, title: 'ICH BIN EINE BIENE 246' },
      { url: ichSehe2 },
      { url: ichSehe3 },
      { url: ichSehe4 },
      { url: ichSehe5 },
      { url: ichSehe6 }
    ],
    [
      { url: marvels1, title: 'EVERYDAY MARVELS' },
      { url: marvels2 },
      { url: marvels3 },
      { url: marvels4 },
      { url: marvels5 },
      { url: marvels6 },
      { url: marvels7 },
      { url: marvels8 },
      { url: marvels9 },
      { url: marvels10 },
      { url: marvels11 },
      { url: marvels12 },
      { url: marvels13 },
      { url: marvels14 },
      { url: marvels15 },
      { url: marvels16 },
      { url: marvels17 },
    ],
    [
      { url: queen1, title: 'THE QUEEN OF THE NIGHT' },
      { url: queen2 },
      { url: queen3 },
      { url: queen4 },
      { url: queen5 },
      { url: queen6 },
      { url: queen7 }
    ],
  ],
  installation: [
    [
      { url: installation1, title: 'TANGIBLE MUSIC INTERFACES' },
      { url: installation2 },
      { url: installation3 },
      { url: installation4 },
      { url: installation5 },
      { url: installation6 }
    ]
  ]
};
interface Crew {
  director?: string;
  filmBy?: string;
  cinematographer?:string;
  writer?: string;
  assistant?: string;
  colorist?: string;
  setDesigner?:string;
  costumeDesigner?:string;
  directorOfPhotography?: string;
  producer?: string;
  soundDesign?: string;
  makeUp?:string;
  cast?: string[];
  designAndConception?:string;
  programming?:string;
  supervision?:string;
}

interface Description {
  general?: string;
  year?: string;
  language?: string;
  festivals?: string;
  crew?: Crew;
  youtubeLink?: string;
  
}const descriptions: Record<string, Description> = {
  "recording 377": {
    general: `"Recording 377" is a dystopian short film set in the post-nuclear war era. The narrative revolves around a youthful filmmaker who finds herself irresistibly drawn into a mesmerizing cinematic journey. Together with her artificial intelligence companion, she endeavours to reconstruct an image of life on Earth in the run-up to the atomic explosion. She dives into deep-seated themes of life, death, love, and humanity. The movie blurs the boundaries between reality and fiction, submerging the viewer in a captivating audio-visual exploration.`,
    year: "2023",
    language: "English",
    festivals: "Duemila30 2024, Milan, Italy; Heart Of Europe 2023, Kosice, Slovakia; Ars Electronica 2023, Linz, Austria",
    crew: {
      director: "Anastasiia Vishnevska",
      writer: "Anastasiia Sviderska",
      directorOfPhotography: "Tijana Mirjacic",
      producer: "Larissa Krüger",
      soundDesign: "Esentialmiks",
      cast: ["Ben Hoffmann", "Annabel Bayer", "Sofia Kroshka", "Anna Mrachkovska", "Christina Völz", "Petro Rusanienko", "Mark Kroshka"]
    },
     youtubeLink: "https://youtu.be/eAsrqH0uvyA"
  },
  "erwachen": {
    general: `"Erwachen" is a split-screen short that submerges the viewer in a mystical world inspired by the Greek mythology of Persephone. Shot in the city of Odessa, the film uses rich colors and symbolic imagery to explore themes of love, dependency, and loss. With a non-linear narrative, "Erwachen" invites the audience to reflect on the mysterious depths of the human psyche.`,
    year: "2022",
    language: "German",
    crew: {
      director: "Anastasiia Vishnevska, Tijana Mirjacic",
      soundDesign: "Oleg Zadorozniuk",
      cast: ["Olga Belokon", "Artiom Litovchenko", "Yana Chernaga", "Miroslava Koshtura", "Yeva Sai", "Dayana Pomomarenko"]
    },
     youtubeLink: "https://youtu.be/7Ry0nIUZ-Y8"
  },
  "ohrwurm": {
    general: `"Ohrwurm" is a comedic short film that follows an alien's amusing misadventure on Earth after mistakenly entering the wrong coordinates. The film explores the alien's encounters with Earth's quirks and challenges, offering a light-hearted look at the experience of being an outsider in an unfamiliar world. Through its playful narrative, "Ohrwurm" subtly mirrors the director's own experiences of immigration, capturing the sense of wonder and bewilderment that comes with navigating a new environment.`,
    year: "2024",
    language: "German",
    crew: {
      director: "Anastasia Vishnevska",
      cinematographer: "Andrei Matalyha",
      soundDesign: "essentialmiks",
      setDesigner: "Anastasia Sviderska",
      makeUp: "Maria Shylova, Diana Bobrus",
      costumeDesigner: "Isabela Rüth",
      cast: ["Anna Mrachkovska", "Sofia Kroshka", "Birk Vogel"]
    },
     youtubeLink: "https://youtu.be/qfIYbGrX8gs"
  },
  "rückenwind": {
    general: `"Rückenwind" is a sketch created in 3 days that explores the interplay between past and present. The film offers a reflective journey through vivid, emotionally charged memories. With a mix of dramatic and enchanting moments, it explores themes of self-discovery and introspection.`,
    year: "2022",
    language: "German",
    crew: {
      director: "Anastasiia Vishnevska",
      directorOfPhotography: "Tijana Mirjacic",
      colorist: "Anastasiia Sviderska",
      soundDesign: "Johaness Pich",
      cast: ["Alina Hündin"]
    },
     youtubeLink: "https://youtu.be/Z-VBXtd78ik"
  },
  "a.derossi": {
    general: `"a.derossi" is a short film created in just four days as part of the Bewegtes Bild project. Shot in a single continuous take, this etude captures a tense and enigmatic conversation between a call center worker and a mysterious lead. As the dialogue unfolds, the stranger evokes memories from the protagonist's past, leaving her unsettled and bewildered. The film explores themes of memory and mystery, immersing viewers in a suspenseful narrative.`,
    year: "2023",
    language: "German",
    crew: {
      filmBy: "Anastasiia Vishnevska, Tijana Mirjacic, Anastasiia Sviderska",
      soundDesign: "Maksym Pidluzhnyi",
      cast: ["Christina Völz", "Birk Vogel"]
    },
     youtubeLink: "https://youtu.be/6Nfvp0tEe9M"
  },
  "kroshka": {
    general: `"Kroshka" is a short film created in just four days as part of the Bewegtes Bild project. This sketch captures the essence of shame through the eyes of a protagonist who reflects on a failed date the morning after. Through a blend of dramatic and humorous elements, the film vividly portrays the discomfort and self-reflection that follows an awkward encounter. "Kroshka" offers a poignant and relatable exploration of personal embarrassment, showcasing the intricate dance between humor and vulnerability"`,
    year: "2023",
    language: "German",
    crew: {
      director: "Anastasiia Vishnevska",
      directorOfPhotography: "Tijana Mirjacic",
      soundDesign: "Esentialmiks",
      cast: ["Sofia Kroshka, Valeriia Berezovska"]
    },
     youtubeLink: "https://youtu.be/gzBWOtIhAtQ"
  },
  "sealed time":{
    general:"This series is an ode to the beauty of analog photography, where each frame requires careful thought and attention. It intertwines scenes of nature, architecture, and everyday life, revealing the intricate details and textures of unique moments. This is a journey through the lens, offering a different perspective on the world, encouraging the appreciation of moments, and the enjoyment of the beauty around us."
  }
  ,
  "ich bin eine biene 246": {
    general: `"Fast rhythms, permanent stress, endless information flow. All that are inevitable attributes of modern life. When exactly does one cross the limit of what the soul can cope with?
According to UN figures, already in the first year of the pandemic, the number of cases of mental disorders has increased by 25%. Every 8th person in the world is suffering from a mental disorder, with hundreds of millions of them receiving little or no help.
This series is an expression of compassion and belief in the strength of those affected, as well as a call for everyone to respect, value, and care for their mental well-being."`
  },
  "the queen of the night":{
    general:"The photo series is a collaboration with fashion designer Marie Paetzold. Inspired by the well-known Lilith, one of the first characters of an independent woman who was initially reviled in society, but later became an icon of feminine independence and power. The goal of the collaboration was to create an editorial photo series that would emphasize Marie's intentions and give light to the black but bright look."
  },
  "everyday marvels":{
    general:"This collection features a selection of some my street photography taken in various periods of my life, across different countries and cities. Each photograph captures a unique and unforgettable moment in time, immortalizing it forever and proposing the viewer to experience it alongside me. I aim to showcase the beauty and complexity of the world around us, revealing the hidden gems and overlooked details that make each place so special. My photography invites you to explore and discover the magic of everyday life."
  },
  "tangible music interfaces":{
    general:"This interactive station was created to provide an accessible and engaging musical experience for all visitors to the Musical Instrument Museum (MIM). The station allows visitors to independently create music based on the sounds of three MIM exhibits using three digital interfaces controlled by sensors and microchips. These interfaces are similar to MIDI controllers and are inspired by the sounds, appearance, and mechanics of the three MIM exhibits, which were sampled by the museum and provided to us for further work on the installation. The project was presented in a comprehensive exhibition at the MIM and was nominated for the German Multimedia Award. The interactive station also participated in the ARS Electronica Festival in September 2023.",
    crew:{
      designAndConception:"Anastasiia Vishnevska Tijana Mirjacic",
      programming:"Maksym Pidluzhnyi",
      supervision:" Prof. Alexander Müller-Rakow"
    },
     youtubeLink: "https://youtu.be/WSm04RAHjWk"
  }
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
  const location = useLocation(); 
  const navigate = useNavigate();
  
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
      <Slider 
        images={images} 
        onImageClick={handleImageClick} 
        sliderClassName={styles.catalogueSlider} 
        titleClassName={`${styles.catalogueTitle} ${resultPath === "Films" ? styles.watchButtonEnable : styles.watchButtonDisable}`}
        descriptions={descriptions} 
        description={images[0].description || ''} 
      />
    </div>
  );
};

export default Catalogue;