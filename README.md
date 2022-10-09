# Meetup-API
CRUD REST Web API for working with Meetups

 Web api functionality
 1. Getting the list of all Meetups
 2. Getting a specific Meetup by its Id
 3. Registering a new Meetup
 4. Updating the Meetup
 5. Deleting the Meetup 

Meetup information
 1. Name
 2. Description
 3. Keywords
 4. Time and location

Stack
 1. Node.js
 2. Express
 3. PostgreSQL 14

 Other functionality
 1. DTO validation using joi
 2. Searching for Meetups by their title, filtering by keywords, sorting by id. The result is paginated. You can also set the number of Meetups per page. 
 3. Swagger documentation
 4. Authorization system using JWT
 5. There are two types of users: 'USER'
 and 'ADMIN' (they can register/update/delete the Meetups)

 # An example of how an API works
 1. Registration and login
 <img width="1356" alt="image" src="https://user-images.githubusercontent.com/87857659/194777673-3ef143f0-3988-41f2-b387-f2cf95ab3ccd.png">

<img width="1359" alt="image" src="https://user-images.githubusercontent.com/87857659/194777704-95dd8ffa-17aa-42ac-be73-b8f2b8b65e87.png">

 2. Get all Meetups
 <img width="1358" alt="image" src="https://user-images.githubusercontent.com/87857659/194777996-a5e44730-458e-452b-8bfb-c4deee85cd84.png">

 3. Get one Meetup
 <img width="1355" alt="image" src="https://user-images.githubusercontent.com/87857659/194778130-bae8e569-acd5-468e-b0f7-8579edcd8b71.png">

 4. Create new Meetup
 <img width="1355" alt="image" src="https://user-images.githubusercontent.com/87857659/194778313-541a174d-3d5a-40d5-92d7-9f523845b9f1.png">

 5. DTO validation
 <img width="1351" alt="image" src="https://user-images.githubusercontent.com/87857659/194778345-2e3f3707-52ff-443f-a8f2-e3ba4eb7de43.png">
 
 6. Search Meetup by title
 <img width="1352" alt="image" src="https://user-images.githubusercontent.com/87857659/194779131-faad59f2-9457-44ef-9d23-e58b38b7ba3b.png">

 7. Create new Meetup with role 'USER'
 <img width="1352" alt="image" src="https://user-images.githubusercontent.com/87857659/194778531-d5f0a968-086c-41d8-b64d-8eda8f0c74f6.png">
 
 8. Swagger documentation
 <img width="1438" alt="image" src="https://user-images.githubusercontent.com/87857659/194778555-a49da978-25e2-4383-adc9-2e27e3c11056.png">


