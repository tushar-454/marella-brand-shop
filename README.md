## Project Name: Marella Brand Shop

#### [Live site](https://marella-brand-shop.web.app/) : [https://marella-brand-shop.web.app/](https://marella-brand-shop.web.app/)
This project is an e-commerce web application built using React, Tailwind CSS, and Firebase.In Backend using ExpressJS and mongoDB. It allows users to browse products, manage their cart, create accounts, and more.

## Features

1. **Theme Persistence**:
   - The website supports both dark mode and light mode. The chosen theme is remembered even after page reloads.

2. **User Profile Dropdown**:
   - Clicking on the profile icon reveals a dropdown menu. The dropdown closes when clicking outside of it or when scrolling the page.

3. **Cart Information**:
   - Users can view the total number of items in their cart on the navigation bar.
   - Cart displays the total price of all items.

4. **Top Sell Section**:
   - Discounts in the top sell section are dynamic and calculated based on the price and sale price of items.

5. **New Arrival Section**:
   - Products in the new arrival section are marked as hot deals if they have a certain property (e.g., isHot = true).

6. **Dynamic Page Title**:
   - The page title is updated dynamically based on the content being viewed.

7. **Password Requirements**:
   - Users receive feedback on the strength of their password and the required characters for a secure password.

8. **Database Operations**:
   - Users can add products to the database.
   - Update products previously added to the database.

9. **Cart Functionality**:
   - Users can add products to their cart and view them at any time.
   - Cart items are associated with the user account and persist through logins.

10. **User Authentication**:
    - Users can create an account using Google or email/password.
    - Logout functionality clears the user's access to their cart items.

## Technologies Used

- **React**: Front-end development framework.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Firebase**: Cloud-based platform used for authentication, and hosting.
- **ExpressJS**: For manage backend server.
- **MongoDB**: For store and manage all data.

## How to Run the Project

1. Clone this repository to your local machine.
2. Install dependencies using `yarn`.
3. Set up Firebase configurations.
4. Run the project using `yarn dev`.

## How to Contribute

If you'd like to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.


Feel free to reach out with any questions or suggestions!
