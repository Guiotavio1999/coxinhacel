export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  icon: string | null;
  imageUrl: string | null;
  isActive: boolean;
  displayOrder: number;
  productCount?: number;
}
