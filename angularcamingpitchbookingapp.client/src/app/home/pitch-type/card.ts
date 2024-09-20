import { OfferTypePitch } from "./offer-type-pitch";

export interface Card{
    image_url?: string;
    image_class?: string;
    images?: Image[];
    height_mobile_class?: string;
    title: string;
    text: string;
    alt: string;
    class: string;
    offers?: OfferTypePitch[];
    gap_offers_class?: string;
    file_url? : string;
  }

  export interface Image{
    alt: string;
    class?: string;
    url?: string;
  }