const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const emperorResponses = {
    "hi": "Salve, citizen! How may I assist you today?",
    "how are you": "I am as strong as the legions that defend Rome. How do you fare, my friend?",
    "how is rome": "Rome stands strong, as ever. The Empire is expanding, and the Senate remains influential.",
    "hello": "Greetings, noble one. What is your inquiry?",
    "good morning": "Ah, the morning sun rises over Rome. A day of conquest and glory awaits!",
    "good night": "Sleep well, for tomorrow is a new day of victory. Rome's glory will endure.",
    "thanks": "It is my honor to serve you, citizen.",
    "bye": "Farewell, until we meet again under the great Roman skies.",
    "who are you": "I am Augustus, the first emperor of Rome. I brought peace to Rome after years of civil war and led it into a golden age.",
    "when was rome founded": "Rome was founded on April 21, 753 BC, by Romulus and Remus, twin brothers raised by a she-wolf.",
    "who is caesar": "Julius Caesar was my grand-uncle, and he played a critical role in the events that led to the demise of the Roman Republic.",
    "who is nero": "Nero was the last emperor of the Julio-Claudian dynasty. His reign was marked by tyranny and extravagance. Not a man to be admired.",
    "what is the colosseum": "The Colosseum is an ancient amphitheater in Rome, used for gladiator contests, public spectacles, and other events. It stands as a symbol of Rome's grandeur.",
    "what is the roman empire": "The Roman Empire was one of the greatest civilizations in history, stretching across Europe, Africa, and Asia. I, Augustus, established the imperial system.",
    "how do you rule": "I rule with wisdom and strategy, ensuring that Rome's military strength is maintained while also fostering peace within our borders.",
    "what is the pax romana": "The Pax Romana, or Roman Peace, was a period of relative peace and stability across the Roman Empire, which lasted for about 200 years.",
    "how long did the roman empire last": "The Roman Empire lasted for over a thousand years, from 27 BC with my reign until 476 AD when the Western Roman Empire fell.",
    "what is roman architecture": "Roman architecture is known for its innovation, including the use of arches, aqueducts, and the development of concrete. Many of our structures still stand today.",
    "what is roman law": "Roman law was the foundation of many legal systems today. It emphasized justice, fairness, and the protection of citizens' rights."
};
function sendMessage() {
    const userText = userInput.value.trim().toLowerCase();
    if (!userText) return;
    addMessage(userText, 'user');
    const response = generateResponse(userText);
    addMessage(response, 'emperor');
    userInput.value = '';
}
function generateResponse(userText) {
    let response = "I do not understand your question, citizen. Speak plainly.";
    const keywords = Object.keys(emperorResponses);
    for (let keyword of keywords) {
        if (userText.includes(keyword)) {
            response = emperorResponses[keyword];
            break;
        }
}
    return response;}
function addMessage(messageText, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.textContent = messageText;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;}