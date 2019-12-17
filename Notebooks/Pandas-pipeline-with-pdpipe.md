# Build pipelines with Pandas using “pdpipe”
### We show how to build intuitive and useful pipelines with Pandas DataFrame using a wonderful little library called pdpipe.

## [Dr. Tirthajyoti Sarkar](https://www.linkedin.com/in/tirthajyoti-sarkar-2127aa7/), Fremont, CA


### Note
This article was originally published on **Medium**, [here](https://towardsdatascience.com/https-medium-com-tirthajyoti-build-pipelines-with-pandas-using-pdpipe-cade6128cd31?). Also published on **KDNuggets** [here](https://www.kdnuggets.com/2019/12/build-pipelines-pandas-pdpipe.html).

---

## Introduction
Pandas is an amazing library in the Python ecosystem for data analytics and machine learning. **They form the perfect bridge between the data world, where Excel/CSV files and SQL tables live, and the modeling world** where Scikit-learn or TensorFlow perform their magic.

**A data science flow is most often a sequence of steps** — datasets must be cleaned, scaled, and validated before they can be ready to be used by that powerful machine learning algorithm.

These tasks can, of course, be done with many single-step functions/methods that are offered by packages like Pandas but a more elegant way is to use a pipeline. **In almost all cases, a pipeline reduces the chance of error and saves time by automating repetitive tasks**.

In the data science world, great examples of packages with pipeline features are — [dplyr in R language](https://dplyr.tidyverse.org/), and [Scikit-learn in the Python ecosystem](https://scikit-learn.org/stable/modules/compose.html).

Pandas also offer a `.pipe` method which can be used for similar purposes with user-defined functions. However, in this article, we are going to discuss a wonderful little library called **`pdpipe`**, which specifically addresses this pipelining issue with Pandas DataFrame.

## Pipelining with Pandas
The example [Jupyter notebook can be found here in my Github repo](https://github.com/tirthajyoti/Machine-Learning-with-Python/blob/master/Pandas%20and%20Numpy/pdpipe-example.ipynb). Let’s see how we can build useful pipelines with this library.

### The dataset
For the demonstration purpose, we will use a [dataset of US Housing prices](https://www.kaggle.com/vedavyasv/usa-housing) (downloaded from Kaggle). We can load the dataset in Pandas and show its summary statistics as follows,

