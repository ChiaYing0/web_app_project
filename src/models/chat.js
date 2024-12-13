const accent_options = [
  { label: "American", value: "en-US" },
  { label: "Australian", value: "en-AU" },
  { label: "Indian", value: "en-IN" },
  { label: "Japanese", value: "ja-JP" },
  { label: "Vietnamese", value: "vi-VN" },
];

const scenario_options = [
  { label: "Travel", value: "travel" },
  { label: "Interview", value: "interview" },
  { label: "Daily", value: "daily" },
];

const role = {
  SYSTEM: "system",
  USER: "user",
  ASSISTANT: "assistant",
};

export { accent_options, scenario_options, role };
