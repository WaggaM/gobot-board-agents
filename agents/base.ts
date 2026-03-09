export interface AgentConfig {
  name: string;
  topicId?: number;
  systemPrompt: string;
  allowedTools?: string[];
  model: string;
  reasoning?: string;
  personality?: string;
}

export const BASE_CONTEXT = `
You are an AI assistant operating as part of a multi-agent board system.
You speak in first person and stay firmly in character.
Keep responses Telegram-friendly (concise but substantive).
`;
