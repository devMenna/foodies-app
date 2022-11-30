import {ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllRecipes } from '../recipes-details/recipesSlice';

const Recipes = () => {
  const recipes = useSelector(selectAllRecipes)

  if(recipes){
    return (
      <ImageList>
        {recipes.map((item) => (
          <Link to={`recipe/${item.id}`} key={item.id}>
          <ImageListItem>
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
          </Link>
        ))}
      </ImageList>
    )
  }


}

export default Recipes