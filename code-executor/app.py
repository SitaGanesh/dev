from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import os
from dotenv import load_dotenv

load_dotenv()  # Load variables from .env

app = Flask(__name__)
CORS(app, origins=os.environ.get("CORS_ORIGIN", "*").split(","))  # Use CORS_ORIGIN or fallback to "*"

@app.route('/run', methods=['POST'])
def run_code():
    data = request.get_json()
    code = data.get('code', '')
    language = data.get('language', 'python')

    if language == 'python':
        try:
            result = subprocess.run(
                ['python', '-c', code],
                capture_output=True,
                text=True,
                timeout=5
            )
            return jsonify({
                'output': result.stdout,
                'error': result.stderr
            })
        except subprocess.TimeoutExpired:
            return jsonify({'error': 'Execution timed out'})
    else:
        return jsonify({'error': f'Unsupported language: {language}'}), 400

if __name__ == '__main__':
    PORT = int(os.environ.get("PORT", 8000))  # Use PORT or fallback to 8000
    app.run(host='0.0.0.0',port=PORT, debug=False)