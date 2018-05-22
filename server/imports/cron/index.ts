import {MatchesColl} from "../matches/collection";

SyncedCron.add({
  name: 'Cron de pagos',
  schedule: function (parser) {
    // parser is a later.parse object
    return parser.text('every 1 mins');
  },
  job: function () {
    MatchesColl.collection.find({endEstimateDate: {$lte: new Date()}})
      .forEach((match) => {
        console.log(match);
      });
    return new Date();
  }
});


