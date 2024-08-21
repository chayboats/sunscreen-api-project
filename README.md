# Screentime
<img width="1446" alt="image" src="https://github.com/user-attachments/assets/85f120f9-5f5f-471f-b981-9b8e349df8e1">
<img width="1448" alt="image" src="https://github.com/user-attachments/assets/95b533f5-3a99-45b4-86c9-78dc0074ca78">
<img width="1449" alt="image" src="https://github.com/user-attachments/assets/9f6085b7-5dbd-423b-83c5-5cd249f2ca30">


https://github.com/user-attachments/assets/68ed509f-95e2-40ff-9667-4dd3e9df5f07


Welcome to **Screentime** – your go-to app for finding out the UV index at any location! Enter a location, and Screentime will provide you with the UV index, UV category, advice on whether you need sunscreen, and display the exact address you searched for.

## Table of Contents
1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Usage](#usage)
3. [Technologies Used](#technologies-used)
4. [What I Learned](#what-i-learned)
5. [Continued Development](#continued-development)
6. [Acknowledgements](#acknowledgements)
7. [Contact Me](#contact-me)

## Features
- Enter a location to find the UV index and category.
- Displays whether sunscreen is needed based on the UV index.
- Shows the exact address of the searched location.
- Error handling with user-friendly error messages.
- Easy-to-use interface with a main page, location input page, and results page.

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- API keys for Google Geocoding API and OpenUV API.

### Installation
1. Clone the repository:  
   ```
   git clone git@github.com:chayboats/sunscreen-api-project.git
   ```
2. Navigate to the project directory:  
   ```
   cd suncreen-api-project
   ```
3. Install the dependencies:  
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your API keys:  
   ```
   GOOGLE_API_KEY=your_google_api_key
   OPENUV_API_KEY=your_openuv_api_key
   ```

### Usage
1. Start the server:  
   ```
   node index.js
   ```
2. Open your browser and go to `http://localhost:3000` to start using the app.

## Technologies Used
- **Express**: For building the server-side logic.
- **EJS**: For rendering dynamic HTML pages.
- **dotenv**: For managing environment variables securely.
- **body-parser**: For handling form data submitted by users.
- **Google Geocoding API**: For converting location names into latitude and longitude coordinates.
- **OpenUV API**: For retrieving UV index information based on coordinates.

## What I Learned
Building Screentime allowed me to gain hands-on experience with API integration, error handling, and managing environment variables. I also enhanced my skills in building user-friendly interfaces with Express and EJS.

## Continued Development
- Improve error messages to be more specific, e.g., handling rate limit errors from APIs.
- Enhance the UI for a better user experience.
- Add more detailed UV-related advice based on the UV index category.
- Improve desktop design

## Acknowledgements
Thank you to the developers of the Google Geocoding API and OpenUV API for providing the essential data used in this app.

## Contact Me
If you have any questions, comments, or suggestions, please don't hesitate to reach out. I'd love to hear from you!

Chaley Williams

Email: chaleylwilliams@gmail.com  
GitHub: [chayboats](https://github.com/chayboats)  

Thank you for visiting my repository!
