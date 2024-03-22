# Description of the project

In this project, a React component was created called `<SelectComponent>`, which performs <select> functions from HTML

## Props

The component accepts the following props:

`objArray`: An array with list objects for the component. Each object must have a "label" and unique "value" properties, which specifies the name of this item. There is also an optional "image" property, to which you can pass a link to the image so that it appears before the item in the list

`size`: A string that specifies the size of the component. Takes the values 'small', 'medium' and 'large'. The default is 'large'

`color`: A string that specifies the color scheme of the component. Takes the values 'dark', 'light' and 'color'. Default is 'dark'

`callback`: A function that will be called when selecting elements in the selector. It will contain an array of selected objects

## Installation

To run the project locally, you need to:

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Start the project using `npm run start` or `yarn start`.
