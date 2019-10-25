const Airtable = require('airtable');
require('dotenv').config();

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
});
// const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
