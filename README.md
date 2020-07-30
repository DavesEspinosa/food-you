# Food You 

![](./../home/daves/repos/M2-PROJECT/images/jason-briscoe-7MAjXGUmaPw-unsplash.jpg)

## Description

Desde Food You  te ayudamos a crear platos maravillosos para tI y quien tu quieras, simplemente tienes que seguir estos sencillos pasos:

- [ ] Escoge entre una variedad de recetas con productos frescos y variados.
- [ ] Realiza tu pedido y recibirás en casa el box con los ingredientes necesarios.
- [ ] Añadiremos a tu perfil un video con la receta, para que la sigas a tu ritmo.

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **home** - Como usuario tendrá la información de la aplicación, con una breve pero concisa explicación de nuestro producto, además tendrá acceso a Sign up y Log in.
- **sign up** - Como usuario, dado que nuestro producto se recibirá en el domicilio que el usuario especifique, deberá rellenar todos los datos de forma obligatoria.
- **login** - Como usuario quiero logearme y acceder a la zona privada para comenzar mi pedido y visualizar las recetas.
- **recipes** - Como usuario quiero visualizar  una breve descripción de las recetas que ofrece la aplicación y poder filtrar por tipo de cocina y tiempo de preparación.
- **recipes details** - Como usuario quiero poder ver con más detalle la receta escogida, poder adquirir el producto escogido, agregarlos a favoritos y  poder volver a la vista anterior. 
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite list** - As a user I want to see the list of my favorite and delete them.
- **edit user** - As a user I want to be able to edit my profile.



## Server Routes (Back-end):

| **Method** | **Route**               | **Description**                                              | Request - Body                                               |
| ---------- | ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `GET`      | `/`                     | Main page route. Renders home `index` view, usuario sin logear. |                                                              |
| `GET`      | `/login`                | Renders `login` form view.                                   |                                                              |
| `POST`     | `/login`                | Sends Login form data to the server, redirect to the  `recipes` view. | { email, password }                                          |
| `GET`      | `/signup`               | Renders `signup` form view.                                  |                                                              |
| `POST`     | `/signup`               | Sends Sign Up info to the server and creates user in the DB. | { email, password }                                          |
| `GET`      | `/private/edit-profile` | Private route. Renders `edit-profile` form view.             |                                                              |
| `PUT`      | `/private/edit-profile` | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] }, and lot more, everything froma Sign up. |
| `GET`      | `/recipes/favorites`    | Private route. Render the `favorites`                        |                                                              |
| `POST`     | `/recipes/favorites/`   | Private route. El usuario agrega una receta a favoritos.     | { The entire model of Recipe }                               |
| `DELETE`   | `/recipe/favorites/:id` | Private route. Puede borrar los favs existentes en la cuenta del usuario. |                                                              |
| `GET`      | `/recipes`              | Renders `recipes` view.                                      |                                                              |
| `GET`      | `/recipe/:id`           | Render `recipe-details` view for the particular recipe, and buy it. |                                                              |

## Models

User model

```
{
  name: {type:String, required:true},
  firstname:  {type:String, required:true},
  username:  {type:String, required:true}, 
  email:  {type:String, required:true}, 
  firstname:  {type:String, required:true}, 
  postcode: {type:Number, required:true},
  address: {type:String, required:true},
  city: {type:String, required:true},
  phone: {type:String, required:true},
  favs: [ { type : Schema.Types.ObjectId, ref: 'Recipe' } ]
}
```

Favorites model

```
{
  title: { type: String, required: true },
  inspiration: { type: String, required: true },
  ingredients: { type: [String], required: true },
  cuisine: {
    type: String,
    enum: ["Asian", "Mediterranian", "Vegan"],
    required: true,
  },
  video: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
  duration: { type: Number, min: 0, max: 1000 },
  creator: { type: String },
  created: { type: Date, default: Date.now },
}{
  placeId: String,
}
```



## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)



## Links

### Balsamiq

The url to  wareframes:

https://balsamiq.cloud/shx15j6/pogud6m



### Git

The url to your repository and to your deployed project

[Repository Link](https://gist.github.com/ross-u/8f91ec13aeaf35a1ba7603848284703f)

[Deploy Link](https://gist.github.com/ross-u/8f91ec13aeaf35a1ba7603848284703f)



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)
