import {createBrowserRouter} from 'react-router';
import App from "./App";
import NotFound from './assets/ex25/NotFound';
import Home from './assets/ex25/Home';
import RecipeList from './assets/ex25/RecipeList';
import RecipeDetail from './assets/ex25/RecipeDetail';
import Categories from './assets/ex25/Categories';
import CategoryRecipes from './assets/ex25/CategoryRecipes';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'recipes',
        element: <RecipeList />,
      },
      {
        path: 'recipes/:id',
        element: <RecipeDetail />,
      },
      {
        path: 'categories',
        element: <Categories />,
        children: [
          {
            path: ':categoryId',
            element: <CategoryRecipes />,
          },
        ],
      },
    ],
  },
]); 

export default router