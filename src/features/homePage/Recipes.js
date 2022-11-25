import {ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectAllRecipes } from '../recipes-details/recipesSlice';

const Recipes = () => {
  const recipes = useSelector(selectAllRecipes)

  if(recipes){
    return (
      <ImageList>
        {recipes.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={item.regImage}
              srcSet={item.regImage}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.source}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    )
  }


}

export default Recipes