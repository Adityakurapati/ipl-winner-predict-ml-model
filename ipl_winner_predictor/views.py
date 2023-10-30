from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponse
import pickle
import pandas as pd
from django.views.decorators.csrf import csrf_protect

def index(request):
        return render(request,'index.html')
        # return HttpResponse('Hello')
        

@csrf_protect
def result(request):
        print("Done")
        # Collecting Data from Post Request 
        batting_team = request.POST['batting_team']
        bowling_team = request.POST['bowling_team']
        selected_city = request.POST['venue']
        target = request.POST['target']
        score = request.POST['score']
        wickets = request.POST['wickets']
        overs = request.POST['overs']
        target = request.POST['target']
        
        # Loading Pipe And Passing Input values To Pipe Model
        pipe = pickle.load(open('pipe.pkl', 'rb'))
        runs_left = target - score
        balls_left = 120 - (overs * 6)
        wickets_left = 10 - wickets
        crr = score / overs
        rrr = (runs_left * 6) / balls_left
        input_df = pd.DataFrame({
                'batting_team': [batting_team],
                'bowling_team': [bowling_team],
                'city': [selected_city],
                'runs_left': [runs_left],
                'balls_left': [balls_left],
                'wickets_left': [wickets_left],
                'total_runs_x': [score],
                'crr': [crr],
                'rrr': [rrr],
                'result': [0]
        })

        result = pipe.predict_proba(input_df)
        win = result[0][1]
        loss = result[0][0]

        # st.header('Batting : ' + str(round(win * 100)) + "%")
        # st.header("Bowling : " + str(round(loss * 100)) + "%")      
        # return render(request,'index.html')
        return render('Result')