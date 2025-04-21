require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const emails = require('./emails'); 

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend'))); 


app.get('/summarize-email', async (req, res) => {
    try {
        const summaries = []; 

        for (const email of emails) {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
                {
                    contents: [{
                        parts: [{ text: `Summarize the following email in concise way:\n\n${email.content}` }]
                    }]
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const summaryText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No summary generated.";

            summaries.push({
                sender: email.sender,
                date: new Date(email.timestamp).toLocaleString(),
                summary: summaryText
            });
        }

        return res.json({ summaries });
    } catch (error) {
        console.error('Error during summarization:', error);
        return res.status(500).json({ error: 'Failed to summarize emails' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});