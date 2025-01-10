import axios from "axios";

const BASE_API_URL = "https://api.langflow.astra.datastax.com";
const LANGFLOW_ID = "3b797899-1f2a-4129-9278-9ecfd2ec1ea3";
const FLOW_ID = "47c95fc2-3d42-467c-beb2-141484bb3cdb";
const APPLICATION_TOKEN = "AstraCS:tNRnUFqnBmkIXMUyDMFZkxZP:422a9fd4d3fc687cfe2ba597bc1384999283d520dc3f79768d95acc98973c6ea";

export interface RunFlowParams {
  message: string;
  endpoint?: string;
  tweaks?: Record<string, any>;
  output_type?: string;
  input_type?: string;
}

export const runFlow = async ({
  message,
  endpoint = FLOW_ID,
  tweaks = {},
  output_type = "chat",
  input_type = "chat",
}: RunFlowParams) => {
  try {
    const apiUrl = `${BASE_API_URL}/lf/${LANGFLOW_ID}/api/v1/run/${endpoint}`;
    const response = await axios.post(
      apiUrl,
      {
        input_value: message,
        output_type,
        input_type,
        tweaks,
      },
      {
        headers: {
          Authorization: `Bearer ${APPLICATION_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error calling runFlow API:", error);
    throw new Error("Failed to fetch output from backend.");
  }
};
