import fabricsImg from "../assets/images/pure_fabric_rolls_textiles_1788780174893.jpg";
import badgesImg from "../assets/images/badges_insignia_1788510849474.jpg";
import zipsChainImg from "../assets/images/zips_and_chains_1788510869610.jpg";
import metalButtonsImg from "../assets/images/metal_buttons_1788510889840.jpg";
import polyesterPlasticImg from "../assets/images/polyester_plastic_1788510919616.jpg";
import defenceUniformImg from "../assets/images/bd_navy_uniform_1787920153389.jpg";
import womenLingerieImg from "../assets/images/women_lingerie_1788510944111.jpg";
import menLingerieImg from "../assets/images/men_lingerie_1788510970060.jpg";

export interface ProductItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface ProductsHeroData {
  sectionNumber: string;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface ProductsCtaData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const productsHeroData: ProductsHeroData = {
  sectionNumber: "02",
  badge: "PRODUCT CATALOG",
  title: "Manufactured Lines &",
  titleHighlight: "Supply Categories",
  description:
    "Explore our commercial product lines — spanning premium textiles, precision garment trims and hardware, mil-spec defence uniforms, and retail apparel collections.",
};

export const productsList: ProductItem[] = [
  {
    id: "fabrics",
    title: "Fabric's",
    image: fabricsImg,
    description:
      "Export-grade woven, knit, and blended textile rolls supplied in custom yarn counts, densities, and certified dye finishes.",
  },
  {
    id: "badges",
    title: "Badges",
    image: badgesImg,
    description:
      "Precision-embroidered, bullion wire, and woven insignia patches engineered for military, security, and corporate uniform specifications.",
  },
  {
    id: "zips-chain",
    title: "Zips & Chain",
    image: zipsChainImg,
    description:
      "Heavy-duty metallic, molded plastic, and nylon coil zippers with smooth-glide pullers and continuous zipper chains.",
  },
  {
    id: "metal-buttons",
    title: "Metal Button's",
    image: metalButtonsImg,
    description:
      "Die-cast brass, zinc alloy, and antique-finish metal buttons, shank fasteners, rivets, and engraved custom branded hardware.",
  },
  {
    id: "polyester-plastic",
    title: "Polyester & Plastic",
    image: polyesterPlasticImg,
    description:
      "Chalk and pearl polyester shirt buttons, heavy-duty side-release buckles, cord stoppers, and injection-molded garment accessories.",
  },
  {
    id: "defence-uniform",
    title: "Defence Uniform",
    image: defenceUniformImg,
    description:
      "Mil-spec tactical duty uniforms, NIR camouflage apparel, and naval combat wear meeting strict government procurement standards.",
  },
  {
    id: "women-lingerie",
    title: "Women Lingerie",
    image: womenLingerieImg,
    description:
      "Fine lace, silk, and seamless microfiber intimates tailored for delicate comfort, contouring fit, and international retail standards.",
  },
  {
    id: "men-lingerie",
    title: "Men Lingerie",
    image: menLingerieImg,
    description:
      "Breathable combed cotton and modal boxer briefs, trunks, and base layers crafted with ergonomic support and elastic waistbands.",
  },
];

export const productsCtaData: ProductsCtaData = {
  title: "Require Custom Specifications or Bulk Tender Quotations?",
  description:
    "Connect directly with our merchandising and technical team to request custom swatches, tech-pack matching, or bulk export pricing.",
  buttonText: "CONTACT FOR INQUIRY",
  buttonLink: "/contact",
};
