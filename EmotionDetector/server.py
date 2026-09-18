"""
Emotion Detection Server

This module runs a Flask web server for the Emotion Detection application.
It exposes endpoints to analyze text and detect emotions using the Watson NLP API.
"""

from flask import Flask, request, render_template
from EmotionDetection.emotion_detection import emotion_detector

app = Flask(__name__)

@app.route("/emotionDetector")
def detect_emotion():
    """
    Endpoint to detect emotion from the provided text.
    Returns the emotion breakdown and dominant emotion, or an error message if invalid.
    """
    text_to_analyze = request.args.get('textToAnalyze')

    if not text_to_analyze:
        return "Invalid text! Please try again!"

    response = emotion_detector(text_to_analyze)

    if response['dominant_emotion'] is None:
        return "Invalid text! Please try again!"

    return (
        f"For the given statement, the system response is "
        f"'anger': {response['anger']}, 'disgust': {response['disgust']}, "
        f"'fear': {response['fear']}, 'joy': {response['joy']} and "
        f"'sadness': {response['sadness']}. "
        f"The dominant emotion is {response['dominant_emotion']}."
    )

@app.route("/")
def render_index_page():
    """
    Endpoint to render the main index.html page.
    """
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
