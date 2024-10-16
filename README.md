# DALL-E MERN Project

This project is a full-stack web application that allows users to generate images using OpenAI's DALL-E model and share them with the community. It's built using the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- Generate images using AI based on text prompts
- View a gallery of community-generated images
- Search for images by name or prompt
- Share generated images with the community
- Responsive design for various screen sizes

## Tech Stack

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Image Storage**: Cloudinary
- **AI Integration**: OpenAI API (DALL-E)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- MongoDB
- Cloudinary account
- OpenAI API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/swarajpanmand/dalle_mern.git
   cd dalle_mern
   ```

2. Install dependencies for both client and server:
   ```
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables:
   - In the `server` directory, create a `.env` file with the following variables:
     ```
     MONGODB_URL=your_mongodb_connection_string
     OPENAI_API_KEY=your_openai_api_key
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

## Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. In a new terminal, start the client:
   ```
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## Usage

1. On the home page, you can view community-generated images.
2. Click on "Create" to generate a new image.
3. Enter your name, a prompt for the image, and click "Generate".
4. Once the image is generated, you can share it with the community.
5. Use the search bar to find specific images by name or prompt.

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request



## Acknowledgements

- [OpenAI](https://openai.com/)
- [Cloudinary](https://cloudinary.com/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
