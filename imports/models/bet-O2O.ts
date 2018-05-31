export interface BetO2O {
    _id?: string;
    matchId: string;
    creatorUserId: string;
    oponentUserId?: string;
    amountCreator: number;
    amountOponent?: number;
    amount: number;
    forecastCreator: string;
    forecastOponent?: string;
    result?: string;
    creationDate: Date;
    acceptDate?: Date;
    public: boolean;
    status?: string;
}
