# ContactsPage

**ContactsPage** is a simple web application that allows users to view, create, and manage a list of contacts. The application consists of three main screens: 
1. A contact list displaying all available contacts.
2. A modal for adding a new contact.
3. A modal for viewing the details of an individual contact.

## Preview

![ContactsPage Preview](https://github.com/Aryagoy/Nextjs-ContactPage/assets/42674731/54bfc685-fbbd-417b-bd30-8abd6fca7d70)

## About the Project

The project begins its execution from `pages/index.tsx`, where a default list of contacts is created and passed to the `ContactList.js` component. This component is responsible for rendering the contacts in a sorted manner, displaying them in a table format. Each contact's details, including their unique ID, are stored in objects for easy access and manipulation.

For creating a new contact, the `NewContactModal.js` component handles the functionality. When a user clicks on the "Add Contact" button, a modal window opens, allowing the user to enter new contact details. Upon submitting the form, the contact is added to the existing contact list and immediately displayed on the user interface.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **JavaScript**: Core programming language for the application.
- **Redux**: State management for handling the application's data flow.
- **CSS**: Styling for the application.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Aryagoy/Nextjs-ContactPage.git

2. **Install dependencies**:
    ```bash
    npm install


3. ***Configure Environment Variables***: 
Create a .env.local file in the root directory and add your environment variables for MongoDB, Appwrite, and other services.

4. **Run the application**:

    ```bash 
    npm run dev
The app will run in development mode and can be accessed at http://localhost:3000.

