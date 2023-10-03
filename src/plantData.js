const plantProducts = [
  {
    name: "Monstera",
    id: "M1",
    price: 25,
    description:
      "The monstera, nicknamed the Swiss cheese plant because of its unique appearance, belongs to the arum (Araceae) family, which finds its roots in the American tropics. Wild monsteras are dispersed across the Caribbean, Florida, Asia, and Australia, as well as western Mediterranean areas like Portugal and Morocco. There are over 50 varieties of this climbing vine, but Monstera deliciosa and rhaphidophora tend to be the most popular indoor varieties",
    image:
      "https://cdn1.angusandceleste.com/wp-content/uploads/2019/04/09160136/Monstera-Angus-Celeste-Blog.jpg",
    quantity: 20,
    alt: "Monstera Plant."
  },
  {
    name: "Arrow Head",
    id: "A1",
    price: 15,
    description:
      "The arrowhead plant is a fast-growing, pretty, trailing or climbing vine. The simple arrow-shaped leaves vary in hue depending on their age, ranging from dark green and white to lime green and bright pink. Arrowhead vine grows best as a houseplant in bright, indirect light, well-draining potting soil, and warm, humid conditions",
    image:
      "https://www.ohiotropics.com/wp-content/uploads/2022/10/syngonium-white-butterfly-997x1024.jpg.webp",
    quantity: 10,
    alt: "Arrow Head Plant."
  },
  {
    name: "Rubber Plant",
    id: "R1",
    price: 30,
    description:
      "Ficus elastica, also known as the rubber plant, is an unusual-looking varietal native to the tropics of Southeast Asia. This long-lived plant boasts oversized, oval-shaped leaves with a rich emerald hue and can grow quickly, reaching up to 100 feet tall in its natural habitat. It's not the easiest plant for beginners because it's not very forgiving if it doesn't get the care it needs. However, it's more often grown indoors as a houseplant, where it can be planted and cared for year-round, and its size is kept more manageable.",
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Large-Rubber-Tree_Large_Pallas_Green_Variant.jpg?v=1694485161&width=400",
    quantity: 5,
    alt: "Rubber Plant."
  },
  {
    name: "Golden Pothos",
    id: "G1",
    price: 10,
    description:
      "Pothos (Epipremnum aureum) is a tropical vine native to the Solomon Islands in the South Pacific, but you probably know it best seen trailing off of shelves and desks. Pothos is commonly grown as a houseplant, boasting pointed, heart-shaped green leaves that are sometimes variegated with white, yellow, or pale green striations.",
    image:
      "https://flipfit-cdn.akamaized.net/flipfit-prod-tmp/items/1695238621511-930366153WHI1V1.thumb.webp",
    quantity: 15,
    alt: "Golden Pothos Plant."
  },
  {
    name: "Rubber Plant (Tineke)",
    id: "R2",
    price: 18,
    description:
      "The Rubber Plant (Ficus elastica Tineke) is a stunning variation of the classic Rubber Plant. It features attractive variegated leaves with creamy-white streaks. This indoor plant not only adds a touch of elegance but also purifies the air in your home.",
    image: "https://mygardenlife.com/wp-content/uploads/2022/12/5426_26-1.jpg",
    quantity: 8,
    alt: "Rubber Plant Tineke"
  },
  {
    name: "Fern",
    id: "B1",
    price: 13,
    description:
      "The Boston Fern (Nephrolepis exaltata) is a classic choice for indoor greenery. With its delicate, feathery fronds, it adds a touch of elegance to any room. Boston Ferns thrive in moderate to high humidity and indirect light.",
    image:
      "data:image/jpeg;base64,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",
    quantity: 10,
    alt: "Boston Fern Plant."
  },
  {
    name: "Peace Lily",
    id: "P1",
    price: 14,
    description:
      "The Peace Lily (Spathiphyllum) is a graceful indoor plant with lush, dark green leaves and elegant white blooms. It's known for its air-purifying properties and symbolizes peace and tranquility.",
    image:
      "https://www.dahingplants.com/cdn/shop/products/Canon_EOS_80D-_top_left-593026004158-9379-20210924-101922.jpg?v=1634916928",
    quantity: 18,
    alt: "Peace Lily Plant."
  },
  {
    name: "Aloe Vera",
    id: "A2",
    price: 9,
    description:
      "Aloe Vera is a succulent plant known for its medicinal properties. Its gel is used for various skin and health benefits. It's easy to care for and adds a touch of green to your home.",
    image:
      "https://www.michlers.com/cdn/shop/products/aloemedberg.jpg?v=1674508796",
    quantity: 22,
    alt: "Aloe Vera Plant."
  },
  {
    name: "Snake Plant",
    id: "S1",
    price: 12,
    description:
      "Snake plant (Sansevieria trifasciata) is a hardy and low-maintenance indoor plant known for its upright, sword-like leaves. It's an excellent air purifier and can thrive in a variety of lighting conditions, making it a popular choice for beginners.",
    image:
      "https://www.thespruce.com/thmb/JToiCM2g8ssRFBOyIvvB_G5pMDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plant-care-overview-1902772-04-d3990a1d0e1d4202a824e929abb12fc1-349b52d646f04f31962707a703b94298.jpeg",
    quantity: 20,
    alt: "Snake Plant."
  },
  {
    name: "Fiddle Leaf Fig",
    id: "F1",
    price: 25,
    description:
      "The fiddle leaf fig (Ficus lyrata) is a trendy indoor plant with large, violin-shaped leaves. It's a favorite among interior designers and plant enthusiasts for its elegant appearance.",
    image:
      "https://plantsexpress.com/cdn/shop/products/Fiddle-Leaf-Fig-2.jpg?v=1684454730",
    quantity: 10,
    alt: "Fiddle Leaf Fig Plant."
  },
  {
    name: "Succulent Assortment",
    id: "S2",
    price: 8,
    description:
      "This assortment includes a variety of colorful and low-maintenance succulents. Succulents are known for their unique shapes and are perfect for adding a touch of greenery to your home or office.",
    image:
      "https://m.media-amazon.com/images/I/61YU8pcMJWL._AC_UF350,350_QL80_.jpg",
    quantity: 30,
    alt: "Succulent Plants."
  },
  {
    name: "Jade Plant",
    id: "J1",
    price: 14,
    description:
      "The Jade Plant (Crassula ovata) is a succulent known for its thick, oval-shaped leaves. It's considered a symbol of good luck and is easy to care for as a houseplant.",
    image:
      "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2021/12/Bloomscape_Jade_small_slate-scaled.jpg?ver=639516",
    quantity: 18,
    alt: "Jade Plant."
  },
  {
    name: "Lavender",
    id: "L1",
    price: 11,
    description:
      "Lavender (Lavandula) is a fragrant herb known for its beautiful purple flowers and soothing scent. It's commonly used in aromatherapy and can be grown both indoors and outdoors.",
    image:
      "https://www.southernliving.com/thmb/F6LE-8x3qKX6VCYUW3hB5IS-S8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-148779353-2000-f3e95f7cd8ff4fefbaf6ae8220e70cfe.jpg",
    quantity: 15,
    alt: "Lavender Plant."
  },
  {
    name: "Spider Plant",
    id: "S3",
    price: 10,
    description:
      "The Spider Plant (Chlorophytum comosum) is a popular indoor plant known for its arching, variegated leaves. It's a great choice for beginners and helps improve indoor air quality.",
    image:
      "data:image/jpeg;base64,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",
    quantity: 20,
    alt: "Spider Plant."
  },
  {
    name: "Pothos Marble Queen",
    id: "P2",
    price: 12,
    description:
      "The Pothos Marble Queen (Epipremnum aureum) is a striking variation of the classic Pothos plant. It has marbled green and white leaves, making it a stylish choice for homes and offices.",
    image:
      "https://www.myjunglehome.com.au/cdn/shop/articles/marble-queen-pothos-plant-care-149649.jpg?v=1671202377",
    quantity: 15,
    alt: "Pothos Marble Queen Plant."
  },
  {
    name: "Money Tree",
    price: 19,
    description:
      "The Money Tree (Pachira aquatica) is a popular indoor plant with braided trunks and palmate leaves. It's believed to bring good luck and prosperity and is an attractive addition to any space.",
    image:
      "https://d3gkbidvk2xej.cloudfront.net/images/products/3d9b041c-4961-4668-bc38-5035fe2818c5/s/braided-money-tree-coral-mid-century-ceramic-light-wood-stand.jpeg?version=1666374619.88690019800",
    quantity: 9,
    alt: "Money Tree Plant."
  },
  {
    name: "Rubber Plant Red Ruby",
    price: 22,
    description:
      "The Rubber Plant Red Ruby (Ficus elastica Red Ruby) is a stunning variation of the Rubber Plant with deep red and green leaves. It's a striking choice for adding a touch of color to your indoor space.",
    image: "https://www.plantvine.com/plants/Ficus-Ruby-1G-800x1000.jpg",
    quantity: 12,
    alt: "Rubber Plant Red Ruby."
  },
  {
    name: "Anthurium",
    price: 18,
    description:
      "Anthurium, also known as the Flamingo Flower, is an exotic indoor plant with heart-shaped, vibrant red or pink flowers. It's known for its striking appearance and long-lasting blooms.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSre2_Zd5Plk4IgS6QrwIGB9_sbxGhSQiVeitfJui1aCw7I9JQU4JDwZs2hQwwXrgue4Uo&usqp=CAU",
    quantity: 14,
    alt: "Anthurium Plant."
  },
  {
    name: "Rubber Plant Burgundy",
    price: 20,
    description:
      "The Rubber Plant Burgundy (Ficus elastica Burgundy) is another beautiful variety of the Rubber Plant with deep burgundy leaves. It adds a touch of elegance to your interior space.",
    image:
      "https://edsplantshop.com/cdn/shop/products/ficus-elastica-burgundy-rubber-plant-916590.jpg?v=1691420915",
    quantity: 10,
    alt: "Rubber Plant Burgundy."
  },
  {
    name: "Cactus",
    price: 7,
    description:
      "Cacti are unique and low-maintenance succulent plants known for their spiky appearance. They come in various shapes and sizes, making them a popular choice for modern decor.",
    image:
      "https://www.artiplanto.com/cdn/shop/products/COCO-Artificial-Cactus-Potted-Plant-11--ArtiPlanto-1600107413.jpg?v=1614895759",
    quantity: 20,
    alt: "Cactus Plant."
  },
  {
    name: "Alocasia Polly",
    price: 16,
    description:
      "Alocasia Polly, also known as African Mask Plant, is a stunning indoor plant with arrow-shaped leaves. Its striking appearance and low-maintenance nature make it a popular choice.",
    image:
      "https://www.campbellsnursery.com/wp-content/uploads/2021/02/Alocasia-Polly.jpg",
    quantity: 12,
    alt: "Alocasia Polly Plant."
  },
  {
    name: "String of Pearls",
    price: 11,
    description:
      "String of Pearls (Senecio rowleyanus) is a charming succulent with trailing stems adorned with small, bead-like leaves. It's a unique and eye-catching addition to your plant collection.",
    image:
      "https://www.theplantproject.co.nz/cdn/shop/products/varigated_string_of_pearls_2400x.jpg?v=1568265830",
    quantity: 20,
    alt: "String of Pearls Plant."
  },
  {
    name: "Snake Plant Black Coral",
    price: 14,
    description:
      "The Snake Plant Black Coral (Sansevieria trifasciata) is a striking indoor plant with dark green, almost black leaves. It's an excellent air purifier and adds a touch of elegance to any space.",
    image:
      "https://bwhplantco.com/cdn/shop/products/image_ca7f78f6-7e4d-4445-9f31-e19600dc459b_grande.jpg?v=1609965604",
    quantity: 18,
    alt: "Snake Plant Black Coral."
  },
  {
    name: "Prayer Plant",
    price: 12,
    description:
      "The Prayer Plant (Maranta leuconeura) is a beautiful indoor plant with striking variegated leaves that fold up at night, resembling hands in prayer. It's known for its unique foliage patterns and is a favorite among plant enthusiasts.",
    image:
      "https://bouqs.com/product_images/prayer-plant/Deluxe/63a3a509bf43155b2412b392/detail.jpg?c=1671669001",
    quantity: 15,
    alt: "Prayer Plant."
  },
  {
    name: "Monstera Adansonii",
    price: 18,
    description:
      "Monstera Adansonii, also known as the Swiss Cheese Vine, is a unique indoor plant with small, heart-shaped leaves covered in distinctive perforations. It's an excellent choice for those looking for an eye-catching trailing plant.",
    image: "https://www.plantvine.com/plants/Monstera-Adansonii2-800x1000.jpg",
    quantity: 10,
    alt: "Monstera Adansonii Plant."
  }
];

export default plantProducts;
