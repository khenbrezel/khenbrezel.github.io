window.galleryGroups = [
  {
    id: "missing",
    items: [
      {
        src: "assets/images/placeholder-works/missing.jpg",
        title: "Missing",
        size: "24 x 30 in",
      },
    ],
  },
  {
    id: "camouflage",
    items: [
      {
        src: "assets/images/placeholder-works/camouflage.jpg",
        title: "Camouflage",
        size: "24 x 30 in",
      },
    ],
  },
  {
    id: "venus",
    items: [
      {
        src: "assets/images/placeholder-works/venus.jpg",
        title: "Venus",
        size: "30 x 24 in",
      },
    ],
  },
  {
    id: "us-diptych",
    items: [
      {
        src: "assets/images/placeholder-works/us-diptych.jpg",
        title: "Us (Diptych)",
        size: "16 x 12 in",
      },
    ],
  },
  {
    id: "urban-hermit",
    items: [
      {
        src: "assets/images/placeholder-works/urban-hermit.jpg",
        title: "Urban Hermit",
        size: "36 x 55 in",
      },
    ],
  },
  {
    id: "middleman-triptych",
    items: [
      {
        src: "assets/images/placeholder-works/middleman-triptych.jpg",
        title: "Middleman (Triptych)",
        size: "48 x 40 in",
        scale: 0.98,
      },
    ],
  },
  {
    id: "blues",
    items: [
      {
        src: "assets/images/placeholder-works/blues.jpg",
        title: "Blues",
        size: "40 x 30 in",
      },
    ],
  },
  {
    id: "garden-on-the-hill-diptych",
    items: [
      {
        src: "assets/images/placeholder-works/garden-on-the-hill-diptych.jpg",
        title: "The Garden On The Hill (Diptych)",
        size: "24 x 60 in",
        ratio: 1.605,
        scale: 1.16,
      },
    ],
  },
  {
    id: "waiting-room-triptych",
    items: [
      {
        src: "assets/images/placeholder-works/waiting-room-triptych.jpg",
        title: "Waiting Room (Triptych)",
        size: "10 x 36 in",
        ratio: 2.468,
        scale: 1.04,
      },
    ],
  },
  {
    id: "chrysanthemum",
    items: [
      {
        src: "assets/images/placeholder-works/chrysanthemum.jpg",
        title: "Chrysanthemum",
        size: "12 x 10 in",
      },
    ],
  },
  {
    id: "rapids",
    items: [
      {
        src: "assets/images/placeholder-works/rapids.jpg",
        title: "Rapids",
        size: "24 x 36 in",
      },
    ],
  },
  {
    id: "gateway",
    items: [
      {
        src: "assets/images/placeholder-works/gateway.jpg",
        title: "Gateway",
        size: "16 x 20 in",
      },
    ],
  },
  {
    id: "no-mans-land",
    items: [
      {
        src: "assets/images/placeholder-works/no-mans-land.jpg",
        title: "No Man's Land",
        size: "24 x 36 in",
      },
    ],
  },
  {
    id: "dololunch",
    items: [
      {
        src: "assets/images/placeholder-works/dololunch.jpg",
        title: "Dololunch",
        size: "30 x 24 in",
      },
    ],
  },
  {
    id: "fields-of-abstraction",
    items: [
      {
        src: "assets/images/placeholder-works/fields-of-abstraction.jpg",
        title: "Fields of Abstraction",
        size: "40 x 30 in",
      },
    ],
  },
  {
    id: "tadzio-triptych",
    items: [
      {
        src: "assets/images/placeholder-works/tadzio-triptych.jpg",
        title: "Tadzio (Triptych)",
        size: "12 x 36 in",
        ratio: 3.005,
        scale: 1.06,
      },
    ],
  },
  {
    id: "at-home",
    items: [
      {
        src: "assets/images/placeholder-works/at-home.jpg",
        title: "At Home",
        size: "12 x 16 in",
      },
    ],
  },
];

window.dimensionsBySrc = {
  "assets/images/placeholder-works/missing.jpg": [24, 30],
  "assets/images/placeholder-works/camouflage.jpg": [24, 30],
  "assets/images/placeholder-works/venus.jpg": [30, 24],
  "assets/images/placeholder-works/us-diptych.jpg": [16, 12],
  "assets/images/placeholder-works/urban-hermit.jpg": [36, 55],
  "assets/images/placeholder-works/middleman-triptych.jpg": [48, 40],
  "assets/images/placeholder-works/blues.jpg": [40, 30],
  "assets/images/placeholder-works/garden-on-the-hill-diptych.jpg": [60, 24],
  "assets/images/placeholder-works/waiting-room-triptych.jpg": [36, 10],
  "assets/images/placeholder-works/chrysanthemum.jpg": [12, 10],
  "assets/images/placeholder-works/rapids.jpg": [24, 36],
  "assets/images/placeholder-works/gateway.jpg": [16, 20],
  "assets/images/placeholder-works/no-mans-land.jpg": [24, 36],
  "assets/images/placeholder-works/dololunch.jpg": [30, 24],
  "assets/images/placeholder-works/fields-of-abstraction.jpg": [40, 30],
  "assets/images/placeholder-works/tadzio-triptych.jpg": [36, 12],
  "assets/images/placeholder-works/at-home.jpg": [12, 16],
};

window.buildMeta = (item) => {
  const bits = [item.size].filter(Boolean);
  return bits.join(" | ");
};
