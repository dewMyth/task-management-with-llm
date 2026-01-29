const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function callLLM(prompt) {
  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    temperature: 0,
    messages: [
      { role: "system", content: "Respond with valid JSON only." },
      { role: "user", content: prompt },
    ],
  });

  return response.choices[0].message.content;
}

module.exports = { callLLM };
