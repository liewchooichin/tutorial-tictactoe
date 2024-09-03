export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];
  

/**
 * Here, <Recipe {...recipe} key={recipe.id} /> is a syntax shortcut saying
 *  “pass all properties of the recipe object as props to the Recipe 
 * component”. You could also write each prop explicitly: <Recipe id=
 * {recipe.id} name={recipe.name} ingredients={recipe.ingredients} key=
 * {recipe.id} />.
 * 
 * Note that the key is specified on the <Recipe> itself rather than on the 
 * root <div> returned from Recipe. This is because this key is needed 
 * directly within the context of the surrounding array. Previously, you 
 * had an array of <div>s so each of them needed a key, but now you have an 
 * array of <Recipe>s. 
 */


function Recipe({ id, name, ingredients }) {
    return (
      <div>
        <h2>{name}</h2>
        <ul>
          {ingredients.map(ingredient =>
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
      </div>
    );
  }

  /** 
   * This is one way to write:
   * <Recipe {...recipe} key={recipe.id} /> 
   * */
export function RecipeList() {
    return (
      <div>
        <h1>Recipes</h1>
        {recipes.map(recipe =>
          <Recipe 
          id={recipe.id} 
          name={recipe.name} 
          ingredients={recipe.ingredients} 
          key={recipe.id}></Recipe>
        )}
      </div>
    );
  }
  