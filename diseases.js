import apple_scab from "./images/diseases/Apple-scab-on-fruit-grabowski.jpg";
import apple_black_rot from "./images/diseases/blackRotLesionsApple.jpg";
import strawberry_leaf_scorch from "./images/diseases/Strawberry___Leaf_scorch.jpg";
import peach_bacterial_spot from "./images/diseases/peach-bacterial-spot.jpg";
import grape_leaf_blight from "./images/diseases/grape-leaf-blight.jpg";
import grape_black_rot from "./images/diseases/grape-black-rot.jpg";

const diseaseData = [
  {
    key: 1,
    img: apple_scab,
    plantName: "apple",
    diseaseName: "Apple Scab",
    description: "Apple scab is a fungal disease affecting apple trees, causing olive-green to black spots on leaves and fruits.",
    symptoms: "Olive-green to black velvety spots on leaves and fruits, leaves may curl and drop early. Infected leaves have olive green to brown spots that turn dark brown to black with age.",
    causes: "Caused by the fungus Venturia inaequalis.",
    favourableConditions: "Cool, wet weather in spring; leaf wetness for 9+ hours.",
    prevention: "Plant resistant varieties, rake and destroy fallen leaves, prune for good air circulation.",
    treatment: "Apply fungicides like captan, myclobutanil, or sulfur from bud break through June.",  },
  {
    key: 2,
    img: apple_black_rot,
    diseaseName: "Apple Black Rot",
    plantName: "apple",
    description: "Black rot affects apple trees causing fruit rot, leaf spots, and branch cankers.",
    symptoms: "Purple spots on leaves that enlarge with dark margins, black rotting fruits, cracked bark with cankers.",
    causes: "Fungal pathogen Botryosphaeria obtusa.",
    favourableConditions: "Warm and humid weather; injuries on fruit or bark allow infection.",
    prevention: "Remove infected fruits and prune dead branches, maintain tree vigor.",
    treatment: "Copper-based fungicides, remove mummified fruits, and prune out cankers.",
    impact: "Can destroy entire fruit crops if untreated and weaken trees.",
  },
  {
    key: 3,
    img: strawberry_leaf_scorch,
    diseaseName: "Strawberry Leaf Scorch",
    plantName: "strawberry",
    description: "Leaf scorch causes reddish-purple spots leading to drying of strawberry leaves.",
    symptoms: "Small purple spots on leaves, scorched leaf margins, reduced plant growth.",
    causes: "Fungal infection under stress conditions (Diplocarpon earlianum).",
    favourableConditions: "High humidity, poor air circulation, wet foliage for extended periods.",
    prevention: "Remove infected leaves, avoid overhead irrigation, space plants properly.",
    treatment: "Apply recommended fungicides like captan or thiram at flowering.",
    impact: "Weakens plants, reduces photosynthesis, and lowers fruit production.",
  },
  {
    key: 4,
    img: peach_bacterial_spot,
    diseaseName: "Peach Bacterial Spot",
    plantName: "peach",
    description: "Bacterial spot causes lesions on leaves, fruit, and twigs of peach trees.",
    symptoms: "Small angular spots on leaves that drop out leaving shot-hole appearance; sunken spots on fruit.",
    causes: "Bacterium Xanthomonas arboricola pv. pruni.",
    favourableConditions: "Warm, wet springs with wind-driven rain; sandy soils increase severity.",
    prevention: "Plant resistant varieties, avoid overhead irrigation, maintain tree vigor.",
    treatment: "Copper-based bactericides during dormancy and early season; no cure after infection.",
    impact: "Fruit becomes unmarketable; defoliation reduces tree health.",
  },
  {
    key: 5,
    img: grape_leaf_blight,
    diseaseName: "Grape Leaf Blight",
    plantName: "grape",
    description: "Leaf blight causes irregular brown spots on grape leaves, leading to defoliation.",
    symptoms: "Large, irregular brown spots with concentric rings on leaves; leaves may curl and drop.",
    causes: "Fungal pathogen Pseudocercospora vitis.",
    favourableConditions: "Warm, humid weather; poor air circulation in dense canopies.",
    prevention: "Prune for good air circulation, remove infected leaves, avoid overhead watering.",
    treatment: "Apply protectant fungicides like mancozeb or copper during wet periods.",
    impact: "Reduces photosynthetic capacity, weakens vines, affects fruit quality.",
  },
  {
    key: 6,
    img: grape_black_rot,
    diseaseName: "Grape Black Rot",
    plantName: "grape",
    description: "Black rot is a fungal disease causing fruit rot and leaf spots on grapes.",
    symptoms: "Brown circular lesions on leaves with black margins; mummified berries covered in black spores.",
    causes: "Fungus Guignardia bidwellii.",
    favourableConditions: "Warm, wet weather from bloom through fruit set; long periods of leaf wetness.",
    prevention: "Remove mummified berries, prune for air circulation, plant resistant varieties.",
    treatment: "Fungicides like myclobutanil, captan, or mancozeb from pre-bloom through 4-5 weeks after bloom.",
    impact: "Can cause complete crop loss in susceptible varieties if untreated.",
  },
];

export default diseaseData;