#!/usr/bin/env node

console.log("Starting logger");
const MSG = process.env.MESSAGE || "logging";
const INTERVAL = parseInt(process.env.INTERVAL || 1000, 10);

setInterval(() => console.log(MSG), INTERVAL);
