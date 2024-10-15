function getCurrentDateFormats() {
    const now = new Date();
    
    // Define date formats directly
    const formats = [
        now.toLocaleString('en-US', { timeZone: 'UTC', hour12: false }), // Format 1
        now.toLocaleString('en-GB', { timeZone: 'UTC', hour12: false }).replace(',', '').replace(':', '.'), // Format 2
        `${now.toISOString().split('T')[0]} ${now.toLocaleString('en-US', { weekday: 'long' }).split(' ')[0]}`, // Format 3
        now.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }), // Format 4
        now.toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }) // Format 5
    ];

    return formats;
}

// Get and display current date formats
const displayDateFormats = () => {
    const dateList = document.getElementById('dateList');
    const currentDates = getCurrentDateFormats();

    currentDates.forEach((date, index) => {
        const li = document.createElement('li');
        li.textContent = `Format ${index + 1}: ${date}`;
        dateList.appendChild(li);
    });
};

// Call the function to display the dates
displayDateFormats();
