
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
import pickle

from flask import Flask, render_template, jsonify, request
from src.helper import download_hugging_face_embeddings
from langchain_pinecone import PineconeVectorStore
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
import google.generativeai as genai
from dotenv import load_dotenv
from src.prompt import *
import os



# Chat bot work start here .......

load_dotenv()
PINECONE_API_KEY=os.environ.get('PINECONE_API_KEY')
GEMINI_API_KEY=os.environ.get('GEMINI_API_KEY')

os.environ["PINECONE_API_KEY"] = PINECONE_API_KEY
os.environ["GEMINI_API_KEY"] = GEMINI_API_KEY

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "D:/ChatBot/key.json"

embeddings = download_hugging_face_embeddings()

index_name = "medicalbot"


docsearch = PineconeVectorStore.from_existing_index(
    index_name=index_name,
    embedding=embeddings
)

retriever = docsearch.as_retriever(search_type="similarity", search_kwargs={"k":5})

# Configure the Gemini API 
genai.configure(api_key="GEMINI_API_KEY")

# Initialize the Gemini model
llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", temperature=0.4, max_output_tokens=500)


prompt = ChatPromptTemplate.from_messages(
    [
        ("system", system_prompt),
        ("human", "{input}"),
    ]
)

question_answer_chain = create_stuff_documents_chain(llm, prompt)


# rag_chain = create_retrieval_chain(retriever, question_answer_chain)

def create_rag_chain_gemini(retriever):
    return create_retrieval_chain(retriever, question_answer_chain)

rag_chain = create_retrieval_chain(retriever, question_answer_chain)
rag_chain = create_rag_chain_gemini(retriever)


# Chatbot end .......





app = Flask(__name__)
CORS(app)

# Load model and scaler
model = joblib.load("diabetes_model.pkl")
scaler = joblib.load("scaler.pkl")

h_model = joblib.load("model_heart2.pkl")
h_scaler = joblib.load("scaler_heart2.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    features = data.get("features")
    
    if not features or len(features) != 8:
        return jsonify({"error": "Expected 8 input features"}), 400

    input_array = np.array([features])
    input_scaled = scaler.transform(input_array)
    prediction = model.predict(input_scaled)[0]

    return jsonify({"prediction": int(prediction)})


@app.route("/predictHeart", methods=["POST"])
def predictHeart():
    data = request.get_json()
    features = data.get("features")
    
    if not features or len(features) != 13:
        return jsonify({"error": "Expected 8 input features"}), 400

    input_array = np.array([features])
    input_scaled = h_scaler.transform(input_array)
    prediction = h_model.predict(input_scaled)[0]

    return jsonify({"prediction": int(prediction)})

@app.route("/get", methods=["GET", "POST"])
def chat():
    msg = request.form["msg"]
    input = msg
    print(input)
    response = rag_chain.invoke({"input": msg})
    print("Response : ", response["answer"])
    return str(response["answer"])

if __name__ == "__main__":
    app.run(debug=True)