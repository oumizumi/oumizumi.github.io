export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: 'microsoft-encarta',
    title: 'Microsoft Encarta',
    date: '2026-10-22',
    category: 'Ranting',
    excerpt: 'The old CD-ROM encyclopedia that got me hooked on history, aviation and computers.',
    content: `![Microsoft Encarta](/encarta.jpeg)

This is where it all started for me.

Before I knew what a rabbit hole was, I had Microsoft Encarta. An entire encyclopedia on a computer, with articles, photos, maps, audio clips and videos, all sitting offline on a disc. I would open it to look up one thing and somehow end up an hour later reading about something completely different.

That's how I fell into history: wars, empires and the odd stories behind them. It's how I got into aviation, reading about the early flying machines and how we went from a few seconds off the ground to crossing oceans. And it's a big part of why I like computers. It was the first time I realised a machine could hold a whole world of knowledge and let you wander through it.

I think a lot of my curiosity came from that one program. Still grateful for it.`,
  },
  
  {
    slug: 'earth',
    title: 'Earth',
    date: '2026-04-12',
    category: 'Ranting',
    excerpt: '',
    content: `![Earth](/Earth.png)


A beautiful oasis in the midst of a vast universe. I find it incredible that we just live on a rotating sphere of rock and water - and somehow, that's enough to sustain everything we have ever known or loved. It's a reminder of how small we are in the grand scheme of things, absolutely stunning!! P.S; You can see the aurora borealis if you look closely on the poles ;)`,
  },
];
