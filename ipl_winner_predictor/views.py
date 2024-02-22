from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponse,JsonResponse
import pickle
import pandas as pd
from django.views.decorators.csrf import csrf_protect
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

def index(request):
        return render(request,'index.html')
        # return HttpResponse('Hello')
        

@csrf_protect
def resultPredict(request):
        batting_team = request.GET.get('battingTeam')
        bowling_team = request.GET.get('bowlingTeam')
        target = int(request.GET.get('target'))
        score = int(request.GET.get('score'))
        wickets = int(request.GET.get('wickets'))
        overs = int(request.GET.get('overs'))
        selected_city = request.GET.get('city')
        
        # Loading Pipe And Passing Input values To Pipe Model
        pipe = pickle.load(open((os.path.join(BASE_DIR,'ipl_winner_predictor/pipe.pkl')), 'rb'))
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
                'crr': crr ,#[crr],
                'rrr': rrr,#[rrr],
                'result': [0]
        })

        result = pipe.predict_proba(input_df)
        win = (result[0][1])*100
        loss = (result[0][0])*100
        print(f'Win : { round(win)} %   And   Loss : { round(loss)} %')
        return JsonResponse({'win':win,'loss':loss})

def result(request):
        result=request.GET.get('result')
        win=request.GET.get('win')
        loss=request.GET.get('loss')
        wonTeamNo=request.GET.get('wonTeamNo')
        return render(request, 'index.html',{'result':result,'win':win,'loss':loss,'wonTeamNo':wonTeamNo})