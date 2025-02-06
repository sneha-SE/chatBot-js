function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    let chatBox = document.getElementById("chat-box");

    // Display User Message
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    document.getElementById("user-input").value = "";

    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        let botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = botResponse;
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function getBotResponse(input) {
    input = input.toLowerCase();

    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you": "I'm a bot, but I'm doing great! What about you?",
        "what is your name": "I'm your friendly chatbot!",
        "bye": "Goodbye! Have a wonderful day!",
        "thank you": "You're welcome! 😊",
        "who created you": "I was created by Sneha Zehra!",
        "what can you do": "I can chat with you, tell time, date, and more!",
    };

    // Time-based Responses
    if (input.includes("time")) {
        let time = new Date().toLocaleTimeString();
        return `The current time is ${time}`;
    }

    if (input.includes("date")) {
        let date = new Date().toLocaleDateString();
        return `Today's date is ${date}`;
    }

    if (input.includes("day")) {
        let day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        return `Today is ${day}`;
    }

    if (input.includes("month")) {
        let month = new Date().toLocaleDateString('en-US', { month: 'long' });
        return `It's ${month} now.`;
    }

    if (input.includes("year")) {
        let year = new Date().getFullYear();
        return `The current year is ${year}.`;
    }

    if (input.includes("weather")) {
        return "I can't check live weather yet, but you can try a weather app! ☁️";
    }

    if (input.includes("joke")) {
        return "Why don’t skeletons fight each other? Because they don’t have the guts! 😂";
    }

    if (input.includes("who are you")) {
        return "I'm a chatbot here to make your life easier!";
    }

    return responses[input] || "Sorry, I don't understand. Can you ask something else?";
}

// Send message when "Enter" key is pressed
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
