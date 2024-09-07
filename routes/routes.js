var express = require('express');
var router = express.Router();
var axios = require('axios'); 
require('dotenv').config();

const apiKey = process.env.API_KEY;

// API route to fetch Bill of Materials
router.get('/', async (req, res) => {
  try {
    const url = 'https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002/MaterialBOMItem?$top=50&$inlinecount=allpages';

    const response = await axios.get(url, {
      headers: {
        'APIKey': apiKey,
        'DataServiceVersion': '2.0',
        'Accept': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching BOM data:', error);
    res.status(500).send('Error fetching BOM data');
  }
});

//API route to fetch all bank details
router.get('/banks', async (req, res) => {
  try {
    const url = 'https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_BANKDETAIL_SRV/A_BankDetail?$top=50&$inlinecount=allpages';
    
    const response = await axios.get(url, {
      headers: {
        'APIKey': apiKey,
        'DataServiceVersion': '2.0',
        'Accept': 'application/json'
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching BOM banks data:', error);
    res.status(500).send('Error fetching BOM banks data');
  }
});

//API route to fetch A SINGLE bank details
router.get('/bank', async (req, res) => {
  try {
    const { BankCountry, BankInternalID } = req.query;
    if (!BankCountry || !BankInternalID) {
      return res.status(400).send('Missing required query parameters: BankCountry or BankInternalID');
    }

    const url = `https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_BANKDETAIL_SRV/A_BankDetail(BankCountry=%27${BankCountry}%27,BankInternalID=%27${BankInternalID}%27)`;

    const response = await axios.get(url, {
      headers: {
        'APIKey': apiKey,
        'DataServiceVersion': '2.0',
        'Accept': 'application/json'
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching BOM banks data:', error);
    res.status(500).send('Error fetching BOM banks data');
  }
});

module.exports = router;