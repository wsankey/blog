title: Insertion Sort Algorithm
date: 2015-09-28
categories: [programming, algorithms]
tags: [FivePy]
podcast: FivePy
description: Talking about the Insertion Sort

<object type="application/x-shockwave-flash" data="https://huffduffer.com/flash/player.swf?soundFile=http://traffic.libsyn.com/fivepy/FivePy_-_Insertion_Sort.mp3" width="290" height="24"><param name="movie" value="https://huffduffer.com/flash/player.swf?soundFile=http://traffic.libsyn.com/fivepy/FivePy_-_Insertion_Sort.mp3" /><param name="wmode" value="transparent" /><audio src="http://traffic.libsyn.com/fivepy/FivePy_-_Insertion_Sort.mp3" controls preload="none"><a href="https://huffduffer.com/wsankey/266698">FivePy - Insertion Sort on Huffduffer</a></audio></object>

[Again, Interactive Python is a great resource for algorithms implemented in python, especially insertion sort.][1]

<pre><code class="language-python">
def insertionSort(ourlist):
    for index in range(1, len(ourlist)):

        currentvalue = ourlist[index]
        position = index

        while position > 0 and ourlist[position-1]>currentvalue:
            ourlist[position]=ourlist[position-1]
            position = position-1

        ourlist[position] = currentvalue
ourlist = [90, 100, 20, 10]
insertionSort(ourlist)
print(ourlist)
</code></pre>


[1]: http://interactivepython.org/courselib/static/pythonds/SortSearch/TheInsertionSort.html
