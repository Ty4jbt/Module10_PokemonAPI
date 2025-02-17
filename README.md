# Pokémon Explorer - PokeAPI Integration

A web application that allows users to explore Pokémon data using the PokeAPI. The app provides a user-friendly interface to search for Pokémon, view detailed information about them, and learn more about their abilities, stats, and types.

## Features

- **Homepage**: A landing page with a button that redirects to the Pokémon search page
- **Pokémon Search Page**: Allows users to search for any Pokémon by name or ID
- **Pokémon Details Page**: Displays comprehensive details about a specific Pokémon, including abilities, types, stats, and an image
- **Responsive Design**: The app is fully responsive and works seamlessly across different devices (desktop, tablet, mobile)
- **No API Key Required**: The application uses the PokeAPI, which doesn't require an API key for access

## Technologies Used

- **HTML5**: For structuring the web pages
- **CSS**: For custom styling and ensuring a pleasant user experience
- **Bootstrap**: To make the website responsive and improve the visual design
- **JavaScript**: For fetching and displaying data from the PokeAPI

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/pokeapi-explorer.git
    cd pokeapi-explorer
    ```

2. Open the project in your browser:
   - Open the `index.html` file in your preferred web browser.

## Usage

### Homepage (index.html)
Welcome page that explains the app and provides a link to the Pokémon search page.

### Search Page (search.html)
- Enter a Pokémon's name or ID in the search input field and press the "Search" button
- View the Pokémon's image, name, ID, and type
- Option to view more details about the Pokémon on a separate page

### Pokémon Details Page (details.html)
View detailed information such as abilities, stats, and a more detailed image of the selected Pokémon.

## Project Structure
/pokeapi-project
│── /css
│   ├── styles.css
│── /js
│   ├── script.js
│   ├── details.js
│── index.html (Homepage)
│── search.html (Pokémon Search Page)
│── details.html (Pokémon Details Page)

## Contributing

Feel free to fork this repository and create pull requests with your improvements! Contributions are always welcome.

## License

This project is open-source and available under the MIT License.

## Acknowledgments

- **PokeAPI**: The source of all the Pokémon data used in this project
- **Bootstrap**: For making the app responsive and visually appealing