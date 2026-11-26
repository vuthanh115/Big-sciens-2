// Social Studies Grade 2 / Starters 2 Curriculum Data
// Includes: World Windows (National Geographic Learning) — The City and the Country (pages 6–14),
// plus Living Together: Neighborhood & Jobs: Raw Materials and Products

window.SOCIAL_STUDIES_UNITS = [
  {
    id: "ss1",
    num: 1,
    domain: "World Windows • National Geographic",
    emoji: "🏙️",
    color: "#f59e0b",
    title: "The City and the Country",
    viTitle: "Thành phố và Nông thôn",
    bigQuestion: "How are the city and the country alike and different?",
    viBigQuestion: "Thành phố và nông thôn giống và khác nhau như thế nào?",
    pages: "Pages 6–14",
    hk1: true,
    lessons: [
      {
        title: "Lesson 1: Where People Live (The City vs. The Country)",
        viTitle: "Nơi con người sinh sống (Thành phố & Nông thôn)",
        facts: [
          { en: "Many people live in the city. Cities have tall buildings, apartments, busy streets, shops, and schools.", vi: "Rất nhiều người sống ở thành phố. Thành phố có nhà cao tầng, chung cư, đường phố đông đúc, cửa hàng và trường học." },
          { en: "Fewer people live in the country. The country has wide open spaces, green fields, trees, and farms.", vi: "Ít người sống ở nông thôn hơn. Nông thôn có không gian rộng mở, cánh đồng xanh, nhiều cây cối và trang trại." },
          { en: "In both the city and the country, families live in homes, go to school, and help each other.", vi: "Ở cả thành phố và nông thôn, các gia đình đều sống trong nhà, đi học và giúp đỡ nhau." }
        ],
        keywords: [
          { w: "the city", vi: "thành phố", ex: "The city has tall buildings and many people." },
          { w: "the country", vi: "nông thôn / miền quê", ex: "The country has farms, fields, and fresh air." },
          { w: "apartment", vi: "căn hộ chung cư", ex: "Many city families live in tall apartment buildings." },
          { w: "farm", vi: "trang trại", ex: "Farmers grow vegetables and raise animals on a farm." }
        ]
      },
      {
        title: "Lesson 2: Getting Around (Subway vs. Tractor)",
        viTitle: "Phương tiện đi lại (Tàu điện ngầm & Máy kéo)",
        facts: [
          { en: "In the city, people travel on buses, taxis, cars, bikes, and the subway (an underground train).", vi: "Ở thành phố, mọi người đi lại bằng xe buýt, taxi, ô tô, xe đạp và tàu điện ngầm (subway)." },
          { en: "A subway helps many people move quickly under busy city streets.", vi: "Tàu điện ngầm giúp rất nhiều người di chuyển nhanh dưới các con đường đông đúc." },
          { en: "In the country, people drive cars, trucks, and tractors to work on farms.", vi: "Ở nông thôn, người dân lái ô tô, xe tải và máy kéo (tractor) để làm việc trên trang trại." }
        ],
        keywords: [
          { w: "subway", vi: "tàu điện ngầm", ex: "People ride the subway under the streets in the city." },
          { w: "tractor", vi: "máy kéo nông nghiệp", ex: "Farmers drive a tractor in the fields in the country." },
          { w: "bus", vi: "xe buýt", ex: "Many students take the bus to school." },
          { w: "truck", vi: "xe tải", ex: "Farmers use a truck to carry fruits and vegetables." }
        ]
      },
      {
        title: "Lesson 3: Work and Play (Indoors vs. Outdoors)",
        viTitle: "Làm việc và Vui chơi (Trong nhà & Ngoài trời)",
        facts: [
          { en: "Many people in the city work indoors — in offices, hospitals, banks, museums, and stores.", vi: "Nhiều người ở thành phố làm việc trong nhà (indoors) — ở văn phòng, bệnh viện, ngân hàng, bảo tàng và cửa hàng." },
          { en: "Many people in the country work outdoors — growing crops, feeding farm animals, and driving tractors.", vi: "Nhiều người ở nông thôn làm việc ngoài trời (outdoors) — trồng cây, cho vật nuôi ăn và lái máy kéo." },
          { en: "Children in both the city and the country can play indoors (reading, games) and outdoors (parks, fields, biking).", vi: "Trẻ em ở cả thành phố và nông thôn đều có thể chơi trong nhà và ngoài trời." }
        ],
        keywords: [
          { w: "indoors", vi: "trong nhà", ex: "Office workers and shopkeepers work indoors." },
          { w: "outdoors", vi: "ngoài trời", ex: "Farmers work outdoors in the fields and fresh air." },
          { w: "office", vi: "văn phòng", ex: "In the city, many people work in offices with computers." },
          { w: "park", vi: "công viên", ex: "City families enjoy playing outdoors in the park." }
        ]
      }
    ],
    quizzes: [
      { emoji: "🏙️", q: "Which place has tall buildings, busy streets, and MANY people?", vi: "Nơi nào có nhà cao tầng, đường đông đúc và rất nhiều người?", options: ["The city", "The country", "A tractor", "A farm"], answer: 0, explain: "The city has tall buildings, busy streets, shops, and many people!" },
      { emoji: "🌾", q: "Which place has wide open fields, farms, and FEWER people?", vi: "Nơi nào có cánh đồng rộng, trang trại và ít người hơn?", options: ["The subway", "The city", "The country", "An office"], answer: 2, explain: "The country has open fields, trees, farms, and fewer people!" },
      { emoji: "🚇", q: "What is a SUBWAY?", vi: "Tàu điện ngầm (subway) là gì?", options: ["A farm machine", "An underground train in the city", "A tall apartment", "A country road"], answer: 1, explain: "A subway is an underground train that helps people travel fast in the city!" },
      { emoji: "🚜", q: "Where do farmers drive a TRACTOR?", vi: "Người nông dân lái máy kéo (tractor) ở đâu?", options: ["In the subway", "Indoors in an office", "On farms in the country", "In a museum"], answer: 2, explain: "Farmers drive tractors on farms in the country!" },
      { emoji: "🏢", q: "People who work in offices, shops, and hospitals work ___.", vi: "Người làm ở văn phòng, cửa hàng, bệnh viện làm việc ở đâu?", options: ["indoors", "outdoors", "on a tractor", "in a field"], answer: 0, explain: "Offices, shops, and hospitals are inside buildings — indoors!" },
      { emoji: "🌻", q: "Farmers who grow crops and care for animals in fields work ___.", vi: "Nông dân trồng cây và chăm sóc vật nuôi ngoài đồng làm việc ở đâu?", options: ["indoors", "outdoors", "in a subway", "in an apartment"], answer: 1, explain: "Working in open fields and farms is working outdoors!" },
      { emoji: "🏠", q: "In the city, many families live in tall ___.", vi: "Ở thành phố, nhiều gia đình sống trong các tòa nhà gì?", options: ["tractors", "apartments", "fields", "subways"], answer: 1, explain: "Many city families live in apartment buildings!" },
      { emoji: "🤝", q: "How are the city and the country ALIKE?", vi: "Thành phố và nông thôn GIỐNG nhau ở điểm nào?", options: ["Both have subways", "Both have tractors on every street", "In both places, families live in homes and kids go to school", "Both have no trees"], answer: 2, explain: "In both the city and the country, families live in homes, go to school, and help each other!" }
    ]
  },

  {
    id: "ss2",
    num: 2,
    domain: "Social Studies • Community",
    emoji: "🏘️",
    color: "#10b981",
    title: "Living Together: Neighborhood",
    viTitle: "Sống chung: Khu phố & Hàng xóm",
    bigQuestion: "How can we be good neighbors?",
    viBigQuestion: "Làm thế nào để trở thành người hàng xóm tốt?",
    pages: "Term 1 Handout",
    hk1: true,
    lessons: [
      {
        title: "Lesson 1: Our Neighborhood and Neighbors",
        viTitle: "Khu phố và những người hàng xóm",
        facts: [
          { en: "People who live in the same neighborhood are neighbors.", vi: "Những người sống trong cùng một khu phố là hàng xóm của nhau." },
          { en: "Neighbors help and respect each other.", vi: "Hàng xóm giúp đỡ và tôn trọng lẫn nhau." },
          { en: "Neighbors celebrate local festivals and parties together.", vi: "Hàng xóm cùng nhau tổ chức các lễ hội địa phương và tiệc vui." }
        ],
        keywords: [
          { w: "neighborhood", vi: "khu phố / khu dân cư", ex: "My neighborhood has a park, a bakery, and friendly people." },
          { w: "neighbors", vi: "hàng xóm", ex: "Neighbors help and respect each other." },
          { w: "local festivals", vi: "lễ hội địa phương", ex: "Neighbors celebrate local festivals together." }
        ]
      },
      {
        title: "Lesson 2: Rules & Looking After Our Community",
        viTitle: "Quy tắc & Bảo vệ nơi công cộng",
        facts: [
          { en: "All good neighbors look after their village or city.", vi: "Tất cả những người hàng xóm tốt đều giữ gìn ngôi làng hoặc thành phố của mình." },
          { en: "Every village or city has got rules for the inhabitants to follow.", vi: "Mỗi ngôi làng hay thành phố đều có quy tắc để cư dân tuân theo." },
          { en: "Good neighbors: help each other, share things, look after public spaces, and celebrate parties together.", vi: "Hàng xóm tốt: giúp đỡ nhau, chia sẻ đồ dùng, giữ gìn nơi công cộng và cùng nhau dự tiệc." }
        ],
        keywords: [
          { w: "rules", vi: "quy tắc / luật lệ", ex: "Follow rules like putting trash in the bin." },
          { w: "inhabitants", vi: "cư dân / người dân", ex: "The inhabitants follow the rules of their city." },
          { w: "public spaces", vi: "không gian công cộng (công viên, đường phố)", ex: "Good neighbors keep public spaces clean." }
        ]
      }
    ],
    quizzes: [
      { emoji: "🏘️", q: "People who live in the same neighborhood are ___.", vi: "Những người sống cùng một khu phố là...", options: ["neighbors", "machines", "tractors", "raw materials"], answer: 0, explain: "People who live in the same neighborhood are neighbors!" },
      { emoji: "📜", q: "Every village or city has got ___ for the inhabitants to follow.", vi: "Mỗi làng/thành phố đều có ... để cư dân tuân theo.", options: ["rules", "subways", "cotton", "factories"], answer: 0, explain: "Rules help all inhabitants live together safely and happily!" },
      { emoji: "👨‍👩‍👧‍👦", q: "Who are the INHABITANTS of a village or city?", vi: "Inhabitants (cư dân) là ai?", options: ["Only tractors", "The people who live in that village or city", "Only machines", "Only animals"], answer: 1, explain: "Inhabitants are the people who live in a village or city!" },
      { emoji: "🎉", q: "Which of these is something GOOD NEIGHBORS do?", vi: "Hàng xóm tốt sẽ làm điều nào sau đây?", options: ["Throw trash in the park", "Break the rules", "Help each other, share things, and look after public spaces", "Shout at night"], answer: 2, explain: "Good neighbors help each other, share things, look after public spaces, and celebrate festivals/parties together!" },
      { emoji: "🤝", q: "Neighbors help and ___ each other.", vi: "Hàng xóm giúp đỡ và ... lẫn nhau.", options: ["respect", "ignore", "push", "break"], answer: 0, explain: "Neighbors help and respect each other!" }
    ]
  },

  {
    id: "ss3",
    num: 3,
    domain: "Social Studies • Jobs & Economy",
    emoji: "🏭",
    color: "#3b82f6",
    title: "Jobs: Raw Materials & Products",
    viTitle: "Nghề nghiệp: Nguyên liệu thô & Sản phẩm",
    bigQuestion: "How are raw materials turned into products we use?",
    viBigQuestion: "Nguyên liệu thô trở thành sản phẩm chúng ta dùng như thế nào?",
    pages: "Term 1 Handout",
    hk1: true,
    lessons: [
      {
        title: "Lesson 1: Raw Materials from Nature",
        viTitle: "Nguyên liệu thô từ thiên nhiên",
        facts: [
          { en: "Raw materials are materials found in nature.", vi: "Nguyên liệu thô (raw materials) là những vật liệu tìm thấy trong tự nhiên." },
          { en: "Examples of raw materials: wood (from trees), fruits (from plants), metal (from Earth), and cotton (from cotton plants).", vi: "Ví dụ nguyên liệu thô: gỗ, trái cây, kim loại và bông." }
        ],
        keywords: [
          { w: "raw materials", vi: "nguyên liệu thô", ex: "Wood, fruits, metal, and cotton are raw materials." },
          { w: "wood", vi: "gỗ", ex: "Wood from trees is used to make furniture and paper." },
          { w: "cotton", vi: "bông (tự nhiên)", ex: "Cotton grows on plants in nature." }
        ]
      },
      {
        title: "Lesson 2: Factories and Manufactured Products",
        viTitle: "Nhà máy và Sản phẩm chế tạo",
        facts: [
          { en: "In factories, raw materials are transformed into manufactured products.", vi: "Trong nhà máy, nguyên liệu thô được biến đổi thành sản phẩm chế tạo (manufactured products)." },
          { en: "Factory workers use machines to make manufactured products.", vi: "Công nhân nhà máy sử dụng máy móc để tạo ra sản phẩm." },
          { en: "Manufactured products are made from raw materials such as wood (tables), fruits (jam/juice), and metal (cars/spoons).", vi: "Sản phẩm chế tạo được làm từ gỗ (bàn ghế), trái cây (mứt/nước ép), kim loại (xe/thìa)." },
          { en: "Cotton is transformed in factories into cotton thread.", vi: "Bông được chế biến trong nhà máy thành sợi bông (cotton thread)." }
        ],
        keywords: [
          { w: "factory", vi: "nhà máy", ex: "Raw materials go to a factory to become new products." },
          { w: "factory worker", vi: "công nhân nhà máy", ex: "A factory worker operates machines to make products." },
          { w: "machine", vi: "máy móc", ex: "Machines help workers make things quickly and neatly." },
          { w: "manufactured products", vi: "sản phẩm đã qua chế tạo", ex: "Chairs, jam, and cotton thread are manufactured products." },
          { w: "cotton thread", vi: "sợi bông / chỉ bông", ex: "Cotton is transformed in factories into cotton thread." }
        ]
      }
    ],
    quizzes: [
      { emoji: "🪵", q: "Where are RAW MATERIALS found?", vi: "Nguyên liệu thô (raw materials) được tìm thấy ở đâu?", options: ["In nature", "Only in supermarkets", "In subways", "In schools"], answer: 0, explain: "Raw materials are materials found in nature!" },
      { emoji: "🏭", q: "Where are raw materials transformed into manufactured products?", vi: "Nguyên liệu thô được chế biến thành sản phẩm ở đâu?", options: ["In parks", "In factories", "In bedrooms", "In subways"], answer: 1, explain: "In factories, raw materials are transformed into manufactured products!" },
      { emoji: "🧵", q: "Cotton is transformed in factories into ___.", vi: "Bông được chế biến trong nhà máy thành gì?", options: ["metal", "wood", "cotton thread", "fruit"], answer: 2, explain: "Cotton is transformed in factories into cotton thread!" },
      { emoji: "👷", q: "Who uses MACHINES in a factory to make manufactured products?", vi: "Ai sử dụng máy móc trong nhà máy để làm ra sản phẩm?", options: ["A factory worker", "A subway", "A neighbor", "A tractor"], answer: 0, explain: "A factory worker uses machines in a factory!" },
      { emoji: "🪑", q: "Which of these is a group of RAW MATERIALS?", vi: "Nhóm nào toàn là nguyên liệu thô (raw materials)?", options: ["Wood, fruits, and metal", "Chairs, cars, and T-shirts", "Subways, buses, and bikes", "Rules, parks, and festivals"], answer: 0, explain: "Wood, fruits, and metal are raw materials found in nature!" }
    ]
  }
];
