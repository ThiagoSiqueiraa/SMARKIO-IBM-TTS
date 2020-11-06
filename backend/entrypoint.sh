#!/bin/sh
npm run typeorm migration:run
npm start
exec "$@"
