const intro = 
    [
      "Champ,",
      "Fact:",
      "Everybody says",
      "Dang...",
      "Check it:",
      "Just saying...",
      "Superstar,",
      "Tiger,",
      "Self,",
      "Know this:",
      "News alert:",
      "Girl,",
      "Ace,",
      "Excuse me but",
      "Experts agree:",
      "In my opinion,",
      "Hear ye, hear ye:",
      "Okay, listen up:",
    ]

const subject = [
      "the mere idea of you",
      "your soul",
      "your hair today",
      "everything you do",
      "your personal style",
      "every thought you have",
      "that sparkle in your eye",
      "your presence here",
      "what you got going on",
      "the essential you",
      "your life's journey",
      "that saucy personality",
      "your DNA",
      "that brain of yours",
      "your choice of attire",
      "the way you roll",
      "whatever your secret is",
      "all of y'all",
    ] 

const praise = [
      "has serious game,",
      "rains magic,",
      "deserves the Nobel Prize,",
      "raises the roof,",
      "breeds miracles,",
      "is paying off big time,",
      "shows mad skills,",
      "just shimmers,",
      "is a national treasure,",
      "gets the party hopping,",
      "is the next big thing,",
      "roars like a lion,",
      "is a rainbow factory,",
      "is made of diamonds,",
      "makes birds sing,",
      "should be taught in school,",
      "makes my world go 'round",
      "is 100% legit,",
    ]

const closing = [
      "24/7.",
      "can I get an amen?",
      "and that's a fact.",
      "so treat yourself.",
      "you feel me?",
      "that's just science.",
      "would I lie?",
      "for reals.",
      "mic drop.",
      "you hidden gem.",
      "snuggle bear.",
      "period.",
      "now let's dance.",
      "high five.",
      "say it again!",
      "according to CNN.",
      "so get used to it.",
    ]
  

  let textArea = document.querySelector('#text-area')

  generateRandom = (max) => {
    return Math.floor(Math.random() * max );
  }

  textArea.innerHTML = `${intro[generateRandom(intro.length)]} ${subject[generateRandom(subject.length)]} 
  ${praise[generateRandom(praise.length)]} ${closing[generateRandom(closing.length)]}`