import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from './Slider';

interface NewPageProps {
    images: string[];
  }
const NewPage: React.FC<NewPageProps> = ({images}) => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
        <Slider images={images}  />
      <h1>New Page</h1>
      <p>Image ID: {id}</p>
    </div>
  );
};

export default NewPage;
