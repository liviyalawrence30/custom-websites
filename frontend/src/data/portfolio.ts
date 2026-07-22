import restaurant from "../assets/portfolio/restaurant.jpg";
import personalPortfolio from "../assets/portfolio/personal.png";
import fashionStore from "../assets/portfolio/fashion.jpg";
import realestate from "../assets/portfolio/realestate.png";
import techagency from "../assets/portfolio/techagency.png";

export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  client: string;
  shortDescription: string;
  demoUrl?: string;
  description: string;
  idealFor: string[];
}

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    image: restaurant,
    title: "Gourmet Bistro & Dining",
    client: "Gourmet Bistro Ltd.",
    shortDescription: "Restaurant & Culinary Business Site",
    demoUrl:
      "https://liviyalawrence30.github.io/custom-websites/gourmet-bistro/",
    description:
      "A custom restaurant website designed for Gourmet Bistro. Features interactive digital menus, online table booking, chef recommendations, and customer review showcases.",
    idealFor: ["Restaurants", "Cafés", "Fine Dining", "Bakeries"],
  },

  {
    id: 2,
    image: personalPortfolio,
    title: "Maria Liviya",
    client: "Final Year Engineering Student",
    shortDescription: "Personal Portfolio",
    demoUrl: "https://liviyalawrence30.github.io/dev-portfolio/",
    description:
      "A modern developer portfolio website showcasing software projects, technical skills, certifications, and an integrated contact section.",
    idealFor: ["Developers", "Students", "Consultants", "Freelancers"],
  },

  {
    id: 3,
    image: fashionStore,
    title: "Aura Boutique & Apparel",
    client: "Aura Fashion Group",
    shortDescription: "E-Commerce Fashion Store",
    demoUrl:
      "https://liviyalawrence30.github.io/custom-websites/aura-boutique/",
    description:
      "A modern e-commerce storefront crafted for Aura Boutique. Built with fast catalog loading, product filtering, shopping cart, customer wishlists, and checkout flow.",
    idealFor: ["Fashion Brands", "Boutiques", "E-Commerce Stores"],
  },

  {
    id: 4,
    image: realestate,
    title: "Horizon Luxury Properties",
    client: "Horizon Real Estate Group",
    shortDescription: "Real Estate & Property Listings Site",
    demoUrl:
      "https://liviyalawrence30.github.io/custom-websites/horizon-realestate/",
    description:
      "A luxury property platform created for Horizon Real Estate. Features interactive property search filters, virtual property tours, agent contact forms, and mortgage calculators.",
    idealFor: ["Real Estate Agencies", "Property Managers", "Brokers"],
  },

  {
    id: 5,
    image: techagency,
    title: "CloudFlow SaaS Platform",
    client: "CloudFlow Technologies",
    shortDescription: "SaaS Product & Tech Startup Website",
    demoUrl:
      "https://liviyalawrence30.github.io/custom-websites/cloudflow-saas/",
    description:
      "A high-converting SaaS product website designed for CloudFlow. Features dashboard previews, feature highlights, interactive pricing plans, and live demo requests.",
    idealFor: ["SaaS Companies", "Tech Startups", "Software Agencies"],
  },
];