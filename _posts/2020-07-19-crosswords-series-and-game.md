---
layout: post
title: Crosswords, series and game
date: 2020-07-19 09:00:00
---

Along all of the seasons of _The Office_, crossword puzzles came to be one of the defining traits of Stanley Hudson's character. Whether it's in a meeting in the conference room, in a sales call or even in his desk, he will frequently be looking down trying to solve his favorite type of puzzle, while not really paying much attention to the surroundings.

{% include in-post-ad.html %}

The writers took this really far on the cold opening of [Costume Contest](https://www.imdb.com/title/tt1725594/){:target="_blank"}, season 7 episode 6. I won't discuss its plot, so no need to worry about spoilers. But here's the video in case you want to watch it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iA89H8CgLTQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="blog-asset"></iframe>

### How game score works

Crossword puzzles are collectable items in the game. To understand how they fit into our storytelling, it's necessary to understand how does the game score works in general.

{% include image.html name="crossword.gif" caption="Crossword puzzle as a collectable item" alt="Animated gif of a magazine-like icon open in a page with a crossword puzzle" %}

_Stanley's Day At The Office_ is an [endless runner game]({% post_url 2020-07-18-first-steps-into-game-development %}). In this genre, it is conventional for the score to be some kind of measurement of the distance traveled by the main character.

I implemented a variation of that concept: there is a clock that starts at 9:00am, and time progresses as the character moves forward. When the clock gets to 5:00pm, the day is finished and there's a simple cut scene before starting the next day at 9:00am. When the character dies, the clock stops and the final score is calculated.

### How crossword puzzles fit into _Stanley's Day At The Office_ game

Time goes "faster" for Stanley when he is doing crossword puzzles. That concept was brought into the game: when the character picks up this item, the clock time is fast-forwarded. This increases the player's score indirectly, as the "travelled distance" is suddenly bumped. Besides that, crossword puzzles also have intrinsic score value (just as [pretzels]({% post_url 2020-07-18-initiation-the-office-s03e05-game-parallels %})), and this value is also added to the total score.

Currently, the fast-forward is instantaneous (the number of minutes is increased in a simple sum). In the future, I intend to modify this by adding an animation, making the scenario and obstacles move faster to give the impression of time moving faster.