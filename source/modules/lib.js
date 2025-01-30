//lib.js
export const defaultOptions = {
  blockReels: true,
  blockExplore: true,
  blockStories: true,
  blockPosts: true,
  blockSuggestedFollowers: true,
  blockForYouFeed: true,
  blockAIStudio: true,
  blockFooter: true,
  blockThreads: true
};

export const labelsArray = Object.keys(defaultOptions);

export const selectors = {
  main: "[role=main]",
  storyFeed: "div[role='menu']",
  posts: "article",
  postsLoader: "[data-visualcompletion='loading-state']",
  suggestedFollowers: "a[href*='/explore/people/']",
  nav: {
    direct: "a[href*='/direct/inbox/']",
    activity: "a[href*='/accounts/activity']",
    explore: "a[href='/explore/']",
    reels: "a[href='/reels/']",
  },
  AIStudio: "a[href='https://aistudio.instagram.com/?utm_source=ig_web_nav']",
  footer: "footer",
  threads: "a[href='https://www.threads.net/']"
};
export const urls = {
  base: "/",
  stories: "/stories",
  reels: "/reels",
  explore: "/explore",
  AIStudio: "https://aistudio.instagram.com/?utm_source=ig_web_nav",
  threads: "https://www.threads.net/?xmt="
};

export const hide = (element) => {
  if (element) {
    element.style.display = "none";
  }
};
