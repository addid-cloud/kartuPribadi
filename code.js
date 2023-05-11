function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var allSections = document.querySelectorAll('section');
    allSections.forEach(function (s) {
        if (s.id !== sectionId) {
            s.classList.remove("show");
        }
    });
    section.classList.toggle("show");
}