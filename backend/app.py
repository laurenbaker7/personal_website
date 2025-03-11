from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Enable logging
import logging
logging.basicConfig(level=logging.INFO)

def load_words():
    words = []
    with open("words.txt", 'r') as file:
        for line in file:
            for word in line.split():
                words.append(word)
    return words

def process_feedback(guess, feedback, words):
    possible_words = words.copy()
    
    for i, (letter, result) in enumerate(zip(guess, feedback)):
        if result == 'g':  # Green - correct position
            possible_words = [w for w in possible_words if w[i] == letter]
        elif result == 'y':  # Yellow - wrong position but in word
            possible_words = [w for w in possible_words if letter in w and w[i] != letter]
        elif result == 'b':  # Black/Grey - not in word
            # Only remove words with this letter if it's not marked green or yellow elsewhere
            if 'g' not in feedback and 'y' not in feedback:
                possible_words = [w for w in possible_words if letter not in w]
            else:
                # If the letter appears as green or yellow elsewhere, be more careful
                count_in_feedback = feedback.count('g') + feedback.count('y')
                possible_words = [w for w in possible_words if w.count(letter) == count_in_feedback]
    
    return possible_words

@app.route('/api/wordle-suggestions', methods=['POST'])
def get_suggestions():
    app.logger.info('Received request for suggestions')
    data = request.json
    app.logger.info(f'Request data: {data}')
    guess = data.get('word', '').lower()
    feedback = data.get('feedback', '').lower()
    
    if len(guess) != 5 or len(feedback) != 5:
        return jsonify({'error': 'Both word and feedback must be 5 characters long'}), 400
    
    if not all(c in 'byg' for c in feedback):
        return jsonify({'error': 'Feedback must only contain b, y, or g'}), 400
    
    words = load_words()
    suggestions = process_feedback(guess, feedback, words)
    
    return jsonify({'suggestions': suggestions[:100]})  # Limit to 100 suggestions

if __name__ == '__main__':
    app.run(debug=True, port=5001)
