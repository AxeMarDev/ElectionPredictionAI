// Sigmoid function: maps z to a value between 0 and 1.
export const sigmoid = (z) => 
{
   return 1 / (Math.exp(-z) + 1);
}

//Hypothese function: Creates a prediction for logistic regression 
//input features [dataFrame (unknown for now) with parameters (unknown for now)]
//.reduce is a function used to reduce an array to a single value
//Calculates the expression Epsilon i = 0 to n (dataFrame(i) * theta(i))
export const hypothesis = (dataFrame, theta) => 
{
    return sigmoid(dataFrame.reduce((sum, dataFramei, i) => sum + dataFramei * theta[i], 0)) 
}

//Cost function: Measures how wrong our predictions are
//it uses actual values prediction, and predicted probabilities (h)
//cost function uses a special formula (cross-entropy loss formula) to calculate the difference between actual and predicted values.
export const costFunction = (prediction, h) =>
{
    return (-1 / prediction.length) * prediction.reduce((sum, predictioni, i) => sum + predictioni * Math.log(h[i]) + (1 - predictioni) * Math.log(1 - h[i]), 0);
}