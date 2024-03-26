import pandas as pd
import pickle
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import (RandomForestRegressor, GradientBoostingRegressor)
from sklearn.neural_network import MLPRegressor
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline


#import data from diferent website scrapers
#import data from csv files
import api_keys


def import_data():

    #import data from subfiles     

    return alldata


def join_files():

    #joins data based on common keys, like state, disctrict, year, and candidate's last name.

    return alldata3


def make_model_data(dataframe):

    #prepare the dataset for modeling by selecting relevant features and handling missing values

    return model_data


if __name__ == "__main__":

    beforepickle = False #before pickle is called when you need to import data
    afterpickle = True   #after pickle is called when you already imported the data, saves you from importing multiple times. 

    if beforepickle == True:
        census_key = api_keys.census_api
        alldata = import_data()
        pickle.dump( alldata, open( "save.p", "wb" ) )

    if afterpickle == True:
        alldata = pickle.load( open( "save.p", "rb" ) )

        model_data = make_model_data(alldata)

        X = model_data.drop('vote_count', axis=1)
        y = model_data['vote_count']
        X_train, X_test, y_train, y_test = train_test_split(X,y)

        linear_model = LinearRegression()           #four different regression models, LR works best with 2 variables
        RF_model = RandomForestRegressor()          #uses averaging to improve the predictive accuracy and control over-fitting.
        GBR_model = GradientBoostingRegressor()     #builds an additice model in a forward stage-wise, allows for optimization of arbitrary differentiable loss functions
        MLP_model = MLPRegressor()                  #optimizes the squared error using LBFGS or stochastic gradient descent.

        pipeline = make_pipeline(LinearRegression())

        pipeline.fit(X_train, y_train)

        linear_model.fit(X_train, y_train)
        lin_pred = linear_model.predict(X_test)
        
        RF_model.fit(X_train, y_train)
        RF_model.score
    
        GBR_model.fit(X_train, y_train)


        pipeline.fit(X_train, y_train)
        thescore = pipeline.score(X_test)


        predicted_train = pipeline.fit(X_train).predict(X_train)
        predicted_test = pipeline.predict(X_test)