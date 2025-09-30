// OneClick Credentials - Frontend JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('OneClick Credentials system loaded');

    // Get DOM elements
    const ctaButton = document.querySelector('.cta-button');
    const loginBtn = document.querySelector('.login-btn');

    // CTA Button click handler
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // This will redirect to the student application form
            // For now, we'll show an alert - replace with actual navigation later
            alert('Redirecting to student application form...');
                window.location.href = 'student-form.html';
        });
    } 

    if (cta-button) {
        cta-button.addEventListener('click', function() {
            // This will redirect to the student application form
            // For now, we'll show an alert - replace with actual navigation later
            alert('Redirecting to student application form...');
                window.location.href = 'document-picker.html';
        })
    }

    // Admin Login button click handler
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // This will redirect to admin login page
            // For now, we'll show an alert - replace with actual navigation later
            alert('Redirecting to admin login...');
            // window.location.href = 'admin-login.html';
        });
    }

    // Add smooth scrolling for any future anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation to buttons
    function addLoadingState(button) {
        const originalText = button.textContent;
        button.textContent = 'Loading...';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }

    // Enhanced button interactions
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
});

// Utility functions for future use
const OneClickCredentials = {
    // Navigate to different pages
    navigateTo: function(page) {
        window.location.href = page;
    },

    // Show notification messages
    showNotification: function(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            backgroundColor: type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3',
            color: 'white',
            borderRadius: '4px',
            zIndex: '1000',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        });

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    },

    // Form validation helper
    validateForm: function(formData) {
        const errors = [];

        // Add validation rules as needed
        if (!formData.email || !formData.email.includes('@')) {
            errors.push('Valid email is required');
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }
};

// Export for global use
window.OneClickCredentials = OneClickCredentials;
