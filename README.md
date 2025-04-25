# Bot Battlr - React Robot Management App

Bot Battlr is a React application that lets users browse through a list of robots, view their details, and enlist them into their army. The app demonstrates React fundamentals including component architecture, state management, API integration, and conditional rendering.

## Features

- View a collection of available bots
- See detailed information about each bot (class, health, damage, armor)
- Add bots to your personal army
- Remove bots from your army
- Permanently delete bots from the database

## Technologies Used

- **React**: Frontend UI library
- **Vite**: Build tool and development server
- **JSON Server**: Mock REST API for development
- **CSS**: Custom styling with a responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn package manager

### Installation

1. Clone this repository:

```bash
git clone https://github.com/Spid3rmvn/bot-battlr
cd bot-battlr
```

2. install dependecies

- npm install

3. Start the development server and JSON server concurrently

- npm run dev

## Live Demo

Check out the live demo: [Bot Battlr App](https://bot-battlr-beta-lime.vercel.app/)

## Application Structure

- `src/components`: React components
  - `BotCard.jsx`: Individual bot display and actions
  - `BotCollection.jsx`: Display all available bots
  - `YourBotArmy.jsx`: Display selected bots in user's army
- `src/services`: API services
  - `api.js`: Functions for API interaction
- `src/App.jsx`: Main application component
- `src/App.css`: Application styling

## Backend API

The application connects to a backend API deployed on Render:
`https://bot-battlr-backend-my8f.onrender.com`

API Endpoints:

- `GET /bots`: Fetch all available bots
- `DELETE /bots/:id`: Delete a bot from the database
- `GET /army`: Fetch bots in your army
- `POST /army`: Add a bot to your army
- `DELETE /army/:id`: Remove a bot from your army

## Deployment

The application is deployed in two parts:

- Frontend: Deployed on Vercel
- Backend: Deployed on Render

### Deploying Your Own Version

#### Backend Deployment:

1. Fork the backend repository
2. Deploy to Render as a Web Service
3. Set the start command to `npm start`

#### Frontend Deployment:

1. Update the `BASE_URL` in `src/services/api.js` to your backend URL
2. Deploy to Vercel or any static site hosting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Bot images provided by [RoboHash](https://robohash.org/)
- This project was created as part of a React learning exercise
