from django.http import HttpResponse
from django.shortcuts import render
from random import choice


import nltk.stem
stm= nltk.stem.SnowballStemmer('english')

file1=open('sad')
str=file1.read()
sad=str.split(', ')


file1=open('anger')
str=file1.read()
anger=str.split(', ')


file1=open('happy')
str=file1.read()
happy=str.split(', ')


file1=open('fear')
str=file1.read()
fear=str.split(', ')

file1=open('love')
str=file1.read()
love=str.split(', ')

file1=open('apathetic')
str=file1.read()
apathetic=str.split(', ')

file1=open('excite')
str=file1.read()
excite=str.split(', ')


file1=open('embarrassed')
str=file1.read()
embarrassed=str.split(', ')

file1=open('question')
str=file1.read()
question=str.split(', ')

lidic={'s':sad,
'a':anger,
'h':happy,
'f':fear,
'l':love,
'ap':apathetic,
'e':excite,
'em':embarrassed,
'q':question}

dic={'s':'sad',
'a':'angry',
'h':'happy',
'f':'fear',
'l':'loved',
'ap':'irritated',
'e':'excited',
'em':'embarrassed',
'q':'curious'}

freq={'s':0,
'a':0,
'h':0,
'f':0,
'l':0,
'ap':0,
'e':0,
'em':0,
'q':0}


def search_form(request):
	return render(request, 'index.html', {'books':0,'mood':'ok','song':'ok'})


def classify(request):
	freq={'s':0,
	'a':0,
	'h':0,
	'f':0,
	'l':0,
	'ap':0,
	'e':0,
	'em':0,
	'q':0}
	text=request.GET['qq'].lower()
	sen=text.split(' ')

	for words in sen:
		word=stm.stem(words)
		for x in lidic:
			if word in lidic[x]:
				freq[x]+=1
	x=max(freq,key=freq.get)
	print(freq)
	if freq[x]==0:
		emo='alright'
		file1=open('mix/happy')
		str=file1.read()
		lili=str.split(', ')
		return render(request, 'index.html', {'books':1,'mood':emo,'song':choice(lili)})
	
	else:
		emo=dic[x]
		file1=open('mix/'+dic[x])
		str=file1.read()
		lili=str.split(', ')		
		return render(request, 'index.html', {'books':1,'mood':emo,'song':choice(lili)})


   