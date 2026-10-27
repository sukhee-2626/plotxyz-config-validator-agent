export type FieldType = "text" | "textarea" | "number" | "checkbox";

export interface AgentField {
  name: string;
  label: string;
  type: FieldType;
  rows?: number;
  placeholder?: string;
}

export interface AgentConfig {
  slug: string;
  title: string;
  tagline: string;
  purpose: string;
  accent: string;
  features: string[];
  limitations: string[];
  fields: AgentField[];
  sample: Record<string, string | number | boolean>;
  repo: string;
}

export const agent: AgentConfig = {
  "slug": "plotxyz-config-validator-agent",
  "title": "Config Validator",
  "tagline": "Catch config problems before deployment.",
  "purpose": "Validates JSON or YAML configuration against required fields and scans for possible secrets, reporting errors and warnings.",
  "accent": "#22d3ee",
  "features": [
    "JSON/YAML parse validation",
    "Required-field checks",
    "Possible-secret detection"
  ],
  "limitations": [
    "YAML validation requires PyYAML to be installed.",
    "Secret detection is heuristic, not definitive."
  ],
  "fields": [
    {
      "name": "config",
      "label": "Configuration (JSON or YAML)",
      "type": "textarea",
      "rows": 9,
      "placeholder": ""
    },
    {
      "name": "format",
      "label": "Format (json or yaml)",
      "type": "text",
      "rows": 4,
      "placeholder": ""
    },
    {
      "name": "required_fields",
      "label": "Required fields (comma-separated)",
      "type": "text",
      "rows": 4,
      "placeholder": ""
    }
  ],
  "sample": {
    "config": "{\"database\": {\"host\": \"db.example.com\", \"port\": 5432}, \"api_key\": \"sk-live-1234567890abcdef\"}",
    "format": "json",
    "required_fields": "database,api_key,feature_flags"
  },
  "repo": "https://github.com/sukhee-2626/plotxyz-config-validator-agent"
};
