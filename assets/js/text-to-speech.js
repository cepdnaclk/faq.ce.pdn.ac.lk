// Text-to-Speech functionality for FAQ pages
let isSpeaking = false;
let speechSynthesisUtterance = null;

function isSpeechSynthesisSupported() {
    return 'speechSynthesis' in window;
}

function getPageContent() {
    // Get the main content container
    const contentContainer = document.querySelector('.container.pt-5, .container.py-3.pt-5');
    
    if (!contentContainer) {
        return '';
    }
    
    // Extract text content, excluding scripts and styles
    let content = '';
    const elements = contentContainer.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, b');
    
    elements.forEach(element => {
        // Skip script and style elements
        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
            return;
        }
        
        const text = element.textContent.trim();
        if (text) {
            // Add proper spacing for headings
            if (element.tagName.startsWith('H')) {
                content += '\n' + text + '.\n';
            } else {
                content += text + ' ';
            }
        }
    });
    
    return content.trim();
}

function resetButtonState() {
    const button = document.getElementById('tts-button');
    const icon = document.getElementById('tts-icon');
    
    if (button && icon) {
        isSpeaking = false;
        button.classList.remove('btn-danger');
        button.classList.add('btn-primary');
        button.title = 'Listen to this page';
        icon.classList.remove('fa-stop');
        icon.classList.add('fa-volume-up');
    }
}

function toggleTextToSpeech() {
    if (!isSpeechSynthesisSupported()) {
        alert("Sorry, your browser doesn't support the Web Speech API. Please try using a modern browser like Chrome, Edge, or Safari.");
        return;
    }
    
    const button = document.getElementById('tts-button');
    const icon = document.getElementById('tts-icon');
    
    if (isSpeaking) {
        // Stop speaking
        speechSynthesis.cancel();
        resetButtonState();
    } else {
        // Start speaking
        const content = getPageContent();
        
        if (!content) {
            alert('No content found to read.');
            return;
        }
        
        speechSynthesisUtterance = new SpeechSynthesisUtterance(content);
        
        // Set voice properties
        speechSynthesisUtterance.rate = 1.0; // Speed of speech
        speechSynthesisUtterance.pitch = 1.0; // Pitch of voice
        speechSynthesisUtterance.volume = 1.0; // Volume
        
        // Event listeners
        speechSynthesisUtterance.onend = function() {
            resetButtonState();
        };
        
        speechSynthesisUtterance.onerror = function(event) {
            console.error('Speech synthesis error:', event);
            resetButtonState();
            alert('An error occurred while trying to speak. Please try again.');
        };
        
        // Start speaking
        speechSynthesis.speak(speechSynthesisUtterance);
        isSpeaking = true;
        button.classList.remove('btn-primary');
        button.classList.add('btn-danger');
        button.title = 'Stop listening';
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-stop');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('tts-button');
    if (button) {
        button.addEventListener('click', toggleTextToSpeech);
        
        // Check if speech synthesis is supported
        if (!isSpeechSynthesisSupported()) {
            button.style.display = 'none';
        }
    }
});
