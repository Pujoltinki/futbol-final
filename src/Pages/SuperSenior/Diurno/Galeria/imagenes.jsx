import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// Import your local images directly
import imagen1 from '../../../../imagenes/Staff/Dirigentes_clubes_supersenior.jpg';
import imagen2 from '../../../../imagenes/Staff/árbitros1.jpg';
import imagen3 from '../../../../imagenes/Staff/árbitros2.jpg';

const images = [imagen1, imagen2, imagen3]; // Array of local image paths

const imageDescriptions = [
  "Dirigentes clubes supersenior",
  "Grupo 1 arbitros",
  "Grupo 2 arbitros",
]; // Array of corresponding descriptions

export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 'auto', height: 500, columnCount: 2 }}>
      {images.map((image, index) => (
        <ImageListItem key={index}>
          <ImageListItemBar
            title={imageDescriptions[index]} // Access description based on index
            position="below"
          />
          <img src={image} alt={`Image ${index + 1}`} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
