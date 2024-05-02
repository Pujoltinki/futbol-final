import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// Import your local images directly
import imagen1 from '../../../../imagenes/Seccion/Messi.jpg';
import imagen2 from '../../../../imagenes/Seccion/alexis.webp';
import imagen3 from '../../../../imagenes/Seccion/mago.jpg';
import imagen4 from '../../../../imagenes/Seccion/puyol.jpg';
import imagen5 from '../../../../imagenes/Seccion/ronaldino.jpg';

const images = [imagen1, imagen2, imagen3, imagen4, imagen5]; // Array of local image paths

const imageDescriptions = [
  "Lionel Messi, a legendary footballer",
  "Alexis Sánchez, a skilled Chilean player",
  "A magician with the ball (replace with your description for imagen3)",
  "Carles Puyol, a defensive powerhouse",
  "Ronaldinho, known for his tricks and flair",
]; // Array of corresponding descriptions

export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 'auto', height: 500, columnCount: 2 }}>
      {images.map((image, index) => (
        <ImageListItem key={index}>
          <img src={image} alt={`Image ${index + 1}`} loading="lazy" />
          <ImageListItemBar
            title={imageDescriptions[index]} // Access description based on index
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
