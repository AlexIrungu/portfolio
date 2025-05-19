# React Portfolio Application

This React application serves as a personal portfolio for showcasing projects, skills, and contact information. It features a modern, responsive design with smooth scrolling navigation and social media integration.

## Features

- **Responsive Design**: Ensures the portfolio looks great on devices of all sizes.
- **Smooth Scrolling**: Enhances user experience by providing smooth transitions between sections.
- **Social Media Integration**: Links to GitHub and other social media platforms for easy access to more work and profiles.
- **Dynamic Year Update**: Automatically updates the copyright year in the footer.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **React Scroll**: For smooth scrolling functionality.
- **FontAwesome**: For social media icons.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/AlexIrungu/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio/client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The application will open in your default browser at `http://localhost:3000`.

## Usage

Navigate through the application using the navbar to view different sections including Home, Skills, Projects, and Contact. Click on social media icons to visit external profiles.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or suggestions.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Special thanks to all open source libraries and tools that made this project possible.
- Inspired by the vibrant React community and all creative developers out there.

## Contact

For any inquiries, please reach out to Alex Irungu via email or through social media platforms.
```

// EmailJS Configuration Guide

// 1. Template Variables
The template uses the following variables that map to your form fields:
- {{user_name}} - from the name input field
- {{user_email}} - from the email input field
- {{subject}} - from the subject input field
- {{message}} - from the message textarea
- {{to_name}} - this can be set as a default value in EmailJS (your name)

// 2. EmailJS Setup Steps
1. Log in to your EmailJS account
2. Navigate to "Email Templates" section
3. Click "Create New Template"
4. Give your template a name (e.g., "Contact Form Template")
5. Paste the HTML code from the artifact
6. Save the template
7. Note the Template ID (it should look like "template_4txywfm")

// 3. Update Your React Component
Make sure your EmailJS configuration in your React component matches:
- Service ID: service_b2bid8p (from your existing code)
- Template ID: Your template ID from step 6 above
- Public Key: 0g4-XhSrtkVk_WbKh (from your existing code)

// 4. Form Field Names
Ensure your form field names match the EmailJS template variables:
- <input name="user_name" ... />
- <input name="user_email" ... />
- <input name="subject" ... />
- <textarea name="message" ... />

// Optional: You can also add a hidden field for the recipient name:
// <input type="hidden" name="to_name" value="Alex Muiruri" />

// The keys in your form's name attributes must match exactly with the template variables.