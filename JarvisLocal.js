// Initialize speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Set the language to English
recognition.lang = 'en-US';

// Function to start voice recognition
function startVoiceRecognition() {
    const status = document.querySelector('.status');
    status.textContent = "Listening...";

    // Event listener for speech recognition results
    recognition.onresult = function (event) {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log('Command received:', command);

        if (command.includes('hello jarvis')) {
            speak("Hello sir, how may I assist you");
        } else if (command.includes('open')) {
            openWebsite(command);
        } else if (command.includes('reload')) {
            reloadPage();
        } else if (command.includes('instagram')) {
            openInstagramChat(command);
        } else {
            speak("I'm sorry, I didn't understand that command.");
        }
    };

    // Start recognition
    recognition.start();
}

// Function to open a website based on voice command
function openWebsite(command) {
    let website = command.replace('open', '').trim();
    if (website.includes(' ')) {
        website = website.replace(/ /g, '');
    }
    const url = `https://${website}.com`;
    window.open(url, '_blank');
}

// Function to reload the current page
function reloadPage() {
    location.reload();
}

// Function to open Instagram Direct with a specific user
function openInstagramChat(command) {
    let user = command.replace('instagram', '').trim();
    const url = `https://www.instagram.com/direct/t/${user}/`;
    window.open(url, '_blank');
}

// Function to convert text to speech
function speak(message) {
    const speech = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(speech);
}

// Start recognition again if it ends
recognition.onend = function () {
    recognition.start();
};

// Add event listener to the button to start voice recognition on click
document.getElementById('start-btn').addEventListener('click', function () {
    startVoiceRecognition();
});
