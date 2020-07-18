---
layout: post
title: First steps into game development
---

Every person who is even remotely involved with game development must have heard of Unity at this point. That was my case, but I had never used it. And I didn't use it for _Stanley's Day At The Office_. As I mentioned in the [introduction]({ % post_url 2020-07-17-my-the-office-inspired-game % }), I was following Alura's free mini course in game development. The idea in this course was to build a game from scratch, understanding and implementing the basic mechanics, so we could grasp these concepts instead of dealing only with high level stuff. Unity is great, and [Alura has courses on that subject too](https://www.alura.com.br/formacao-jogos-unity), but that wasn't our goal here.

## p5.js library, animation and game mechanics

We don't want to abstract too much of the implementation, but we also don't have to reinvent the wheel. So, for this game we used [p5.js](https://p5js.org/), a Javascript library specific for animation.

I will not delve too much into specifics, afterall my goal here is not to reproduce the course lectures. The instructors had a storyline for their game, but suggested everyone to come up with their own. I chose to develop this _Office_ storyline that [I had dreamt about a week before]({ % post_url 2020-07-17-my-the-office-inspired-game % }).


### Endless runner game

Endless runner games are those in which the player character is continuously moving forward. Well, at least that's the impression the player gets. In our case, the character is actually always in the same position, and the scenario, enemies and items move towards the player to give the illusion of movement. More ellaborated games have a procedurally generated world. At _Stanley's Day At The Office_, however, the scenario is actually one static image whose width is twice the value of the game screen; this image repeats after itself.

### Character animation

The character sprites are set in a .png file with transparent background.

{% include image.html name="stanley-sprites.png" caption="Stanley sprites" alt="Sprites of character Stanley. There are four images, each one with a different position of character's legs in order to give the impression of walking" %}

We define in a matrix the positions of each sprite inside the image, and use p5.js to loop through these positions, thus animating the character.

{% include image.html name="stanley-animated.gif" caption="Stanley walking" alt="Animated gif of character Stanley, looping through sprites of previous image to give the impression of movement." %}

The same process was used to animate the other characters.