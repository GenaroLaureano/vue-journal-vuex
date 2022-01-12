// export default () => ({

// });

export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Hola esats easdjkasndsjjhsdafdjafd fadsfsadfsadff',
      picture: null, // https:
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Hola esats easdjkasndsjjhsdafdjafd fadsfsadfsadff',
      picture: null, // https:
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: 'Hola esats easdjkasndsjjhsdafdjafd fadsfsadfsadff',
      picture: null, // https:
    },
  ],
});
