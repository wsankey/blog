title: Arguments and Keyword Arguments
date: 2015-09-27
categories: [programming, python]
tags: [FivePy]
podcast: FivePy
description: Thinking about *args and **kwargs

<object type="application/x-shockwave-flash" data="https://huffduffer.com/flash/player.swf?soundFile=http://traffic.libsyn.com/fivepy/FivePy_-_Args_and_Kwargs.mp3" width="290" height="24"><param name="movie" value="https://huffduffer.com/flash/player.swf?soundFile=http://traffic.libsyn.com/fivepy/FivePy_-_Args_and_Kwargs.mp3" /><param name="wmode" value="transparent" /><audio src="http://traffic.libsyn.com/fivepy/FivePy_-_Args_and_Kwargs.mp3" controls preload="none"><a href="https://huffduffer.com/wsankey/266697">FivePy - Args and Kwargs on Huffduffer</a></audio></object>

Folks who are new to python may initially be confused about default arguments, keyword arguments, and the difference between the two. So
both are used in function calls and both supply or help supply the parameters essential to the function. Ok, let's think about this a bit more concretely with the following example that intends to show several cases:

<pre><code class="language-python">
def halloween(candy1, candy2, halloween="Oct 31", *args, **kwargs):
	print "Halloween is on {} and I want {} and {}".format(halloween, candy1, candy2)
	
	for arg in args:
		print "Also, I want {} of each".format(arg)
	
	for key,value in kwargs.items():
		print "To wash it down I want {} {}".format(value, key)

halloween('dots', 'gummi bears')
halloween(candy2='fun dip', candy1='hot tomales', halloween='Oct 20')
halloween('snickers', 'm&ms', "October 31", 4)
halloween('snickers', 'm&ms', sprite=1)
</code></pre>



[This Reddit thread has a great discussion on arguments vs. keyword arguments][1]

[1]: http://interactivepython.org/courselib/static/pythonds/SortSearch/TheInsertionSort.html
