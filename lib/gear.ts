export type Category =
    | "Paddles"
    | "Shoes"
    | "Balls"
    | "Nets"
    | "Recording Devices"
    | "Ball Machines"
    | "Clothing"
    | "Training Equipment"
    | "Injury Reduction"
    | "Miscellaneous";

export interface GearItem {
    id: string;
    name: string;
    category: Category;
    price: string;
    image: string;
    award?: string;
    link: string;
    description: string;
    originalPrice?: string;
    discountCode?: string;
}

export const CATEGORIES: Category[] = [
    "Paddles",
    "Shoes",
    "Balls",
    "Nets",
    "Recording Devices",
    "Ball Machines",
    "Clothing",
    "Training Equipment",
    "Injury Reduction",
    "Miscellaneous"
];

export const GEAR_ITEMS: GearItem[] = [
    {
        id: "p1",
        name: "RPM FRICTION PRO 16MM ELONGATED",
        category: "Paddles",
        price: "$249.99",
        discountCode: "NO code :(",
        image: "/images/rpm-friction-pro.png",
        award: "",
        link: "https://rpmpb.com/products/rpm-friction-pro-16mm-pickleball-paddle?variant=46398773264558",
        description: "Unparalleled surface friction for maximum spin. The 16mm core provides the perfect blend of power and control for elite level play."
    },
    {
        id: "p2",
        name: "CRBN¹ TruFoam Genesis (Elongated, Long Handle)",
        category: "Paddles",
        price: "$252.00",
        originalPrice: "$279.99",
        discountCode: "NATHAN10",
        image: "/images/crbn-genesis.jpg",
        award: "",
        link: "https://www.crbnpickleball.com/NATHAN10",
        description: "Advanced foam-core technology for a massive sweet spot and incredible vibration dampening."
    },
    {
        id: "p5",
        name: "Vapor Power",
        category: "Paddles",
        price: "$152.99",
        originalPrice: "$169.99",
        discountCode: "NATHAN10",
        image: "/images/vapor-power.png",
        award: "",
        link: "https://11six24.com?sca_ref=7919044.arEafz8YVW",
        description: "Lightweight and explosive. Designed for quick hand speed at the kitchen without sacrificing put-away power."
    },
    {
        id: "p3",
        name: "Six Zero Coral 16mm",
        category: "Paddles",
        price: "$180.00",
        originalPrice: "$200.00",
        discountCode: "USE LINK FOR 10% OFF",
        image: "/images/sixzero-coral.png",
        award: "",
        link: "https://www.sixzeropickleball.com?sca_ref=6997275.Ost9mWRZDWVoRqn",
        description: "The ultimate control paddle. Carbon fiber face with a 16mm core for precision dinking and resets."
    },
    {
        id: "p4",
        name: "Vapor Alpha Pro Power",
        category: "Paddles",
        price: "$179.99",
        originalPrice: "$199.99",
        discountCode: "NATHAN10",
        image: "/images/vapor-alpha-pro-clean.png",
        award: "",
        link: "https://11six24.com?sca_ref=7919044.arEafz8YVW",
        description: "Unmatched power and stability. The Alpha Pro is built for aggressive players who want to dominate the baseline."
    },
    {
        id: "p6",
        name: "Ronbus Quanta",
        category: "Paddles",
        price: "$99.99",
        originalPrice: "$119.99",
        discountCode: "RC7VZ595",
        image: "/images/ronbus-quanta.png",
        award: "",
        link: "https://www.ronbus.com/Quanta-R116-_p_175.html",
        description: "Exceptional control and spin potential. The Quanta offers a premium feel and high-performance carbon fiber face at an unbeatable price point."
    },
    {
        id: "s1",
        name: "Jet Mach Pickleball",
        category: "Shoes",
        price: "$149",
        image: "/images/jet-mach-shoes.png",
        award: "",
        link: "https://www.babolat.com/us/jet-mach-pickleball-men/7002-3A0S25B932.html",
        description: "Ultra-lightweight and breathable. Designed specifically for the high-intensity lateral movements of pickleball."
    },
    {
        id: "b1",
        name: "Franklin X-40 Outdoor Pickleballs",
        category: "Balls",
        price: "$Varies",
        image: "/images/franklin-x40.png",
        award: "",
        link: "https://amazon.com/dp/B01LW8L9O3",
        discountCode: "Wait for a sale and buy in bulk on Amazon or Franklin's site",
        description: "The industry standard for outdoor tournament play. Best balance of durability and flight consistency."
    },
    {
        id: "n1",
        name: "The Dominator Pro Max Portable Pickleball Net",
        category: "Nets",
        price: "$1,999.00",
        image: "/images/dominator-net.png",
        award: "",
        link: "https://www.dominatorhoop.com/product/max-semi-permanent-portable-pickleball-net/",
        description: "The gold standard for portable nets. Heavy-duty aluminum frame, locking wheels, and professional-grade tensioning for a true-to-court experience."
    },
    {
        id: "n2",
        name: "Swiftnet",
        category: "Nets",
        price: "$369.99",
        image: "/images/swiftnet.png",
        award: "",
        link: "https://swiftnet.pro/products/swiftnet%C2%AE",
        description: "The most popular portable net for a reason. Ultra-lightweight, high-tension, and incredibly easy to set up."
    }
];
