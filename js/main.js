

//change width on scrolling ---- ourSkillsSection
let section = document.querySelector('.our-skills');
let spans = document.querySelectorAll(".skills span");
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}
//  --- eventsSection
//change numbers on scrolling --- statsSection
