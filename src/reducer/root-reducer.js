const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body:
        "Nostrud consequat laboris excepteur ipsum nostrud occaecat ut magna elit in dolore consequat anim anim.",
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body: "Ex dolore nostrud tempor occaecat sint sit do commodo duis.",
    },
    {
      id: "3",
      title: "a Helix Fossil was Found",
      body:
        "Laboris consequat enim esse occaecat exercitation ipsum ea non id est deserunt eiusmod nostrud duis.",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
