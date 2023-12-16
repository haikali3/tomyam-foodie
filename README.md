# TomYam Foodie - Next.js App

[TomYam Foodie](https://tomyam-foodie.vercel.app/)

TomYam Foodie is a web application built with [Next.js](https://nextjs.org/), a React framework, that allows users to explore and discover a variety of Tom Yum dishes. This project is deployed on [Vercel](https://vercel.com/) and can be accessed at [https://tomyam-foodie.vercel.app/](https://tomyam-foodie.vercel.app/). Images will be inserted to [AWS S3](https://aws.amazon.com/) bucket everytime new meal is added.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Acknowledgements](#acknowledgements)

## Features

- **Explore Tom Yam Meals**: Discover a variety of delicious meals.
- **Insert Recipe Functionality**: Easily create your favorite meals using the insert feature.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (v6.0.0 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/haikali3/tomyam-foodie.git

2. **Install node_modules:**

   ```bash
   npm install

3. **Insert dummy data to the website:**

    ```bash
    node initdb.js

`meals.db` will be generated as dummy content for the website.

3. **Run the development server:**

    ```bash
    npm run dev

The application will be accessible at http://localhost:3000/.

Explore the TomYam Foodie app and enjoy discovering delicious Tom Yam dishes and upload your own meals!

Deployment
The project is deployed on Vercel. Any changes pushed to the main branch will trigger an automatic deployment.

Visit the live application: [TomYam Tayar](https://tomyam-foodie.vercel.app/)

## Technologies Used
- [NextJS](https://nextjs.org/) - React Framework
- [ReactJS](https://react.dev/) - Javascript Framework
- [Vercel](https://vercel.com/dashboard) - Deployment Platform
- [AWS](https://aws.amazon.com/) - Cloud Service Provider 
- [SQLite for NodeJS](https://www.npmjs.com/package/sqlite) - Database
