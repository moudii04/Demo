function showSection(sectionId) {
    // Hide all content sections
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
