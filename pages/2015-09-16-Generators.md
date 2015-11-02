title: Generators
date: 2015-09-16
categories: [programming]
tags: [FivePy]
podcast: FivePy
description: Exploring generators in python

<object type="application/x-shockwave-flash" data="https://huffduffer.com/flash/player.swf?soundFile=http://traffic.libsyn.com/fivepy/FivePy_-_Generators.mp3" width="290" height="24"><param name="movie" value="https://huffduffer.com/flash/player.swf?soundFile=http://traffic.libsyn.com/fivepy/FivePy_-_Generators.mp3" /><param name="wmode" value="transparent" /><audio src="http://traffic.libsyn.com/fivepy/FivePy_-_Generators.mp3" controls preload="none"><a href="https://huffduffer.com/wsankey/263426">Generators on Huffduffer</a></audio></object>

This episode of FivePy could not have happened without Yassob Ullah Khalid's chapter on Generators found within his recently released 'Intermediate Python' [found here][1]. Thank you Yasoob. 

[<strong>The</strong> book on design patterns by the gang of four.][2] 

<pre><code class="language-python">
def fibon(n):
    a = b = 1
    result = []
    for i in range(n):
        result.append(a)
        a, b = b, a + b
    return result
</code></pre>
<em>[See Yasoob's chapter on generators for this example and much more.][3]</em>


[1]: https://github.com/yasoob/intermediatePython
[2]: https://www.google.com/shopping/product/15906596306797735826?sourceid=chrome-psyapi2&ion=1&espv=2&ie=UTF-8&q=design+patterns+gang+of+four&oq=design+patterns+gang+of+four&aqs=chrome.0.0l6.4402j0j4&sa=X&ved=0CIIBELkkahUKEwinkKOa_4bIAhUE0h4KHcDaCMU
[3]: https://github.com/yasoob/intermediatePython/blob/master/generators.rstama