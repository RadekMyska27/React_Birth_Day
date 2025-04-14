interface IData {
    date: string;
    name: string;
    surname: string;
    nickname?: string;
}

export const Data: IData[] = [
    {
        name: "Radek",
        surname: "Myška",
        date: "27.6.1986",
    },
    {
        name: "Hana",
        surname: "Myškova",
        date: "9.8.1989",
    },
]