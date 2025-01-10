from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from gemini import run_flow_in_notebook

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# def run_flow_in_notebook(prompt):
#     # Mock implementation for debugging
#     print(f"Debug: Processing prompt: {prompt}")
#     result = f"Processed: {prompt}"  # Replace with actual logic
#     print(f"Debug: Generated output: {result}")
#     return result

@app.route('/api/gemini', methods=['POST'])
def gemini_api():
    try:
        # Get the prompt from the POST request
        data = request.get_json()  # Parse JSON body
        prompt = data.get('prompt', '')  # Extract the prompt

        print(f"Received input prompt: {prompt}")  # Debugging log

        if not prompt:
            return jsonify({'error': 'No prompt provided'}), 400  # Handle missing prompt

        # Process the prompt with the Gemini model
        result = run_flow_in_notebook(prompt)

        # Handle empty output
        if not result:
            result = "No output generated. Please check the input or try again."

        print(f"Processed output: {result}")  # Debugging log

        # Send the result back as a JSON response
        return jsonify({'text': result}), 200

    except Exception as e:
        # Print error message for debugging
        print(f"Error occurred: {str(e)}")
        # Return error response
        return jsonify({'error': str(e)}), 500  

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True, host='0.0.0.0', port=5000)