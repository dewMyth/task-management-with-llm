const buildPriorityPrompt = ({ title, description }) => {
  return `
            You are an assistant that assigns task priority.
            Return JSON ONLY in this format:
                    {
                        "priority": "LOW | MEDIUM | HIGH",
                        "reason": "short explanation"
                    }
            Task title: ${title}
            Task description: ${description}
            Rules:
             - No Markdown, only JSON
             - Just returned the JSON, no extra text
             - The output should be valid JSON
             - The outputh should be parsable by JavaScript JSON.parse()
`;
};

module.exports = { buildPriorityPrompt };
