# Note: Replace **<YOUR_APPLICATION_TOKEN>** with your actual Application token

import argparse
import json
from argparse import RawTextHelpFormatter
import requests
from typing import Optional
import warnings
# try:
#     from langflow.load import upload_file
# except ImportError:
#     warnings.warn("Langflow provides a function to help you upload files to the flow. Please install langflow to use it.")
#     upload_file = None

BASE_API_URL = "https://api.langflow.astra.datastax.com"
LANGFLOW_ID = "3b797899-1f2a-4129-9278-9ecfd2ec1ea3"
FLOW_ID = "47c95fc2-3d42-467c-beb2-141484bb3cdb"
APPLICATION_TOKEN = "AstraCS:qzbEeGfiGNUhIFJBtwjBLeod:21b93a79e41e929a3a76efffa1f136e4a3cf5d6a33f926638c8d680251ae4683"
ENDPOINT = "" 

TWEAKS = {
  "ChatInput-qOIky": {
    "background_color": "",
    "chat_icon": "",
    "files": "",
    # "input_value": "give analytics for keyword comments and commnets for reels and also imnlcude their visualizations ",
    "sender": "User",
    "sender_name": "User",
    "session_id": "",
    "should_store_message": True,
    "text_color": ""
  },
  "ParseData-VunOU": {
    "sep": "\n",
    "template": "{text}"
  },
  "Prompt-jsGjf": {
    "context": "",
    "question": "",
    "template": "{context}\n\n---\n\nGiven the context above, answer the question as best as possible.\n\nQuestion: {question}\n\nAnswer: "
  },
  "ChatOutput-R5NV0": {
    "background_color": "",
    "chat_icon": "",
    "data_template": "{text}",
    "input_value": "",
    "sender": "Machine",
    "sender_name": "AI",
    "session_id": "",
    "should_store_message": True,
    "text_color": ""
  },
  "AstraDB-GHIV4": {
    "advanced_search_filter": "{}",
    "api_endpoint": "https://f99a5b16-af33-4d89-a5d6-3458b9ae95cc-us-east-2.apps.astra.datastax.com",
    "batch_size": None,
    "bulk_delete_concurrency": None,
    "bulk_insert_batch_concurrency": None,
    "bulk_insert_overwrite_concurrency": None,
    "collection_indexing_policy": "",
    "collection_name": "hf_1024_rand2",
    "embedding_choice": "Embedding Model",
    "keyspace": "",
    "metadata_indexing_exclude": "",
    "metadata_indexing_include": "",
    "metric": "cosine",
    "number_of_results": 4,
    "pre_delete_collection": False,
    "search_filter": {},
    "search_input": "",
    "search_score_threshold": 0,
    "search_type": "Similarity",
    "setup_mode": "Sync",
    "token": "ASTRA_DB_APPLICATION_TOKEN"
  },
  "AstraDB-MVsTY": {
    "advanced_search_filter": "{}",
    "api_endpoint": "https://f99a5b16-af33-4d89-a5d6-3458b9ae95cc-us-east-2.apps.astra.datastax.com",
    "batch_size": None,
    "bulk_delete_concurrency": None,
    "bulk_insert_batch_concurrency": None,
    "bulk_insert_overwrite_concurrency": None,
    "collection_indexing_policy": "",
    "collection_name": "hf_1024_rand2",
    "embedding_choice": "Embedding Model",
    "keyspace": "",
    "metadata_indexing_exclude": "",
    "metadata_indexing_include": "",
    "metric": "cosine",
    "number_of_results": 4,
    "pre_delete_collection": False,
    "search_filter": {},
    "search_input": "",
    "search_score_threshold": 0,
    "search_type": "Similarity",
    "setup_mode": "Sync",
    "token": "ASTRA_DB_APPLICATION_TOKEN"
  },
  "File-YleG4": {
    "concurrency_multithreading": 4,
    "path": "chunk_16.json",
    "silent_errors": False,
    "use_multithreading": False
  },
  "HuggingFaceInferenceAPIEmbeddings-tiCFN": {
    "api_key": "HF_KEY",
    "inference_endpoint": "https://api-inference.huggingface.co/models/",
    "model_name": "BAAI/bge-large-en-v1.5"
  },
  "SplitText-tcx5I": {
    "chunk_overlap": 200,
    "chunk_size": 7900,
    "separator": "\n"
  },
  "HuggingFaceInferenceAPIEmbeddings-LZF2o": {
    "api_key": "HF_KEY",
    "inference_endpoint": "https://api-inference.huggingface.co/models/",
    "model_name": "BAAI/bge-large-en-v1.5"
  },
  "GoogleGenerativeAIModel-YkHR0": {
    "google_api_key": "AIzaSyB8WyzUTa4AY6eUE_wZaeq55G9HtJDxn8c",
    "input_value": "",
    "max_output_tokens": None,
    "model": "gemini-1.5-pro",
    "n": None,
    "stream": False,
    "system_message": "",
    "temperature": 0.4,
    "top_k": None,
    "top_p": None
  }
}

def run_flow(message: str,
  endpoint: str,
  output_type: str = "chat",
  input_type: str = "chat",
  tweaks: Optional[dict] = None,
  application_token: Optional[str] = None) -> dict:
    """
    Run a flow with a given message and optional tweaks.

    :param message: The message to send to the flow
    :param endpoint: The ID or the endpoint name of the flow
    :param tweaks: Optional tweaks to customize the flow
    :return: The JSON response from the flow
    """
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{endpoint}"

    payload = {
        "input_value": message,
        "output_type": output_type,
        "input_type": input_type,
    }
    headers = None
    if tweaks:
        payload["tweaks"] = tweaks
    if application_token:
        headers = {"Authorization": "Bearer " + application_token, "Content-Type": "application/json"}
    response = requests.post(api_url, json=payload, headers=headers)
    return response.json()

# def maiinn():
#     parser = argparse.ArgumentParser(description="""Run a flow with a given message and optional tweaks.
# Run it like: python <your file>.py "your message here" --endpoint "your_endpoint" --tweaks '{"key": "value"}'""",
#         formatter_class=RawTextHelpFormatter)
#     parser.add_argument("message", type=str, help="The message to send to the flow")
#     parser.add_argument("--endpoint", type=str, default=ENDPOINT or FLOW_ID, help="The ID or the endpoint name of the flow")
#     parser.add_argument("--tweaks", type=str, help="JSON string representing the tweaks to customize the flow", default=json.dumps(TWEAKS))
#     parser.add_argument("--application_token", type=str, default=APPLICATION_TOKEN, help="Application Token for authentication")
#     parser.add_argument("--output_type", type=str, default="chat", help="The output type")
#     parser.add_argument("--input_type", type=str, default="chat", help="The input type")
#     parser.add_argument("--upload_file", type=str, help="Path to the file to upload", default=None)
#     parser.add_argument("--components", type=str, help="Components to upload the file to", default=None)

#     args = parser.parse_args()
#     try:
#       tweaks = json.loads(args.tweaks)
#     except json.JSONDecodeError:
#       raise ValueError("Invalid tweaks JSON string")

#     if args.upload_file:
#         if not upload_file:
#             raise ImportError("Langflow is not installed. Please install it to use the upload_file function.")
#         elif not args.components:
#             raise ValueError("You need to provide the components to upload the file to.")
#         tweaks = upload_file(file_path=args.upload_file, host=BASE_API_URL, flow_id=ENDPOINT, components=args.components, tweaks=tweaks)

#     response = run_flow(
#         message=args.message,
#         endpoint=args.endpoint,
#         output_type=args.output_type,
#         input_type=args.input_type,
#         tweaks=tweaks,
#         application_token=args.application_token
#     )

#     # Extract the text part from the response
#     try:
#         text_message = response.get("outputs", [{}])[0].get("outputs", [{}])[0].get("results", {}).get("message", {}).get("text", "")
#         formatted_text = text_message.strip()
#         return formatted_text
#     except KeyError:
#         return "No valid text found in the response."

#     # print(json.dumps(response, indent=2))

# if __name__ == "__main__":
#     print(maiinn())

# from IPython.display import display, HTML

def run_flow_in_notebook(message, endpoint=ENDPOINT or FLOW_ID, tweaks=None, application_token=APPLICATION_TOKEN,
                         output_type="chat", input_type="chat", upload_file=None, components=None):
    """
    Runs the flow with the given message and optional tweaks, directly in a Jupyter Notebook.
    Only returns the formatted text part of the response.
    """
    if tweaks is None:
        tweaks = TWEAKS

    # Parse and validate tweaks
    try:
        tweaks = json.loads(tweaks) if isinstance(tweaks, str) else tweaks
    except json.JSONDecodeError:
        raise ValueError("Invalid tweaks JSON string")

    # Handle file upload if needed
    if upload_file:
        if not upload_file:
            raise ImportError("Langflow is not installed. Please install it to use the upload_file function.")
        elif not components:
            raise ValueError("You need to provide the components to upload the file to.")
        tweaks = upload_file(file_path=upload_file, host=BASE_API_URL, flow_id=endpoint, components=components, tweaks=tweaks)

    # Run the flow
    response = run_flow(
        message=message,
        endpoint=endpoint,
        output_type=output_type,
        input_type=input_type,
        tweaks=tweaks,
        application_token=application_token
    )

    #Extract the text part from the response
    try:
        text_message = response.get("outputs", [{}])[0].get("outputs", [{}])[0].get("results", {}).get("message", {}).get("text", "")
        formatted_text = text_message.strip()
        return formatted_text
    except KeyError:
        return "No valid text found in the response."
    
# Example usage in a Jupyter Notebook
# message = input("Enter your message: ")  # Take input directly in the notebook

formatted_text = run_flow_in_notebook(message='')
print(formatted_text)
