// Complete Big Science Level 2 Curriculum Data (Units 1 to 9)
// Extracted directly from Big_Science_level_2.pdf (Scope & Sequence + Study Guides + Lessons)

window.BIG_SCIENCE_UNITS = [
  {
    id: "unit1",
    num: 1,
    domain: "Science, Engineering & Technology",
    emoji: "🛠️",
    color: "#0ea5e9",
    title: "The Design Process",
    viTitle: "Quy trình thiết kế",
    bigQuestion: "How do you solve problems?",
    viBigQuestion: "Làm thế nào để giải quyết các vấn đề?",
    pages: "Pages 1–13",
    hk1: false,
    lessons: [
      {
        title: "Lesson 1: What is technology?",
        viTitle: "Công nghệ là gì?",
        facts: [
          { en: "Technology is any tool that helps people.", vi: "Công nghệ là bất kỳ công cụ nào giúp ích cho con người." },
          { en: "People use technology to solve problems.", vi: "Con người dùng công nghệ để giải quyết vấn đề." },
          { en: "Scientists make discoveries about how the world works.", vi: "Các nhà khoa học khám phá ra cách thế giới vận hành." }
        ],
        keywords: [
          { w: "technology", vi: "công nghệ", ex: "A pencil and a computer are both technology." },
          { w: "science", vi: "khoa học", ex: "Science helps us learn about the world." },
          { w: "scientist", vi: "nhà khoa học", ex: "A scientist asks questions and does tests." },
          { w: "discovery", vi: "sự khám phá", ex: "Finding something new is a discovery." }
        ]
      },
      {
        title: "Lesson 2: What are objects made of?",
        viTitle: "Đồ vật được làm từ gì?",
        facts: [
          { en: "Materials not made by people are natural (wood, cotton, rock).", vi: "Vật liệu không do con người tạo ra là vật liệu tự nhiên (gỗ, bông, đá)." },
          { en: "Plastic is a man-made material.", vi: "Nhựa là vật liệu nhân tạo." },
          { en: "People choose different materials for different jobs.", vi: "Con người chọn các vật liệu khác nhau cho từng mục đích khác nhau." }
        ],
        keywords: [
          { w: "materials", vi: "vật liệu", ex: "Objects are made of different materials." },
          { w: "natural", vi: "tự nhiên", ex: "Wood, cotton, and rock are natural materials." },
          { w: "wood", vi: "gỗ", ex: "Tables and pencils are made of wood." },
          { w: "cotton", vi: "bông / vải cotton", ex: "Many T-shirts are made of soft cotton." },
          { w: "rock", vi: "đá", ex: "Rock is a hard natural material." },
          { w: "plastic", vi: "nhựa", ex: "Water bottles and toys are often made of plastic." }
        ]
      },
      {
        title: "Lesson 3: What is the design process?",
        viTitle: "Quy trình thiết kế là gì?",
        facts: [
          { en: "Something you want to do is a goal.", vi: "Điều bạn muốn đạt được gọi là mục tiêu (goal)." },
          { en: "A solution is a way to solve a problem.", vi: "Giải pháp (solution) là cách giải quyết một vấn đề." },
          { en: "You can draw a plan and record your solutions with labels.", vi: "Bạn có thể vẽ kế hoạch và ghi chú giải pháp bằng các nhãn (labels)." }
        ],
        keywords: [
          { w: "goal", vi: "mục tiêu", ex: "Our goal is to build a strong paper bridge." },
          { w: "problem", vi: "vấn đề", ex: "First, find the problem you need to solve." },
          { w: "plan", vi: "kế hoạch", ex: "Draw a plan before you build." },
          { w: "solution", vi: "giải pháp", ex: "Testing helps you find the best solution." },
          { w: "label", vi: "nhãn ghi chú", ex: "Use labels to name the parts of your drawing." }
        ]
      }
    ],
    quizzes: [
      { emoji: "🛠️", q: "What is TECHNOLOGY?", vi: "Công nghệ (technology) là gì?", options: ["Only smartphones", "Any tool that helps people solve problems", "Only animals", "Only weather"], answer: 1, explain: "Technology is any tool that helps people solve problems — even a simple spoon or pencil!" },
      { emoji: "🪵", q: "Which of these is a NATURAL material (not made by people)?", vi: "Đâu là vật liệu tự nhiên (natural material)?", options: ["Plastic", "Wood and cotton", "Computer screen", "Nylon"], answer: 1, explain: "Wood, cotton, and rock come from nature, so they are natural materials." },
      { emoji: "🎯", q: "Something you want to do or achieve is called a ___.", vi: "Điều bạn muốn làm hoặc đạt được gọi là gì?", options: ["goal", "rock", "cotton", "storm"], answer: 0, explain: "A goal is something you want to do!" },
      { emoji: "🏷️", q: "How can you record and explain the parts of your design drawing?", vi: "Bạn có thể ghi chú các bộ phận trong bản vẽ thiết kế bằng gì?", options: ["With labels", "With water", "With shadows", "With gravity"], answer: 0, explain: "Labels name the parts of your plan and record your solutions clearly." },
      { emoji: "💡", q: "A way to fix or answer a problem is called a ___.", vi: "Cách giải quyết một vấn đề gọi là gì?", options: ["solution", "cavity", "season", "habit"], answer: 0, explain: "A solution solves a problem!" }
    ]
  },

  {
    id: "unit2",
    num: 2,
    domain: "Life Science",
    emoji: "🌿",
    color: "#22c55e",
    title: "Living Things & Environments",
    viTitle: "Sinh vật sống và Môi trường",
    bigQuestion: "What do plants and animals need?",
    viBigQuestion: "Thực vật và động vật cần gì để sống?",
    pages: "Pages 14–27",
    hk1: false,
    lessons: [
      {
        title: "Lesson 1: What do living things need?",
        viTitle: "Sinh vật sống cần gì?",
        facts: [
          { en: "Plants need air, water, light, and nutrients (from soil) to grow.", vi: "Cây cối cần không khí, nước, ánh sáng và chất dinh dưỡng (từ đất)." },
          { en: "Animals need air, water, food, and shelter to live.", vi: "Động vật cần không khí, nước, thức ăn và nơi trú ẩn." }
        ],
        keywords: [
          { w: "need", vi: "nhu cầu / cần", ex: "All living things have needs to stay alive." },
          { w: "air", vi: "không khí", ex: "Plants and animals both need air." },
          { w: "light", vi: "ánh sáng", ex: "Plants use sunlight to make food." },
          { w: "nutrients", vi: "chất dinh dưỡng", ex: "Plant roots take in nutrients from soil." },
          { w: "soil", vi: "đất trồng", ex: "Soil holds water and nutrients for plants." },
          { w: "shelter", vi: "nơi trú ẩn", ex: "A bird builds a nest for shelter." }
        ]
      },
      {
        title: "Lesson 2: Land Environments",
        viTitle: "Môi trường trên cạn",
        facts: [
          { en: "Forests, prairies, and deserts are land environments.", vi: "Rừng, đồng cỏ và sa mạc là các môi trường trên cạn." },
          { en: "Bears use claws to dig for food and climb trees. Prairie dogs have sharp teeth to chew grass.", vi: "Gấu dùng móng vuốt đào thức ăn và leo cây. Cầy thảo nguyên có răng sắc để nhai cỏ." },
          { en: "Desert rabbits have big ears and lizards have light-colored skin to keep cool.", vi: "Thỏ sa mạc có tai to và thằn lằn có da sáng màu để giữ mát." }
        ],
        keywords: [
          { w: "environment", vi: "môi trường sống", ex: "An environment is everything around a living thing." },
          { w: "forest", vi: "khu rừng", ex: "A forest has many tall trees and bears." },
          { w: "prairie", vi: "đồng cỏ / thảo nguyên", ex: "A prairie is flat land covered with grass." },
          { w: "desert", vi: "sa mạc", ex: "A desert is very dry and often hot." }
        ]
      },
      {
        title: "Lesson 3: Water Environments",
        viTitle: "Môi trường nước",
        facts: [
          { en: "Wetlands, marshes, swamps, and oceans are water environments.", vi: "Đất ngập nước, đầm lầy cỏ, đầm lầy cây và đại dương là môi trường nước." },
          { en: "Herons have long beaks to catch fish. Alligators have strong tails to help them swim.", vi: "Diệc có mỏ dài để bắt cá. Cá sấu có đuôi khỏe giúp bơi." },
          { en: "Fish have gills to breathe oxygen in the water.", vi: "Cá có mang để thở ô-xy trong nước." }
        ],
        keywords: [
          { w: "wetland", vi: "vùng đất ngập nước", ex: "Wetlands are covered with water part or all of the year." },
          { w: "swamp", vi: "đầm lầy có cây gỗ", ex: "Alligators live in swamps." },
          { w: "marsh", vi: "đầm lầy có cỏ", ex: "Herons look for fish in a marsh." },
          { w: "ocean", vi: "đại dương", ex: "The ocean is a huge body of salty water." }
        ]
      }
    ],
    quizzes: [
      { emoji: "🌱", q: "What FOUR things do plants need to grow?", vi: "Cây cối cần 4 thứ gì để lớn lên?", options: ["Air, water, light, and nutrients", "Toys, milk, candy, and beds", "Rocks, plastic, ice, and ash", "Snow, wind, fire, and iron"], answer: 0, explain: "Plants need air, water, light, and nutrients!" },
      { emoji: "🐻", q: "What do animals need that plants do NOT need?", vi: "Động vật cần gì để trú ngụ?", options: ["Shelter and food", "Plastic", "Helmets", "Thermometers"], answer: 0, explain: "Animals need air, water, food, and shelter!" },
      { emoji: "🌵", q: "How do rabbits in the desert keep cool?", vi: "Thỏ ở sa mạc làm mát cơ thể nhờ bộ phận nào?", options: ["With big ears", "With heavy fur coats", "With gills", "With long beaks"], answer: 0, explain: "Desert rabbits have big ears to help release heat and keep cool!" },
      { emoji: "🐟", q: "What body part helps fish breathe oxygen in the water?", vi: "Bộ phận nào giúp cá thở ô-xy dưới nước?", options: ["Claws", "Gills", "Ears", "Beaks"], answer: 1, explain: "Fish have gills to breathe oxygen in the water!" },
      { emoji: "🐊", q: "Which of these are WATER environments?", vi: "Đâu là các môi trường nước (water environments)?", options: ["Deserts and prairies", "Wetlands, marshes, swamps, and oceans", "Mountains and hills", "Cities and factories"], answer: 1, explain: "Wetlands, marshes, swamps, and oceans are water environments!" }
    ]
  },

  {
    id: "unit3",
    num: 3,
    domain: "Life Science",
    emoji: "🐾",
    color: "#14b8a6",
    title: "Plants and Animals",
    viTitle: "Thực vật và Động vật",
    bigQuestion: "How are living things alike and different?",
    viBigQuestion: "Các sinh vật giống và khác nhau như thế nào?",
    pages: "Pages 28–39",
    hk1: false,
    lessons: [
      {
        title: "Lesson 1: Groups of Living Things",
        viTitle: "Các nhóm sinh vật sống",
        facts: [
          { en: "We can classify plants as those with flowers (make seeds) or without flowers (like pine trees with cones).", vi: "Ta phân loại cây có hoa (tạo hạt) và cây không có hoa (như cây thông có nón)." },
          { en: "We can classify animals as mammals, fish, birds, reptiles, amphibians, or insects.", vi: "Ta phân loại động vật thành: thú (mammals), cá, chim, bò sát, lưỡng cư và côn trùng." },
          { en: "Mammals, birds, fish, reptiles, and amphibians have a backbone; insects do not.", vi: "Thú, chim, cá, bò sát, lưỡng cư có xương sống (backbone); côn trùng thì không." }
        ],
        keywords: [
          { w: "seed", vi: "hạt giống", ex: "Many flowers make seeds to grow new plants." },
          { w: "cone", vi: "quả nón (cây thông)", ex: "Pine trees make seeds inside cones." },
          { w: "backbone", vi: "xương sống", ex: "Mammals, birds, and fish have a backbone." },
          { w: "mammal", vi: "động vật có vú / thú", ex: "Dogs and bears are mammals with fur." },
          { w: "reptile", vi: "loài bò sát", ex: "Snakes, lizards, and turtles are reptiles." },
          { w: "amphibian", vi: "loài lưỡng cư", ex: "Frogs are amphibians that live on land and in water." },
          { w: "insect", vi: "côn trùng", ex: "Insects have 6 legs and no backbone." }
        ]
      },
      {
        title: "Lesson 2: Like Their Parents",
        viTitle: "Giống bố mẹ của chúng",
        facts: [
          { en: "Young plants are like their parents — they have the same shape of leaves.", vi: "Cây con giống cây mẹ — chúng có hình dạng lá giống nhau." },
          { en: "Young animals are like their parents — they have the same shape, color, and number of legs.", vi: "Động vật con giống bố mẹ về hình dạng, màu sắc và số chân." }
        ],
        keywords: [
          { w: "parent", vi: "bố mẹ / cây mẹ", ex: "A puppy looks like its parent dog." },
          { w: "young", vi: "con non / cây con", ex: "Young animals grow to look like their parents." },
          { w: "alike", vi: "giống nhau", ex: "A kitten and its mother are alike." }
        ]
      },
      {
        title: "Lesson 3: How Groups Are Different",
        viTitle: "Sự khác nhau trong cùng một loài",
        facts: [
          { en: "Even living things of the same kind can be different!", vi: "Ngay cả các sinh vật cùng loài cũng có điểm khác nhau!" },
          { en: "Petunias can have flowers of different colors.", vi: "Hoa dạ yến thảo (petunia) có thể có nhiều màu hoa khác nhau." },
          { en: "Giraffes in a herd have necks of different lengths and spots that are darker or lighter.", vi: "Hươu cao cổ trong cùng một đàn có chiều dài cổ và độ đậm nhạt của đốm khác nhau." }
        ],
        keywords: [
          { w: "petunia", vi: "hoa dạ yến thảo", ex: "Petunias grow in pink, purple, white, and red." },
          { w: "fuzzy", vi: "có lông tơ mịn", ex: "Some leaves feel soft and fuzzy." },
          { w: "herd", vi: "đàn (động vật)", ex: "A herd of giraffes eats leaves from tall trees." }
        ]
      }
    ],
    quizzes: [
      { emoji: "🐸", q: "A frog lives in water and on land. Which animal group is a frog in?", vi: "Ếch sống được cả dưới nước và trên cạn. Ếch thuộc nhóm nào?", options: ["Mammal", "Amphibian", "Insect", "Bird"], answer: 1, explain: "Frogs are amphibians!" },
      { emoji: "🦋", q: "Which animal group has 6 legs and NO backbone?", vi: "Nhóm động vật nào có 6 chân và KHÔNG có xương sống?", options: ["Mammals", "Reptiles", "Insects", "Fish"], answer: 2, explain: "Insects (like ants, bees, butterflies) have 6 legs and no backbone!" },
      { emoji: "🌲", q: "Pine trees do not have flowers. Where do they make seeds?", vi: "Cây thông không có hoa. Nó tạo hạt ở đâu?", options: ["Inside cones", "Inside rocks", "In water", "In clouds"], answer: 0, explain: "Pine trees make seeds inside cones!" },
      { emoji: "🦒", q: "How can giraffes in the same HERD be different from each other?", vi: "Hươu cao cổ trong cùng một đàn khác nhau như thế nào?", options: ["Different neck lengths and darker or lighter spots", "Some have gills", "Some have 8 legs", "Some are plants"], answer: 0, explain: "Giraffes in a herd have different neck lengths and darker or lighter spots!" },
      { emoji: "🐶", q: "How are young animals ALIKE their parents?", vi: "Động vật con giống bố mẹ ở điểm nào?", options: ["Same shape and number of legs", "They live on different planets", "They are made of metal", "They have no eyes"], answer: 0, explain: "Young animals are like their parents — same shape, color, and number of legs!" }
    ]
  },

  {
    id: "unit4",
    num: 4,
    domain: "Life Science",
    emoji: "💪",
    color: "#10b981",
    title: "Body and Health",
    viTitle: "Cơ thể và Sức khỏe",
    bigQuestion: "What do I need to be healthy?",
    viBigQuestion: "Em cần làm gì để khỏe mạnh?",
    pages: "Pages 40–51",
    hk1: true,
    lessons: [
      {
        title: "Lesson 1: What can I do to stay healthy? (p. 41–45)",
        viTitle: "Làm sao để luôn khỏe mạnh?",
        facts: [
          { en: "A habit is something you do again and again. Healthy habits: eating well, exercising, getting sleep, staying clean, and going to the doctor.", vi: "Thói quen tốt: ăn uống đủ chất, tập thể dục, ngủ đủ 10–11 tiếng, giữ sạch sẽ và đi khám định kỳ." },
          { en: "Washing your hands properly takes 20 seconds.", vi: "Rửa tay đúng cách cần 20 giây." },
          { en: "Exercise keeps your heart, bones, and muscles healthy. Your heart beats faster and you breathe faster.", vi: "Tập thể dục giúp tim, xương, cơ khỏe mạnh; tim đập nhanh và thở nhanh hơn." },
          { en: "Brushing teeth prevents cavities. Doctors give check ups and vaccinations.", vi: "Đánh răng giúp tránh sâu răng (cavity). Bác sĩ khám định kỳ và tiêm vắc-xin." }
        ],
        keywords: [
          { w: "healthy", vi: "khỏe mạnh", ex: "Good habits keep your body healthy." },
          { w: "habit", vi: "thói quen", ex: "Brushing teeth every day is a healthy habit." },
          { w: "exercise", vi: "tập thể dục", ex: "Running, swimming, and hopping are good exercise." },
          { w: "cavity", vi: "lỗ sâu răng", ex: "Brush your teeth so you don't get a cavity." },
          { w: "check up", vi: "khám sức khỏe định kỳ", ex: "A doctor gives you a check up." }
        ]
      },
      {
        title: "Lesson 2: How can I stay healthy and safe? (p. 46–49)",
        viTitle: "Làm sao để vừa khỏe mạnh vừa an toàn?",
        facts: [
          { en: "Germs spread when a sick person sneezes. Washing your hands with soap is the best way to not get sick.", vi: "Vi trùng lây khi người bệnh hắt hơi. Rửa tay với xà phòng là cách tốt nhất để không bị ốm." },
          { en: "Your skin heals itself! Wash cuts with soap and water to kill germs, then cover with a bandage.", vi: "Da có thể tự lành! Rửa vết đứt bằng xà phòng & nước để diệt vi trùng, rồi dán băng cá nhân." },
          { en: "Wear a helmet when biking, a life jacket on boats, and sunscreen + sunglasses in the sun.", vi: "Đội mũ bảo hiểm khi đi xe đạp, mặc áo phao khi đi thuyền, dùng kem chống nắng & kính râm khi ra nắng." }
        ],
        keywords: [
          { w: "germs", vi: "vi trùng", ex: "Soap and water kill germs." },
          { w: "sneeze", vi: "hắt hơi", ex: "Cover your mouth when you sneeze." },
          { w: "heal", vi: "lành lại", ex: "To heal means to become healthy again." },
          { w: "bandage", vi: "băng cá nhân", ex: "A bandage keeps a cut clean." },
          { w: "helmet", vi: "mũ bảo hiểm", ex: "A helmet protects your head." },
          { w: "life jacket", vi: "áo phao", ex: "A life jacket helps you float." },
          { w: "sunscreen", vi: "kem chống nắng", ex: "Put on more sunscreen after swimming." }
        ]
      }
    ],
    reuseSubjectQuiz: ["u41", "u42"]
  },

  {
    id: "unit5",
    num: 5,
    domain: "Earth Science",
    emoji: "🌍",
    color: "#f59e0b",
    title: "Earth and Sky",
    viTitle: "Trái Đất và Bầu Trời",
    bigQuestion: "What can you say about Earth and sky?",
    viBigQuestion: "Em biết gì về Trái Đất và bầu trời?",
    pages: "Pages 52–63",
    hk1: false,
    lessons: [
      {
        title: "Lesson 1: What is on Earth?",
        viTitle: "Có gì trên Trái Đất?",
        facts: [
          { en: "Earth has land (plains, hills, mountains, islands) and water (rivers, lakes, oceans).", vi: "Trái Đất có đất liền (đồng bằng, đồi, núi, đảo) và nước (sông, hồ, đại dương)." },
          { en: "A mountain is very high land. A plain is wide, flat land. An island has water all around it.", vi: "Núi là vùng đất rất cao. Đồng bằng là vùng đất phẳng rộng. Đảo có nước bao quanh." }
        ],
        keywords: [
          { w: "plain", vi: "đồng bằng", ex: "A plain is wide and flat land." },
          { w: "hill", vi: "ngọn đồi", ex: "A hill is higher than flat land, but lower than a mountain." },
          { w: "mountain", vi: "ngọn núi", ex: "A mountain is the tallest kind of land." },
          { w: "island", vi: "hòn đảo", ex: "An island is land with water all around it." },
          { w: "river", vi: "dòng sông", ex: "A river is fresh water that flows." },
          { w: "lake", vi: "cái hồ", ex: "A lake has land all around the water." }
        ]
      },
      {
        title: "Lesson 2: What changes land?",
        viTitle: "Điều gì làm thay đổi mặt đất?",
        facts: [
          { en: "An earthquake changes land FAST by shaking the ground.", vi: "Động đất (earthquake) làm thay đổi mặt đất RẤT NHANH khi mặt đất rung chuyển." },
          { en: "Weathering breaks rocks into smaller pieces slowly. Erosion moves rocks and soil away.", vi: "Phong hóa (weathering) làm đá vỡ nhỏ dần. Xói mòn (erosion) cuốn trôi đất đá đi." }
        ],
        keywords: [
          { w: "earthquake", vi: "động đất", ex: "An earthquake shakes the ground fast." },
          { w: "weathering", vi: "sự phong hóa (làm vỡ đá)", ex: "Water and wind cause weathering of rocks." },
          { w: "erosion", vi: "sự xói mòn (cuốn trôi đất đá)", ex: "Flowing rivers cause erosion by moving soil." }
        ]
      },
      {
        title: "Lesson 3: What is the sun?",
        viTitle: "Mặt trời là gì?",
        facts: [
          { en: "The sun is a star made of hot, glowing gas.", vi: "Mặt trời là một ngôi sao tạo bởi khí nóng phát sáng." },
          { en: "The sun gives Earth light and heat to keep us warm and help plants grow.", vi: "Mặt trời cho Trái Đất ánh sáng và nhiệt để giữ ấm và giúp cây lớn." },
          { en: "Too much sun can harm your skin and eyes — wear sunglasses and sunscreen!", vi: "Quá nhiều nắng có thể hại da và mắt — hãy đeo kính râm và bôi kem chống nắng!" }
        ],
        keywords: [
          { w: "gas", vi: "chất khí", ex: "The sun is a huge ball of hot gas." },
          { w: "warm", vi: "ấm áp", ex: "Sunlight keeps Earth warm." },
          { w: "heat", vi: "nhiệt / sức nóng", ex: "We feel heat from the sun." },
          { w: "harm", vi: "gây hại", ex: "Too much sun can harm your skin." },
          { w: "sunglasses", vi: "kính râm", ex: "Wear sunglasses to protect your eyes." }
        ]
      }
    ],
    quizzes: [
      { emoji: "🏝️", q: "What is land with water ALL AROUND it called?", vi: "Vùng đất có nước bao quanh bốn phía gọi là gì?", options: ["A plain", "An island", "A lake", "A mountain"], answer: 1, explain: "An island is land with water all around it!" },
      { emoji: "🌋", q: "Which of these changes Earth's land very FAST?", vi: "Hiện tượng nào làm thay đổi mặt đất RẤT NHANH?", options: ["An earthquake", "Weathering", "Erosion", "Growing grass"], answer: 0, explain: "An earthquake shakes and changes land fast! Weathering and erosion are slow changes." },
      { emoji: "💨", q: "When wind or flowing water MOVES rocks and soil to a new place, it is called ___.", vi: "Khi gió hoặc nước chảy cuốn đất đá đi nơi khác gọi là gì?", options: ["erosion", "earthquake", "island", "sunglasses"], answer: 0, explain: "Weathering breaks rocks; erosion moves rocks and soil!" },
      { emoji: "☀️", q: "What is the sun made of?", vi: "Mặt trời được tạo thành từ gì?", options: ["Solid ice", "Hot, glowing gas", "Metal and plastic", "Soil and rocks"], answer: 1, explain: "The sun is a star made of hot, glowing gas!" },
      { emoji: "🏞️", q: "Which landform is wide and FLAT?", vi: "Dạng địa hình nào rộng và bằng phẳng?", options: ["A plain", "A mountain", "A hill", "A river"], answer: 0, explain: "A plain is wide, flat land!" }
    ]
  },

  {
    id: "unit6",
    num: 6,
    domain: "Earth Science",
    emoji: "🌦️",
    color: "#3b82f6",
    title: "Weather",
    viTitle: "Thời tiết & Bốn mùa",
    bigQuestion: "How can you describe weather?",
    viBigQuestion: "Em mô tả thời tiết như thế nào?",
    pages: "Pages 64–75",
    hk1: false,
    lessons: [
      {
        title: "Lesson 1: What is weather?",
        viTitle: "Thời tiết là gì?",
        facts: [
          { en: "Weather is what it is like outside (sunny, rainy, windy, snowy, cloudy).", vi: "Thời tiết là trạng thái bên ngoài trời (nắng, mưa, gió, tuyết, mây)." },
          { en: "Severe storms include thunderstorms, tornadoes, hurricanes, and snowstorms. Stay safe inside a shelter!", vi: "Bão nguy hiểm gồm giông sét, lốc xoáy, bão lớn, bão tuyết. Hãy trú an toàn trong nhà!" }
        ],
        keywords: [
          { w: "weather", vi: "thời tiết", ex: "Weather can change every day." },
          { w: "storm", vi: "cơn bão", ex: "Stay indoors during a bad storm." },
          { w: "thunderstorm", vi: "cơn giông có sấm sét", ex: "A thunderstorm has lightning and thunder." },
          { w: "tornado", vi: "lốc xoáy", ex: "A tornado is a spinning column of strong wind." },
          { w: "hurricane", vi: "bão nhiệt đới lớn", ex: "A hurricane brings heavy rain and strong wind." },
          { w: "snowstorm", vi: "bão tuyết", ex: "A snowstorm brings lots of snow and cold wind." }
        ]
      },
      {
        title: "Lesson 2: How can you measure weather?",
        viTitle: "Đo thời tiết bằng cách nào?",
        facts: [
          { en: "A thermometer measures temperature (how hot or cold the air is).", vi: "Nhiệt kế (thermometer) đo nhiệt độ (nóng hay lạnh)." },
          { en: "A rain gauge measures how much rain falls.", vi: "Ống đo mưa (rain gauge) đo lượng mưa rơi xuống." },
          { en: "A wind vane shows which direction the wind is blowing.", vi: "Chong chóng chỉ hướng gió (wind vane) cho biết hướng gió thổi." }
        ],
        keywords: [
          { w: "measure", vi: "đo lường", ex: "Scientists use tools to measure weather." },
          { w: "thermometer", vi: "nhiệt kế", ex: "A thermometer measures temperature." },
          { w: "temperature", vi: "nhiệt độ", ex: "Temperature tells how hot or cold it is." },
          { w: "rain gauge", vi: "dụng cụ đo lượng mưa", ex: "A rain gauge collects and measures rain." },
          { w: "wind vane", vi: "dụng cụ chỉ hướng gió", ex: "A wind vane points into the wind." }
        ]
      },
      {
        title: "Lesson 3: What are the four seasons?",
        viTitle: "Bốn mùa trong năm",
        facts: [
          { en: "The four seasons are spring, summer, fall (autumn), and winter.", vi: "Bốn mùa là Xuân (spring), Hạ (summer), Thu (fall) và Đông (winter)." },
          { en: "Weather changes in each season: warm & rainy in spring, hot in summer, cool in fall, cold in winter.", vi: "Thời tiết thay đổi theo từng mùa: xuân ấm, hạ nóng, thu mát, đông lạnh." }
        ],
        keywords: [
          { w: "season", vi: "mùa trong năm", ex: "There are four seasons in a year." },
          { w: "spring", vi: "mùa xuân", ex: "Flowers bloom in spring." },
          { w: "summer", vi: "mùa hè", ex: "Summer is the hottest season." },
          { w: "fall", vi: "mùa thu", ex: "Leaves fall from trees in fall." },
          { w: "winter", vi: "mùa đông", ex: "Winter is the coldest season." }
        ]
      }
    ],
    quizzes: [
      { emoji: "🌡️", q: "Which tool measures TEMPERATURE (how hot or cold it is)?", vi: "Dụng cụ nào dùng để đo nhiệt độ?", options: ["A rain gauge", "A thermometer", "A wind vane", "A ruler"], answer: 1, explain: "A thermometer measures temperature!" },
      { emoji: "🌧️", q: "Which tool measures how much RAIN falls?", vi: "Dụng cụ nào đo lượng mưa rơi xuống?", options: ["A rain gauge", "A thermometer", "A wind vane", "A compass"], answer: 0, explain: "A rain gauge collects and measures rain!" },
      { emoji: "🌬️", q: "What does a WIND VANE show?", vi: "Chong chóng chỉ hướng gió (wind vane) cho biết điều gì?", options: ["How hot it is", "Which direction the wind blows", "How much rain fell", "What season it is"], answer: 1, explain: "A wind vane shows which direction the wind is blowing!" },
      { emoji: "⛈️", q: "Where should you go to stay safe during a bad storm?", vi: "Nên ở đâu để an toàn khi có bão lớn?", options: ["Inside a shelter / indoors", "Under a tall tree", "In a swimming pool", "On a bicycle"], answer: 0, explain: "You can stay safe from bad weather inside a shelter!" },
      { emoji: "🍂", q: "What are the FOUR SEASONS in order?", vi: "Bốn mùa trong năm gồm những mùa nào?", options: ["Rain, sun, wind, snow", "Spring, summer, fall, winter", "Solid, liquid, gas, plasma", "City, country, marsh, ocean"], answer: 1, explain: "The four seasons are spring, summer, fall, and winter!" }
    ]
  },

  {
    id: "unit7",
    num: 7,
    domain: "Physical Science",
    emoji: "🧊",
    color: "#6366f1",
    title: "Matter",
    viTitle: "Vật chất",
    bigQuestion: "How can you describe matter?",
    viBigQuestion: "Em mô tả vật chất như thế nào?",
    pages: "Pages 76–87",
    hk1: true,
    lessons: [
      {
        title: "Lesson 1: What is matter? (p. 77–80)",
        viTitle: "Vật chất là gì?",
        facts: [
          { en: "Matter is anything that takes up space and has mass.", vi: "Vật chất là bất cứ thứ gì chiếm không gian và có khối lượng." },
          { en: "We describe objects by color, shape, size, texture (hard/soft/smooth), weight (heavy/light), temperature, and material (plastic/metal).", vi: "Ta mô tả vật theo màu sắc, hình dạng, kích cỡ, bề mặt, cân nặng, nhiệt độ và chất liệu." },
          { en: "Float = stay on top of a liquid (ice cubes, pumice). Sink = fall to the bottom.", vi: "Nổi (float) = ở trên mặt chất lỏng. Chìm (sink) = rơi xuống đáy." }
        ],
        keywords: [
          { w: "matter", vi: "vật chất", ex: "Everything around us is matter." },
          { w: "mass", vi: "khối lượng", ex: "Mass is the amount of matter in an object." },
          { w: "weight", vi: "trọng lượng", ex: "Weight is how heavy an object is." },
          { w: "float", vi: "nổi", ex: "Ice cubes float in lemonade." },
          { w: "sink", vi: "chìm", ex: "Heavy metal keys sink in water." }
        ]
      },
      {
        title: "Lesson 2: Solids, Liquids, and Gases (p. 81–83)",
        viTitle: "Chất rắn, chất lỏng và chất khí",
        facts: [
          { en: "A solid keeps its own shape and size when you move it.", vi: "Chất rắn giữ nguyên hình dạng và kích thước khi di chuyển." },
          { en: "A liquid takes the shape of its container and can be poured. A gas fills ALL of its container.", vi: "Chất lỏng có hình dạng của vật chứa và rót được. Chất khí lấp đầy toàn bộ vật chứa." },
          { en: "Freeze (liquid → solid), Melt (solid → liquid), Boil (liquid → gas).", vi: "Đóng băng (lỏng → rắn), Tan chảy (rắn → lỏng), Đun sôi (lỏng → khí)." }
        ],
        keywords: [
          { w: "solid", vi: "chất rắn", ex: "A box and a teddy bear are solids." },
          { w: "liquid", vi: "chất lỏng", ex: "Water and lemonade are liquids." },
          { w: "gas", vi: "chất khí", ex: "Air is a gas you cannot see." },
          { w: "freeze", vi: "đóng băng", ex: "Water freezes into ice when very cold." },
          { w: "melt", vi: "tan chảy", ex: "Ice melts when it gets warm." },
          { w: "boil", vi: "sôi", ex: "Boiling heats a liquid into a gas." }
        ]
      },
      {
        title: "Lesson 3: How can matter change? (p. 84–85)",
        viTitle: "Vật chất thay đổi như thế nào?",
        facts: [
          { en: "Bending a straw or cutting/folding paper changes shape, but it is still the same matter.", vi: "Uốn ống hút hoặc cắt/gấp giấy làm đổi hình dạng nhưng không đổi chất." },
          { en: "Burning wood changes it into ash, water, and gas (cannot change back!).", vi: "Đốt gỗ tạo ra tro, nước và khí (không thể biến lại thành gỗ)." },
          { en: "Wet iron + oxygen = rust. Rust breaks easily and cannot change back into iron.", vi: "Sắt ướt + ô-xy = gỉ sắt. Gỉ sắt dễ vỡ và không biến lại thành sắt." }
        ],
        keywords: [
          { w: "ash", vi: "tro", ex: "Burning wood turns into ash." },
          { w: "iron", vi: "sắt", ex: "Iron is a strong metal." },
          { w: "rust", vi: "gỉ sắt", ex: "Wet iron turns into orange rust." },
          { w: "oxygen", vi: "khí ô-xy", ex: "Oxygen is a gas in the air." }
        ]
      }
    ],
    reuseSubjectQuiz: ["u71", "u72", "u73"]
  },

  {
    id: "unit8",
    num: 8,
    domain: "Physical Science",
    emoji: "⚡",
    color: "#ec4899",
    title: "Energy",
    viTitle: "Năng lượng (Điện, Ánh sáng & Âm thanh)",
    bigQuestion: "What can energy do?",
    viBigQuestion: "Năng lượng có thể làm gì?",
    pages: "Pages 88–99",
    hk1: false,
    lessons: [
      {
        title: "Lesson 1: How do we use energy?",
        viTitle: "Chúng ta dùng năng lượng thế nào?",
        facts: [
          { en: "Energy can cause change or do work.", vi: "Năng lượng có thể tạo ra sự thay đổi hoặc thực hiện công việc." },
          { en: "Electricity is a kind of energy. Batteries store energy and change it into electricity.", vi: "Điện là một dạng năng lượng. Pin lưu trữ năng lượng và chuyển thành điện." },
          { en: "Fuel (like gasoline) burns to make heat or power an engine. Moving water also has energy.", vi: "Nhiên liệu (như xăng) cháy để tạo nhiệt hoặc chạy động cơ. Nước chảy cũng có năng lượng." }
        ],
        keywords: [
          { w: "energy", vi: "năng lượng", ex: "Energy makes things move, light up, and warm up." },
          { w: "electricity", vi: "điện năng", ex: "TVs and lamps use electricity." },
          { w: "fuel", vi: "nhiên liệu", ex: "Wood and gasoline are fuels." },
          { w: "gasoline", vi: "xăng", ex: "Many cars use gasoline in their engine." },
          { w: "battery", vi: "cục pin", ex: "A flashlight uses a battery for electricity." }
        ]
      },
      {
        title: "Lesson 2: What is light?",
        viTitle: "Ánh sáng là gì?",
        facts: [
          { en: "Light is energy that helps us see. It comes from the sun, lamps, and fire.", vi: "Ánh sáng là năng lượng giúp ta nhìn thấy (từ mặt trời, đèn, lửa)." },
          { en: "Light passes through clear things (like glass) and makes a shadow when blocked by solid objects.", vi: "Ánh sáng đi xuyên qua vật trong suốt và tạo bóng râm (shadow) khi bị vật cản." },
          { en: "Light can bounce off shiny things like mirrors.", vi: "Ánh sáng có thể phản xạ (bật lại) trên bề mặt sáng bóng như gương." }
        ],
        keywords: [
          { w: "light", vi: "ánh sáng", ex: "Light travels in straight lines." },
          { w: "shadow", vi: "cái bóng", ex: "A shadow forms when an object blocks light." }
        ]
      },
      {
        title: "Lesson 3: What is sound?",
        viTitle: "Âm thanh là gì?",
        facts: [
          { en: "Sound is energy that comes from objects that vibrate (move back and forth quickly).", vi: "Âm thanh phát ra khi vật rung động (vibrate)." },
          { en: "Sounds can be loud or soft (volume), and high or low (pitch).", vi: "Âm thanh có thể to (loud) hoặc nhỏ (soft), cao (high) hoặc trầm (low)." }
        ],
        keywords: [
          { w: "sound", vi: "âm thanh", ex: "We hear sound with our ears." },
          { w: "vibrate", vi: "rung động", ex: "Guitar strings vibrate to make sound." },
          { w: "loud / soft", vi: "to / nhỏ", ex: "A drum is loud; a whisper is soft." },
          { w: "high / low", vi: "cao / trầm", ex: "A whistle is high; a big tuba is low." }
        ]
      }
    ],
    quizzes: [
      { emoji: "🔋", q: "What stores energy and changes it into ELECTRICITY for toys or flashlights?", vi: "Thứ gì lưu trữ năng lượng và chuyển thành điện cho đồ chơi/đèn pin?", options: ["A battery", "A shadow", "A rock", "A rain gauge"], answer: 0, explain: "Batteries store energy and change it into electricity!" },
      { emoji: "🚗", q: "What kind of energy burns in a car's engine to make power?", vi: "Dạng năng lượng nào cháy trong động cơ xe để tạo lực?", options: ["Fuel (gasoline)", "Shadow", "Gravity", "Soil"], answer: 0, explain: "Fuel energy (like gasoline) burns to make heat or power!" },
      { emoji: "👤", q: "How is a SHADOW made?", vi: "Cái bóng (shadow) được tạo ra như thế nào?", options: ["When an object blocks light", "When water freezes", "When strings vibrate", "When wind blows"], answer: 0, explain: "Light makes a shadow when an object blocks it!" },
      { emoji: "🪞", q: "What happens when light hits a shiny MIRROR?", vi: "Điều gì xảy ra khi ánh sáng chiếu vào chiếc gương sáng bóng?", options: ["It freezes", "It bounces off", "It turns to ash", "It vibrates"], answer: 1, explain: "Light can bounce off shiny things like mirrors!" },
      { emoji: "🎸", q: "How is SOUND made?", vi: "Âm thanh được tạo ra bằng cách nào?", options: ["When objects vibrate", "When objects stay completely still", "When light shines", "When ice melts"], answer: 0, explain: "Sound comes from objects that vibrate (move back and forth quickly)!" }
    ]
  },

  {
    id: "unit9",
    num: 9,
    domain: "Physical Science",
    emoji: "🚀",
    color: "#8b5cf6",
    title: "Movement",
    viTitle: "Chuyển động, Lực & Trọng lực",
    bigQuestion: "How can you describe ways objects move?",
    viBigQuestion: "Em mô tả các cách đồ vật chuyển động như thế nào?",
    pages: "Pages 100–111",
    hk1: false,
    lessons: [
      {
        title: "Lesson 1: How can objects move?",
        viTitle: "Đồ vật chuyển động như thế nào?",
        facts: [
          { en: "Objects can move in different ways: straight, curved, around and around, or zigzag.", vi: "Đồ vật có thể chuyển động thẳng, cong, xoay tròn hoặc dích dắc." },
          { en: "Speed tells how fast or slow an object moves (quickly or slowly).", vi: "Tốc độ (speed) cho biết vật chuyển động nhanh hay chậm." }
        ],
        keywords: [
          { w: "straight", vi: "đường thẳng", ex: "A train moves in a straight line on straight tracks." },
          { w: "curved", vi: "đường cong", ex: "A roller coaster goes on a curved track." },
          { w: "zigzag", vi: "đường dích dắc", ex: "A skier can move in a zigzag path." },
          { w: "speed", vi: "tốc độ", ex: "A cheetah moves at high speed (quickly)." }
        ]
      },
      {
        title: "Lesson 2: What is a force?",
        viTitle: "Lực là gì?",
        facts: [
          { en: "A force is a push or a pull.", vi: "Lực (force) là một lực đẩy (push) hoặc lực kéo (pull)." },
          { en: "A force can make an object start moving, stop, speed up, slow down, or change direction.", vi: "Lực có thể làm vật bắt đầu chạy, dừng lại, nhanh hơn, chậm lại hoặc đổi hướng." },
          { en: "A bigger force moves an object faster or farther than a smaller force.", vi: "Lực mạnh hơn đẩy vật đi nhanh hơn hoặc xa hơn lực yếu." }
        ],
        keywords: [
          { w: "force", vi: "lực", ex: "You use a force to kick a soccer ball." },
          { w: "push", vi: "đẩy", ex: "Push the swing to make it go higher." },
          { w: "pull", vi: "kéo", ex: "Pull the wagon behind you." },
          { w: "direction", vi: "hướng chuyển động", ex: "Hitting a ball with a bat changes its direction." },
          { w: "motion", vi: "sự chuyển động", ex: "A force changes an object's motion." }
        ]
      },
      {
        title: "Lesson 3: What is gravity?",
        viTitle: "Trọng lực là gì?",
        facts: [
          { en: "Gravity is a force that PULLS objects toward Earth (the ground).", vi: "Trọng lực (gravity) là lực KÉO mọi vật về phía Trái Đất (mặt đất)." },
          { en: "When you jump or throw a ball up, gravity pulls it back down.", vi: "Khi bạn nhảy lên hoặc ném bóng lên, trọng lực kéo bóng rơi trở xuống." }
        ],
        keywords: [
          { w: "gravity", vi: "trọng lực", ex: "Gravity pulls apples down from a tree to the ground." },
          { w: "ground", vi: "mặt đất", ex: "Gravity pulls things toward the ground." }
        ]
      }
    ],
    quizzes: [
      { emoji: "🤝", q: "What is a FORCE?", vi: "Lực (force) là gì?", options: ["A push or a pull", "A kind of weather", "A solid rock", "A shadow"], answer: 0, explain: "A force is a push or a pull!" },
      { emoji: "⚾", q: "When a batter hits a baseball, what does the force change?", vi: "Khi gậy đánh trúng quả bóng chày, lực làm thay đổi điều gì?", options: ["Its direction and motion", "Its color", "It turns into a gas", "It turns into rust"], answer: 0, explain: "Force can change the direction and speed of a moving object!" },
      { emoji: "🍎", q: "What force PULLS an apple down from a tree toward Earth?", vi: "Lực nào kéo quả táo rơi từ trên cây xuống mặt đất?", options: ["Gravity", "Electricity", "Weathering", "Light"], answer: 0, explain: "Gravity is a pull that pulls objects toward Earth!" },
      { emoji: "⚡", q: "Moving back and forth in sharp turns (like a lightning bolt) is moving in a ___.", vi: "Chuyển động rẽ gấp qua lại liên tục gọi là đường gì?", options: ["straight line", "zigzag", "circle", "shadow"], answer: 1, explain: "A zigzag path moves back and forth with sharp turns!" },
      { emoji: "🐢", q: "What word describes how fast or slow an object moves?", vi: "Từ nào mô tả vật chuyển động nhanh hay chậm?", options: ["Speed", "Gravity", "Sound", "Fuel"], answer: 0, explain: "Speed tells how quickly or slowly something moves!" }
    ]
  }
];
