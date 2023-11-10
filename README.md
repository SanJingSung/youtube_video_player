# Youtube Video Player

This project is a web application built with React that uses the YouTube V3 API to search for videos and related information. The application allows users to search for videos by title, view detailed information about the selected videos, and play them directly in the application.

## Getting Started

These instructions will allow you to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project on your local machine, you will need to have Node.js and npm installed. You can download Node.js from its [official site](https://nodejs.org/) and npm is automatically installed with Node.js.

In addition, you will need a YouTube V3 API key for the application to interact with the YouTube API. You can get a YouTube V3 API key from the [Google Cloud console](https://console.cloud.google.com/).

### Installation

1. Clone the repository on your local machine using `git clone https://github.com/SanJingSung/youtube_video_player.git`.

2. Navigate to the project directory with `cd project`.

3. Install the project dependencies with `npm install`.

4. Create a `.env` file at the root of the project.

5. In the `.env` file, add the following line, replacing `your-youtube-api-key` with your YouTube V3 API key:

    ```properties
    REACT_APP_YOUTUBE_API_KEY=your-youtube-api-key
    ```

6. Start the application with `npm start`. The application should now be running at `http://localhost:3000`.

## Usage

To search for videos, simply enter the video title in the search bar and press Enter. The search results will appear on the main page. You can click on the "Details" button to view more details about the video that is in the player and select any of the videos located on the right to play them.

## Screenshots

Here are some screenshots of the application:

### Home Page

![Home Page](https://github.com/SanJingSung/youtube_video_player/blob/develop/screenshots/homepage.png)

### Video Details

![Video Details](https://github.com/yourusername/yourrepository/screenshots/videodetails.png)
