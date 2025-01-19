# Sviter & Buben Master Workshop

## Description

The **Sviter & Buben Master Workshop** project is a web application built using Django that provides a terminal-style interface for users to navigate through various services offered by the workshop. The application includes pages for home, contacts, blog, CV, and specific service details. It features a unique design inspired by retro terminal interfaces, enhancing user experience with animations and interactive elements.

## Features

- Home page with navigation links to other sections.
- Services offered by the workshop displayed in a structured format.
- Blog and CV pages for additional information.
- Interactive elements with JavaScript for a dynamic user experience.

## Requirements

- Python 3.x
- Django 3.x or higher
- Git (for version control)
- A web browser for accessing the application

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd terminal_site
   ```

2. **Create a virtual environment (optional but recommended):**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required packages:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations:**

   ```bash
   python manage.py migrate
   ```

5. **Create a superuser (optional, for admin access):**

   ```bash
   python manage.py createsuperuser
   ```

## Running the Application

1. **Start the development server:**

   ```bash
   python manage.py runserver
   ```

2. **Open your web browser and navigate to:**

   ```
   http://127.0.0.1:8000/
   ```

## Usage

- Use the navigation links on the home page to access different sections of the application.
- The terminal-style interface will guide you through the services offered by the workshop.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.