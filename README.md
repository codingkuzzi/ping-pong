# _Ping-Pong Game_

#### _Web application that outputs a range of numbers depending on a given number, June, 9, 2017_

#### By _Anna Kuznetsova_

## Description

_This is a web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:
Numbers divisible by 3 are replaced with "ping"
Numbers divisible by 5 are replaced with "pong"
Numbers divisible by 15 are replaced with "ping-pong"
The program except only numbers. Input Example: "aaa". Output Example: error
The program counts from 1 to given number. Input Example: "2". Output Example: "1,2".
The program counts from 1 to given number and replaces it with "ping" if it's divisible by 3. Input Example: "3". Output Example: "1,2,'ping'".
The program counts from 1 to given number and replaces it with "pong" if it's divisible by 5. Input Example: "5". Output Example: "1,2,'ping',4,'pong'".
The program counts from 1 to given number and replaces it with "ping-pong" if it's divisible by 15. Input Example: "15". Output Example: "1,2,'ping',4,'pong','ping',7,8, 'ping','pong',11,'ping',13,14,'ping-pong'".
The program shows output results as unordered list. Input Example: "3". Output Example:
"- 1.
 - 2.
 - 3."
 The program has reset option to give a user ability to enter a new number and see new results over and over again. Click "Reset" button should empty the page from list of previous results.
_

## Setup/Installation Requirements

* Enter a number
* Click "Find out!" button



## Technologies Used

_Git,Atom,HTML,CSS,JS,JQ_

### License

*This webpage is licensed under the MIT license*

Copyright (c) 2017 **_Anna Kuznetsova_**

# Ping Pong Game
A web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:

* Numbers divisible by 3 are replaced with "ping"
* Numbers divisible by 5 are replaced with "pong"
* Numbers divisible by 15 are replaced with "ping-pong"
* A user should be able to enter a new number and see new results   over and over again.


|Behavior - Plain English|Input|Output|
|---|---|---|
|It can count up to provided number|"2"|"[1,2]"|
|Numbers divisible by 3 are replaced with "ping" |"3"|"ping"|
|Numbers divisible by 5 are replaced with "pong"|"10"|"pong"|
|Numbers divisible by 15 are replaced with "pong"|"15"|"ping-pong"|

## What's included
Within the repository you'll find the following directories and files:

```
ping_pong_game/
├── css/
│    ├── bootstrap.css
│    └── styles.css
├── js/
│    ├── jquery-3.2.1.js
│    └── script.js
├── index.html
└── README.md
```


## Technologies Used
* JavaScript
* jQuery
* Bootstrap
* Google Fonts

### License
Copyright 2017 Anna Timofeeva  
