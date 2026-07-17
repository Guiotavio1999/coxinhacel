export interface Review {
  id: string;
  authorName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  /** Data aproximada informada pelo administrador (nem toda avaliação tem timestamp exato). */
  approximateDate: string;
  source: "google" | "instagram" | "whatsapp" | "presencial" | "outro";
  isFeatured: boolean;
  isActive: boolean;
  displayOrder: number;
}
