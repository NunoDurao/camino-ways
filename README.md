# Project Name
St James Way Were to Stay App


<br>



## Description

A web application for registering and managing information related to accomodation during the portuguese St James Way (Caminho de Santiago).




<br>

## User Stories

1. As a user, I want to be able to create an account on the app so that I can access and manage information related to my accomodation during the St James Way journey.

2. As a user, I want to be able to log in and log out of my account to protect my information.

3. As a user, I want to be able to view and manage information related to the places were i will stay.

4.   As a user, I want to be able to add new accommodations, update and delete existing ones.



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password}
| `GET`      | `/name`                     |name, type, rating                                   |
| `POST`     | `/routes`                          | Adds a new route to the database. {name, type, rating,price}                              |
| `DELETE`   | `/routes/:id` | Private route. Deletes the existing favorite from the current user. |                                                          |
| `GET`      | `/routes/:id`                     | Renders view of a single route. view.                              |                                                          |
| `PUT`      | `/routes/:id`         | Updates information for a specific route. { name, type, rating, price}  |
| `DELETE`      | `/routes/:id`         |Deletes a specific route from the database. |



## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
}

```



Favorites model

```javascript
Accommodation model

{
name: String,
type: String,
rating: Number,
price: Number,
}

```



<br>

## API's


<br>


## Packages



<br>



## Backlog

[See the Trello board.]()



<br>



## Links



### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deploy Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link]()

### Contributors
Renato Pais - [`<github-username>`](https://github.com/Renatopais) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/renato-pais-656b1340/)

Nuno Durão - [`<github-username>`](https://github.com/NunoDurao) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/nuno-dur%C3%A3o-75259bb3/)
