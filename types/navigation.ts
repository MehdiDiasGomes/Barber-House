export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarConfig {
  logo: string;
  links: NavLink[];
  ctaButton: {
    label: string;
    href: string;
  };
}
