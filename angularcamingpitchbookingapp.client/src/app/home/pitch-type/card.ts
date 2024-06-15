import { OfferTypePitch } from "./offer-type-pitch";

export interface Card{
    image_url: string;
    title: string;
    text: string;
    alt: string;
    hover_background_color: string;
    offers?: OfferTypePitch[];
    file_url? : string;
  }