

import {cronVerify} from "./cron-verify";

SyncedCron.start();

SyncedCron.add({
    name: 'Cron de pagos',
    schedule: function (parser) {
        // parser is a later.parse object
        return parser.text('every 1 mins');
    },
    job: function () {
        console.log('Empezo el cron ', new Date());
        cronVerify.verifyStatusMatches();
        cronVerify.verifyStatusBets();
        return new Date();
    }
});




