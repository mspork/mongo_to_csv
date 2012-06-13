#!/bin/bash
mongo testdata ./scripts/synch/opps.js > ../exports/synch/opps.csv
mongo testdata ./scripts/synch/offers.js > ../exports/synch/offers.csv
mongo testdata ./scripts/synch/orgs.js > ../exports/synch/orgs.csv
mongo testdata ./scripts/synch/persons.js > ../exports/synch/persons.csv
mongo testdata ./scripts/synch/quotes.js > ../exports/synch/quotes.csv
mongo testdata ./scripts/synch/bookings.js > ../exports/synch/bookings.csv

