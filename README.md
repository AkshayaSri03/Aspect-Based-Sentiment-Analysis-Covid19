# Aspect-Based Sentiment Analysis of COVID-19 Twitter Discussions

## Project Overview
This project implements **Aspect-Based Sentiment Analysis (ABSA)** on COVID-19–related Twitter data to understand public opinions at a fine-grained level. Instead of assigning a single sentiment to an entire tweet, the system identifies **specific aspects** (such as healthcare, vaccines, lockdowns, and government response) and determines the sentiment associated with each aspect.

The analyzed results are presented through **interactive visualizations** and a **web-based frontend**, making sentiment trends easy to explore and interpret.

---

## Objectives
- Perform aspect-level sentiment analysis on COVID-19 Twitter data  
- Identify key discussion aspects from tweets  
- Classify sentiments as positive, negative, or neutral  
- Visualize sentiment trends using dashboards  
- Provide a user-friendly web interface for insights

---

## System Architecture
- **Data Processing & NLP:**  
  Twitter CSV datasets are preprocessed and analyzed using transformer-based NLP models for aspect extraction and sentiment classification.
- **Visualization:**  
  Interactive dashboards created using Tableau to show sentiment trends and aspect-wise analysis.
- **Frontend Application:**  
  A React + Vite web application that presents project details and embedded visualizations.

---

## Technologies Used
- **Programming & NLP:** Python, Hugging Face Transformers, NLP  
- **Frontend:** React.js, Vite, HTML, CSS, JavaScript  
- **Visualization:** Tableau  
- **Deployment & Version Control:** Vercel, GitHub  

---
## Repository Structure

Aspect-Based-Sentiment-Analysis-Covid19/

        ├── frontend/        # React + Vite frontend (deployed on Vercel)

        ├── notebooks/       # Jupyter notebooks for NLP processing & model experiments

        ├── datasets/        # COVID-19 Twitter CSV datasets used for analysis

        ├── README.md        # Project documentation

        └── .gitignore       # Git ignore configuration

---

## Live Demo
**Frontend Application:**  
https://absa-ten.vercel.app/

---

## Deployment Details
- Only the `frontend/` folder is deployed  
- Deployed on **Vercel** using GitHub integration  
- Build command: `npm run build`  
- Output directory: `dist`  
- Automatic redeployment on every GitHub push  

---

##  Key Features
- Aspect-based sentiment classification  
- Transformer-based NLP approach  
- Interactive sentiment visualizations  
- Clean and responsive user interface  
- Modular and scalable project structure  

---
