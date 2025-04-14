import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import svm 
from sklearn.metrics import accuracy_score
from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.decomposition import PCA
import joblib

# loading the csv data to a Pandas DataFrame
heart_data = pd.read_csv('heart.csv')

# print first 5 rows of the dataset
heart_data.head()

# print last 5 rows of the dataset
heart_data.tail()

# number of rows and columns in the dataset
heart_data.shape

# getting some info about the data
heart_data.info()

# checking for missing values
heart_data.isnull().sum()

# statistical measures about the data
heart_data.describe()

# checking the distribution of Target Variable
heart_data['target'].value_counts()

X = heart_data.drop(columns='target', axis=1)
Y = heart_data['target']
pca = PCA(n_components=9)
X_pca = pca.fit_transform(X)
X_sel = SelectKBest(score_func=f_classif, k=8).fit_transform(X, Y)

scaler_pca = StandardScaler()
scaler_sel = StandardScaler()
scaler_sim = StandardScaler()

scaler_pca.fit(X_pca)
scaler_sel.fit(X_sel)
scaler_sim.fit(X)

standardized_data_pca = scaler_pca.transform(X_pca)
standardized_data_sel = scaler_sel.transform(X_sel)
standardized_data_sim = scaler_sim.transform(X)

X_pca = standardized_data_pca
X_sel = standardized_data_sel
X_sim = standardized_data_sim

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)
# print(X_pca)

classifier_linear = svm.SVC(kernel='linear')
classifier_poly = svm.SVC(kernel='poly', degree=3, coef0=1)
classifier_gauss = svm.SVC(kernel='rbf', gamma=0.2)

#training the support vector Machine Classifier
classifier_linear.fit(X_train, Y_train)
classifier_poly.fit(X_train, Y_train)
classifier_gauss.fit(X_train, Y_train)

model = classifier_linear

X_train_prediction = model.predict(X_train)
training_accuracy = accuracy_score(X_train_prediction, Y_train)
print(training_accuracy)
X_test_prediction = model.predict(X_test)
test_accuracy = accuracy_score(X_test_prediction, Y_test)
print(test_accuracy)

import joblib

# Save the model
joblib.dump(model, "heart_model.pkl")

# Save the corresponding scaler
joblib.dump(scaler_sim, "scaler_heart.pkl")

print("Model and scaler saved as 'heart_model.pkl' and 'scaler_heart.pkl'")
