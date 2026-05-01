import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        timeline: "Timeline",
        documents: "Documents"
      },
      home: {
        title: "Your Simple Guide to Indian Elections",
        subtitle: "Everything you need to know about voting, important dates, and required documents.",
        startBtn: "Get Started",
        card1: { title: "Know Your Eligibility", desc: "Learn exactly who can vote and the qualifying dates for registration." },
        card2: { title: "Form 6 & 8 Mastery", desc: "Navigate the complex documentation required for new voters and corrections." },
        card3: { title: "Accessibility Rights", desc: "Understand the provisions under the RPWD Act for assisted voting." }
      },
      docs: {
        title: "Form 6 & 8 Mastery Guide",
        desc: "Ensure you have the correct documents for seamless registration (Form 6) or corrections (Form 8). Check the boxes as you gather them!",
        success: "🎉 Excellent! You have the required documents. You are ready to fill out Form 6!",
        form8NoteTitle: "Form 8 Note (Corrections & Shifting)",
        form8NoteDesc: "If you are filling Form 8 to correct your existing voter ID, you only need to provide proof for the specific detail you are correcting (e.g., Address Proof for shifting, DOB Proof for age correction).",
        dobTitle: "Proof of Date of Birth",
        dobLabel: "I have a valid Proof of Date of Birth",
        accDocs: "Accepted documents (any one):",
        dob1: "Birth certificate",
        dob2: "Aadhaar card",
        dob3: "PAN card",
        dob4: "Class X or XII certificate",
        addressTitle: "Proof of Address",
        addressLabel: "I have a valid Proof of Address",
        addr1: "Current public sector bank passbook",
        addr2: "Utility bills not older than a year",
        addr3: "Registered rental or lease agreement",
        addr4: "Indian Passport",
        photoTitle: "Passport Size Photograph",
        photoLabel: "I have a valid recent Photograph",
        reqs: "Requirements:",
        photo1: "Recent color photograph",
        photo2: "White or light background",
        photo3: "Face should cover 70-80% of the photo"
      },
      access: {
        title: "Accessibility Rights",
        listen: "Listen to this page",
        stop: "Stop Reading",
        desc: "The Election Commission of India (ECI) ensures that the democratic process is inclusive and accessible to all citizens, adhering to the Rights of Persons with Disabilities (RPwD) Act, 2016.",
        amfTitle: "Assured Minimum Facilities (AMF)",
        amfDesc: "Every polling booth must be situated on the ground floor. It must have sturdy, obstacle-free ramps with handrails, and standard-width doors for easy wheelchair access.",
        brailleTitle: "Braille Support on EVMs",
        brailleDesc: "Electronic Voting Machines (EVMs) are equipped with Braille signage alongside the candidate's name and symbol, allowing visually impaired voters to cast their ballots independently.",
        compTitle: "Companion Assistance",
        compDesc: "If a voter is unable to read the ballot or press the button due to blindness or physical infirmity, they are legally permitted to take a companion of their choice (aged 18 or above) into the voting compartment.",
        transTitle: "Transport & Priority",
        transDesc: "Registered Persons with Disabilities (PwD) are provided with free transport facilities to and from the polling station, and are guaranteed priority entry, bypassing regular queues."
      },
      time: {
        title: "2026 Election Timeline",
        desc: "Stay ahead of the schedule. Add important electoral phases directly to your personal Google Calendar.",
        complete: "Mark as Complete",
        added: "Added to Google Calendar",
        addBtn: "Add to Google Calendar",
        progress: "Progress",
        p1Title: "Planning & Announcement",
        p1Desc: "The Election Commission of India (ECI) announces the election dates and the Model Code of Conduct comes into effect.",
        p2Title: "Voter List Preparation",
        p2Desc: "Electoral rolls are updated. New voters are added, and deceased or shifted voters are removed.",
        p3Title: "Candidate Nomination",
        p3Desc: "Candidates file their nomination papers, which are then scrutinized by the Returning Officer.",
        p4Title: "Campaigning",
        p4Desc: "Candidates and political parties campaign to win voter support. Campaigning ends 48 hours before polling.",
        p5Title: "Voting Day",
        p5Desc: "Registered voters cast their ballots at designated polling stations using EVMs.",
        p6Title: "Vote Counting",
        p6Desc: "Votes are counted under strict security and supervision, and results are declared.",
        p7Title: "Audit Trails and Record Keeping",
        p7Desc: "VVPAT slips may be audited, and all electoral records are securely archived."
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: "होम",
        timeline: "समयरेखा",
        documents: "दस्तावेज़"
      },
      home: {
        title: "भारतीय चुनाव को आसानी से समझें",
        subtitle: "मतदान, महत्वपूर्ण तिथियों और आवश्यक दस्तावेजों के बारे में सब कुछ जो आपको जानना चाहिए।",
        startBtn: "शुरू करें",
        card1: { title: "अपनी पात्रता जानें", desc: "जानें कि कौन वोट दे सकता है और पंजीकरण के लिए योग्यता तिथियां क्या हैं।" },
        card2: { title: "फॉर्म 6 और 8 की जानकारी", desc: "नए मतदाताओं और सुधार के लिए आवश्यक जटिल दस्तावेज़ीकरण को समझें।" },
        card3: { title: "पहुंच अधिकार", desc: "सहायता प्राप्त मतदान के लिए RPWD अधिनियम के तहत प्रावधानों को समझें।" }
      },
      docs: {
        title: "फॉर्म 6 और 8 की जानकारी",
        desc: "सुनिश्चित करें कि आपके पास निर्बाध पंजीकरण (फॉर्म 6) या सुधार (फॉर्म 8) के लिए सही दस्तावेज़ हैं। इकट्ठा करते ही बॉक्स चेक करें!",
        success: "🎉 बहुत बढ़िया! आपके पास आवश्यक दस्तावेज़ हैं। आप फॉर्म 6 भरने के लिए तैयार हैं!",
        form8NoteTitle: "फॉर्म 8 नोट (सुधार और स्थानांतरण)",
        form8NoteDesc: "यदि आप सुधार के लिए फॉर्म 8 भर रहे हैं, तो आपको केवल उसी विवरण के लिए प्रमाण देना होगा जिसे आप सही कर रहे हैं।",
        dobTitle: "जन्म तिथि का प्रमाण",
        dobLabel: "मेरे पास जन्म तिथि का वैध प्रमाण है",
        accDocs: "स्वीकृत दस्तावेज़ (कोई एक):",
        dob1: "जन्म प्रमाण पत्र",
        dob2: "आधार कार्ड",
        dob3: "पैन कार्ड",
        dob4: "कक्षा X या XII का प्रमाण पत्र",
        addressTitle: "पते का प्रमाण",
        addressLabel: "मेरे पास पते का वैध प्रमाण है",
        addr1: "सार्वजनिक क्षेत्र के बैंक की पासबुक",
        addr2: "एक वर्ष से अधिक पुराने उपयोगिता बिल नहीं",
        addr3: "पंजीकृत किराया या लीज समझौता",
        addr4: "भारतीय पासपोर्ट",
        photoTitle: "पासपोर्ट आकार का फोटो",
        photoLabel: "मेरे पास एक वैध हालिया तस्वीर है",
        reqs: "आवश्यकताएं:",
        photo1: "हाल ही का रंगीन फोटो",
        photo2: "सफेद या हल्का बैकग्राउंड",
        photo3: "चेहरा फोटो का 70-80% कवर होना चाहिए"
      },
      access: {
        title: "पहुंच अधिकार",
        listen: "इस पृष्ठ को सुनें",
        stop: "पढ़ना बंद करें",
        desc: "भारत का चुनाव आयोग (ECI) यह सुनिश्चित करता है कि लोकतांत्रिक प्रक्रिया समावेशी है और विकलांग व्यक्तियों के अधिकार (RPwD) अधिनियम, 2016 का पालन करती है।",
        amfTitle: "सुनिश्चित न्यूनतम सुविधाएं (AMF)",
        amfDesc: "प्रत्येक मतदान केंद्र भूतल पर होना चाहिए। व्हीलचेयर तक आसान पहुंच के लिए इसमें मजबूत रैंप और मानक चौड़ाई वाले दरवाजे होने चाहिए।",
        brailleTitle: "EVM पर ब्रेल समर्थन",
        brailleDesc: "इलेक्ट्रॉनिक वोटिंग मशीनें (EVM) ब्रेल साइनेज से लैस हैं, जिससे दृष्टिबाधित मतदाता अपना वोट स्वतंत्र रूप से डाल सकते हैं।",
        compTitle: "साथी सहायता",
        compDesc: "यदि कोई मतदाता अंधापन या शारीरिक दुर्बलता के कारण बैलेट पढ़ने या बटन दबाने में असमर्थ है, तो उन्हें अपने साथ एक साथी ले जाने की अनुमति है।",
        transTitle: "परिवहन और प्राथमिकता",
        transDesc: "पंजीकृत विकलांग व्यक्तियों (PwD) को मतदान केंद्र तक मुफ्त परिवहन सुविधाएं प्रदान की जाती हैं और कतारों को दरकिनार करते हुए प्राथमिकता दी जाती है।"
      },
      time: {
        title: "2026 चुनाव समयरेखा",
        desc: "कार्यक्रम से आगे रहें। अपने व्यक्तिगत Google कैलेंडर में सीधे महत्वपूर्ण चुनावी चरण जोड़ें।",
        complete: "पूर्ण के रूप में चिह्नित करें",
        added: "Google कैलेंडर में जोड़ा गया",
        addBtn: "Google कैलेंडर में जोड़ें",
        progress: "प्रगति",
        p1Title: "योजना और घोषणा",
        p1Desc: "भारत निर्वाचन आयोग (ECI) चुनाव की तारीखों की घोषणा करता है और आदर्श आचार संहिता लागू होती है।",
        p2Title: "मतदाता सूची तैयार करना",
        p2Desc: "मतदाता सूची अद्यतन की जाती है। नए मतदाता जोड़े जाते हैं, और मृत या स्थानांतरित मतदाताओं को हटा दिया जाता है।",
        p3Title: "उम्मीदवार नामांकन",
        p3Desc: "उम्मीदवार अपने नामांकन पत्र दाखिल करते हैं, जिनकी जांच रिटर्निंग अधिकारी द्वारा की जाती है।",
        p4Title: "प्रचार",
        p4Desc: "उम्मीदवार और राजनीतिक दल मतदाताओं का समर्थन जीतने के लिए प्रचार करते हैं। मतदान से 48 घंटे पहले प्रचार समाप्त हो जाता है।",
        p5Title: "मतदान का दिन",
        p5Desc: "पंजीकृत मतदाता EVM का उपयोग करके निर्दिष्ट मतदान केंद्रों पर अपना वोट डालते हैं।",
        p6Title: "वोटों की गिनती",
        p6Desc: "कड़ी सुरक्षा और निगरानी में वोटों की गिनती की जाती है, और परिणाम घोषित किए जाते हैं।",
        p7Title: "ऑडिट ट्रेल और रिकॉर्ड रखना",
        p7Desc: "VVPAT पर्चियों का ऑडिट किया जा सकता है, और सभी चुनावी रिकॉर्ड सुरक्षित रूप से संग्रहीत किए जाते हैं।"
      }
    }
  },
  mr: {
    translation: {
      nav: {
        home: "मुख्य पृष्ठ",
        timeline: "वेळापत्रक",
        documents: "कागदपत्रे"
      },
      home: {
        title: "भारतीय निवडणुका सोप्या भाषेत समजून घ्या",
        subtitle: "मतदान, महत्त्वाच्या तारखा आणि आवश्यक कागदपत्रांबद्दल तुम्हाला जे काही माहित असणे आवश्यक आहे.",
        startBtn: "सुरू करा",
        card1: { title: "तुमची पात्रता जाणून घ्या", desc: "कोण मतदान करू शकते आणि नोंदणीसाठी पात्र तारखा काय आहेत हे जाणून घ्या." },
        card2: { title: "फॉर्म 6 आणि 8 ची माहिती", desc: "नवीन मतदारांसाठी आणि दुरुस्तीसाठी आवश्यक कागदपत्रे समजून घ्या." },
        card3: { title: "प्रवेशाचे अधिकार", desc: "सहाय्यक मतदानासाठी RPWD कायद्यांतर्गत तरतुदी समजून घ्या." }
      },
      docs: {
        title: "फॉर्म 6 आणि 8 ची माहिती",
        desc: "नोंदणी (फॉर्म 6) किंवा दुरुस्तीसाठी (फॉर्म 8) आपल्याकडे योग्य कागदपत्रे असल्याची खात्री करा.",
        success: "🎉 उत्कृष्ट! तुमच्याकडे आवश्यक कागदपत्रे आहेत. तुम्ही फॉर्म 6 भरण्यासाठी तयार आहात!",
        form8NoteTitle: "फॉर्म 8 टीप (दुरुस्ती आणि स्थलांतर)",
        form8NoteDesc: "जर तुम्ही दुरुस्तीसाठी फॉर्म 8 भरत असाल, तर तुम्हाला फक्त तुम्ही दुरुस्त करत असलेल्या तपशीलाचा पुरावा द्यावा लागेल.",
        dobTitle: "जन्मतारखेचा पुरावा",
        dobLabel: "माझ्याकडे जन्मतारखेचा वैध पुरावा आहे",
        accDocs: "स्वीकारलेली कागदपत्रे (कोणतेही एक):",
        dob1: "जन्म प्रमाणपत्र",
        dob2: "आधार कार्ड",
        dob3: "पॅन कार्ड",
        dob4: "इयत्ता X किंवा XII प्रमाणपत्र",
        addressTitle: "पत्त्याचा पुरावा",
        addressLabel: "माझ्याकडे पत्त्याचा वैध पुरावा आहे",
        addr1: "सार्वजनिक क्षेत्रातील बँक पासबुक",
        addr2: "एक वर्षापेक्षा जुने युटिलिटी बिले नाहीत",
        addr3: "नोंदणीकृत भाडे किंवा लीज करार",
        addr4: "भारतीय पारपत्र",
        photoTitle: "पासपोर्ट आकाराचे छायाचित्र",
        photoLabel: "माझ्याकडे वैध अलीकडील छायाचित्र आहे",
        reqs: "आवश्यकता:",
        photo1: "अलीकडील रंगीत छायाचित्र",
        photo2: "पांढरी किंवा हलकी पार्श्वभूमी",
        photo3: "चेहऱ्याने फोटोचा 70-80% भाग व्यापला पाहिजे"
      },
      access: {
        title: "प्रवेशाचे अधिकार",
        listen: "हे पृष्ठ ऐका",
        stop: "वाचणे थांबवा",
        desc: "भारतीय निवडणूक आयोग (ECI) हे सुनिश्चित करतो की लोकशाही प्रक्रिया सर्वसमावेशक आहे आणि दिव्यांग व्यक्तींचे अधिकार (RPwD) कायदा, 2016 चे पालन करते.",
        amfTitle: "निश्चित किमान सुविधा (AMF)",
        amfDesc: "प्रत्येक मतदान केंद्र तळमजल्यावर असले पाहिजे. व्हीलचेअरच्या सुलभ प्रवेशासाठी त्यात मजबूत रॅम्प आणि मानक-रुंदीचे दरवाजे असले पाहिजेत.",
        brailleTitle: "EVM वर ब्रेल समर्थन",
        brailleDesc: "इलेक्ट्रॉनिक मतदान यंत्रे (EVMs) ब्रेल चिन्हांसह सुसज्ज आहेत, ज्यामुळे दृष्टिहीन मतदारांना स्वतंत्रपणे मतदान करता येते.",
        compTitle: "सहचर सहाय्य",
        compDesc: "अंधत्व किंवा शारीरिक दुर्बलतेमुळे मतदार मतपत्रिका वाचू शकत नसल्यास किंवा बटण दाबू शकत नसल्यास, त्यांना सोबती घेण्याची परवानगी आहे.",
        transTitle: "वाहतूक आणि प्राधान्य",
        transDesc: "नोंदणीकृत दिव्यांग व्यक्तींना (PwD) मतदान केंद्रापर्यंत आणि तेथून मोफत वाहतूक सुविधा पुरवल्या जातात आणि रांगा वगळून प्राधान्य दिले जाते."
      },
      time: {
        title: "2026 निवडणूक वेळापत्रक",
        desc: "वेळापत्रकाच्या पुढे राहा. थेट आपल्या वैयक्तिक Google कॅलेंडरवर महत्त्वाचे निवडणूक टप्पे जोडा.",
        complete: "पूर्ण म्हणून चिन्हांकित करा",
        added: "Google कॅलेंडरवर जोडले",
        addBtn: "Google कॅलेंडरमध्ये जोडा",
        progress: "प्रगती",
        p1Title: "नियोजन आणि घोषणा",
        p1Desc: "भारतीय निवडणूक आयोग (ECI) निवडणुकीच्या तारखा जाहीर करतो आणि आदर्श आचारसंहिता लागू होते.",
        p2Title: "मतदार यादी तयार करणे",
        p2Desc: "मतदार याद्या अद्ययावत केल्या जातात. नवीन मतदार जोडले जातात आणि मृत किंवा स्थलांतरित मतदार काढून टाकले जातात.",
        p3Title: "उमेदवार नामांकन",
        p3Desc: "उमेदवार त्यांचे उमेदवारी अर्ज भरतात, ज्यांची तपासणी निवडणूक निर्णय अधिकाऱ्यांकडून केली जाते.",
        p4Title: "प्रचार",
        p4Desc: "उमेदवार आणि राजकीय पक्ष मतदारांचा पाठिंबा मिळवण्यासाठी प्रचार करतात. मतदानाच्या 48 तास आधी प्रचार संपतो.",
        p5Title: "मतदानाचा दिवस",
        p5Desc: "नोंदणीकृत मतदार ईव्हीएमचा वापर करून नियुक्त मतदान केंद्रांवर मतदान करतात.",
        p6Title: "मतमोजणी",
        p6Desc: "कडक सुरक्षा आणि देखरेखीखाली मतांची मोजणी केली जाते आणि निकाल घोषित केले जातात.",
        p7Title: "ऑडिट ट्रेल आणि रेकॉर्ड ठेवणे",
        p7Desc: "VVPAT स्लिपचे ऑडिट केले जाऊ शकते आणि सर्व निवडणूक रेकॉर्ड सुरक्षितपणे संग्रहित केले जातात."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
