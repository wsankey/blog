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