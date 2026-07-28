export type Project = {
  id: string;
  name: string;
  discipline: string;
  image: string;
  alt: string;
  layout: string;
  cursorAccent: string;
};

export const projects: Project[] = [
  {
    id: "01",
    name: "Brewline",
    discipline: "Packaging design & identity",
    image: "/assets/work/brewline.webp",
    alt: "Brewline canned coffee and cobalt paper packaging on brushed steel.",
    layout: "project--wide",
    cursorAccent: "#3155ff",
  },
  {
    id: "02",
    name: "Sore Ceramics",
    discipline: "Identity system & art direction",
    image: "/assets/work/sore-ceramics.webp",
    alt: "Sore Ceramics vessels displayed on cobalt architectural plinths.",
    layout: "project--narrow",
    cursorAccent: "#5278ff",
  },
  {
    id: "03",
    name: "Luma Pantry",
    discipline: "Brand identity & packaging",
    image: "/assets/work/luma-pantry.webp",
    alt: "Luma Pantry jars and cartons with a geometric packaging system.",
    layout: "project--medium-left",
    cursorAccent: "#db8b42",
  },
  {
    id: "04",
    name: "Sunday Social",
    discipline: "Positioning & spatial identity",
    image: "/assets/work/sunday-social.webp",
    alt: "Sunday Social cafe signage against a clean contemporary facade.",
    layout: "project--medium-right",
    cursorAccent: "#e7b449",
  },
  {
    id: "05",
    name: "Kasa Stay",
    discipline: "Hospitality brand experience",
    image: "/assets/work/kasa-stay.webp",
    alt: "Kasa Stay guest objects and key tag in a contemporary interior.",
    layout: "project--narrow",
    cursorAccent: "#c9a177",
  },
  {
    id: "06",
    name: "Field Notes",
    discipline: "Identity, packaging & art direction",
    image: "/assets/work/field-notes.webp",
    alt: "Field Notes botanical skincare packaging in a clean studio scene.",
    layout: "project--wide",
    cursorAccent: "#94bd86",
  },
  {
    id: "07",
    name: "Teras Studio",
    discipline: "Campaign & cultural identity",
    image: "/assets/work/teras-studio.webp",
    alt: "Teras Studio campaign poster and cobalt wayfinding panel.",
    layout: "project--medium-right",
    cursorAccent: "#f56b4e",
  },
  {
    id: "08",
    name: "Nusa Objects",
    discipline: "Retail identity & digital direction",
    image: "/assets/work/nusa-objects.webp",
    alt: "Nusa Objects chrome object, booklet and cobalt packaging on a mirror.",
    layout: "project--medium-left",
    cursorAccent: "#9db5ff",
  },
];

export const ctaImages = [
  "/assets/work/nusa-objects.webp",
  "/assets/work/field-notes.webp",
  "/assets/work/luma-pantry.webp",
  "/assets/work/kasa-stay.webp",
];
