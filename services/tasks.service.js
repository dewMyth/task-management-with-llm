const llmService = require("./llm-api.service");
const { suggestPriority } = require("./ai/ai.orchestrator");
const { fi } = require("zod/locales");

exports.getTasks = async ({ id, page = 1, limit = 5 }) => {
  page = parseInt(page);
  limit = parseInt(limit);

  try {
    const data = await llmService.callLLMApi(
      "give me list of 20 tasks in json object array format",
    );

    if (id) {
      const task = data.find((task) => task.id === parseInt(id));
      return task ? [task] : [];
    } else {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const response = data.slice(startIndex, endIndex);
      return response;
    }
  } catch (err) {
    throw err;
  }
};

exports.createTask = async (taskData) => {
  try {
    const { title, description } = taskData;

    let priority = "MEDIUM";

    const aiSuggestion = await suggestPriority({ title, description });
    priority = aiSuggestion?.priority;

    if (priority !== "LOW" && priority !== "MEDIUM" && priority !== "HIGH") {
      priority = "MEDIUM";
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
    };

    return newTask;
  } catch (err) {
    throw err;
  }
};
