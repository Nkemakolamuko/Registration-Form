window.addEventListener('DOMContentLoaded', function() {
    // Retrieve form data from query string
    var urlParams = new URLSearchParams(window.location.search);
    var formData = {};

    if (urlParams.has('first_name')) {
        formData.first_name = urlParams.get('first_name');
    }

    if (urlParams.has('middle_name')) {
        formData.middle_name = urlParams.get('middle_name');
    }

    if (urlParams.has('last_name')) {
        formData.last_name = urlParams.get('last_name');
    }

    if (urlParams.has('date_of_birth')) {
        formData.date_of_birth = urlParams.get('date_of_birth');
    }

    if (urlParams.has('student_id')) {
        formData.student_id = urlParams.get('student_id');
    }

    if (urlParams.has('street_address')) {
        formData.street_address = urlParams.get('street_address');
    }

    if (urlParams.has('city')) {
        formData.city = urlParams.get('city');
    }

    if (urlParams.has('state_province')) {
        formData.state_province = urlParams.get('state_province');
    }

    if (urlParams.has('country')) {
        formData.country = urlParams.get('country');
    }

    if (urlParams.has('zip_code')) {
        formData.zip_code = urlParams.get('zip_code');
    }

    if (urlParams.has('email')) {
        formData.email = urlParams.get('email');
    }

    if (urlParams.has('phone')) {
        formData.phone = urlParams.get('phone');
    }

    if (urlParams.has('course')) {
        formData.course = urlParams.get('course');
    }

    if (urlParams.has('level')) {
        formData.level = urlParams.get('level');
    }

    if (urlParams.has('language')) {
        formData.language = urlParams.get('language');
    }

    if (urlParams.has('start_date')) {
        formData.start_date = urlParams.get('start_date');
    }

    if (urlParams.has('comments')) {
        formData.comments = urlParams.get('comments');
    }

    var responseContainer = document.querySelector('.response-container');

    // Display form response
    var html = '<h3>Student Information</h3>';
    html += '<p>First Name: ' + (formData.first_name || '') + '</p>';
    html += '<p>Middle Name: ' + (formData.middle_name || '') + '</p>';
    html += '<p>Last Name: ' + (formData.last_name || '') + '</p>';
    html += '<p>Date of Birth: ' + (formData.date_of_birth || '') + '</p>';
    html += '<p>Student ID: ' + (formData.student_id || '') + '</p>';

    html += '<h3>Address</h3>';
    html += '<p>Street Address: ' + (formData.street_address || '') + '</p>';
    html += '<p>City: ' + (formData.city || '') + '</p>';
    html += '<p>State/Province: ' + (formData.state_province || '') + '</p>';
    html += '<p>Country: ' + (formData.country || '') + '</p>';
    html += '<p>ZIP Code: ' + (formData.zip_code || '') + '</p>';

    html += '<h3>Contact Information</h3>';
    html += '<p>Email: ' + (formData.email || '') + '</p>';
    html += '<p>Phone: ' + (formData.phone || '') + '</p>';

    html += '<h3>Courses</h3>';
    html += '<p>Course: ' + (formData.course || '') + '</p>';
    html += '<p>Level: ' + (formData.level || '') + '</p>';
    html += '<p>Language: ' + (formData.language || '') + '</p>';
    html += '<p>Start Date: ' + (formData.start_date || '') + '</p>';

    html += '<h3>Comments</h3>';
    html += '<p>' + (formData.comments || '') + '</p>';

    responseContainer.innerHTML = html;
});
