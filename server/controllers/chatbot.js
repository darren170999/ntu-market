const axios = require('axios');

async function fetchGPT3Response(openai, prompt) {
    const completion = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt,
    });
    console.log(completion)
    return completion.data.choices[0].text;
}

const handleBotPrompt = (openai) => async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json("Please insert a prompt.")

    try {
        const response = await fetchGPT3Response(openai, prompt);
        return res.json(response);
    } catch (e) {
        console.log(e);
        return res.status(400).json("Error in bot prompt.");
    }
}

module.exports={handleBotPrompt}