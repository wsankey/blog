title: Bubble Sort
date: 2015-09-18
categories: [programming]
tags: [FivePy]
podcast: FivePy
description: A short introduction to the bubble sort algorithm

<object type="application/x-shockwave-flash" data="https://huffduffer.com/flash/player.swf?soundFile=http://traffic.libsyn.com/fivepy/FivePy_-_Bubble_Sort.mp3" width="290" height="24"><param name="movie" value="https://huffduffer.com/flash/player.swf?soundFile=http://traffic.libsyn.com/fivepy/FivePy_-_Bubble_Sort.mp3" /><param name="wmode" value="transparent" /><audio src="http://traffic.libsyn.com/fivepy/FivePy_-_Bubble_Sort.mp3" controls preload="none"><a href="https://huffduffer.com/wsankey/263428">Bubble Sort on Huffduffer</a></audio></object>

[Interactive Python has a great rundown on implementing the bubble sort algorithm in python][1]

<pre><code class="language-python">
def bubbleSort(alist):
    for passnum in range(len(alist)-1,0,-1):
        for i in range(passnum):
            if alist[i]>alist[i+1]:
                temp = alist[i]
                alist[i] = alist[i+1]
                alist[i+1] = temp
</code></pre>
[<em>The source of this example.</em>][2]

[1]: http://interactivepython.org/runestone/static/pythonds/SortSearch/TheBubbleSort.html
[2]: http://interactivepython.org/runestone/static/pythonds/SortSearch/TheBubbleSort.html