# -*- coding: utf-8 -*-
"""SIH Chatbot:- LegalBot

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1hCgCuAio2xJ2HF4b6s89tukrR82XSvnq
"""

from google.colab import drive
drive.mount('/content/drive')

import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load your dataset from the .json file
with open('/content/drive/MyDrive/SIH Chatbot/merged-240_000-331_000.json', 'r') as json_file:
    data = json.load(json_file)

data

# Extract case summaries into a list
case_summaries = [entry['t'] for entry in data]

# Initialize TF-IDF vectorizer
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(case_summaries)

# Start a conversation
print("LegalBot: Hello! How can I help you with legal information today? (Type 'exit' to end)")

while True:
    user_input = input("You: ")

    if user_input.lower() == 'exit':
        print("LegalBot: Goodbye!")
        break

    # Vectorize the user input
    user_vector = vectorizer.transform([user_input])

    # Calculate cosine similarity between user input and case summaries
    similarity_scores = cosine_similarity(user_vector, tfidf_matrix)

    # Find the index of the most similar case summary
    most_similar_index = similarity_scores.argmax()

    # Retrieve and print the most similar case summary
    response = data[most_similar_index]['t']
    print("LegalBot:", response)

import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load your dataset from the .json file
# with open('your_dataset.json', 'r') as json_file:
#     data = json.load(json_file)

# Extract relevant features into lists
case_summaries = [entry['t'] for entry in data]
feature1 = [entry['d'] for entry in data]
feature2 = [entry['cl'] for entry in data]
# Add the remaining features in a similar way

# Combine the relevant features into a single string for each entry
combined_features = [f"{case_summaries} {f1} {f2}" for case_summaries, f1, f2 in zip(case_summaries, feature1, feature2)]
# You can add the other features in a similar way

# Initialize TF-IDF vectorizer
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(combined_features)

# Start a conversation
print("LegalBot: Hello! How can I help you with legal information today? (Type 'exit' to end)")

while True:
    user_input = input("You: ")

    if user_input.lower() == 'exit':
        print("LegalBot: Goodbye!")
        break

    # Vectorize the user input
    user_vector = vectorizer.transform([user_input])

    # Calculate cosine similarity between user input and combined features
    similarity_scores = cosine_similarity(user_vector, tfidf_matrix)

    # Find the index of the most similar entry
    most_similar_index = similarity_scores.argmax()

    # Retrieve and print the most similar entry's summary
    response = data[most_similar_index]['case_summaries']
    print("LegalBot:", response)

import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load your dataset from the .json file
# with open('your_dataset.json', 'r') as json_file:
#     data = json.load(json_file)

# Extract relevant features into lists
case_summaries = [entry['t'] for entry in data]
feature1 = [entry['d'] for entry in data]
feature2 = [entry['cl'] for entry in data]
# Add the remaining features in a similar way

# Combine the relevant features into a single string for each entry
combined_features = [f"{case_summaries} {f1} {f2}" for case_summaries, f1, f2 in zip(case_summaries, feature1, feature2)]
# You can add the other features in a similar way

# Initialize TF-IDF vectorizer
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(combined_features)

# Start a conversation
print("LegalBot: Hello! How can I help you with legal information today? (Type 'exit' to end)")

while True:
    user_input = input("You: ")

    if user_input.lower() == 'exit':
        print("LegalBot: Goodbye!")
        break

    # Vectorize the user input
    user_vector = vectorizer.transform([user_input])

    # Calculate cosine similarity between user input and combined features
    similarity_scores = cosine_similarity(user_vector, tfidf_matrix)

    # Find the index of the most similar entry
    most_similar_index = similarity_scores.argmax()

    # Retrieve and print the most similar entry's summary
    response = data[most_similar_index]['t']
    print("LegalBot:", response)

