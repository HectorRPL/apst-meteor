export interface ApiMatch {
    _id?:     object;
    id:       string;
    h:        string;
    h_id:     string;
    a:        string;
    a_id:     string;
    l:        string;
    l_id:     string;
    start:    string;
    status?:  string;
    hc:       string;
    ac:       string;
    hg:       string;
    ag:       string;
    hrc:      string;
    arc:      string;
    hyc:      string;
    ayc:      string;
    hf_hc:    string;
    hf_ac:    string;
    hf_hg:    string;
    hf_ag:    string;
    ish:      string;
    hp?:      string;
    ap?:      string;
}

export interface ApiMatches {
    success: number;
    pagination: object;
    data: object;
    matches: [ApiMatch];
}
