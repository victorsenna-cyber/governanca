(function() {
  // Ensure the script doesn't run multiple times
  if (window.vkPixelSalesScriptLoaded) return;
  window.vkPixelSalesScriptLoaded = true;

  window.vkPixelSales = window.vkPixelSales || { _q: [] };
  
  // Expose generateDecoratedUrl for debugging
  window.vkPixelSales.generateDecoratedUrl = null; // Will be set after initialization

  // Configuration
  const CONFIG = {
    cookieName: 'vk_user_uid', // Same as the existing pixel
    cookieTTL: 365 * 24 * 60, // 1 year in minutes
  };

  // Flag to disable Hotmart SCK handling based on the loading <script> tag
  const DISABLE_SCK = (function detectDisableSckFlag() {
    try {
      const scriptEl = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1] || null;
      })();
      if (!scriptEl) return false;

      // Check CSS classes
      if (scriptEl.classList && (scriptEl.classList.contains('vk-no-sck') || scriptEl.classList.contains('vk-disable-sck'))) {
        return true;
      }

      // Check data attributes
      const dataAttrs = ['data-vk-no-sck', 'data-vk-disable-sck', 'data-nosck', 'data-no-sck'];
      for (const attr of dataAttrs) {
        if (scriptEl.hasAttribute(attr)) {
          const v = scriptEl.getAttribute(attr);
          if (v === null || v === '' || v === '1' || (typeof v === 'string' && v.toLowerCase() === 'true')) {
            return true;
          }
        }
      }

      // Check query params on script src
      if (scriptEl.src) {
        const url = new URL(scriptEl.src, window.location.origin);
        const paramKeys = ['nosck', 'no_sck', 'disable_sck', 'vk_no_sck'];
        for (const key of paramKeys) {
          const value = url.searchParams.get(key);
          if (value !== null && (value === '' || value === '1' || value.toLowerCase() === 'true')) {
            return true;
          }
        }
      }
    } catch (_) {}
    return false;
  })();

  // Flag to disable automatic xcod URL refresh
  const DISABLE_XCOD_URL = (function() {
    try {
      const scriptEl = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1] || null;
      })();
      return scriptEl && scriptEl.hasAttribute('data-no-xcod-url');
    } catch (_) {
      return false;
    }
  })();

  // Flag to enable automatic utm_content URL refresh
  const ENABLE_UTM_CONTENT_URL = (function() {
    try {
      const scriptEl = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1] || null;
      })();
      return scriptEl && scriptEl.hasAttribute('data-enable-utm-content-url');
    } catch (_) {
      return false;
    }
  })();

  // Flag to enable OneClick UTM compatibility mode
  const ONECLICK_COMPAT_MODE = (function() {
    try {
      const scriptEl = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1] || null;
      })();
      return scriptEl && scriptEl.hasAttribute('data-oneclick-compat');
    } catch (_) {
      return false;
    }
  })();

  // Flag to use utm_content as encoded parameter in OneClick compatibility mode
  const ONECLICK_USE_UTM_CONTENT = (function() {
    try {
      const scriptEl = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1] || null;
      })();
      return scriptEl && scriptEl.hasAttribute('data-oneclick-use-utm-content');
    } catch (_) {
      return false;
    }
  })();

  // Flag to map utm_source to vk_source
  const MAP_UTM_TO_VK_SOURCE = (function() {
    try {
      const scriptEl = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1] || null;
      })();
      return scriptEl && scriptEl.hasAttribute('data-map-utm-to-vk-source');
    } catch (_) {
      return false;
    }
  })();

  // Flag to map a custom URL parameter's value to vk_source in decorated links
  // Usage: s.setAttribute('data-vk-source-param', 'utm_campaign')
  const VK_SOURCE_PARAM = (function() {
    try {
      const scriptEl = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1] || null;
      })();
      if (!scriptEl || !scriptEl.hasAttribute('data-vk-source-param')) return null;
      const val = scriptEl.getAttribute('data-vk-source-param');
      return (val && val.trim()) ? val.trim() : null;
    } catch (_) {
      return null;
    }
  })();

  // Flag to map a custom URL parameter's value to vk_ad_id in decorated links
  // Usage: s.setAttribute('data-vk-ad-id-param', 'utm_term')
  const VK_AD_ID_PARAM = (function() {
    try {
      const scriptEl = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1] || null;
      })();
      if (!scriptEl || !scriptEl.hasAttribute('data-vk-ad-id-param')) return null;
      const val = scriptEl.getAttribute('data-vk-ad-id-param');
      return (val && val.trim()) ? val.trim() : null;
    } catch (_) {
      return null;
    }
  })();

  // Flag to protect a cached paid vk_source from being overwritten by non-paid entries.
  // When enabled: if the cache already holds a vk_source that starts with "paid" and the
  // new page entry has no vk_source or a non-paid one, the cache is kept intact and the
  // paid source is carried forward. A new paid source always replaces the old one normally.
  // Usage: s.setAttribute('data-sticky-paid-source', '')
  const STICKY_PAID_SOURCE = (function() {
    try {
      const scriptEl = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1] || null;
      })();
      return scriptEl && scriptEl.hasAttribute('data-sticky-paid-source');
    } catch (_) {
      return false;
    }
  })();

  // Custom parameter name for encoded data (exclusive mode)
  // When set, ONLY this parameter will be added with encoded data, no other params
  // Usage: s.setAttribute('data-custom-param', 'my_custom_param')
  const CUSTOM_ENCODED_PARAM = (function() {
    try {
      const scriptEl = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1] || null;
      })();
      if (!scriptEl || !scriptEl.hasAttribute('data-custom-param')) return null;
      const val = scriptEl.getAttribute('data-custom-param');
      return (val && val.trim()) ? val.trim() : null;
    } catch (_) {
      return null;
    }
  })();

  // Flag to scope the tracking params cache by domain instead of per page path.
  // When enabled, all pages of the same domain share a single cache entry, so UTMs
  // captured on /landing are reused on /checkout, /obrigado, etc.
  // Usage: s.setAttribute('data-global-tracking-cache', '')
  const GLOBAL_TRACKING_CACHE = (function() {
    try {
      const scriptEl = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1] || null;
      })();
      return scriptEl && scriptEl.hasAttribute('data-global-tracking-cache');
    } catch (_) {
      return false;
    }
  })();

  // Tracking params cache (7 days) scoped per page (or per domain when GLOBAL_TRACKING_CACHE is on)
  const TRACKING_CACHE_KEY_BASE = 'vk_tracking_params';
  const TRACKING_CACHE_TTL_MINUTES = 7 * 24 * 60;
  function getTrackingCacheKey() {
    if (GLOBAL_TRACKING_CACHE) {
      return `${TRACKING_CACHE_KEY_BASE}:global`;
    }
    try {
      const path = window.location && window.location.pathname ? window.location.pathname : '/';
      return `${TRACKING_CACHE_KEY_BASE}:${path}`;
    } catch (e) {
      return `${TRACKING_CACHE_KEY_BASE}:/`;
    }
  }

  function saveTrackingParamsToCache(params) {
    try {
      const payload = {
        value: params,
        expiresAt: Date.now() + TRACKING_CACHE_TTL_MINUTES * 60 * 1000,
      };
      const key = getTrackingCacheKey();
      localStorage.setItem(key, JSON.stringify(payload));
      console.log('VK Pixel Sales (Cache): Salvando no cache por 7 dias (por página) ->', key, params);
    } catch (e) {
      console.log('VK Pixel Sales (Cache): Falha ao salvar no cache', e);
    }
  }

  function loadTrackingParamsFromCache() {
    try {
      const key = getTrackingCacheKey();
      const raw = localStorage.getItem(key);
      if (!raw) {
        console.log('VK Pixel Sales (Cache): Cache ausente para a página ->', key);
        return null;
      }
      const payload = JSON.parse(raw);
      if (
        payload &&
        typeof payload === 'object' &&
        payload.expiresAt &&
        payload.value &&
        typeof payload.value === 'object'
      ) {
        if (payload.expiresAt > Date.now()) {
          console.log('VK Pixel Sales (Cache): HIT (por página) ->', key, payload.value);
          return payload.value;
        } else {
          console.log('VK Pixel Sales (Cache): Expirado, limpando (por página) ->', key);
          try { localStorage.removeItem(key); } catch (_) {}
          return null;
        }
      }
      console.log('VK Pixel Sales (Cache): Payload inválido');
    } catch (e) {
      console.log('VK Pixel Sales (Cache): Erro ao carregar do cache', e);
    }
    return null;
  }

  // Typebot (and similar SPAs) strip query params via history.replaceState on load.
  // Performance Navigation Timing keeps the original landed URL, including vk_*/utm_*.
  function isTrackingParamKey(key) {
    if (!key) return false;
    if (key.startsWith('utm_') || key === 'vk_source' || key === 'vk_ad_id') return true;
    if (VK_SOURCE_PARAM && key === VK_SOURCE_PARAM) return true;
    if (VK_AD_ID_PARAM && key === VK_AD_ID_PARAM) return true;
    return false;
  }

  function searchParamsHaveTracking(params) {
    if (!params) return false;
    let found = false;
    params.forEach((_, key) => {
      if (isTrackingParamKey(key)) found = true;
    });
    return found;
  }

  function getEffectiveUrlSearchParams() {
    try {
      const fromLocation = new URLSearchParams(window.location.search || '');
      if (searchParamsHaveTracking(fromLocation)) {
        return fromLocation;
      }

      const navEntries = (typeof performance !== 'undefined' && performance.getEntriesByType)
        ? performance.getEntriesByType('navigation')
        : null;
      const navName = navEntries && navEntries[0] && navEntries[0].name;
      if (navName) {
        const fromNav = new URL(navName).searchParams;
        if (searchParamsHaveTracking(fromNav)) {
          console.log('VK Pixel Sales: URL params stripped; using original navigation URL params ->', navName);
          return fromNav;
        }
      }

      return fromLocation;
    } catch (e) {
      console.log('VK Pixel Sales: Falha ao resolver URL params efetivos', e);
      try {
        return new URLSearchParams(window.location.search || '');
      } catch (_) {
        return new URLSearchParams();
      }
    }
  }

  function isPaidSource(value) {
    return typeof value === 'string' && value.toLowerCase().startsWith('paid');
  }

  function getStickyPaidCacheIfApplicable(currentVkSource) {
    if (!STICKY_PAID_SOURCE || isPaidSource(currentVkSource)) return null;
    const cached = loadTrackingParamsFromCache();
    if (cached && isPaidSource(cached['vk_source'])) return cached;
    return null;
  }

  function applyStickyPaidFields(targetObj, keyMap) {
    const stickyCache = getStickyPaidCacheIfApplicable(targetObj[keyMap.vkSource]);
    if (!stickyCache) return false;

    targetObj[keyMap.vkSource] = stickyCache['vk_source'];
    if (
      keyMap.vkAdId &&
      (!targetObj[keyMap.vkAdId] || targetObj[keyMap.vkAdId] === '') &&
      stickyCache['vk_ad_id']
    ) {
      targetObj[keyMap.vkAdId] = stickyCache['vk_ad_id'];
    }
    return true;
  }

  let clientId = 'unknown_client'; // Will be set by init
  let userId = null;       // visitor_id (cookie vk_user_uid) — not placed in xcod.u
  let eventId = null;      // tracking_id — goes in xcod.u
  let sessionId = null;
  let pageUtms = {};
  let mappedVkParams = {};
  let encodedPageData = null;

  // Add xcod parameter after OneClick processes elements
  function addXcodAfterOneClick() {
    if (!encodedPageData) return;
    const encodedParamName = ONECLICK_USE_UTM_CONTENT ? 'utm_content' : 'xcod';
    
    // Function to add encoded param to a URL string
    function addXcodToUrlString(urlString) {
      try {
        const url = new URL(urlString, window.location.origin);
        if (!url.searchParams.has(encodedParamName)) {
          url.searchParams.set(encodedParamName, encodedPageData);
        }
        return url.toString();
      } catch (e) {
        return urlString;
      }
    }
    
    // Function to process elements and add encoded param
    function processElementsForXcod() {
      const links = document.querySelectorAll('a[href], form[action], form:not([action])');
      links.forEach(element => {
        // Skip if we've already processed this element
        if (element.dataset.vkXcodProcessed) return;
        
        const urlAttr = element.tagName === 'A' ? 'href' : 'action';
        let url = element.getAttribute(urlAttr);
        
        // Skip if no URL or it's a fragment/anchor
        if (!url || url.startsWith('#')) return;
        
        // For forms without action, use current page URL
        if (element.tagName === 'FORM' && !url) {
          url = window.location.href;
        }
        
        // Add encoded param if not already present
        if (url && !url.includes(`${encodedParamName}=`)) {
          const newUrl = addXcodToUrlString(url);
          if (newUrl !== url) {
            element.setAttribute(urlAttr, newUrl);
            // Mark as processed to prevent re-processing
            element.dataset.vkXcodProcessed = 'true';
          }
        } else if (url && url.includes(`${encodedParamName}=`)) {
          // Mark as processed even if encoded parameter was already there
          element.dataset.vkXcodProcessed = 'true';
        }
      });
    }
    
    // Process existing elements after a delay to let OneClick finish
    setTimeout(processElementsForXcod, 100);
    
    // Set up observer for new elements (with delay to avoid conflicts)
    const observer = new MutationObserver(mutations => {
      let hasNewElements = false;
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Only process if we have actual new elements (not just attribute changes)
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              hasNewElements = true;
            }
          });
        }
        // Ignore attribute mutations to prevent loops
      });
      
      if (hasNewElements) {
        // Delay processing to let OneClick handle it first
        setTimeout(processElementsForXcod, 50);
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    console.log('VK Pixel Sales (OneClick): encoded parameter post-processor initialized for', encodedParamName);
  }

  // Process queued commands
  const commands = window.vkPixelSales._q || [];
  commands.forEach(function(command) {
    const method = command[0];
    const args = command.slice(1);
    if (method === 'init') {
      initializePixel.apply(null, args);
    }
  });

  // Function to initialize the pixel
  function initializePixel(clientIdFromInit) {
    if (window.vkPixelSalesInitialized) {
      console.log('VK Pixel Sales: Already initialized, skipping duplicate initialization');
      return;
    }
    window.vkPixelSalesInitialized = true;
    
    clientId = clientIdFromInit || clientId;
    userId = getOrCreateUserId();
    eventId = getOrCreateTrackingId();
    sessionId = getOrCreateSessionId();

    const collectedData = collectData();
    const truncatedData = truncateXcodData(collectedData);
    encodedPageData = JSON.stringify(truncatedData);
    
    // Expose generateDecoratedUrl for debugging after initialization
    window.vkPixelSales.generateDecoratedUrl = generateDecoratedUrl;

    if (ONECLICK_COMPAT_MODE) {
      console.log('VK Pixel Sales: OneClick compatibility mode enabled');
      // In OneClick mode, we let OneClick handle UTM propagation first
      // Then we add encoded parameter afterward
      if (!ONECLICK_USE_UTM_CONTENT) {
        addXcodToUrl();
      }
      addUtmContentToUrl();
      addXcodAfterOneClick(); // Add encoded parameter after OneClick processes elements
      handleElementorFormRedirects();
      initializeEnhancements(); // Initialize new enhancement methods
    } else {
      // Normal mode - original behavior
      // Store UTMs from the current page for link decoration, with cache logic
      // Uses navigation entry fallback when hosts (e.g. Typebot) strip query params on load
      const currentUrlParams = getEffectiveUrlSearchParams();
      pageUtms = {}; // Ensure it's an object

      const trackingParamsFromUrl = {};
      let hasAnyTrackingParam = false;

      currentUrlParams.forEach((value, key) => {
        if (key.startsWith('utm_')) {
          pageUtms[key] = value;
          trackingParamsFromUrl[key] = value;
          hasAnyTrackingParam = true;
        } else if (key === 'vk_source' || key === 'vk_ad_id') {
          trackingParamsFromUrl[key] = value;
          hasAnyTrackingParam = true;
        }
      });

      // Custom parameter mapping to vk_source (runs before MAP_UTM_TO_VK_SOURCE so it takes priority)
      if (VK_SOURCE_PARAM && (!trackingParamsFromUrl['vk_source'] || trackingParamsFromUrl['vk_source'] === '')) {
        const mappedValue = currentUrlParams.get(VK_SOURCE_PARAM);
        if (mappedValue && mappedValue !== '') {
          trackingParamsFromUrl['vk_source'] = mappedValue;
          hasAnyTrackingParam = true;
          console.log('VK Pixel Sales: Mapeando', VK_SOURCE_PARAM, 'para vk_source:', mappedValue);
        }
      }

      // Custom parameter mapping to vk_ad_id
      if (VK_AD_ID_PARAM && (!trackingParamsFromUrl['vk_ad_id'] || trackingParamsFromUrl['vk_ad_id'] === '')) {
        const mappedValue = currentUrlParams.get(VK_AD_ID_PARAM);
        if (mappedValue && mappedValue !== '') {
          trackingParamsFromUrl['vk_ad_id'] = mappedValue;
          hasAnyTrackingParam = true;
          console.log('VK Pixel Sales: Mapeando', VK_AD_ID_PARAM, 'para vk_ad_id:', mappedValue);
        }
      }

      // Map utm_source to vk_source if flag is enabled
      if (MAP_UTM_TO_VK_SOURCE) {
        const vkSourceValue = trackingParamsFromUrl['vk_source'] || null;
        const utmSourceValue = trackingParamsFromUrl['utm_source'] || null;
        
        // If vk_source is blank, use utm_source
        if (!vkSourceValue || vkSourceValue === '') {
          if (utmSourceValue && utmSourceValue !== '') {
            trackingParamsFromUrl['vk_source'] = utmSourceValue;
            console.log('VK Pixel Sales: Mapeando utm_source para vk_source (cache):', utmSourceValue);
            hasAnyTrackingParam = true;
          } else {
            // If utm_source is also null/blank, set vk_source to 'organic'
            trackingParamsFromUrl['vk_source'] = 'organic';
            console.log('VK Pixel Sales: utm_source vazio, definindo vk_source como "organic" (cache)');
            hasAnyTrackingParam = true;
          }
        }
      }

      if (hasAnyTrackingParam) {
        console.log('VK Pixel Sales (Cache): Parâmetros de rastreio encontrados na URL ->', trackingParamsFromUrl);

        // Sticky paid source: if the new entry is not paid but the cache already has a paid
        // source, preserve the cached source (and vk_ad_id) and skip overwriting the cache.
        if (STICKY_PAID_SOURCE && !isPaidSource(trackingParamsFromUrl['vk_source'])) {
          const appliedSticky = applyStickyPaidFields(trackingParamsFromUrl, {
            vkSource: 'vk_source',
            vkAdId: 'vk_ad_id',
          });
          if (appliedSticky) {
            console.log('VK Pixel Sales (Cache): Sticky paid source — preservando atribuição paga do cache, ignorando entrada sem fonte paga:', trackingParamsFromUrl['vk_source'], trackingParamsFromUrl['vk_ad_id'] || '(sem vk_ad_id)');
          } else {
            saveTrackingParamsToCache(trackingParamsFromUrl);
          }
        } else {
          saveTrackingParamsToCache(trackingParamsFromUrl);
        }

        if (VK_SOURCE_PARAM && trackingParamsFromUrl['vk_source']) {
          mappedVkParams['vk_source'] = trackingParamsFromUrl['vk_source'];
        }
        if (VK_AD_ID_PARAM && trackingParamsFromUrl['vk_ad_id']) {
          mappedVkParams['vk_ad_id'] = trackingParamsFromUrl['vk_ad_id'];
        }
      } else {
        console.log('VK Pixel Sales (Cache): Nenhum parâmetro de rastreio na URL. Tentando fallback do cache...');
        // Use cached params only if none of the tracking params are present
        const cachedTracking = loadTrackingParamsFromCache();
        if (cachedTracking) {
          // Map utm_source to vk_source if flag is enabled (when loading from cache)
          if (MAP_UTM_TO_VK_SOURCE) {
            const vkSourceValue = cachedTracking['vk_source'] || null;
            const utmSourceValue = cachedTracking['utm_source'] || null;
            
            // If vk_source is blank, use utm_source
            if (!vkSourceValue || vkSourceValue === '') {
              if (utmSourceValue && utmSourceValue !== '') {
                cachedTracking['vk_source'] = utmSourceValue;
                console.log('VK Pixel Sales: Mapeando utm_source para vk_source (do cache):', utmSourceValue);
              } else {
                // If utm_source is also null/blank, set vk_source to 'organic'
                cachedTracking['vk_source'] = 'organic';
                console.log('VK Pixel Sales: utm_source vazio, definindo vk_source como "organic" (do cache)');
              }
            }
          }
          
          pageUtms = {};
          Object.keys(cachedTracking).forEach((key) => {
            if (key.startsWith('utm_')) {
              pageUtms[key] = cachedTracking[key];
            }
          });
          console.log('VK Pixel Sales (Cache): Aplicando UTMs do cache para decoração de links ->', pageUtms);
          if (VK_SOURCE_PARAM && cachedTracking['vk_source']) {
            mappedVkParams['vk_source'] = cachedTracking['vk_source'];
          }
          if (VK_AD_ID_PARAM && cachedTracking['vk_ad_id']) {
            mappedVkParams['vk_ad_id'] = cachedTracking['vk_ad_id'];
          }
        } else {
          console.log('VK Pixel Sales (Cache): Sem cache válido para aplicar');
        }
      }

      if (Object.keys(mappedVkParams).length > 0) {
        console.log('VK Pixel Sales: Parâmetros VK mapeados para decoração de links:', mappedVkParams);
      }

      console.log('VK Pixel Sales: Encoded data (for xcod):', encodedPageData);

      processInitialElements();
      observeDynamicElements();
      handleElementorFormRedirects(); // Renamed and calling the updated function
      addXcodToUrl();
      addUtmContentToUrl();
      initializeEnhancements(); // Initialize new enhancement methods
    }
  }

  // Helper functions

  function addXcodToUrl() {
    if (!encodedPageData) return;
    if (DISABLE_XCOD_URL) {
      console.log('VK Pixel Sales: xcod URL refresh disabled by flag');
      return;
    }
    try {
      const url = new URL(window.location.href);
      // Don't add if it's already there with the correct value
      if (url.searchParams.get('xcod') === encodedPageData) {
        return;
      }
      url.searchParams.set('xcod', encodedPageData);
      window.history.replaceState(null, '', url.toString());      
    } catch (e) {
      console.error('VK Pixel Sales: Error updating URL with xcod:', e);
    }
  }

  function addUtmContentToUrl() {
    const shouldForceUtmContentInOneClick = ONECLICK_COMPAT_MODE && ONECLICK_USE_UTM_CONTENT;
    if (shouldForceUtmContentInOneClick && DISABLE_XCOD_URL) {
      console.log('VK Pixel Sales: utm_content URL refresh disabled by data-no-xcod-url');
      return;
    }
    if (!encodedPageData || (!ENABLE_UTM_CONTENT_URL && !shouldForceUtmContentInOneClick)) return;
    
    try {
      let utmContentData = null;
      if (shouldForceUtmContentInOneClick) {
        // In OneClick mode, when enabled, preserve full encoded payload in utm_content.
        utmContentData = encodedPageData;
      } else {
        // Generate utm_content value (same logic as in generateDecoratedUrl)
        // Keep 'u' (tracking_id); remove only 'r' to keep it lighter. 'co' is preserved
        // so the original utm_content is carried forward (nesting prevented on read).
        try {
          const parsedData = JSON.parse(encodedPageData);
          const { r, ...dataWithoutR } = parsedData;
          utmContentData = JSON.stringify(dataWithoutR);
        } catch (e) {
          console.error('VK Pixel Sales: Error parsing encodedPageData for utm_content URL:', e);
          return;
        }
      }

      if (!utmContentData) return;

      const url = new URL(window.location.href);
      // Don't add if it's already there with the correct value
      if (url.searchParams.get('utm_content') === utmContentData) {
        return;
      }
      url.searchParams.set('utm_content', utmContentData);
      window.history.replaceState(null, '', url.toString());
      console.log('VK Pixel Sales: Updated URL with utm_content');
    } catch (e) {
      console.error('VK Pixel Sales: Error updating URL with utm_content:', e);
    }
  }

  function getOrCreateUserId() {
    let uid = getCookie(CONFIG.cookieName);
    if (!uid) {
      uid = generateUUID();
      setCookie(CONFIG.cookieName, uid, CONFIG.cookieTTL);
    }
    return uid;
  }

  function generateUUID() {
    let d = new Date().getTime();
    if (window.performance && typeof window.performance.now === 'function') {
      d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  function readSessionValue(key) {
    try { return sessionStorage.getItem(key); } catch (e) { return null; }
  }

  function persistSessionValue(key, value) {
    try { sessionStorage.setItem(key, value); } catch (e) {}
  }

  function tryParseVkPayload(raw) {
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && parsed.u) return parsed;
    } catch (e) {}
    return null;
  }

  function resolveTrackingIdFromUrl() {
    try {
      const params = getEffectiveUrlSearchParams();
      const fromXcod = tryParseVkPayload(params.get('xcod'));
      if (fromXcod && fromXcod.u) return String(fromXcod.u);
      const fromContent = tryParseVkPayload(params.get('utm_content'));
      if (fromContent && fromContent.u) return String(fromContent.u);
    } catch (e) {}
    return null;
  }

  function getOrCreateSessionId() {
    let sid = readSessionValue('vk_session_id');
    if (!sid) {
      sid = generateUUID();
      persistSessionValue('vk_session_id', sid);
    }
    return sid;
  }

  function getOrCreateTrackingId() {
    let tid = readSessionValue('vk_tracking_id');
    if (tid) return tid;
    tid = resolveTrackingIdFromUrl() || generateUUID();
    persistSessionValue('vk_tracking_id', tid);
    return tid;
  }

  function setCookie(name, value, minutes) {
    const expires = new Date(Date.now() + minutes * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let c of ca) {
      c = c.trim();
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
    }
    return null;
  }

  function getUrlParamsForCollection() {
    const params = getEffectiveUrlSearchParams();
    const collectedParams = {};

    // Decide if we should fallback to cache (only if none tracking params are present)
    let hasAnyTrackingParam = false;
    params.forEach((value, key) => {
      if (isTrackingParamKey(key)) {
        hasAnyTrackingParam = true;
      }
    });

    console.log('VK Pixel Sales (Cache): Coleta de params - possui rastreio na URL?', hasAnyTrackingParam);

    const paramMap = {
        'utm_content': 'co',
        'vk_ad_id': 'vid',
        'vk_source': 'vsrc'
    };

    const sourceObj = !hasAnyTrackingParam ? loadTrackingParamsFromCache() : null;
    if (!hasAnyTrackingParam && sourceObj) {
      console.log('VK Pixel Sales (Cache): Coleta usando fallback do cache ->', sourceObj);
    }

    ['utm_content', 'vk_ad_id', 'vk_source'].forEach(key => {
      let value = null;
      if (sourceObj && typeof sourceObj[key] !== 'undefined' && sourceObj[key] !== null && sourceObj[key] !== '') {
        value = sourceObj[key];
      } else if (params.has(key)) {
        value = params.get(key);
      }
      
      // Prevent nesting: if utm_content already contains JSON with 'co' field, extract the original 'co' value
      if (key === 'utm_content' && value) {
        try {
          const parsed = JSON.parse(value);
          if (parsed && typeof parsed === 'object' && parsed.hasOwnProperty('co')) {
            console.log('VK Pixel Sales: Detected nested utm_content, extracting original "co" value:', parsed.co);
            // Use the original 'co' value instead of the entire nested JSON
            value = parsed.co;
          }
        } catch (e) {
          // Not JSON, safe to proceed with original value
        }
      }
      
      if (value) {
        collectedParams[paramMap[key]] = value;
      }
    });

    // Custom parameter mapping to vk_source (URL value takes priority over cache)
    if (VK_SOURCE_PARAM) {
      const urlMappedValue = params.get(VK_SOURCE_PARAM);
      if (urlMappedValue && urlMappedValue !== '') {
        if (!params.has('vk_source') || !params.get('vk_source')) {
          collectedParams['vsrc'] = urlMappedValue;
          console.log('VK Pixel Sales: Mapeando', VK_SOURCE_PARAM, 'para vk_source (coleta):', urlMappedValue);
        }
      } else if (!collectedParams['vsrc'] && sourceObj && sourceObj[VK_SOURCE_PARAM]) {
        collectedParams['vsrc'] = sourceObj[VK_SOURCE_PARAM];
        console.log('VK Pixel Sales: Mapeando', VK_SOURCE_PARAM, 'para vk_source (coleta, cache):', sourceObj[VK_SOURCE_PARAM]);
      }
    }

    // Custom parameter mapping to vk_ad_id (URL value takes priority over cache)
    if (VK_AD_ID_PARAM) {
      const urlMappedValue = params.get(VK_AD_ID_PARAM);
      if (urlMappedValue && urlMappedValue !== '') {
        if (!params.has('vk_ad_id') || !params.get('vk_ad_id')) {
          collectedParams['vid'] = urlMappedValue;
          console.log('VK Pixel Sales: Mapeando', VK_AD_ID_PARAM, 'para vk_ad_id (coleta):', urlMappedValue);
        }
      } else if (!collectedParams['vid'] && sourceObj && sourceObj[VK_AD_ID_PARAM]) {
        collectedParams['vid'] = sourceObj[VK_AD_ID_PARAM];
        console.log('VK Pixel Sales: Mapeando', VK_AD_ID_PARAM, 'para vk_ad_id (coleta, cache):', sourceObj[VK_AD_ID_PARAM]);
      }
    }

    // Map utm_source to vk_source if flag is enabled
    if (MAP_UTM_TO_VK_SOURCE) {
      let vkSourceValue = collectedParams['vsrc'] || null;
      const utmSourceValue = params.get('utm_source') || (sourceObj && sourceObj['utm_source']) || null;
      
      // If vk_source is blank, use utm_source
      if (!vkSourceValue || vkSourceValue === '') {
        if (utmSourceValue && utmSourceValue !== '') {
          vkSourceValue = utmSourceValue;
          collectedParams['vsrc'] = utmSourceValue;
          console.log('VK Pixel Sales: Mapeando utm_source para vk_source:', utmSourceValue);
        } else {
          // If utm_source is also null/blank, set vk_source to 'organic'
          vkSourceValue = 'organic';
          collectedParams['vsrc'] = 'organic';
          console.log('VK Pixel Sales: utm_source vazio, definindo vk_source como "organic"');
        }
      }
    }

    // Sticky paid source: if the resolved vsrc is not paid, check cache for a paid source
    // (and vk_ad_id) so the event payload also reflects the protected paid attribution.
    if (applyStickyPaidFields(collectedParams, { vkSource: 'vsrc', vkAdId: 'vid' })) {
      console.log('VK Pixel Sales (Cache): Sticky paid source — usando atribuição paga do cache na coleta:', collectedParams['vsrc'], collectedParams['vid'] || '(sem vid)');
    }

    return collectedParams;
  }

  function collectData() {
    const collectedUrlParams = getUrlParamsForCollection();

    // Get current URL without query parameters to avoid redundancy
    const currentUrlWithoutParams = (window.location.origin + window.location.pathname).replace(/^https?:\/\//, '');

    // Clean referrer URL by removing query parameters
    const cleanReferrer = (() => {
      if (!document.referrer) return '';
      try {
        const referrerUrl = new URL(document.referrer);
        return (referrerUrl.origin + referrerUrl.pathname).replace(/^https?:\/\//, '');
      } catch (e) {
        return document.referrer.replace(/^https?:\/\//, '');
      }
    })();

    const data = {
      ...collectedUrlParams,
      u: eventId,          // tracking_id (cookie stays visitor-only, not in xcod.u)
      url: currentUrlWithoutParams,  // url -> url (keep as is, it's short)
      r: cleanReferrer,    // ref -> r (cleaned)
      v: 1              // vs -> v
    };
    
    return data;
  }

  // Function to truncate xcod data if it exceeds 256 character limit
  function truncateXcodData(data, maxLength = 256) {
    if (!data || typeof data !== 'object') return data;
    
    const jsonString = JSON.stringify(data);
    if (jsonString.length <= maxLength) return data;
    
    // Create a copy to avoid modifying the original
    const truncatedData = { ...data };
    
    // Priority order for truncation (least important first)
    // Most important: u (tracking_id), v, vid, vsrc
    // Least important: r, co
    const truncationOrder = ['r', 'co'];
    
    for (const key of truncationOrder) {
      if (truncatedData[key] && typeof truncatedData[key] === 'string') {
        const currentLength = JSON.stringify(truncatedData).length;
        if (currentLength <= maxLength) break;
        
        const currentValue = truncatedData[key];
        const maxValueLength = Math.max(5, currentValue.length - (currentLength - maxLength) - 5);
        
        if (maxValueLength < currentValue.length) {
          truncatedData[key] = currentValue.substring(0, maxValueLength);
        }
      }
    }
    
    // Final check - if still too long, remove least important fields
    let finalJson = JSON.stringify(truncatedData);
    if (finalJson.length > maxLength) {
      for (const key of truncationOrder) {
        if (truncatedData[key]) {
          delete truncatedData[key];
          finalJson = JSON.stringify(truncatedData);
          if (finalJson.length <= maxLength) break;
        }
      }
    }
    
    return truncatedData;
  }

  // NEW Centralized function to modify URLs
  function generateDecoratedUrl(originalUrlString) {
    if (!originalUrlString) return originalUrlString; // Return original if it's empty/null

    try {
      // Ensure a base is provided for relative URLs, though most inputs should be absolute by now.
      const base = (originalUrlString.startsWith('http') || originalUrlString.startsWith('//')) ? undefined : window.location.origin;
      const url = new URL(originalUrlString, base);

      // --- Custom parameter mode (exclusive) ---
      // When CUSTOM_ENCODED_PARAM is set, ONLY add that parameter with encoded data
      if (CUSTOM_ENCODED_PARAM && encodedPageData) {
        url.searchParams.set(CUSTOM_ENCODED_PARAM, encodedPageData);
        console.log('VK Pixel Sales: Custom param mode - adding only', CUSTOM_ENCODED_PARAM, 'with encoded data');
        return url.toString();
      }

      // --- Universal encoded parameter addition ---
      if (encodedPageData) {
        if (ONECLICK_COMPAT_MODE && ONECLICK_USE_UTM_CONTENT) {
          url.searchParams.set('utm_content', encodedPageData);
        } else {
          url.searchParams.set('xcod', encodedPageData);
        }
      }

      if (mappedVkParams['vk_source']) {
        url.searchParams.set('vk_source', mappedVkParams['vk_source']);
      }
      if (mappedVkParams['vk_ad_id']) {
        url.searchParams.set('vk_ad_id', mappedVkParams['vk_ad_id']);
      }
      
      // In OneClick compatibility mode, only the encoded parameter is added
      if (ONECLICK_COMPAT_MODE) {
        return url.toString();
      }
      
      // --- Normal mode logic below ---

      const isHotmartLink = url.href.includes('pay.hotmart.');

      if (isHotmartLink) {
        // If disabled, do not handle Hotmart sck logic at all
        if (DISABLE_SCK) {
          return url.toString();
        }
        // Hotmart specific: sck parameter with abbreviated keys, remove individual pageUtms
        const utmAbbreviations = {
          'utm_source': 's',
          'utm_medium': 'm',
          'utm_campaign': 'c',
          'utm_term': 't',
          'utm_content': 'co'
        };
        
        // Create a copy of pageUtms for manipulation
        const utmValues = { ...pageUtms };
        
        // Function to build sck string
        function buildSckString(utmData) {
          const sckParts = [];
          for (const key in utmData) {
            const abbreviatedKey = utmAbbreviations[key] || key;
            sckParts.push(`${abbreviatedKey}=${utmData[key]}`);
          }
          return sckParts.join('|');
        }
        
        // Build initial sck string
        let sckString = buildSckString(utmValues);
        
        // Truncate if over 256 characters
        while (sckString.length > 256 && Object.keys(utmValues).length > 0) {
          // Find the UTM parameter with the longest value
          let longestKey = '';
          let longestLength = 0;
          
          for (const key in utmValues) {
            if (utmValues[key].length > longestLength) {
              longestLength = utmValues[key].length;
              longestKey = key;
            }
          }
          
          if (longestKey && utmValues[longestKey].length > 10) {
            // Truncate the longest value by 20% or at least 10 characters
            const currentLength = utmValues[longestKey].length;
            const truncateBy = Math.max(10, Math.floor(currentLength * 0.2));
            utmValues[longestKey] = utmValues[longestKey].substring(0, currentLength - truncateBy);
          } else {
            // If all values are already short, remove the longest parameter entirely
            delete utmValues[longestKey];
          }
          
          // Rebuild sck string
          sckString = buildSckString(utmValues);
        }
        
        if (sckString.length > 0) {
          url.searchParams.set('sck', sckString);
        }
        
        for (const key in pageUtms) { // Remove individual UTMs as they are in sck
          url.searchParams.delete(key);
        }
      } else {
        // Non-Hotmart: propagate individual pageUtms
        for (const key in pageUtms) { // pageUtms excludes utm_content
          url.searchParams.set(key, pageUtms[key]);
        }
        
        // Create utm_content keeping 'u' (tracking_id) and removing only 'r' (referrer) to keep it lighter.
        // 'co' is kept so the original utm_content travels with the data;
        // nesting is prevented on the reading side (getUrlParamsForCollection extracts 'co' from JSON).
        let utmContentData = null;
        if (encodedPageData) {
          try {
            const parsedData = JSON.parse(encodedPageData);
            const { r, ...dataWithoutR } = parsedData;
            utmContentData = JSON.stringify(dataWithoutR);
          } catch (e) {
            console.error('VK Pixel Sales: Error parsing encodedPageData for utm_content:', e);
            utmContentData = encodedPageData;
          }
        }
        url.searchParams.set('utm_content', utmContentData);
        // xcod is already set above
      }
      return url.toString();
    } catch (e) {
      console.error('VK Pixel Sales: Error parsing or modifying URL in generateDecoratedUrl:', originalUrlString, e);
      return originalUrlString; // Return original if error occurs
    }
  }

  // Helper function to check if URL is just an anchor to current page
  function isCurrentPageAnchor(url) {
    if (!url) return false;
    
    try {
      const targetUrl = new URL(url, window.location.origin);
      const currentUrl = new URL(window.location.href);
      
      // Check if it's the same page (same origin, pathname, and search) but with a hash
      return targetUrl.origin === currentUrl.origin &&
             targetUrl.pathname === currentUrl.pathname &&
             targetUrl.search === currentUrl.search &&
             targetUrl.hash && 
             targetUrl.hash.length > 1; // Has a hash and it's not just "#"
    } catch (e) {
      return false;
    }
  }

  function updateElementTargetUrl(element) {
    // Skip decoration if element has data attribute to disable decoration
    const skipDecorateAttrs = ['data-vk-skip-decoration'];
    for (const attr of skipDecorateAttrs) {
      if (element.hasAttribute(attr)) {
        const value = element.getAttribute(attr);
        if (value === null || value === '' || value === '1' || (typeof value === 'string' && value.toLowerCase() === 'true')) {
          return; // Skip decoration for this element
        }
      }
    }

    const urlAttribute = element.tagName === 'A' ? 'href' : 'action';
    let originalTargetUrl = element.getAttribute(urlAttribute);

    if (element.tagName === 'A' && originalTargetUrl && originalTargetUrl.startsWith('#elementor-action')) {
      return; 
    }

    if (element.tagName === 'A' && originalTargetUrl && originalTargetUrl.startsWith('#') && !originalTargetUrl.startsWith('#elementor-action')) {
      return;
    }

    // Skip if it's a current page anchor (like https://example.com/page#section)
    if (element.tagName === 'A' && originalTargetUrl && isCurrentPageAnchor(originalTargetUrl)) {
      return;
    }

    if (element.tagName === 'FORM' && !originalTargetUrl) {
      originalTargetUrl = window.location.href;
    }
    
    if (!originalTargetUrl) return; 

    if (element.tagName === 'A' && 
        !originalTargetUrl.match(/^(https?|mailto|tel):/i) && 
        !originalTargetUrl.startsWith('/') && 
        !originalTargetUrl.startsWith('#')) { 
      return;
    }

    if (element.tagName === 'FORM' && !originalTargetUrl.match(/^https?:/i) && !originalTargetUrl.startsWith('/')) {
        return;
    }

    // Prevent infinite loops: if the current value is already our decorated one, skip
    if (element.dataset.vkLastDecoratedUrl && originalTargetUrl === element.dataset.vkLastDecoratedUrl) {
      return;
    }

    // Use the new centralized function
    const newUrlString = generateDecoratedUrl(originalTargetUrl);

    if (newUrlString && newUrlString !== originalTargetUrl) {
      element.dataset.vkLastRawUrl = originalTargetUrl;
      element.setAttribute(urlAttribute, newUrlString);
      element.dataset.vkLastDecoratedUrl = newUrlString;
    }
  }

  function processElements(elements) {
    elements.forEach(el => {
      // Process the element if it's an A tag with href or any FORM tag
      if ((el.tagName === 'A' && el.hasAttribute('href')) || el.tagName === 'FORM') {
        updateElementTargetUrl(el);
      }
      // If the element itself is not a link/form, or even if it is, check its children for more targets.
      if (el.querySelectorAll) {
         const potentialTargets = el.querySelectorAll('a[href], form'); // Changed form[action] to form
         potentialTargets.forEach(target => updateElementTargetUrl(target));
      }
    });
  }

  function processInitialElements() {
    const allLinksAndForms = document.querySelectorAll('a[href], form'); // Changed form[action] to form
    processElements(Array.from(allLinksAndForms));
    
    // Process iframes after initial elements
    processIframes();
  }

  function observeDynamicElements() {
    const observer = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              processElements([node]);
              // Process any new iframes that were added
              processNewIframes(node);
            }
          });
        } else if (mutation.type === 'attributes') {
          const target = mutation.target;
          if (target && (target.tagName === 'A' || target.tagName === 'FORM')) {
            updateElementTargetUrl(target);
          }
          // Handle iframe src attribute changes
          if (target && target.tagName === 'IFRAME' && mutation.attributeName === 'src') {
            processIframeElement(target);
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['href', 'action', 'src'] });
  }

  // === NEW ENHANCEMENT METHODS ===

  // Window.open() interception to preserve UTM parameters in popups and new windows
  function interceptWindowOpen() {
    // Only intercept if not already intercepted
    if (window.vkPixelWindowOpenIntercepted) return;
    
    try {
      const originalWindowOpen = window.open;
      window.open = function(url, target, features) {
        // Only process if we have a URL and it's a string
        if (url && typeof url === 'string') {
          try {
            const decoratedUrl = generateDecoratedUrl(url);
            console.log('VK Pixel Sales: Intercepted window.open() - Original:', url, 'Decorated:', decoratedUrl);
            url = decoratedUrl;
          } catch (e) {
            console.error('VK Pixel Sales: Error decorating URL in window.open():', e);
            // Continue with original URL if decoration fails
          }
        }
        return originalWindowOpen.call(this, url, target, features);
      };
      
      window.vkPixelWindowOpenIntercepted = true;
      console.log('VK Pixel Sales: window.open() interception initialized');
    } catch (e) {
      console.error('VK Pixel Sales: Error setting up window.open() interception:', e);
    }
  }

  // Process iframe elements to add UTM parameters
  function processIframeElement(iframe) {
    if (!iframe || iframe.tagName !== 'IFRAME') return;
    
    // Skip if already processed or if it's a video platform iframe
    if (iframe.dataset.vkIframeProcessed) return;
    
    const originalSrc = iframe.getAttribute('src');
    if (!originalSrc) return;
    
    // Skip video platforms and other services that might break
    const skipDomains = [
      'youtube.com', 'youtu.be', 'vimeo.com', 'dailymotion.com',
      'pandavideo.com', 'eplay.video', 'wistia.com', 'brightcove.com'
    ];
    
    const shouldSkip = skipDomains.some(domain => originalSrc.includes(domain));
    if (shouldSkip) {
      iframe.dataset.vkIframeProcessed = 'skipped';
      return;
    }
    
    try {
      const decoratedSrc = generateDecoratedUrl(originalSrc);
      if (decoratedSrc && decoratedSrc !== originalSrc) {
        iframe.src = decoratedSrc;
        iframe.dataset.vkIframeProcessed = 'true';
        console.log('VK Pixel Sales: Processed iframe - Original:', originalSrc, 'Decorated:', decoratedSrc);
      } else {
        iframe.dataset.vkIframeProcessed = 'unchanged';
      }
    } catch (e) {
      console.error('VK Pixel Sales: Error processing iframe:', originalSrc, e);
      iframe.dataset.vkIframeProcessed = 'error';
    }
  }

  // Process all existing iframes on the page
  function processIframes() {
    try {
      const iframes = document.querySelectorAll('iframe[src]');
      console.log(`VK Pixel Sales: Processing ${iframes.length} existing iframes`);
      
      iframes.forEach(iframe => {
        processIframeElement(iframe);
      });
    } catch (e) {
      console.error('VK Pixel Sales: Error processing iframes:', e);
    }
  }

  // Process new iframes that are dynamically added
  function processNewIframes(parentNode) {
    if (!parentNode || !parentNode.querySelectorAll) return;
    
    try {
      // Check if the node itself is an iframe
      if (parentNode.tagName === 'IFRAME' && parentNode.hasAttribute('src')) {
        processIframeElement(parentNode);
      }
      
      // Check for iframe children
      const newIframes = parentNode.querySelectorAll('iframe[src]');
      newIframes.forEach(iframe => {
        processIframeElement(iframe);
      });
    } catch (e) {
      console.error('VK Pixel Sales: Error processing new iframes:', e);
    }
  }

  // Video player integration (vturb-smartplayer)
  function processVideoPlayers() {
    try {
      const videoPlayer = document.querySelector('vturb-smartplayer');
      if (!videoPlayer) return;
      
      // Check if the player has the injectUrlUpdater method
      if (typeof videoPlayer.injectUrlUpdater === 'function') {
        const urlUpdater = (url) => {
          try {
            return generateDecoratedUrl(url);
          } catch (e) {
            console.error('VK Pixel Sales: Error in video player URL updater:', e);
            return url; // Return original URL if decoration fails
          }
        };
        
        // Listen for player ready event
        const onPlayerReady = () => {
          try {
            videoPlayer.injectUrlUpdater(urlUpdater);
            console.log('VK Pixel Sales: Video player URL updater injected');
          } catch (e) {
            console.error('VK Pixel Sales: Error injecting video player URL updater:', e);
          }
        };
        
        // Try to inject immediately, and also listen for ready event
        onPlayerReady();
        videoPlayer.addEventListener('player:ready', onPlayerReady);
        
        console.log('VK Pixel Sales: Video player integration initialized');
      } else {
        console.log('VK Pixel Sales: Video player found but injectUrlUpdater method not available');
      }
    } catch (e) {
      console.error('VK Pixel Sales: Error setting up video player integration:', e);
    }
  }

  // Initialize all new enhancement methods
  function initializeEnhancements() {
    try {
      interceptWindowOpen();
      processVideoPlayers();
      console.log('VK Pixel Sales: All enhancements initialized');
    } catch (e) {
      console.error('VK Pixel Sales: Error initializing enhancements:', e);
    }
  }

  // === END NEW ENHANCEMENT METHODS ===

  // Enhanced Elementor form redirect handling
  function handleElementorFormRedirects() { 
    if (typeof jQuery === 'undefined') {
      console.log('VK Pixel Sales: jQuery não disponível para Elementor forms');
      return;
    }

    jQuery(document).ready(function($) {
      console.log('VK Pixel Sales: Configurando handlers para formulários Elementor');
      
      // Multiple event handlers to catch different Elementor scenarios
      
      // Handler 1: Generic submit_success (for debugging)
      $(document).on('submit_success', '.elementor-form', function(event, response) {
        const formElement = this;
        console.log('VK Pixel Sales: Generic "submit_success" (.elementor-form) event:', {
          form: formElement,
          response: response
        });
        
        if (response && response.data && response.data.redirect_url) {
          console.log('VK Pixel Sales: Redirect URL found in generic event:', response.data.redirect_url);
          // Try to modify here as fallback
          const originalUrl = response.data.redirect_url;
          const modifiedUrl = generateDecoratedUrl(originalUrl);
          if (modifiedUrl !== originalUrl) {
            console.log('VK Pixel Sales: Modifying redirect URL (generic handler):', modifiedUrl);
            response.data.redirect_url = modifiedUrl;
          }
        }
      });

      // Handler 2: Specific Elementor forms event
      $(document).on('submit_success.elementorforms', 'form.elementor-form', function(event, response) {
        const formElement = this;
        console.log('VK Pixel Sales: "submit_success.elementorforms" event:', {
          form: formElement,
          response: response
        });

        if (response && response.data && typeof response.data.redirect_url === 'string') {
          let originalRedirectUrl = response.data.redirect_url;
          console.log('VK Pixel Sales: Original Elementor redirect URL:', originalRedirectUrl);

          const modifiedRedirectUrl = generateDecoratedUrl(originalRedirectUrl);
          
          if (modifiedRedirectUrl !== originalRedirectUrl) {
            console.log('VK Pixel Sales: Modifying Elementor redirect URL to:', modifiedRedirectUrl);
            response.data.redirect_url = modifiedRedirectUrl; 
          }
        } else {
          console.log('VK Pixel Sales: No redirect_url found in response.data:', response ? response.data : 'No response');
        }
      });
      
      // Handler 3: Alternative event patterns
      $(document).on('submit_success', 'form.elementor-form', function(event, response) {
        const formElement = this;
        console.log('VK Pixel Sales: Alternative "submit_success" (form.elementor-form) event:', {
          form: formElement,
          response: response
        });
        
        if (response && response.data && response.data.redirect_url) {
          const originalUrl = response.data.redirect_url;
          const modifiedUrl = generateDecoratedUrl(originalUrl);
          if (modifiedUrl !== originalUrl) {
            console.log('VK Pixel Sales: Modifying redirect URL (alternative handler):', modifiedUrl);
            response.data.redirect_url = modifiedUrl;
          }
        }
      });
      
      // Handler 4: Ajax complete interceptor for Elementor
      $(document).ajaxComplete(function(event, xhr, settings) {
        if (settings.url && settings.url.includes('elementor') && settings.url.includes('form')) {
          console.log('VK Pixel Sales: Elementor Ajax complete:', {
            url: settings.url,
            status: xhr.status,
            responseText: xhr.responseText ? xhr.responseText.substring(0, 200) + '...' : 'No response'
          });
          
          try {
            const responseData = JSON.parse(xhr.responseText);
            if (responseData && responseData.data && responseData.data.redirect_url) {
              console.log('VK Pixel Sales: Found redirect_url in Ajax response:', responseData.data.redirect_url);
              // Note: This is too late to modify, but good for debugging
            }
          } catch (e) {
            // Not JSON, ignore
          }
        }
      });
      
      console.log('VK Pixel Sales: Todos os handlers Elementor configurados');
    });
  }

})(); 