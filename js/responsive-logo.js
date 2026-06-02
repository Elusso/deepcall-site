// Script для проверки адаптивности логотипа
document.addEventListener('DOMContentLoaded', function() {
    // Проверим, что логотип адаптируется под разные размеры экрана
    function checkLogoAdaptation() {
        const screenWidth = window.innerWidth;
        const logoImages = document.querySelectorAll('img[src*="logo.svg"]');
        
        logoImages.forEach(img => {
            // Удалим предыдущие стили
            img.style.removeProperty('height');
            img.style.removeProperty('width');
            
            // Применим соответствующие стили в зависимости от ширины экрана
            if (screenWidth <= 480) {
                img.style.height = '28px';
                img.style.width = 'auto';
            } else if (screenWidth <= 768) {
                img.style.height = '32px';
                img.style.width = 'auto';
            } else {
                img.style.height = '40px';
                img.style.width = 'auto';
            }
        });
    }
    
    // Выполним проверку при загрузке страницы
    checkLogoAdaptation();
    
    // Выполним проверку при изменении размера окна
    window.addEventListener('resize', checkLogoAdaptation);
    
    // Добавим специальные стили для мобильных устройств
    const mobileStyles = `
        @media (max-width: 768px) {
            .logo img {
                height: 32px !important;
                width: auto !important;
            }
            
            .mobile-logo img {
                height: 40px !important;
                width: auto !important;
            }
            
            .footer-logo img {
                height: 32px !important;
                width: auto !important;
            }
        }
        
        @media (max-width: 480px) {
            .logo img {
                height: 28px !important;
                width: auto !important;
            }
            
            .mobile-logo img {
                height: 36px !important;
                width: auto !important;
            }
            
            .footer-logo img {
                height: 28px !important;
                width: auto !important;
            }
        }
    `;
    
    // Добавим стили в документ
    const styleSheet = document.createElement('style');
    styleSheet.textContent = mobileStyles;
    document.head.appendChild(styleSheet);
});