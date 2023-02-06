export interface IQuotes {
    quote: string;
    author: string;
    category: string;
};

export interface IGetQuotes {
    (): Promise<IQuotes[]>;
};
