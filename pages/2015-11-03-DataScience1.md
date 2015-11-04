title: Data Science Introduction
date: 2015-11-03
categories: [programming, python, data science]
tags: [FivePy]
podcast: FivePy
description: Thinking about doing data science

<object type="application/x-shockwave-flash" data="https://huffduffer.com/flash/player.swf?soundFile=http://traffic.libsyn.com/fivepy/FivePy_-_Data_Science_1.mp3" width="290" height="24"><param name="movie" value="https://huffduffer.com/flash/player.swf?soundFile=http://traffic.libsyn.com/fivepy/FivePy_-_Data_Science_1.mp3" /><param name="wmode" value="transparent" /><audio src="http://traffic.libsyn.com/fivepy/FivePy_-_Data_Science_1.mp3" controls preload="none"><a href="https://huffduffer.com/wsankey/275746">Data Science on Huffduffer</a></audio></object>

<strong>[The Data for Diplomas Challenge][1]</strong>

The Jupyter (aka ipython) notebook is a handy platform for working through data science -- cleaning (also known as munging), visualization, classification, and regression -- problems. Here I call the standard libraries for data science analyses, pandas, numpy, matplotlib, and scikit-learn and begin the process to examining the dataset. 
<img class="parent" src="{{ url_for('static', filename='media/datascience1_1.png') }}">

The aim of this analysis is to build a predictive model around the high school graduation rate, visualized below. It's handy to understand the distribution of your dependent variable. Here, the graduation rate (per school district) fluctuates with many school districts sitting at 50% and 95%. Note that if instead of a continuous variable ranging from 0-100 this was a problem where we were attempting to predict whether a particular student would graduate that would be a classification and not a regression analysis.
<img class="parent" src="{{ url_for('static', filename='media/datascience1_2.png') }}">

There are more than 580 variables. In the next segment we'll narrow in on a few key variables. I'm not fond of the 'kitchen-sink' approach that throws all of the variables in existence in the dataset at the problem. 
<img class="parent" src="{{ url_for('static', filename='media/datascience1_3.png') }}">

[1]: http://datafordiplomas.devpost.com/
