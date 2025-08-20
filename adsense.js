// Palera1n AdSense Integration
(function() {
    'use strict';
    
    // Load AdSense script
    function loadAdSenseScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9488928144286758';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
    }
    
    // Initialize AdSense ads
    function initAdSense() {
        if (typeof adsbygoogle !== 'undefined') {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } else {
            // If adsbygoogle is not loaded yet, wait and try again
            setTimeout(initAdSense, 100);
        }
    }
    
    // Create AdSense container
    function createAdSenseContainer() {
        var container = document.createElement('center');
        container.innerHTML = '<!-- Palera1n - Main --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9488928144286758" data-ad-slot="7649364691" data-ad-format="auto" data-full-width-responsive="true"></ins><br>';
        return container;
    }
    
    // Replace [ADSENSE] patterns with actual AdSense containers
    function replaceAdSensePatterns() {
        var walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        var textNode;
        var replacements = [];
        
        while (textNode = walker.nextNode()) {
            var text = textNode.textContent;
            if (text.includes('[ADSENSE]')) {
                var parts = text.split('[ADSENSE]');
                var parent = textNode.parentNode;
                
                // Create text nodes for parts
                var fragment = document.createDocumentFragment();
                
                for (var i = 0; i < parts.length; i++) {
                    if (parts[i]) {
                        fragment.appendChild(document.createTextNode(parts[i]));
                    }
                    if (i < parts.length - 1) {
                        fragment.appendChild(createAdSenseContainer());
                    }
                }
                
                parent.replaceChild(fragment, textNode);
            }
        }
        
        // Initialize AdSense after replacement
        setTimeout(initAdSense, 500);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            loadAdSenseScript();
            replaceAdSensePatterns();
        });
    } else {
        loadAdSenseScript();
        replaceAdSensePatterns();
    }
    
    // Make functions globally available
    window.Palera1nAdSense = {
        loadAdSenseScript: loadAdSenseScript,
        initAdSense: initAdSense,
        createAdSenseContainer: createAdSenseContainer,
        replaceAdSensePatterns: replaceAdSensePatterns
    };
})(); 