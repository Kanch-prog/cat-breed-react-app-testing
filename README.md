# 🐱 Cat-Breed React App

This project is a React-based application that allows users to browse various cat breeds and view images for each breed. The app utilizes `@testing-library/react` for testing UI components and mocks API calls to ensure a reliable testing environment.

## ✨ Features

- 📜 Fetches a list of cat breeds from The Cat API.
- 🖼️ Displays an image for each selected breed.
- 🧪 Mocked API responses to simulate real data during testing.

## ⚙️ Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/cat-breed-app.git
    ```
2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```

## 🧪 Testing

This project uses **React Testing Library** to verify UI interactions and ensure a consistent user experience.


## 🏆 Testing Highlights


1. **Landing Page Test**:  
   We verify that the main component (App) renders correctly using a simple `render()` function.

   ```javascript
   import { render, screen } from "@testing-library/react";
   import App from "./App";

   test("renders the landing page", () => {
       render(<App />);
   });
## Mock API Responses:
A custom mockFetch function simulates API responses for breed lists and images. This allows the app to run and tests to pass even without live API data. The mocked data includes:

## 📋 A list of cat breeds.
## 🖼️ Image URLs for each breed, ensuring the UI can display the correct images.
Error Handling and Edge Cases:
The mock function also accounts for unhandled requests to test how the app responds to unexpected scenarios.

## 📊 Sample Mock API Response
The mockFetch function in the test file handles multiple endpoints, ensuring flexibility and control over the data returned during tests. 

## 💻 Technologies Used
React for the UI
React Testing Library for component testing
The Cat API for cat breed data
Mocked Fetch Function to simulate API responses
## 🚀 Future Improvements
Add more detailed tests for user interactions.
Integrate additional data from The Cat API.
## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request.
