# DEPAC 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About This App

This app is a user-driven and collaborative interactive database for medicinal, poisonous, and psychoactive plants, their uses by humans, and cultural importance.

## Links
[deployed Heroku site](https://depak.herokuapp.com/)
[Github front-end](https://github.com/audge101/depac-front-end)
[Github back-end](https://github.com/audge101/depac_back_end)

### Our Users
Our users are plant-lovers, history buffs, amateur sociologists, potentially the pharmaceutical industry along with the beauty and wellness industries, and witches!


### User Stories

User goes to landing page and sees numerous database contributions (ie posts) by contributors (ie users) as well as a link to register or login. On the landing page there is a friendly reminder that in order to search our database users must register and login. Once the user does both they see the navbar populate with actions such as create a contribution, view all, view favorites, and submission dashboard. On plant view all page there is the like and favorites functionailty. They can click on their account profile pic in the navbar and taken to their contributor profile to see their account information displayed


### Approach

I knew rather clearly what kind of information I wanted displayed for the interactive database, but I quickly realized that I had to provide a great UI experience for the user if I were to have much hope of giving people motivation to populate this database for me. I also realized that I wanted the place where a user could edit or delete their own posts and the place where they could favorite, browse, and like posts needed to be in it's own separate spot. I definitely wanted to try to make this experience mobile-friendly. I also approach the plant post "show" page a bit diiferently. Instead of just a simple card rendering on the show page, because we were taking in so much information, when you click anywhere on the post an entire post dashboard pops up with a rather interactive user experience using UI carousels, links that open to new pages, materialboxes, as well as "tags" that are conditionally rendered based on plant properties that the user selects on the create page in the form of checkboxes.   

## Technologies Used

PostgreSQL, Flask, and Peewee on the backend. React, Materialize, and Node.js on the front-end.
