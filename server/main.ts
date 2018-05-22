import './publish';
import './methods'
import {Meteor} from 'meteor/meteor';

declare const ServiceConfiguration: any;

Meteor.startup(() => {

    SyncedCron.start();
    // Configuring oAuth services
    const services = Meteor.settings.private.oAuth;

    if (services) {
        for (let service in services) {
            ServiceConfiguration.configurations.upsert({service: service}, {
                $set: services[service]
            });
        }
    }
});
