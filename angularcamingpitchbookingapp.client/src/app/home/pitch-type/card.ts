import { OfferTypePitch } from "./offer-type-pitch";

export interface Card{
    image_url?: string;
    image_class?: string;
    height_mobile_class?: string;
    title: string;
    text: string;
    alt: string;
    hover_background_color: string;
    offers?: OfferTypePitch[];
    gap_offers_class?: string;
    file_url? : string;
  }