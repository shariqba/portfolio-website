   // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const overlay = document.getElementById('overlay');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        
        function toggleMobileMenu() {
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            
            // Change hamburger icon
            const icon = hamburger.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
        
        hamburger.addEventListener('click', toggleMobileMenu);
        overlay.addEventListener('click', toggleMobileMenu);
        
        // Close mobile menu when a link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', toggleMobileMenu);
        });

        // Dark/Light Mode Toggle
        const themeToggle = document.getElementById('themeToggle');
        const mobileThemeToggle = document.getElementById('mobileThemeToggle');
        const body = document.body;
        const icon = themeToggle.querySelector('i');
        const mobileIcon = mobileThemeToggle.querySelector('i');

        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        
        // Apply the saved theme on page load
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            mobileIcon.classList.remove('fa-moon');
            mobileIcon.classList.add('fa-sun');
            mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }

        // Function to toggle theme
        function toggleTheme() {
            body.classList.toggle('dark-mode');
            
            // Update icons and save preference
            if (body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                mobileIcon.classList.remove('fa-moon');
                mobileIcon.classList.add('fa-sun');
                mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                mobileIcon.classList.remove('fa-sun');
                mobileIcon.classList.add('fa-moon');
                mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
                localStorage.setItem('theme', 'light');
            }
        }

        // Add event listeners to both theme toggles
        themeToggle.addEventListener('click', toggleTheme);
        mobileThemeToggle.addEventListener('click', toggleTheme);