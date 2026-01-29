const { z } = require("zod");

const PrioritySchema = z.object({
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  reason: z.string(),
});

module.exports = { PrioritySchema };
