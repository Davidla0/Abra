export type Quote = {
    id: string;
    quote: string;
    length: number;
    author: string;
    language: string;
    tags: string[];
    sfw: string;
    permalink: string;
};

export type Copyright = {
    url: string;
    year: string;
}

export type QuoteData = {
    quotes: Quote[];
    copyright: Copyright;
};