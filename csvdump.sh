#!/bin/bash
mongo testdata ./scripts/organizations_to_csv.js > ../exports/csvs/organizations.csv
mongo testdata ./scripts/products_to_csv.js > ../exports/csvs/products.csv
mongo testdata ./scripts/persons_to_csv.js > ../exports/csvs/persons.csv
mongo testdata ./scripts/assets_to_csv.js > ../exports/csvs/service-assets.csv
mongo testdata ./scripts/opportunities_to_csv.js > ../exports/csvs/opportunities.csv
mongo testdata ./scripts/offers_to_csv.js > ../exports/csvs/offers.csv
mongo testdata ./scripts/verify_assets.js > ../exports/csvs/verify_assets.csv
mongo testdata ./scripts/migration.js > ../exports/csvs/migration/opportunities.csv
