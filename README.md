JavaScript for .NET Developers
===============================
Code and slides for talks to .NET developers on what to expect when developing JavaScript client apps.

## JavaScript for .NET Developers talk ##
The "Bell_ASPConnections_AJS322_NetToJS.pptx" PowerPoint slide deck is from a talk Ward gave at the Fall 2012 Dev Connections. The JavaScript4DotNet solution is the accompanying code.

There are at least two ways to demo the code: in VS/PageInspector and in Chrome/Sublime. They are described below

## JavaScript Toolbox talk ##
The "Bell_ASPConnections_AJS321_JsToolbelt.pptx" PowerPoint slide deck is from a talk Ward gave at the Fall 2012 Dev Connections. Ward showed many code samples; only a few are here.

The Knockout samples are "basicKo.html" and "basicKoComputed.html" in the "JavaScript4DotNet" folder. The QUnit sample is in "QUnitIntro".

## Data for a JavaScript Client ##
The "Bell_ASPConnections_SPAwithBreeze_APA306.pptx" PowerPoint slide deck is from a talk Ward gave at the Fall 2012 Dev Connections. That talk was titled "SPA Data with Breeze" - a poor choice because so few knew attendees know what "SPA" or "Breeze" are. "Data for a JavaScript Client" would have made more sense to more people.

This repository does not contain any code samples from this talk. Ward demonstrated SPA data and Breeze with the following resources:

- The Breeze NuGet package that generates a sample Breeze app
- Code Camper
- Code Camper Jumpstart
- Breeze DocCode (the Breeze automated teaching tests)


## Demo'ing JavaScript4DotNet with Page Inspector ##
At Dev Conn, Ward alternated between slides and the running inside Visual Studio 2012 with PageInspector. The results display in PageInspector window on the left while the corresponding JS file is displayed in a text editor window on the right.

He made changes to the code (e.g., moved the PAUSE comment down to reveal more running code) and hit [Ctrl-Alt-Enter] to both save the file and refresh the PageInspector window.

Think of it as a poor man's jsFiddle. Why? If was all in jsFiddle originally. But wireless failed at the conference - no wireless, no jsFiddle.

Here's what it looks like when in the middle of a change:

![JS4NetDev running in PageInspector](https://raw.github.com/wardbell/js4netdev/master/EditInVSwithPageInspector.png)

## Demo'ing JavaScript4DotNet with Chrome and Sublime ##
Ward later discovered that this works very well, perhaps better than Page Inspector. While it is difficult to make changes from within Chrome, it was easy to position a Chrome browser window on the left and a SublimeText 2 editor window on the right as seen in this screenshot:

![JS4NetDev running in Chrome+Sublime](https://raw.github.com/wardbell/js4netdev/master/EditInSublime.png)

Start by showing "index.html" in Chrome.

Toggle the Sublime folder pane (side bar) on/off with [Ctrl-K,Crtrl-B];

The update sequence: make change in Sublime, save, refresh browser. This turns out to be pretty darned fast.

Best of luck with your presentation.