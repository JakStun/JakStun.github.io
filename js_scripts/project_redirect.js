document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.project-overview').forEach(project => {
        project.addEventListener('click', (e) => {
            const selection = window.getSelection();
            if (selection.toString().length === 0) {
                const url = project.getAttribute('data-url');
                if (url) {
                    // Add fade-out class
                    document.body.classList.add('fade-out');
                    
                    // Wait a little for the animation to play, then redirect
                    setTimeout(() => {
                        window.location.href = url;
                    }, 500); // 500ms delay (same as your CSS animation duration)
                }
            }
        });
    });
});
