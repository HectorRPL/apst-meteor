export interface BetO2O {
    _id?: string;
    matchId: string;
    creatorUserId: string;
    oponentUserId?: string;
    amount: number;
    forecastCreator: string;
    forecastOponent?: string;
    result?: string;
    creationDate: Date;
    acceptDate?: Date;
    public: boolean;
    status?: string;
}
