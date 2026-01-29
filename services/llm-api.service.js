const OpenAI = require("openai");
const { z } = require("zod");

exports.callLLMApi = async (prompt) => {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const TaskSchema = z.object({
    id: z.number(),
    task: z.string(),
  });

  const TaskArraySchema = z.array(TaskSchema);

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-nano",
      messages: [
        {
          role: "system",
          content:
            "Return ONLY valid JSON array. Each object must have numeric 'id' and string 'task'. No extra text.",
        },
        { role: "user", content: prompt },
      ],
    });

    console.log(
      "LLM Response:",
      JSON.parse(completion.choices[0].message.content),
    );

    const parsed = JSON.parse(completion.choices[0].message.content);

    const validated = TaskArraySchema.parse(parsed);

    return validated;
  } catch (err) {
    throw err;
  }
};
