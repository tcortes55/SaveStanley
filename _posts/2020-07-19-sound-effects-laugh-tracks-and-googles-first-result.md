---
layout: post
title: Sound effects, laugh tracks and Google's first result
date: 2020-07-19 10:00:00
---

In this blog, I frequently mention my game _Stanley's Day At The Office_, TV show [_The Office_](https://www.imdb.com/title/tt0386676/){:target="_blank"} and podcast [_Office Ladies_](https://officeladies.com/){:target="_blank"}, by Jenna Fischer and Angela Kinsey (who played Pam and Angela, respectively, in the TV show). There is one aspect that is relevant for all of these three types of media: sound.

One thing that I enjoy about sound in _The Office_ is the absence of a laugh track. I think laugh tracks make unfunny jokes even worse, and, even when they are placed over an actually funny joke, they break the comedy pace.

Also, laugh tracks can be simply quite annoying: check out this example from [How I Met Your Mother](https://www.imdb.com/title/tt0460649/){:target="_blank"} (which is a show I absolutely love, but that doesn't stop the repeating laugh track from annoying me). It is a montage from several episodes in season 2, where we can hear the same sound track being repeated over and over again.

<iframe width="560" height="315" src="https://www.youtube.com/embed/YguljAFU3Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="blog-asset"></iframe>

(The "HEE HEE HEE" is unbearable.)

But sound may also account for great jokes in TV shows. [_Community_](https://www.imdb.com/title/tt1439629/){:target="_blank"} (another one of my favorite shows ever) used the ["left the background music on"](https://tvtropes.org/pmwiki/pmwiki.php/Main/LeftTheBackgroundMusicOn){:target="_blank"} trope in a very funny way, in season 2's 18th episode, [Custody Law and Eastern European Diplomacy](https://www.imdb.com/title/tt1640861/){:target="_blank"}.

There's a scene where something bad is revealed and then we see the character's reaction to the sound of [losing horns](https://www.youtube.com/watch?v=CQeezCdF4mk){:target="_blank"}. Then, it is revealed that the sound is actually coming from a neighbor who plays jazz.

### Sound in _The Office_

_The Office_ is a [mockumentary](https://en.wikipedia.org/wiki/Mockumentary){:target="_blank"}, i.e. it depicts fictional events presented as a documentary. The characters are almost always aware of the presence of the fictional filming crew. This gives the writers and producers an opportunity to insert aspects of TV/film production into the plot. This happens several times, for example, when Jan is having a conversation with Michael on the phone and is unaware of the presence of other employees or filming crew, whilst Michael has put her on speaker phone.

You can read about the work of _The Office_'s sound engineer, Ben Patrick, in [this article](https://soundandpicture.com/2010/12/the-office-sound-mixing-with-ben-patrick/){:target="_blank"} from _Sound and Picture_ magazine.

### Game sound effects

In a simple endless runner game, sound is used in a much more subtle way. _Stanley's Day At The Office_ was developed by myself in my spare time, not by a huge company who can afford several teams for art, design, sound, marketing etc.

So, I decided to go simple and not put any background music. I didn't think I could find a free song which would actually fit the story and that would be free to use. Also, I normally disable game music because after some time I find the repetition to be quite annoying.

But sound effects trigerred by player's actions are actually an important part of gameplay. They are a relevant feedback to the player, so I did some research (i.e. googled "free sound effects" and entered the first result) and found [freesound.org](https://freesound.org/){:target="_blank"}, an amazing site with a collaborative database of audio snippets, sound effects, recordings etc., which came to be very useful to me.

In my game there are currently four sound effects:

- [Jumping](https://freesound.org/people/evan.schad/sounds/518130/){:target="_blank"}
- [Colliding with enemy](https://freesound.org/people/Raclure/sounds/483598/){:target="_blank"}
- [Picking up a collectable item](https://freesound.org/people/SomeGuy22/sounds/431329/){:target="_blank"}
- [Game over](https://freesound.org/people/myfox14/sounds/382310/){:target="_blank"}

(Special thanks to users evan.schad, Raclure, SomeGuy22 and myfox14 for making those available!)

I also used [p5.sound](https://github.com/processing/p5.js-sound){:target="_blank"} in order to handle the sound effects (I had mentioned p5.js library before in [this post]({% post_url 2020-07-18-first-steps-into-game-development %})).

So far, I think sound effects are good. As I add more features to the game, I will check for new sounds.