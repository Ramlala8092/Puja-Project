import { lakshmiPujaSteps } from "./pujaSteps.js";


export const pujaData = [
  {
    id: "lakshmi-puja",
    title: {
      en: "Lakshmi Puja",
      hi: "लक्ष्मी पूजा",
    },
    festival: {
      en: "Diwali",
      hi: "दीपावली",
    },
    time: "30–45 min",
    price: 11,
    emoji: "🪔",
    color: "from-orange-500 to-amber-500",
    significance: {
      en: "Lakshmi Puja is performed on Diwali to seek blessings of Goddess Lakshmi for prosperity, peace and abundance in the home.",
      hi: "दीपावली पर मां लक्ष्मी की पूजा धन, समृद्धि, शांति और सुख-समृद्धि की कामना के लिए की जाती है।",
    },
    materials: {
      en: [
        "Goddess Lakshmi idol/photo",
        "Ganesha idol/photo",
        "Diya",
        "Cotton wicks",
        "Oil or ghee",
        "Flowers",
        "Rice",
        "Kumkum",
        "Turmeric",
        "Incense sticks",
        "Camphor",
        "Fruits",
        "Sweets",
        "Coins",
        "Kalash",
      ],
      hi: [
        "मां लक्ष्मी की प्रतिमा/चित्र",
        "श्री गणेश की प्रतिमा/चित्र",
        "दीया",
        "रुई की बत्ती",
        "तेल या घी",
        "फूल",
        "चावल",
        "कुमकुम",
        "हल्दी",
        "अगरबत्ती",
        "कपूर",
        "फल",
        "मिठाई",
        "सिक्के",
        "कलश",
      ],
    },
    steps: lakshmiPujaSteps,
  },

  {
    id: "durga-puja",
    title: {
      en: "Durga Puja",
      hi: "दुर्गा पूजा",
    },
    festival: {
      en: "Dashahara",
      hi: "दशहरा",
    },
    time: "40–60 min",
    price: 21,
    emoji: "🌺",
    color: "from-red-500 to-orange-500",
    significance: {
      en: "Durga Puja celebrates the divine power of Goddess Durga and symbolizes the victory of righteousness over negativity.",
      hi: "दुर्गा पूजा मां दुर्गा की शक्ति और बुराई पर अच्छाई की विजय का प्रतीक है।",
    },
    materials: {
      en: [
        "Durga idol/photo",
        "Flowers",
        "Kumkum",
        "Rice",
        "Turmeric",
        "Diya",
        "Incense",
        "Fruits",
        "Sweets",
        "Coconut",
        "Kalash",
        "Red cloth",
      ],
      hi: [
        "मां दुर्गा की प्रतिमा/चित्र",
        "फूल",
        "कुमकुम",
        "अक्षत",
        "हल्दी",
        "दीया",
        "अगरबत्ती",
        "फल",
        "मिठाई",
        "नारियल",
        "कलश",
        "लाल वस्त्र",
      ],
    },
    steps: [
      {
        title: {
          en: "Clean & Prepare",
          hi: "स्थान की तैयारी",
        },
        instruction: {
          en: "Clean the worship area and place the Durga idol or picture on a decorated platform.",
          hi: "पूजा स्थान को साफ करके सजी हुई चौकी पर मां दुर्गा की प्रतिमा या चित्र स्थापित करें।",
        },
        mantra: "ॐ दुं दुर्गायै नमः।",
      },
      {
        title: {
          en: "Kalash Sthapana",
          hi: "कलश स्थापना",
        },
        instruction: {
          en: "Prepare a clean kalash and place it respectfully near the deity.",
          hi: "स्वच्छ कलश तैयार करके देवी के पास श्रद्धापूर्वक स्थापित करें।",
        },
        mantra: "ॐ कलशाय नमः।",
      },
      {
        title: {
          en: "Offerings",
          hi: "पूजा सामग्री अर्पित करें",
        },
        instruction: {
          en: "Offer flowers, rice, kumkum, fruits and sweets while remembering Goddess Durga.",
          hi: "मां दुर्गा का स्मरण करते हुए फूल, अक्षत, कुमकुम, फल और मिठाई अर्पित करें।",
        },
        mantra: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे।",
      },
      {
        title: {
          en: "Durga Prayer",
          hi: "दुर्गा प्रार्थना",
        },
        instruction: {
          en: "Recite a Durga prayer or selected verses according to your family tradition.",
          hi: "अपने परिवार की परंपरा के अनुसार दुर्गा प्रार्थना या उपयुक्त स्तोत्र का पाठ करें।",
        },
        mantra: "ॐ दुं दुर्गायै नमः।",
      },
      {
        title: {
          en: "Aarti",
          hi: "आरती",
        },
        instruction: {
          en: "Perform aarti with a diya and conclude the puja with prayers for family well-being.",
          hi: "दीपक से आरती करें और परिवार के कल्याण की प्रार्थना के साथ पूजा पूर्ण करें।",
        },
        mantra: "जय अम्बे गौरी।",
      },
    ],
  },

  {
    id: "ganesh-chaturthi",
    title: {
      en: "Ganesh Chaturthi",
      hi: "गणेश चतुर्थी",
    },
    festival: {
      en: "Ganesh Chaturthi",
      hi: "गणेश चतुर्थी",
    },
    time: "30–45 min",
    price: 11,
    emoji: "🐘",
    color: "from-amber-500 to-yellow-500",
    significance: {
      en: "Ganesh Chaturthi celebrates Lord Ganesha, traditionally worshipped as the remover of obstacles and the giver of wisdom.",
      hi: "गणेश चतुर्थी भगवान गणेश की आराधना का पर्व है। उन्हें विघ्नहर्ता और बुद्धि के देवता माना जाता है।",
    },
    materials: {
      en: [
        "Ganesha idol",
        "Durva grass",
        "Flowers",
        "Modak",
        "Rice",
        "Kumkum",
        "Turmeric",
        "Diya",
        "Incense",
        "Fruits",
        "Coconut",
      ],
      hi: [
        "गणेश जी की प्रतिमा",
        "दूर्वा",
        "फूल",
        "मोदक",
        "अक्षत",
        "कुमकुम",
        "हल्दी",
        "दीया",
        "अगरबत्ती",
        "फल",
        "नारियल",
      ],
    },
    steps: [
      {
        title: { en: "Install Ganesha", hi: "गणेश स्थापना" },
        instruction: {
          en: "Place the Ganesha idol on a clean decorated platform.",
          hi: "गणेश जी की प्रतिमा को स्वच्छ और सजी हुई चौकी पर स्थापित करें।",
        },
        mantra: "ॐ गं गणपतये नमः।",
      },
      {
        title: { en: "Sankalp", hi: "संकल्प" },
        instruction: {
          en: "Take a simple personal sankalp for performing the puja with devotion.",
          hi: "श्रद्धापूर्वक पूजा करने का संकल्प लें।",
        },
        mantra: "ॐ गणाधिपतये नमः।",
      },
      {
        title: { en: "Offer Durva", hi: "दूर्वा अर्पित करें" },
        instruction: {
          en: "Offer durva grass, flowers and kumkum to Lord Ganesha.",
          hi: "भगवान गणेश को दूर्वा, फूल और कुमकुम अर्पित करें।",
        },
        mantra: "ॐ एकदन्ताय नमः।",
      },
      {
        title: { en: "Offer Modak", hi: "मोदक अर्पित करें" },
        instruction: {
          en: "Offer modak or another suitable sweet as naivedya.",
          hi: "मोदक या उपयुक्त मिठाई का नैवेद्य अर्पित करें।",
        },
        mantra: "ॐ विघ्नराजाय नमः।",
      },
      {
        title: { en: "Aarti", hi: "आरती" },
        instruction: {
          en: "Perform Ganesha aarti and seek blessings for wisdom and removal of obstacles.",
          hi: "गणेश जी की आरती करके बुद्धि और विघ्नों से मुक्ति का आशीर्वाद मांगें।",
        },
        mantra: "सुखकर्ता दुखहर्ता वार्ता विघ्नाची।",
      },
    ],
  },

  {
    id: "satyanarayan-vrat",
    title: {
      en: "Satyanarayan Vrat Katha",
      hi: "सत्यनारायण व्रत कथा",
    },
    festival: {
      en: "Vrat Katha",
      hi: "व्रत कथा",
    },
    time: "60–90 min",
    price: 21,
    emoji: "🪷",
    color: "from-blue-500 to-indigo-500",
    significance: {
      en: "Satyanarayan Puja is traditionally performed with devotion and the recitation of the Satyanarayan Katha.",
      hi: "सत्यनारायण पूजा श्रद्धा के साथ की जाती है और इसमें सत्यनारायण कथा का पाठ किया जाता है।",
    },
    materials: {
      en: [
        "Vishnu idol/photo",
        "Kalash",
        "Coconut",
        "Banana",
        "Tulsi leaves",
        "Flowers",
        "Rice",
        "Kumkum",
        "Panchamrit",
        "Prasad",
        "Diya",
      ],
      hi: [
        "विष्णु जी की प्रतिमा/चित्र",
        "कलश",
        "नारियल",
        "केला",
        "तुलसी दल",
        "फूल",
        "अक्षत",
        "कुमकुम",
        "पंचामृत",
        "प्रसाद",
        "दीया",
      ],
    },
    steps: [
      {
        title: { en: "Prepare the Altar", hi: "वेदी तैयार करें" },
        instruction: {
          en: "Clean the altar and establish Lord Vishnu's image with a kalash.",
          hi: "वेदी को साफ करके कलश के साथ भगवान विष्णु की प्रतिमा स्थापित करें।",
        },
        mantra: "ॐ नमो नारायणाय।",
      },
      {
        title: { en: "Sankalp", hi: "संकल्प" },
        instruction: {
          en: "Take the sankalp for the vrat and puja according to your family practice.",
          hi: "अपने परिवार की परंपरा के अनुसार व्रत और पूजा का संकल्प लें।",
        },
        mantra: "ॐ सत्यदेवाय नमः।",
      },
      {
        title: { en: "Panchamrit Offering", hi: "पंचामृत अर्पण" },
        instruction: {
          en: "Offer panchamrit and other devotional offerings to Lord Vishnu.",
          hi: "भगवान विष्णु को पंचामृत और अन्य पूजा सामग्री अर्पित करें।",
        },
        mantra: "ॐ विष्णवे नमः।",
      },
      {
        title: { en: "Read Katha", hi: "कथा पाठ" },
        instruction: {
          en: "Read the Satyanarayan Katha attentively with family members.",
          hi: "परिवार के साथ श्रद्धापूर्वक सत्यनारायण कथा का पाठ करें।",
        },
        mantra: "ॐ श्री सत्यनारायणाय नमः।",
      },
      {
        title: { en: "Prasad & Aarti", hi: "प्रसाद और आरती" },
        instruction: {
          en: "Offer the prepared prasad, perform aarti and distribute prasad.",
          hi: "प्रसाद अर्पित करके आरती करें और सभी को प्रसाद वितरित करें।",
        },
        mantra: "ॐ नमो भगवते वासुदेवाय।",
      },
    ],
  },

  {
    id: "karwa-chauth",
    title: {
      en: "Karwa Chauth",
      hi: "करवा चौथ",
    },
    festival: {
      en: "Karwa Chauth",
      hi: "करवा चौथ",
    },
    time: "30–45 min",
    price: 11,
    emoji: "🌙",
    color: "from-pink-500 to-rose-500",
    significance: {
      en: "Karwa Chauth is traditionally observed as a day of fasting and prayer, especially associated with marital well-being.",
      hi: "करवा चौथ पारंपरिक रूप से व्रत और पूजा का पर्व है, जो वैवाहिक सुख और मंगलकामना से जुड़ा है।",
    },
    materials: {
      en: [
        "Karwa",
        "Diya",
        "Sieve",
        "Flowers",
        "Kumkum",
        "Rice",
        "Water",
        "Fruits",
        "Sweets",
        "Chunri",
      ],
      hi: [
        "करवा",
        "दीया",
        "छलनी",
        "फूल",
        "कुमकुम",
        "अक्षत",
        "जल",
        "फल",
        "मिठाई",
        "चुनरी",
      ],
    },
    steps: [
      {
        title: { en: "Prepare Puja Thali", hi: "पूजा थाली तैयार करें" },
        instruction: {
          en: "Arrange the karwa, diya, kumkum, rice and other puja items.",
          hi: "करवा, दीपक, कुमकुम, अक्षत और अन्य पूजा सामग्री थाली में रखें।",
        },
        mantra: "ॐ नमः शिवाय।",
      },
      {
        title: { en: "Gauri Prayer", hi: "गौरी पूजा" },
        instruction: {
          en: "Offer flowers and kumkum while praying to Goddess Gauri.",
          hi: "मां गौरी को फूल और कुमकुम अर्पित करके प्रार्थना करें।",
        },
        mantra: "ॐ गौर्यै नमः।",
      },
      {
        title: { en: "Karwa Puja", hi: "करवा पूजा" },
        instruction: {
          en: "Worship the karwa and perform the traditional prayer according to your family custom.",
          hi: "करवा की पूजा करें और परिवार की परंपरा के अनुसार पूजा करें।",
        },
        mantra: "ॐ करकाय नमः।",
      },
      {
        title: { en: "Moon Prayer", hi: "चंद्र पूजा" },
        instruction: {
          en: "After moonrise, offer water to the moon according to your tradition.",
          hi: "चंद्रोदय के बाद अपनी परंपरा के अनुसार चंद्रमा को अर्घ्य दें।",
        },
        mantra: "ॐ सोमाय नमः।",
      },
      {
        title: { en: "Complete the Ritual", hi: "पूजा पूर्ण करें" },
        instruction: {
          en: "Complete the prayer and seek blessings for the family.",
          hi: "प्रार्थना पूर्ण करके परिवार के मंगल की कामना करें।",
        },
        mantra: "ॐ सर्वे भवन्तु सुखिनः।",
      },
    ],
  },

  {
    id: "chhath-puja",
    title: {
      en: "Chhath Puja",
      hi: "छठ पूजा",
    },
    festival: {
      en: "Chhath",
      hi: "छठ",
    },
    time: "60–90 min",
    price: 21,
    emoji: "🌅",
    color: "from-orange-500 to-yellow-500",
    significance: {
      en: "Chhath Puja is a traditional worship of the Sun and associated deities, observed with devotion, discipline and offerings.",
      hi: "छठ पूजा सूर्य देव और संबंधित देव शक्तियों की आराधना का पारंपरिक पर्व है।",
    },
    materials: {
      en: [
        "Bamboo basket",
        "Thekua",
        "Fruits",
        "Sugarcane",
        "Coconut",
        "Banana",
        "Diya",
        "Milk",
        "Water",
        "Flowers",
      ],
      hi: [
        "बांस की टोकरी",
        "ठेकुआ",
        "फल",
        "गन्ना",
        "नारियल",
        "केला",
        "दीया",
        "दूध",
        "जल",
        "फूल",
      ],
    },
    steps: [
      {
        title: { en: "Prepare Offerings", hi: "प्रसाद तैयार करें" },
        instruction: {
          en: "Arrange traditional fruits, thekua and other offerings in clean baskets.",
          hi: "ठेकुआ, फल और अन्य पारंपरिक प्रसाद को स्वच्छ टोकरी में सजाएं।",
        },
        mantra: "ॐ आदित्याय नमः।",
      },
      {
        title: { en: "Prepare the Ghat", hi: "घाट की तैयारी" },
        instruction: {
          en: "Keep the worship area clean and arrange the offerings respectfully.",
          hi: "पूजा स्थान को साफ रखें और प्रसाद को श्रद्धापूर्वक व्यवस्थित करें।",
        },
        mantra: "ॐ सूर्याय नमः।",
      },
      {
        title: { en: "Sun Worship", hi: "सूर्य पूजा" },
        instruction: {
          en: "Offer water and traditional offerings to the Sun according to the customary ritual.",
          hi: "परंपरा के अनुसार सूर्य देव को अर्घ्य और प्रसाद अर्पित करें।",
        },
        mantra: "ॐ भास्कराय नमः।",
      },
      {
        title: { en: "Prayers", hi: "प्रार्थना" },
        instruction: {
          en: "Pray for health, prosperity and well-being of the family.",
          hi: "परिवार के स्वास्थ्य, समृद्धि और मंगल के लिए प्रार्थना करें।",
        },
        mantra: "ॐ मित्राय नमः।",
      },
      {
        title: { en: "Conclude", hi: "समापन" },
        instruction: {
          en: "Complete the ritual respectfully and distribute suitable prasad.",
          hi: "पूजा को श्रद्धापूर्वक पूर्ण करके प्रसाद वितरित करें।",
        },
        mantra: "ॐ सूर्य नारायणाय नमः।",
      },
    ],
  },

  {
    id: "maha-shivratri",
    title: {
      en: "Maha Shivratri",
      hi: "महाशिवरात्रि",
    },
    festival: {
      en: "Maha Shivratri",
      hi: "महाशिवरात्रि",
    },
    time: "30–60 min",
    price: 11,
    emoji: "🔱",
    color: "from-slate-700 to-indigo-700",
    significance: {
      en: "Maha Shivratri is a major festival dedicated to Lord Shiva and is traditionally observed with prayer, fasting and worship.",
      hi: "महाशिवरात्रि भगवान शिव को समर्पित प्रमुख पर्व है, जिसमें व्रत और शिव पूजा की जाती है।",
    },
    materials: {
      en: [
        "Shiva Lingam",
        "Water",
        "Milk",
        "Bilva leaves",
        "Flowers",
        "Sandalwood",
        "Incense",
        "Diya",
        "Fruits",
        "Prasad",
      ],
      hi: [
        "शिवलिंग",
        "जल",
        "दूध",
        "बेलपत्र",
        "फूल",
        "चंदन",
        "अगरबत्ती",
        "दीया",
        "फल",
        "प्रसाद",
      ],
    },
    steps: [
      {
        title: { en: "Clean the Space", hi: "स्थान की सफाई" },
        instruction: {
          en: "Clean the puja area and prepare the Shiva Lingam for worship.",
          hi: "पूजा स्थान को साफ करके शिवलिंग को पूजा के लिए तैयार करें।",
        },
        mantra: "ॐ नमः शिवाय।",
      },
      {
        title: { en: "Abhishek", hi: "अभिषेक" },
        instruction: {
          en: "Offer water and other traditional offerings according to your practice.",
          hi: "अपनी परंपरा के अनुसार जल और अन्य अभिषेक सामग्री अर्पित करें।",
        },
        mantra: "ॐ महेश्वराय नमः।",
      },
      {
        title: { en: "Bilva Offering", hi: "बेलपत्र अर्पण" },
        instruction: {
          en: "Offer clean bilva leaves and flowers with devotion.",
          hi: "स्वच्छ बेलपत्र और फूल श्रद्धापूर्वक अर्पित करें।",
        },
        mantra: "ॐ त्र्यम्बकाय नमः।",
      },
      {
        title: { en: "Shiva Prayer", hi: "शिव प्रार्थना" },
        instruction: {
          en: "Recite Shiva mantras or prayers suitable to your family tradition.",
          hi: "परिवार की परंपरा के अनुसार शिव मंत्र या प्रार्थना का पाठ करें।",
        },
        mantra: "ॐ नमः शिवाय।",
      },
      {
        title: { en: "Aarti", hi: "आरती" },
        instruction: {
          en: "Perform aarti and conclude with a peaceful prayer.",
          hi: "आरती करके शांतिपूर्वक प्रार्थना के साथ पूजा पूर्ण करें।",
        },
        mantra: "हर हर महादेव।",
      },
    ],
  },

  {
    id: "janmashtami",
    title: {
      en: "Janmashtami",
      hi: "जन्माष्टमी",
    },
    festival: {
      en: "Krishna Janmashtami",
      hi: "कृष्ण जन्माष्टमी",
    },
    time: "45–60 min",
    price: 11,
    emoji: "🦚",
    color: "from-blue-600 to-purple-600",
    significance: {
      en: "Janmashtami celebrates the birth of Lord Krishna with devotional singing, prayer and worship.",
      hi: "जन्माष्टमी भगवान श्रीकृष्ण के जन्मोत्सव का पर्व है, जिसे भक्ति और पूजा के साथ मनाया जाता है।",
    },
    materials: {
      en: [
        "Krishna idol",
        "Peacock feather",
        "Tulsi leaves",
        "Butter",
        "Milk",
        "Flowers",
        "Fruits",
        "Flute",
        "Diya",
        "Incense",
      ],
      hi: [
        "श्रीकृष्ण की प्रतिमा",
        "मोर पंख",
        "तुलसी दल",
        "माखन",
        "दूध",
        "फूल",
        "फल",
        "बांसुरी",
        "दीया",
        "अगरबत्ती",
      ],
    },
    steps: [
      {
        title: { en: "Decorate Krishna", hi: "कृष्ण श्रृंगार" },
        instruction: {
          en: "Decorate the Krishna idol and prepare the altar with flowers and devotional items.",
          hi: "श्रीकृष्ण की प्रतिमा का श्रृंगार करें और फूलों से वेदी सजाएं।",
        },
        mantra: "ॐ कृष्णाय नमः।",
      },
      {
        title: { en: "Offer Tulsi", hi: "तुलसी अर्पित करें" },
        instruction: {
          en: "Offer Tulsi leaves, flowers and devotional food offerings.",
          hi: "तुलसी दल, फूल और भोग अर्पित करें।",
        },
        mantra: "ॐ गोविंदाय नमः।",
      },
      {
        title: { en: "Bhajan & Prayer", hi: "भजन और प्रार्थना" },
        instruction: {
          en: "Sing Krishna bhajans or recite devotional prayers.",
          hi: "श्रीकृष्ण के भजन या प्रार्थना का पाठ करें।",
        },
        mantra: "हरे कृष्ण हरे कृष्ण।",
      },
      {
        title: { en: "Birth Celebration", hi: "जन्मोत्सव" },
        instruction: {
          en: "At the traditional time of celebration, perform the customary birth ceremony.",
          hi: "परंपरा के अनुसार जन्मोत्सव की पूजा करें।",
        },
        mantra: "ॐ देवकीनन्दनाय नमः।",
      },
      {
        title: { en: "Aarti", hi: "आरती" },
        instruction: {
          en: "Perform Krishna aarti and distribute prasad.",
          hi: "श्रीकृष्ण की आरती करके प्रसाद वितरित करें।",
        },
        mantra: "जय कन्हैया लाल की।",
      },
    ],
  },

  {
    id: "ram-navami",
    title: {
      en: "Ram Navami",
      hi: "राम नवमी",
    },
    festival: {
      en: "Ram Navami",
      hi: "राम नवमी",
    },
    time: "30–45 min",
    price: 11,
    emoji: "🏹",
    color: "from-orange-500 to-red-500",
    significance: {
      en: "Ram Navami commemorates the birth of Lord Rama and is observed through prayer and devotional worship.",
      hi: "राम नवमी भगवान श्रीराम के जन्मोत्सव का पर्व है, जिसे पूजा और भक्ति के साथ मनाया जाता है।",
    },
    materials: {
      en: [
        "Rama idol/photo",
        "Sita idol/photo",
        "Flowers",
        "Tulsi",
        "Rice",
        "Kumkum",
        "Diya",
        "Fruits",
        "Sweets",
      ],
      hi: [
        "श्रीराम की प्रतिमा/चित्र",
        "सीता जी की प्रतिमा/चित्र",
        "फूल",
        "तुलसी",
        "अक्षत",
        "कुमकुम",
        "दीया",
        "फल",
        "मिठाई",
      ],
    },
    steps: [
      {
        title: { en: "Establish Rama", hi: "राम जी की स्थापना" },
        instruction: {
          en: "Place Rama, Sita and associated deity images respectfully on the altar.",
          hi: "श्रीराम, सीता जी और संबंधित देव प्रतिमाओं को वेदी पर स्थापित करें।",
        },
        mantra: "ॐ श्री रामाय नमः।",
      },
      {
        title: { en: "Offer Flowers", hi: "फूल अर्पित करें" },
        instruction: {
          en: "Offer flowers, Tulsi and rice while remembering Lord Rama.",
          hi: "भगवान श्रीराम का स्मरण करते हुए फूल, तुलसी और अक्षत अर्पित करें।",
        },
        mantra: "ॐ राघवाय नमः।",
      },
      {
        title: { en: "Ram Prayer", hi: "राम प्रार्थना" },
        instruction: {
          en: "Recite Ram naam or suitable devotional verses.",
          hi: "राम नाम या उपयुक्त भक्तिपूर्ण स्तोत्र का पाठ करें।",
        },
        mantra: "श्री राम जय राम जय जय राम।",
      },
      {
        title: { en: "Naivedya", hi: "नैवेद्य" },
        instruction: {
          en: "Offer fruits and sweets as naivedya.",
          hi: "फल और मिठाई का नैवेद्य अर्पित करें।",
        },
        mantra: "ॐ रामचन्द्राय नमः।",
      },
      {
        title: { en: "Aarti", hi: "आरती" },
        instruction: {
          en: "Perform aarti and conclude with prayers for peace and righteousness.",
          hi: "आरती करके शांति और धर्म की प्रार्थना करें।",
        },
        mantra: "श्री रामचन्द्र कृपालु भज मन।",
      },
    ],
  },

  {
    id: "hanuman-puja",
    title: {
      en: "Hanuman Chalisa & Puja",
      hi: "हनुमान चालीसा एवं पूजा",
    },
    festival: {
      en: "Hanuman Puja",
      hi: "हनुमान पूजा",
    },
    time: "30–45 min",
    price: 11,
    emoji: "🚩",
    color: "from-red-600 to-orange-600",
    significance: {
      en: "Hanuman worship is traditionally associated with devotion, courage and remembrance of Lord Rama.",
      hi: "हनुमान जी की पूजा भक्ति, साहस और श्रीराम के स्मरण से जुड़ी हुई है।",
    },
    materials: {
      en: [
        "Hanuman idol/photo",
        "Sindoor",
        "Flowers",
        "Jasmine oil",
        "Diya",
        "Incense",
        "Fruits",
        "Sweets",
        "Tulsi",
      ],
      hi: [
        "हनुमान जी की प्रतिमा/चित्र",
        "सिंदूर",
        "फूल",
        "चमेली का तेल",
        "दीया",
        "अगरबत्ती",
        "फल",
        "मिठाई",
        "तुलसी",
      ],
    },
    steps: [
      {
        title: { en: "Prepare the Altar", hi: "वेदी तैयार करें" },
        instruction: {
          en: "Clean the worship space and place Hanuman's image respectfully.",
          hi: "पूजा स्थान को साफ करके हनुमान जी की प्रतिमा स्थापित करें।",
        },
        mantra: "ॐ हनुमते नमः।",
      },
      {
        title: { en: "Offerings", hi: "अर्पण" },
        instruction: {
          en: "Offer flowers and suitable devotional offerings.",
          hi: "फूल और उपयुक्त पूजा सामग्री अर्पित करें।",
        },
        mantra: "ॐ अंजनीसुताय नमः।",
      },
      {
        title: { en: "Hanuman Chalisa", hi: "हनुमान चालीसा" },
        instruction: {
          en: "Recite the Hanuman Chalisa with attention and devotion.",
          hi: "श्रद्धापूर्वक हनुमान चालीसा का पाठ करें।",
        },
        mantra: "श्रीगुरु चरन सरोज रज।",
      },
      {
        title: { en: "Ram Naam", hi: "राम नाम" },
        instruction: {
          en: "Remember Lord Rama and chant Ram naam according to your practice.",
          hi: "भगवान श्रीराम का स्मरण करते हुए राम नाम का जाप करें।",
        },
        mantra: "श्री राम जय राम जय जय राम।",
      },
      {
        title: { en: "Aarti", hi: "आरती" },
        instruction: {
          en: "Perform Hanuman aarti and conclude peacefully.",
          hi: "हनुमान जी की आरती करके पूजा पूर्ण करें।",
        },
        mantra: "ॐ हनुमते नमः।",
      },
    ],
  },

  {
    id: "saraswati-puja",
    title: {
      en: "Saraswati Puja",
      hi: "सरस्वती पूजा",
    },
    festival: {
      en: "Basant Panchami",
      hi: "बसंत पंचमी",
    },
    time: "30–45 min",
    price: 11,
    emoji: "📚",
    color: "from-yellow-400 to-amber-500",
    significance: {
      en: "Saraswati Puja is dedicated to Goddess Saraswati and traditionally associated with knowledge, music and learning.",
      hi: "सरस्वती पूजा ज्ञान, संगीत, विद्या और सीखने की देवी मां सरस्वती को समर्पित है।",
    },
    materials: {
      en: [
        "Saraswati idol/photo",
        "Books",
        "Pen",
        "Flowers",
        "Rice",
        "Kumkum",
        "Diya",
        "Fruits",
        "Sweets",
        "Yellow cloth",
      ],
      hi: [
        "मां सरस्वती की प्रतिमा/चित्र",
        "पुस्तकें",
        "कलम",
        "फूल",
        "अक्षत",
        "कुमकुम",
        "दीया",
        "फल",
        "मिठाई",
        "पीला वस्त्र",
      ],
    },
    steps: [
      {
        title: { en: "Arrange Books", hi: "पुस्तकें रखें" },
        instruction: {
          en: "Place books, notebooks or learning instruments near the deity.",
          hi: "मां सरस्वती की प्रतिमा के पास पुस्तकें और अध्ययन सामग्री रखें।",
        },
        mantra: "ॐ ऐं सरस्वत्यै नमः।",
      },
      {
        title: { en: "Invoke Saraswati", hi: "सरस्वती आवाहन" },
        instruction: {
          en: "Offer flowers and rice while praying for knowledge and wisdom.",
          hi: "ज्ञान और बुद्धि की प्रार्थना करते हुए फूल और अक्षत अर्पित करें।",
        },
        mantra: "ॐ सरस्वत्यै नमः।",
      },
      {
        title: { en: "Offerings", hi: "नैवेद्य" },
        instruction: {
          en: "Offer fruits and sweets suitable for the puja.",
          hi: "उपयुक्त फल और मिठाई का नैवेद्य अर्पित करें।",
        },
        mantra: "ॐ वाग्देव्यै नमः।",
      },
      {
        title: { en: "Prayer", hi: "प्रार्थना" },
        instruction: {
          en: "Recite a Saraswati prayer or your preferred devotional verse.",
          hi: "सरस्वती प्रार्थना या अपनी पसंद का भक्तिपूर्ण पाठ करें।",
        },
        mantra: "या कुन्देन्दुतुषारहारधवला।",
      },
      {
        title: { en: "Aarti", hi: "आरती" },
        instruction: {
          en: "Perform aarti and seek blessings for learning and creativity.",
          hi: "आरती करके विद्या और रचनात्मकता के लिए आशीर्वाद मांगें।",
        },
        mantra: "ॐ ऐं सरस्वत्यै नमः।",
      },
    ],
  },

  {
    id: "vishwakarma-puja",
    title: {
      en: "Vishwakarma Puja",
      hi: "विश्वकर्मा पूजा",
    },
    festival: {
      en: "Vishwakarma Puja",
      hi: "विश्वकर्मा पूजा",
    },
    time: "30–45 min",
    price: 11,
    emoji: "🔧",
    color: "from-cyan-500 to-blue-600",
    significance: {
      en: "Vishwakarma Puja honors Vishwakarma and is traditionally associated with craftsmanship, tools, machines and workspaces.",
      hi: "विश्वकर्मा पूजा शिल्प, औजार, मशीन और कार्यस्थल से जुड़ी पारंपरिक पूजा है।",
    },
    materials: {
      en: [
        "Vishwakarma image",
        "Tools",
        "Flowers",
        "Rice",
        "Kumkum",
        "Turmeric",
        "Diya",
        "Incense",
        "Fruits",
        "Sweets",
      ],
      hi: [
        "विश्वकर्मा जी का चित्र",
        "औजार",
        "फूल",
        "अक्षत",
        "कुमकुम",
        "हल्दी",
        "दीया",
        "अगरबत्ती",
        "फल",
        "मिठाई",
      ],
    },
    steps: [
      {
        title: { en: "Clean Workspace", hi: "कार्यस्थल की सफाई" },
        instruction: {
          en: "Clean the workspace and arrange tools respectfully.",
          hi: "कार्यस्थल को साफ करके औजारों को व्यवस्थित करें।",
        },
        mantra: "ॐ विश्वकर्मणे नमः।",
      },
      {
        title: { en: "Establish Deity", hi: "देव स्थापना" },
        instruction: {
          en: "Place the Vishwakarma image at the prepared worship area.",
          hi: "विश्वकर्मा जी का चित्र पूजा स्थान पर स्थापित करें।",
        },
        mantra: "ॐ विश्वकर्मणे नमः।",
      },
      {
        title: { en: "Tool Worship", hi: "औजार पूजा" },
        instruction: {
          en: "Offer flowers, rice and kumkum to tools without disturbing their safe arrangement.",
          hi: "औजारों को सुरक्षित रखते हुए उन पर फूल, अक्षत और कुमकुम अर्पित करें।",
        },
        mantra: "ॐ वास्तुपुरुषाय नमः।",
      },
      {
        title: { en: "Prayer", hi: "प्रार्थना" },
        instruction: {
          en: "Pray for skill, safety and success in work.",
          hi: "कौशल, सुरक्षा और कार्य में सफलता की प्रार्थना करें।",
        },
        mantra: "ॐ श्री विश्वकर्मणे नमः।",
      },
      {
        title: { en: "Aarti", hi: "आरती" },
        instruction: {
          en: "Perform aarti and conclude the worship.",
          hi: "आरती करके पूजा पूर्ण करें।",
        },
        mantra: "ॐ विश्वकर्मणे नमः।",
      },
    ],
  },

  {
    id: "govardhan-puja",
    title: {
      en: "Govardhan Puja",
      hi: "गोवर्धन पूजा",
    },
    festival: {
      en: "Govardhan Puja",
      hi: "गोवर्धन पूजा",
    },
    time: "30–45 min",
    price: 11,
    emoji: "🌿",
    color: "from-green-500 to-emerald-600",
    significance: {
      en: "Govardhan Puja commemorates Krishna's association with Govardhan Hill and celebrates gratitude, nature and community.",
      hi: "गोवर्धन पूजा श्रीकृष्ण और गोवर्धन पर्वत की कथा से जुड़ा पर्व है और प्रकृति व कृतज्ञता का संदेश देता है।",
    },
    materials: {
      en: [
        "Cow dung or symbolic Govardhan form",
        "Flowers",
        "Rice",
        "Kumkum",
        "Milk",
        "Fruits",
        "Sweets",
        "Diya",
        "Tulsi",
      ],
      hi: [
        "गोबर या प्रतीकात्मक गोवर्धन रूप",
        "फूल",
        "अक्षत",
        "कुमकुम",
        "दूध",
        "फल",
        "मिठाई",
        "दीया",
        "तुलसी",
      ],
    },
    steps: [
      {
        title: { en: "Create Govardhan Form", hi: "गोवर्धन रूप बनाएं" },
        instruction: {
          en: "Create or arrange a symbolic Govardhan form in a clean worship space.",
          hi: "स्वच्छ स्थान पर गोवर्धन का प्रतीकात्मक रूप तैयार करें।",
        },
        mantra: "ॐ गोवर्धनाय नमः।",
      },
      {
        title: { en: "Decorate", hi: "श्रृंगार" },
        instruction: {
          en: "Decorate the symbolic form with flowers and suitable offerings.",
          hi: "गोवर्धन रूप को फूलों और पूजा सामग्री से सजाएं।",
        },
        mantra: "ॐ कृष्णाय नमः।",
      },
      {
        title: { en: "Offer Food", hi: "अन्नकूट अर्पण" },
        instruction: {
          en: "Offer a suitable assortment of food as an expression of gratitude.",
          hi: "कृतज्ञता के भाव से विभिन्न प्रकार के भोजन का अर्पण करें।",
        },
        mantra: "ॐ गोवर्धनधराय नमः।",
      },
      {
        title: { en: "Prayer", hi: "प्रार्थना" },
        instruction: {
          en: "Pray for abundance, protection and harmony.",
          hi: "समृद्धि, सुरक्षा और सामंजस्य के लिए प्रार्थना करें।",
        },
        mantra: "ॐ गोविन्दाय नमः।",
      },
      {
        title: { en: "Aarti", hi: "आरती" },
        instruction: {
          en: "Perform aarti and distribute suitable prasad.",
          hi: "आरती करके प्रसाद वितरित करें।",
        },
        mantra: "हरे कृष्ण।",
      },
    ],
  },

  {
    id: "bhai-dooj",
    title: {
      en: "Bhai Dooj Puja",
      hi: "भाई दूज पूजा",
    },
    festival: {
      en: "Bhai Dooj",
      hi: "भाई दूज",
    },
    time: "20–30 min",
    price: 11,
    emoji: "❤️",
    color: "from-rose-500 to-pink-500",
    significance: {
      en: "Bhai Dooj celebrates the bond between brothers and sisters with traditional blessings and rituals.",
      hi: "भाई दूज भाई-बहन के स्नेह और मंगलकामना का पारंपरिक पर्व है।",
    },
    materials: {
      en: [
        "Roli",
        "Rice",
        "Diya",
        "Flowers",
        "Sweets",
        "Fruits",
        "Water",
        "Puja plate",
      ],
      hi: [
        "रोली",
        "अक्षत",
        "दीया",
        "फूल",
        "मिठाई",
        "फल",
        "जल",
        "पूजा थाली",
      ],
    },
    steps: [
      {
        title: { en: "Prepare Thali", hi: "थाली तैयार करें" },
        instruction: {
          en: "Arrange roli, rice, diya, flowers and sweets.",
          hi: "रोली, अक्षत, दीपक, फूल और मिठाई की थाली तैयार करें।",
        },
        mantra: "ॐ यमाय नमः।",
      },
      {
        title: { en: "Tilak", hi: "तिलक" },
        instruction: {
          en: "Apply tilak according to the family tradition.",
          hi: "परिवार की परंपरा के अनुसार तिलक करें।",
        },
        mantra: "ॐ भ्रात्रे नमः।",
      },
      {
        title: { en: "Aarti", hi: "आरती" },
        instruction: {
          en: "Perform aarti and offer prayers for the brother's well-being.",
          hi: "आरती करके भाई के मंगल और स्वास्थ्य की प्रार्थना करें।",
        },
        mantra: "ॐ सर्वमंगल मांगल्ये।",
      },
      {
        title: { en: "Sweet Offering", hi: "मिठाई" },
        instruction: {
          en: "Offer sweets and share prasad.",
          hi: "मिठाई अर्पित करके प्रसाद साझा करें।",
        },
        mantra: "ॐ शुभाय नमः।",
      },
      {
        title: { en: "Blessings", hi: "आशीर्वाद" },
        instruction: {
          en: "Exchange blessings and complete the family ritual.",
          hi: "एक-दूसरे को शुभकामनाएं देकर पारिवारिक रस्म पूर्ण करें।",
        },
        mantra: "सर्वे भवन्तु सुखिनः।",
      },
    ],
  },

  {
    id: "raksha-bandhan",
    title: {
      en: "Raksha Bandhan Puja",
      hi: "रक्षा बंधन पूजा",
    },
    festival: {
      en: "Raksha Bandhan",
      hi: "रक्षा बंधन",
    },
    time: "20–30 min",
    price: 11,
    emoji: "🧿",
    color: "from-violet-500 to-purple-600",
    significance: {
      en: "Raksha Bandhan celebrates the bond of affection and protection between siblings.",
      hi: "रक्षा बंधन भाई-बहन के प्रेम, स्नेह और शुभकामना का पर्व है।",
    },
    materials: {
      en: [
        "Rakhi",
        "Roli",
        "Rice",
        "Diya",
        "Flowers",
        "Sweets",
        "Water",
        "Puja plate",
      ],
      hi: [
        "राखी",
        "रोली",
        "अक्षत",
        "दीया",
        "फूल",
        "मिठाई",
        "जल",
        "पूजा थाली",
      ],
    },
    steps: [
      {
        title: { en: "Prepare Rakhi Thali", hi: "राखी की थाली" },
        instruction: {
          en: "Arrange the rakhi, roli, rice, diya and sweets.",
          hi: "राखी, रोली, अक्षत, दीपक और मिठाई की थाली सजाएं।",
        },
        mantra: "ॐ शुभाय नमः।",
      },
      {
        title: { en: "Tilak", hi: "तिलक" },
        instruction: {
          en: "Apply tilak according to your family custom.",
          hi: "परिवार की परंपरा के अनुसार तिलक करें।",
        },
        mantra: "ॐ मंगलाय नमः।",
      },
      {
        title: { en: "Tie Rakhi", hi: "राखी बांधें" },
        instruction: {
          en: "Tie the rakhi while exchanging good wishes.",
          hi: "शुभकामनाओं के साथ राखी बांधें।",
        },
        mantra: "येन बद्धो बलि राजा दानवेन्द्रो महाबलः।",
      },
      {
        title: { en: "Aarti", hi: "आरती" },
        instruction: {
          en: "Perform aarti and pray for the family's well-being.",
          hi: "आरती करके परिवार के मंगल की प्रार्थना करें।",
        },
        mantra: "ॐ सर्वमंगल मांगल्ये।",
      },
      {
        title: { en: "Sweet Sharing", hi: "मिठाई खिलाएं" },
        instruction: {
          en: "Share sweets and celebrate the sibling bond.",
          hi: "मिठाई खिलाकर भाई-बहन के प्रेम का उत्सव मनाएं।",
        },
        mantra: "सर्वे भवन्तु सुखिनः।",
      },
    ],
  },
];