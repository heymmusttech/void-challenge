import type { BadgeTone, ButtonVariant, IconName } from "../types/ui";

export interface LinkItem {
  href: string;
  label: string;
}

export interface StatItem {
  label: string;
  value: string;
  color?: "emerald" | "red";
}

export interface FeatureItem {
  description: string;
  icon: IconName;
  title: string;
}

export interface JourneyStep extends FeatureItem {
  step: string;
}

export interface BenefitItem extends FeatureItem {}

export interface PricingPlan {
  badgeLabel?: string;
  buttonVariant: ButtonVariant;
  ctaLabel: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  icon: IconName;
  name: string;
  priceNote: string;
  subtitle: string;
}

export interface GameItem {
  badgeLabel?: string;
  badgeTone?: BadgeTone;
  ctaLabel?: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
}

export const demoHref =
  "mailto:games@agency.africa?subject=Demande%20de%20d%C3%A9mo%20YouCanWin";

export const contactHref = "mailto:games@agency.africa";

export const navLinks: LinkItem[] = [
  { href: "#pricing", label: "Nos offres" },
  { href: "#games", label: "Nos jeux" },
  { href: "#games", label: "Album 2025" },
  { href: "#about", label: "À propos" }
];

export const heroStats: StatItem[] = [
  { value: "500K+", label: "Interactions/mois", color: "emerald" },
  { value: "50+", label: "Marques actives", color: "red" },
  { value: "x3.5", label: "ROI moyen", color: "emerald" }
];

export const heroPreviewStats: StatItem[] = [
  { value: "127", label: "Cartes" },
  { value: "76%", label: "Complet" },
  { value: "#12", label: "Rang" }
];

export const trustLogos = [
  "Maroc Telecom",
  "Inwi",
  "Orange",
  "Carrefour"
];

export const solutionFeatures: FeatureItem[] = [
  {
    icon: "phone",
    title: "Activation instantanée",
    description: "QR codes uniques sur chaque produit"
  },
  {
    icon: "cards",
    title: "Collection digitale",
    description: "Cartes de joueurs, raretés, échanges"
  },
  {
    icon: "gift",
    title: "Récompenses exclusives",
    description: "Tirages au sort, lots partenaires, expériences VIP"
  },
  {
    icon: "chart-bar",
    title: "Analytics avancés",
    description: "Dashboard temps réel, insights consommateurs"
  }
];

export const journeySteps: JourneyStep[] = [
  {
    step: "1",
    icon: "cart",
    title: "Achat produit",
    description: "Le client achète votre produit en magasin"
  },
  {
    step: "2",
    icon: "qr",
    title: "Scan QR Code",
    description: "Il scanne le code sur l'emballage"
  },
  {
    step: "3",
    icon: "chart-bar",
    title: "Déblocage carte",
    description: "Une carte digitale est débloquée"
  },
  {
    step: "4",
    icon: "collection",
    title: "Collection",
    description: "Il complète sa collection"
  },
  {
    step: "5",
    icon: "gift",
    title: "Récompenses",
    description: "Participe aux tirages"
  }
];

export const benefitCards: BenefitItem[] = [
  {
    icon: "bolt",
    title: "Engagement immédiat",
    description: "Chaque produit devient une opportunité de jeu"
  },
  {
    icon: "heart",
    title: "Fidélisation naturelle",
    description: "Les clients reviennent pour compléter leur collection"
  },
  {
    icon: "spark",
    title: "Viralité organique",
    description: "Les fans partagent et échangent entre eux"
  }
];

export const backofficeFeatures: FeatureItem[] = [
  {
    icon: "qr",
    title: "Générateur QR Codes",
    description: "Créez et téléchargez vos QR codes uniques en masse"
  },
  {
    icon: "users",
    title: "CRM Participants",
    description: "Collectez et gérez vos participants avec segmentation avancée"
  },
  {
    icon: "spark",
    title: "Configuration jeux",
    description: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels"
  },
  {
    icon: "chart-bar",
    title: "Analytics temps réel",
    description: "Suivez vos KPIs : scans, conversions, engagement, ROI"
  },
  {
    icon: "gift",
    title: "Gestion des lots",
    description: "Définissez vos récompenses et gérez les tirages au sort"
  },
  {
    icon: "bell",
    title: "Notifications",
    description: "Envoyez des push, emails et SMS à vos participants"
  },
  {
    icon: "download",
    title: "Export données",
    description: "Téléchargez vos données en CSV, Excel ou via API"
  },
  {
    icon: "cards",
    title: "Multi-campagnes",
    description: "Gérez plusieurs campagnes simultanément"
  }
];

export const capabilityHighlights: FeatureItem[] = [
  {
    icon: "users",
    title: "Utilisateurs",
    description: "De 1K à illimité"
  },
  {
    icon: "qr",
    title: "QR Codes",
    description: "Volume adapté"
  },
  {
    icon: "globe",
    title: "Couverture",
    description: "Local à mondial"
  },
  {
    icon: "cards",
    title: "Albums",
    description: "Standard ou custom"
  },
  {
    icon: "server",
    title: "Infrastructure",
    description: "Cloud ou On-Premise"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    icon: "bolt",
    name: "Starter",
    subtitle: "Campagne locale",
    description: "Idéal pour tester sur un marché",
    priceNote: "Tarification sur mesure selon vos volumes",
    features: [
      "Jusqu'à 1 000 utilisateurs",
      "Jusqu'à 10K QR codes",
      "1 pays / region",
      "Album standard (équipe nationale)",
      "Hébergement Cloud sécurisé",
      "Backoffice simplifié",
      "Support par email",
      "1 marque"
    ],
    ctaLabel: "Demander un devis",
    buttonVariant: "outline"
  },
  {
    icon: "trend-up",
    name: "Scale",
    subtitle: "Expansion nationale",
    description: "Pour des campagnes d'envergure",
    priceNote: "Tarification sur mesure selon vos volumes",
    features: [
      "Jusqu'à 50 000 utilisateurs",
      "QR codes illimités",
      "Multi-pays (jusqu'à 5)",
      "Album complet (toutes les équipes)",
      "Cloud ou On-Premise",
      "Backoffice avancé avec analytics",
      "Support prioritaire 24/7",
      "Jusqu'à 3 marques",
      "API REST disponible"
    ],
    ctaLabel: "Planifier une démo",
    buttonVariant: "accent",
    highlighted: true,
    badgeLabel: "POPULAIRE"
  },
  {
    icon: "globe",
    name: "Enterprise",
    subtitle: "Solution globale",
    description: "Pour les groupes internationaux",
    priceNote: "Tarification sur mesure selon vos volumes",
    features: [
      "Utilisateurs illimités",
      "QR codes illimités",
      "Déploiement mondial",
      "Albums personnalisés par région",
      "Infrastructure dédiée (On-Premise)",
      "Multi-marques illimité",
      "Développements sur-mesure",
      "Account manager dédié",
      "SLA garanti 99.9%",
      "Formation et onboarding complet"
    ],
    ctaLabel: "Contactez-nous",
    buttonVariant: "outline"
  }
];

export const games: GameItem[] = [
  {
    title: "Album Digital 2025",
    description: "Collection de cartes avec échanges et défis.",
    imageSrc: "/images/gameAlbum.png",
    imageAlt: "Visuel du jeu Album Digital 2025",
    badgeLabel: "STAR",
    badgeTone: "red",
    ctaLabel: "Découvrir"
  },
  {
    title: "Quiz Football",
    description: "Questions sur l'actualité et l'histoire du foot.",
    imageSrc: "/images/gameQuiz.png",
    imageAlt: "Visuel du jeu Quiz Football",
    badgeLabel: "BIENTÔT",
    badgeTone: "slate"
  },
  {
    title: "Tombola digitale",
    description: "Tirages au sort avec lots sponsorisés.",
    imageSrc: "/images/gameTombola.png",
    imageAlt: "Visuel du jeu Tombola digitale"
  },
  {
    title: "Pronostics",
    description: "Prédictions de matchs et classements.",
    imageSrc: "/images/gamePronostics.png",
    imageAlt: "Visuel du jeu Pronostics"
  }
];

export const performanceStats: Array<StatItem & { icon: IconName }> = [
  {
    icon: "trend-up",
    value: "500K+",
    label: "Interactions mensuelles"
  },
  {
    icon: "users",
    value: "50+",
    label: "Marques partenaires"
  },
  {
    icon: "star",
    value: "98%",
    label: "Taux de satisfaction"
  },
  {
    icon: "support",
    value: "24/7",
    label: "Support technique"
  }
];

export const footerQuickLinks: LinkItem[] = [
  { href: "#pricing", label: "Nos offres" },
  { href: "#games", label: "Nos jeux" },
  { href: "#games", label: "Album 2025" },
  { href: "#about", label: "À propos" }
];

export const footerLegalLinks: LinkItem[] = [
  { href: contactHref, label: "games@agency.africa" },
  { href: "#footer", label: "Mentions légales" },
  { href: "#footer", label: "Protection des données (CNDP)" },
  { href: "#footer", label: "Conditions d'utilisation" }
];

export const socialLinks: LinkItem[] = [
  { href: "#footer", label: "fb" },
  { href: "#footer", label: "x" },
  { href: "#footer", label: "ig" },
  { href: "#footer", label: "in" }
];
