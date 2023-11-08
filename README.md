# react-photolabs

The PhotoLabs project for the Web Development React course programming. The program allows a react single page interface for viewing and likeing photos. It has a primary feed with smaller versions as well as a larger Modal that shows a full size photo and a series of similar photos. The navigation bar shows a series of topics pulled from the api server. The main feed allows sorting by topic as well as sorting by liked by clicking on the icon in the Nav Bar. The nav bar like icon also provides a notification when a photos in the feed has been liked.

The program is a full stack development focusing on React. Backend code provided by Lighthouse Labs as part of their 12 intendisve program. Frontend framework provided and expanded upon my myself. Backend server contains a node.js and psql server and database containing api calls to support the front end.

## Dependencies

All dependancies install with npm install

- Node.js
- NPM
- Express
- PostgreSQL server
- Bodyparser
- Helmet
- Cors
- React
- React-dom
- Web-vitals
- React-scripts

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

All code provided by Lighthouse Labs.

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```


## Screenshots

!["Screenshot of Main Feed"](https://github.com/Dechantg/photolabs/blob/main/docs/photolabs-main-page.png)
!["Screenshot of Modal"](https://github.com/Dechantg/photolabs/blob/main/docs/photolabs-modal.png)
!["Screenshot of Modal Similar Photos Feed"](https://github.com/Dechantg/photolabs/blob/main/docs/photolabs-modal-similar-photos-feed.png)
!["Screenshot of Like Notification"](https://github.com/Dechantg/photolabs/blob/main/docs/photolabs-like-notification.png)
!["Screenshot of Sort by Liked"](https://github.com/Dechantg/photolabs/blob/main/docs/photolabs-filter-by-likes.png)

