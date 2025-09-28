import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpeg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImages = {
    id: string ;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
}

const wonderImages: WonderImages[] = [
    {
        id: "1",
        name: "Chichen Itza",
        src: photo1,
        photographer: "John Doe",
        location: "Mexico"
    },
    {
        id: "2",
        name: "Machu Picchu",
        src: photo2,
        photographer: "Jane Smith",
        location: "Peru"
    },
    {
        id: "3",
        name: "Pyramids of Giza",
        src: photo3,
        photographer: "Ahmed Ali",
        location: "Egypt"
    },
    {
        id: "4",
        name: "Rome Colosseum",
        src: photo4,
        photographer: "Luca Bianchi",
        location: "Italy"
    },
    {
        id: "5",
        name: "Taj Mahal",
        src: photo5,
        photographer: "Aisha Khan",
        location: "India"
    },
    {
        id: "6",
        name: "Great Wall of China",
        src: photo6,
        photographer: "Li Wei",
        location: "China"
    },
    {
        id: "7",
        name: "Petra",
        src: photo7,
        photographer: "Fatima Al-Zahra",
        location: "Jordan"
    }
];
export default wonderImages;