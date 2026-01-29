const { buildPriorityPrompt } = require("./prompt.builder");
const { callLLM } = require("./llm.client");
const { PrioritySchema } = require("./schemas");

const suggestPriority = async (task) => {
  const prompt = buildPriorityPrompt(task);
  const aiResponse = await callLLM(prompt);

  let parsed;

  try {
    parsed = JSON.parse(aiResponse);
  } catch {
    console.warn("Failed to parse LLM response as JSON");
  }

  const result = PrioritySchema.safeParse(parsed);

  if (!result.success) {
    console.warn("LLM response failed validation");
  }

  return result.data;
};

module.exports = { suggestPriority };
