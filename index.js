window.addEventListener('DOMContentLoaded', function() {
    // Function to get the current date and time in the desired format
    function getCurrentDateTime() {
        var now = new Date();
        var dateString = now.toLocaleDateString();
        var timeString = now.toLocaleTimeString();
        return dateString + ' ' + timeString;
    }

    // Update the footer text with the current date and time
    function updateLastModifiedDateTime() {
        var lastModified = document.getElementById('lastModified');
        if (lastModified) {
            lastModified.textContent = getCurrentDateTime();
        }
    }

    // Call the function to initially set the last modified date and time
    updateLastModifiedDateTime();

    // Add event listener for modification of the document
    document.addEventListener('DOMContentLoaded', updateLastModifiedDateTime);
});