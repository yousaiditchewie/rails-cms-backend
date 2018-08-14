# Rails + React CMS

This was intended to be a starter stack for a simple Rails/React CMS that utilizes ActiveAdmin as an admin portal. It should have lightweight data that is only used to populate the main content areas of the site.

## Architecture

The initial repository is based on [this tutorial](https://blog.heroku.com/a-rock-solid-modern-web-stack). It can be used as a marketing site that displays content, or a full-stack application. It has the power and ease of a Rails API with the speed and customization of React.

- Ruby version: 2.2.5
- SQLite3 _Development environment only_
- PostgreSQL _Production environment_

- System dependencies:
  - [Create React App](https://github.com/facebookincubator/create-react-app)
  - [Rails 5 in API Mode](http://edgeguides.rubyonrails.org/api_app.html)
  - [ActiveAdmin](https://github.com/activeadmin/activeadmin) CMS backend
  - Deployment on [Heroku](https://heroku.com/)
  - SPA Routing with [React Router](https://github.com/ReactTraining/react-router)

## Develop

To run the application locally:

1.  Clone or Fork this repository
2.  `cd` into the root directory
3.  `bundle install`
4.  Install Node modules for React with `yarn update`
5.  `rake db:reset` to seed the database
6.  `yarn go` starts Rails and React

## Deploy

Simple deployment with Heroku

1.  Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) if necessary
2.  `heroku app:create`
3.  `git add -A`
4.  `git commit -vam "message"`
5.  `git push heroku master`
6.  `heroku run rake db:seed`
7.  `heroku open`
