Voice-Activated Assistant
This project is a simple voice-activated assistant that responds to specific voice commands such as opening websites, reloading the page, or interacting with Instagram Direct. The assistant is implemented using JavaScript, leveraging the Web Speech API for speech recognition and speech synthesis.

Features
Voice Commands:
"Hello Jarvis": When you say "hello jarvis," the assistant will respond with "Hello sir, how may I assist you."
"Open [Website]": Opens a website in a new browser tab. For example, saying "open google" will navigate to "https://google.com".
"Reload": Reloads the current page.
"Instagram [Username]": Opens Instagram Direct for the specified user.
Technologies Used
HTML/CSS: For structuring and styling the webpage.
JavaScript: The core logic for handling voice commands and executing corresponding actions.
Web Speech API: Utilized for speech recognition (converting spoken words into text) and speech synthesis (converting text into spoken words).
How It Works
Speech Recognition Initialization:

The project initializes the Web Speech API for speech recognition.
The language is set to English (en-US).
Starting Voice Recognition:

When the start button is clicked, the voice recognition begins, and the assistant starts listening for commands.
Command Handling:

The assistant listens for specific keywords in the user's voice command:
If it detects "hello jarvis," it responds with a greeting.
If it detects "open," it extracts the website name and opens the corresponding site.
If it detects "reload," it reloads the current page.
If it detects "instagram," it attempts to open the Instagram Direct chat with the specified user.
Speech Synthesis:

The assistant uses speech synthesis to respond with appropriate messages, providing feedback to the user.
How to Use
Prerequisites
A modern web browser that supports the Web Speech API (e.g., Chrome, Edge).
A microphone enabled on your device.
Steps
Clone the Repository:

Download or clone this repository to your local machine.
Open the Project:

Open index.html in your preferred web browser.
Start Voice Recognition:

Click the "Start" button to activate the assistant.
Give Commands:

Speak commands like "hello jarvis," "open google," "reload," or "instagram [username]."
The assistant will process your command and perform the corresponding action.
Example Commands
"Hello Jarvis": The assistant will respond with a greeting.
"Open YouTube": The assistant will open YouTube in a new tab.
"Reload": The page will refresh.
"Instagram john_doe": The assistant will open Instagram Direct for the user john_doe.
Future Improvements
Adding more voice commands and functionalities.
Enhancing error handling for unsupported commands.
Improving user interface and interaction feedback.
Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

License
This project is open-source and available under the MIT License.