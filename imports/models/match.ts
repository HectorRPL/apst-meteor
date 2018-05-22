export interface Match {
    _id?: string;
    home: string;
    away: string;
    matchStartDate: Date;
    endEstimateDate: Date;
    status?: string;
    scoreHome: number;
    scoreAway: number;
    apiMatchId: string;
    creationDate: Date;
}
