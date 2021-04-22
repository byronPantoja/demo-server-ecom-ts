# DEMO OF A SERVERLESS ECOMMERCE APP IN TYPESCRIPT

### Initial Set Up

- ran `yarn create react-app demo-serverless-ecom-ts --template typescript` in terminal
- set up repo in gitHub
- set up origin and pushed to gitHub repo
- cleaned up react boilerplate code

### Building the demo

- diagram of the pages that needed to be created for the demo eCommerce APP
  - created a new `pages` directory
  - added all 13 pages to the directory and wired them up
- added `yarn add react-router-dom @types/react-router-dom`
- created new directory called `routes` & added:
  - `Routes`
  - `BuyRoutes`
  - `OrderRoutes`
  - `AdminRoutes`
- created `NavBar` component and imported `NavLink` from `react-router-dom`
- created `Layout` component and imported the `NavBar`
- Wrapped `Routes` component with `Layout` component in the App.tsx file
- Created a directory for `data` and added the `products.ts` file (_dummy data_)
- imported the `products.ts` data to the `index.tsx` and mapped through the products array to return the `ProductItem` with a key of `{product.id}`
- created a `products` directory and a `ProductItem` component to hold the product details
