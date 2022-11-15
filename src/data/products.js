import shellfishBurger from "../assets/images/shellfishBurger.jpg";
import guacamoleBurger from "../assets/images/guacamoleBurger.jpg";
import cheddarCheesyBurger from "../assets/images/cheddarCheesyBurger.jpg";
import chikenBurger from "../assets/images/chikenBurger.jpg";
import doublePattyBurger from "../assets/images/doublePattyBurger.jpg";
import kingBurger from "../assets/images/kingBurger.jpg";
import mozzarellaBurger from "../assets/images/mozzarellaBurger.jpg";
import mushroomBurger from "../assets/images/mushroomBurger.jpg";
import tensyMomentBurger from "../assets/images/tensyMomentBurger.jpg";

export const products = [
  {
    image: shellfishBurger,
    id: 1,
    weight: "300г",
    title: "Креветка-манго-чили",
    description: "Булка, креветки, айсберг, соус манго-чили, печеные томаты.",
    nutritionals: {
      calories: 350,
      fats: "90г",
      proteins: "23г",
      carbohydrates: "50г",
      cholesterol: "47мг",
      cellulose: "4г",
      sugars: "4г",
    },
    allergens: "Креветки, глютен, манго",
    price: 400,
  },
  {
    image: guacamoleBurger,
    id: 2,
    weight: "310г",
    title: "Гуакамоле-party",
    description:
      "Булка, котлета из говядины, айсберг, соус свит-чили, чеддер, бекон, начос, сальса, гуакамоле.",
    nutritionals: {
      calories: 550,
      fats: "170г",
      proteins: "20г",
      carbohydrates: "65г",
      cholesterol: "55мг",
      cellulose: "4г",
      sugars: "3г",
    },
    allergens: " Глютен, авокадо",
    price: 390,
  },
  {
    image: cheddarCheesyBurger,
    id: 3,
    weight: "300г",
    title: "Сырный Чеддер",
    description:
      "Булка, котлета из говядины, айсберг, томаты, огурцы маринованные, чеддер, бекон, соус сырный.",
    nutritionals: {
      calories: 410,
      fats: "90г",
      proteins: "19г",
      carbohydrates: "47г",
      cholesterol: "42мг",
      cellulose: "2г",
      sugars: "2г",
    },
    allergens: "Глютен, лактоза, томаты",
    price: 350,
  },
  {
    image: kingBurger,
    id: 4,
    weight: "440г",
    title: "Губернаторский",
    description:
      "Булка, котлета из говядины, соус демиглас, айсберг, томаты печеные, беконо-луковая намазка.",
    nutritionals: {
      calories: 340,
      fats: "60г",
      proteins: "21г",
      carbohydrates: "47г",
      cholesterol: "40мг",
      cellulose: "2г",
      sugars: "2г",
    },
    allergens: "Глютен, томаты, лук",
    price: 370,
  },
  {
    image: doublePattyBurger,
    id: 5,
    weight: "310г",
    title: "Всё и сразу",
    description:
      "Булка, две котлеты из говядины, свит-чили, айсберг, чеддер, перец печеный, халапеньо.",
    nutritionals: {
      calories: 490,
      fats: "41г",
      proteins: "36г",
      carbohydrates: "48г",
      cholesterol: "38мг",
      cellulose: "3г",
      sugars: "3г",
    },
    allergens: "Глютен",
    price: 520,
  },
  {
    image: mozzarellaBurger,
    id: 6,
    weight: "370г",
    title: "Песто и моцарелла",
    description:
      "Булка, котлета из говядины, песто, айсберг, моцарелла, томат, огурец, сливочный сыр.",
    nutritionals: {
      calories: 550,
      fats: "90г",
      proteins: "20г",
      carbohydrates: "51г",
      cholesterol: "43мг",
      cellulose: "5г",
      sugars: "3г",
    },
    allergens: "Глютен, томат, лактоза",
    price: 420,
  },
  {
    image: tensyMomentBurger,
    id: 7,
    weight: "305г",
    title: "Cупер хот",
    description:
      "Булка, котлета из говядины, айсберг, огурцы, соус шрирача, чеддер, том-ям, чили, кунжут, бекон.",
    nutritionals: {
      calories: 490,
      fats: "70г",
      proteins: "22г",
      carbohydrates: "49г",
      cholesterol: "39мг",
      cellulose: "3г",
      sugars: "2г",
    },
    allergens: "Глютен, кунжут",
    price: 450,
  },
  {
    image: mushroomBurger,
    id: 8,
    weight: "300г",
    title: "Грибной хашбраун",
    description:
      "Булка, котлета из говядины, айсберг, грибной соус, чеддер, хашбраун, шампиньоны, бекон, лук фри.",
    nutritionals: {
      calories: 420,
      fats: "55г",
      proteins: "21г",
      carbohydrates: "36г",
      cholesterol: "20мг",
      cellulose: "2г",
      sugars: "1г",
    },
    allergens: "Глютен, шампиньоны, репчатый лук",
    price: 440,
  },
  {
    image: chikenBurger,
    id: 9,
    weight: "350г",
    title: "Классический чикен",
    description:
      "Булка , котлета куриная, айсберг, кетчуп, томаты, огурцы, чеддер, сырный соус, начос.",
    nutritionals: {
      calories: 310,
      fats: "21г",
      proteins: "32г",
      carbohydrates: "25г",
      cholesterol: "12мг",
      cellulose: "3г",
      sugars: "2г",
    },
    allergens: "Глютен, курица, томаты",
    price: 300,
  },
];
