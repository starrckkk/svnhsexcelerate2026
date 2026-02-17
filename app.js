document.addEventListener('DOMContentLoaded', () => {

    // ===============================
    // EXCELERATE SMART LOCAL CHATBOT & SEARCH JS
    // ===============================

    const searchBox = document.getElementById('search-box');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    if (!searchBox || !chatInput || !sendBtn || !chatMessages) {
        console.error('One or more required HTML elements not found!');
        return;
    }

    // --- Predefined techniques ---
    const techniques = Array.from(document.querySelectorAll('.technique')).map(tech => ({
        title: tech.querySelector('summary').textContent.trim(),
        content: tech.querySelector('.content').innerHTML.trim()
    }));

    // --- Search functionality ---
    searchBox.addEventListener('input', () => {
        const query = searchBox.value.toLowerCase();
        techniques.forEach((tech, i) => {
            const el = document.querySelectorAll('.technique')[i];
            if (tech.title.toLowerCase().includes(query)) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.open = true;
            } else {
                el.open = false;
            }
        });
    });

    // --- Helper: calculate relevance score ---
    function getRelevanceScore(text, queryWords) {
        let score = 0;
        const lowerText = text.toLowerCase();
        queryWords.forEach(word => {
            if (lowerText.includes(word)) score += 1;
        });
        return score;
    }

    // --- Smart local chatbot response ---
    function getSmartResponse(message) {
        const queryWords = message.toLowerCase().split(/\s+/);
        const scored = techniques.map(tech => ({
            title: tech.title,
            content: tech.content,
            score: getRelevanceScore(tech.title, queryWords)
        }));

        const sorted = scored
            .filter(t => t.score > 0)
            .sort((a, b) => b.score - a.score);

        if (sorted.length === 0) {
            return "Sorry, I couldn't find a matching technique. Try using different keywords.";
        }

        // Return top 3 matches
        return sorted.slice(0, 3).map(t => `<strong>${t.title}:</strong><br>${t.content}`).join('<hr>');
    }

    // --- Send chat message ---
    function handleSendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        chatMessages.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        const reply = getSmartResponse(message);
        chatMessages.innerHTML += `<p><strong>AI:</strong> ${reply}</p>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendBtn.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleSendMessage();
    });

});
