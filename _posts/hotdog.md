---
title: thoughts on refactoring
author: David Munro
description: How to build simple algorithms
path: the-hotdog-dilemma.html
---

### Catnip

*Are hotdogs sandwiches*? There are [many people](https://en.wikipedia.org/wiki/Weasel_word) who say they are, including:

Here's a *pretty good* function:

``` js
function greet(name){
  return "Hello " + name;
}
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum dolor erat, in interdum mauris dictum eu. Aenean placerat justo ultricies luctus finibus. Nullam laoreet vulputate porttitor. Nunc ex turpis, dignissim eget mauris a, efficitur ornare purus. Donec consectetur sem vitae consectetur malesuada. Aenean commodo ligula vel nulla scelerisque faucibus. Aliquam sed enim vel mauris facilisis dictum in ut lorem. Vestibulum vel congue ex, sit amet eleifend ex. Proin sit amet leo vitae eros aliquet semper. Sed sed cursus elit, et mattis nulla. Morbi gravida, tortor id pharetra molestie, dolor dolor tincidunt sapien, a consectetur enim augue et ante. Curabitur at libero metus. Sed vitae quam sed massa accumsan vestibulum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum dolor erat, in interdum mauris dictum eu. Aenean placerat justo ultricies luctus finibus. Nullam laoreet vulputate porttitor. Nunc ex turpis, dignissim eget mauris a, efficitur ornare purus. Donec consectetur sem vitae consectetur malesuada. Aenean commodo ligula vel nulla scelerisque faucibus. Aliquam sed enim vel mauris facilisis dictum in ut lorem. Vestibulum vel congue ex, sit amet eleifend ex. Proin sit amet leo vitae eros aliquet semper. Sed sed cursus elit, et mattis nulla. Morbi gravida, tortor id pharetra molestie, dolor dolor tincidunt sapien, a consectetur enim augue et ante. Curabitur at libero metus. Sed vitae quam sed massa accumsan vestibulum.