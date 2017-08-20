/* Write your CSS styles here */

body {
  background: url("https://cl.ly/image/1G0h0N030P0b/Skillcrush_Mountains.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  border-radius: 3px;
}

.animated { 
    -webkit-animation-duration: 4s; 
    animation-duration: 4s; 
    -webkit-animation-fill-mode: both; 
    animation-fill-mode: both; 
    -webkit-animation-timing-function: ease-in; 
    animation-timing-function: ease-in; 
} 

@-webkit-keyframes fadeIn { 
    0% {opacity: 0;} 
    100% {opacity: 1;} 
} 
@keyframes fadeIn { 
    0% {opacity: 0;} 
    100% {opacity: 1;} 
} 
.fadeIn { 
    -webkit-animation-name: fadeIn; 
    animation-name: fadeIn; 
}

#modalpopup {
  background: rgba(255, 255, 255, 0.2);
  width: 350px;
  height: 340px;
  border-radius: 8px;
}

#headline {
  background: #f7d49f;
  font-family: 'Open Sans';
  color: #ffffff;
  text-align: right;
  font-weight: bold;
}

h1 {
  font-family: 'Raleway';
}

p {
  font-family: 'Raleway';
  font-size: 14px;
  font-weight: light;
}
/* Sprite code Begin */

a:link {
  color: #ed622b;
}

a:visited {
  color: #b04173;
}

#navlist {
  list-style-type: none;
  position: relative;
}

#navlist li {
  float: left;
  margin: 0px px 0px 0px;
  width: 32px;
  height: 31px;
  display: block;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}

#navlist li,
#navlist a {
  display: block;
}

#instagram {
  left: 0px;
  width: 30px;
  background: url('http://skillcrush.com/static/resume-two/images/social.png') 0 0;
}

#instagram:hover {
  background: url('http://skillcrush.com/static/resume-two/images/social.png') 0 -30px;
}

#twitter {
  left: 0px;
  width: 32px;
  background: url('http://skillcrush.com/static/resume-two/images/social.png') -31px 0;
}

#twitter:hover {
  background: url('http://skillcrush.com/static/resume-two/images/social.png') -31px -30px;
}

#dribble {
  left: 0px;
  width: 30px;
  background: url('http://skillcrush.com/static/resume-two/images/social.png') -65px 0;
}

#dribble:hover {
  background: url('http://skillcrush.com/static/resume-two/images/social.png') -65px -30px;
}

#footer {
  position: fixed;
  right: 0;
  bottom: 0px;
  left: 0;
  text-align: right;
  color: white;
}