const axios = require('axios');

async function generateQuoteAndPost() {
    try {
        const response = await axios.get('https://zenquotes.io/api/random');
        console.log("API Response:", response.data); 

        const quoteData = response.data[0];
        const quote = quoteData.q; 
        const author = quoteData.a; 
        if (!quote || !author) {
            throw new Error("Quote or author is undefined.");
        }

        console.log("Quote fetched successfully:", `"${quote}" - ${author}`);

        const postResponse = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: `Quote of the Day`,
            body: `"${quote}" - ${author}`,
        });

        console.log("Quote posted successfully:", postResponse.data);
    } catch (error) {
        console.error("Error occurred:", error.message);
    }
}

generateQuoteAndPost();
