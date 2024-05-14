ContactsPage:
The purpose of this app is to deploy a simple web application with 3 screens. These three screens show a list of contacts, allows users to create a new contact via a modal, and shows a contact’s information via a modal.

Preview:
<img width="722" alt="Screenshot 2024-05-14 at 5 16 43 AM" src="https://github.com/Aryagoy/Nextjs-ContactsPage/assets/42674731/89a52803-c363-480e-a4ee-5ea46c22d8fa">


About the project: The project starts it's implementation from pages/index.tsx where it first creates a default contacts list and then sends that lists to the /component/ContactList.js file. From here, the contacts are rendered in sorted manner and a table is created to show those contacts. Storing the id and other details of the contacts in object so that we can use the object later to access those contacts. The next component used is NewContactModal.js where the functionality of adding a new contact is created. Whenever a person clicks on add contact button, a modal pops up. After filling out the details, when the user clicks on submit button, the contacts get stored in the existing contacts list and gets rendered on the UI.


Technology Used:
Next js
React
Java Script
Redux
CSS

Install
To install all the dependences of the project, run the following command:
git clone https://github.com/Aryagoy/Nextjs-ContactsPage.git
npm install
npm start


Source Code:
Link : https://github.com/Aryagoy/Nextjs-ContactsPage


Deployment Link:
Link : https://nextjs-contacts-74c22.web.app/
