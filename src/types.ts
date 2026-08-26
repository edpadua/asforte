/**
 * Type definitions for Asforte Institutional Web Application
 */

export interface NavItem {
  name: string;
  href: string;
}

export interface RouteModule {
  id: string;
  origin: string;
  destination: string;
  distanceKm: string;
  estimatedTimeMin: string;
  highway: string;
}

export interface DifferentialCard {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'concreto-asfaltico' | 'agregados-minerais';
  description: string;
  specs: string[];
  image: string;
  isMain?: boolean;
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productType: string;
  estimatedTonnage: string;
  deliveryCity: string;
  notes: string;
}
