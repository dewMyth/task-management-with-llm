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
`;
};

module.exports = { buildPriorityPrompt };
