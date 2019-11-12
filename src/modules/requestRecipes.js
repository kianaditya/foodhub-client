import axios from 'axios'
const apiUrl = 'http://localhost:3000/v1/'

const submitRecipe = async (title, ingredients, directions) => {
  try {
    debugger
    let response = await axios.post(apiUrl + 'recipes',
    { recipe:
      {
        title: title,
        ingredients: ingredients,
        directions: directions
      }
    }
    )
    return response

  } catch(error) {
    debugger;
    return error.message
  }
}

export { submitRecipe }