require('dotenv').config();


var credentials = {
    client_email:process.env.email,
    private_key: process.env.key
}

// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient( credentials );

/**
 * TODO(developer): Uncomment the following line to run this code.
 */
const text = 'Your text to analyze, e.g. Hello, world!';

// Prepares a document, representing the provided text
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Classifies text in the document
const promise = client.classifyText({document});


// Classifies text in the document
const [classification] = await client.classifyText({document});
console.log('Categories:');
classification.categories.forEach(category => {
  console.log(`Name: ${category.name}, Confidence: ${category.confidence}`);
});