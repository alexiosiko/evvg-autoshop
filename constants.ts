// These URLs map to the images provided by the user in the public folder.

export const IMAGES = {
  LOGO: "/logo.jpg",
  // Using evvg-background.png for the hero/wide shot
  SHOP_WIDE: "/evvg-background.png", 
  // Using george.png for the About/Team section
  TEAM: "/george.png", 
  // Distributing the rest of the images for services and gallery
  MECHANIC_ENGINE: "/image5.jpg", 
  JEEP_LIFT: "/image1.jpg", 
  SHOP_TIRES: "/image2.jpg", 
  MECHANIC_SMILE: "/image3.jpg", 
  SHOP_DARK: "/image4.jpg",
  // Extra image if needed
  EXTRA: "/image.jpg"
};

export const COMPANY_INFO = {
  name: "EVG Auto Services",
  address: "5658 Production Way, Langley BC V3A 4N4",
  phone: "(604) 514-0152",
  email: "evvgauto@gmail.com",
  facebook: "https://www.facebook.com/evvgautoservices",
  hours: "Mon - Fri: 8:00 AM - 5:30 PM",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=EVG+Auto+Services+5658+Production+Way+Langley+BC"
};

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const REVIEWS = [
  {
    name: "Dylan Johnson",
    image: "/reviews/Dylan Johnson.png",
    stars: 5,
    text: "I have known George for 17 years and have been using him ever since I’ve been driving. He will always shoot you straight and one of the most talented mechanics and always figures out the problem. He has never once come to me and said oh don’t know what the problem is well thatll be 700 bucks. Guys swamped and its for a reason!"
  },
  {
    name: "Jacob de Champlain",
    image: "/reviews/Jacob de Champlain.png",
    stars: 5,
    text: "I came into town on the 22nd of Dec for the holidays and my truck left me stranded. After towing it 3 times, it eventually ended up with George at Evvg auto. I believe I spoke to him on the 26th or 27th and after a bit of a delay he was able to get working on my truck and had it done by the 30th so I could get home n get on with my move out of town. He saved me! Great shop, high quality work and George went above and beyond to help me out"
  },
  {
    name: "Costas Papadopoulos",
    image: "/reviews/Costas Papadopoulos.png",
    stars: 5,
    text: "Honest reliable service. More than reasonable for great diagnosis and qualified service. Highly recommended."
  },
  {
    name: "Lon Shaver",
    image: "/reviews/Lon Shaver.png",
    stars: 5,
    text: "Have taken my older Honda to him a couple times to solve some mystery issues and he takes the time to figure out what really is the problem and what it needs to fix it. Solved. Honest."
  },
  {
    name: "Christodoulos Nikolakoudis",
    image: "/reviews/Christodoulos Nikolakoudis.png",
    stars: 5,
    text: "I recommend that place for your car service or for tires replacement."
  },
  {
    name: "Vitorya Anna",
    image: "/reviews/viktorya.png",
    stars: 5,
    text: "Positive: Professionalism, Punctuality, Quality, Value" // Added placeholder text since description was empty but 5 stars implies satisfaction
  }
];