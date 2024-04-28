export interface FooterEl{
    title: string;
    rows: RowEl[];
    style: string;
}

export interface RowEl{
    pictoNames? : string[];
    text?: string;
    style?: string;
    url?: string;
}