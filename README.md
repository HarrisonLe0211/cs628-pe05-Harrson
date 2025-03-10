# Recipe Maker App

## Input/Interactions
1. **Adding a Recipe:**  
    Enter the Recipe's Name, Ingredients, Cooking Instructions, and any additional details into the form on the "Add Recipe" screen.
2. **Viewing Recipe Details:**  
    Click on an existing Recipe in the list to navigate to its detailed view, where all the recipe information is displayed.
3. **Editing Existing Recipe:**
    The user can click on the Edit button to start editing an already existing recipe.
4. **Delete Existing Recipe:** 
    The user can click on the Delete button to remove an already existing recipe.

## Process
The application is built using HOS09 as the core, repurposed to manage recipes. I decided to keep the MongoDB logo as the home button, as it's the underlying database system of this project.
- **Initial State - Home Page - Recipe List screen**  
    When the user opens the app, it starts with a list of recipes that is retrieved from the database.
- **Adding a Recipe:**  
    On the "Add Recipe" screen, the `Create` component renders a form. After the user fills out the form and clicks "Create Recipe", the form's data is used to create a new Recipe object. This new Recipe is then added to the database and is reflected on the Recipe List screen. The user is then redirected back to the Recipe List screen.
- **Viewing Recipe Details:**  
    On the Recipe List screen, clicking on a Recipe name navigates the user to the Recipe Details page, where detailed information (such as Ingredients and Cooking Instructions) is presented. Once finished viewing, the user can click on the "Back to Recipe List" to go back to the Recipe List screen.
- **Editing existing Recipe:**
    The user can click the Edit link for each of the recipes. The user will then be directed to a page where they can update the recipe's information (such as Name, Ingredients, and Cooking Instructions). Once finished, the user will be taken back to the Recipe List screen.
- **Deleting existing Recipe:**
    The user can click the Delete link for each of the recipes in order to remove them from the database.

## Output
A webpage that displays:
- A list of Recipes in the web browser.
- A form for adding new Recipes by entering their details.
- A detailed view for each Recipe, accessible by clicking on its name, which shows all associated information.
- The options to Edit/Delete recipes.
