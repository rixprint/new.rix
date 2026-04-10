// RIX PRINTING - Optimized JavaScript

const translations={ckb:{'nav-home':'حه‌زره‌کان','nav-services':'خزمه‌تگوزارییه‌کان','nav-designs':'دیزاینەکان','nav-partners':'هاوبه‌ش و کڕیارەکانمان','nav-contact':'په‌یوه‌ندی','mobile-nav-home':'حه‌زره‌کان','mobile-nav-services':'خزمه‌تگوزارییه‌کان','mobile-nav-designs':'دیزاینەکان','mobile-nav-partners':'هاوبه‌ش و کڕیارەکانمان','mobile-nav-contact':'په‌یوه‌ندی','hero-badge':'چاپخانەی ڕیکس - پێشەنگی چاپ','hero-title':'چاپخانەی ریکس','hero-tagline':'بۆ چاپەمەنی گشتی','hero-subtitle':'ئێمە یارمەتی براندەکان دەدەین بۆ دروستکردنی چاپی جیاواز و سەرنجڕاکێش.','hero-trust':'متمانە','hero-quality':'کوالێتی','hero-speed':'خێرایی','hero-cta':'دەستپێبکە','services-badge':'خزمه‌تگوزارییه‌کانمان','services-title':'خزمەتگوزارییەکانمان','services-subtitle':'چاپخانەی ڕیکس ئەم خزمەتگوزارییانە پێشکەش دەکات','printing-types':'جۆرەکانی چاپکردن','offset-printing':'چاپی ئۆفسێت','digital-printing':'چاپی دیجیتال','embossing':'حەرف بارز','uv-dtf':'UV DTF چاپی','dtf-printing':'DTF چاپی','tampo-printing':'چاپی تامپۆ','laser-printing':'چاپی لێزەر','thermal-printing':'چاپی حەراری','screen-printing':'چاپی سکڕین','drum-printing':'چاپی دروومان','poster-printing':'چاپکردنی پۆستەر و بانەر','design-print':'دیزاین و چاپ','large-format':'قەبارە گەورە','high-quality':'کوالێتی بەرز','book-printing':'چاپکردنی کتێب و گۆڤار','various-designs':'دیزاین و قەبارەی جیاواز','cover-printing':'چاپکردنی ناوەوە و بەرگ','card-printing':'چاپکردنی کارتی بانگهێشت و بزنس','custom-design':'دیزاینی تایبەت','precise-cutting':'بڕینی ورد','clothing-printing':'چاپکردنی جل و بەرگ','direct-printing':'دروومان و چاپکردنی ڕاستەوخۆ','color-variety':'ڕەنگ و دیزاینی جیاواز','custom-packaging':'چاپکردنی کارتۆنی تایبەت','packaging-desc':'چاپخانەی ڕیکس ڕێگەت پێدەدات چاپکراوی تایبەت بە براندەکەت دیزاین بکەیت و چاپی بکەیت.','designs-badge':'دیزاین و بەرهەمە جیاوازەکانمان','designs-title':'دیزاین و بەرهەمە جیاوازەکانمان','designs-subtitle':'بەشی تایبەت بە دیزاین و بەرهەمە جیاوازەکانمان','partners-badge':'هاوبه‌ش و کڕیارەکانمان','partners-title':'هاوبەش و کڕیارەکانمان','partners-subtitle':'کڕیارەکانمان سەرچاوەی هێز و سەرکەوتنمانن','contact-badge':'په‌یوه‌ندی','contact-title':'پەیوەندی','contact-subtitle':'ئامادەیین بۆ یارمەتی دانی براندەکەت','contact-form-title':'فۆرمی پەیوەندی','contact-form-name':'ناو','contact-form-phone':'ژمارەی مۆبایل','contact-form-description':'وشەسەرەکی داواکەت','contact-form-submit':'ناردن','contact-info-title':'زانیاری پەیوەندی','contact-phone-label':'په‌یوه‌ندی','contact-email-label':'ئیمێڵ','contact-address-label':'ناونیشان','view-map-btn':'بینینی شوێن لەسەر نەخشە','footer-desc':'چاپخانەیەکی تایبەت بە چاپەمەنی گشتی لە هەرێمی کوردستان','footer-links':'لینکەکان','footer-social':'سۆشیاڵ میدیا','footer-services':'خزمەتگوزاری','footer-designs':'دیزاینەکان','footer-partners':'کڕیارەکان','footer-contact':'پەیوەندی','show-more':'نیشاندانی زیاتر','show-less':'شاردنەوە','hero-designs':'دیزاین','hero-partners':'هاوبەش','hero-services':'خزمەت'},ar:{'nav-home':'الرئيسية','nav-services':'خدماتنا','nav-designs':'التصامیم','nav-partners':'شركاؤنا','nav-contact':'اتصل بنا','mobile-nav-home':'الرئيسية','mobile-nav-services':'خدماتنا','mobile-nav-designs':'التصامیم','mobile-nav-partners':'شركاؤنا','mobile-nav-contact':'اتصل بنا','hero-badge':'مطبعة ریکس - رائدة الطباعة','hero-title':'مطبعة ریکس','hero-tagline':'للطباعة العامة','hero-subtitle':'نحن نساعد العلامات التجارية على إنشاء طباعة فريدة وجذابة.','hero-trust':'ثقة','hero-quality':'جودة','hero-speed':'سرعة','hero-cta':'ابدأ الآن','services-badge':'خدماتنا','services-title':'خدماتنا','services-subtitle':'مطبعة ریکس تقدم هذه الخدمات','printing-types':'أنواع الطباعة','offset-printing':'طباعة أوفست','digital-printing':'طباعة رقمية','embossing':'حروف بارزة','uv-dtf':'طباعة UV DTF','dtf-printing':'طباعة DTF','tampo-printing':'طباعة تمبيو','laser-printing':'طباعة لیزر','thermal-printing':'طباعة حراریة','screen-printing':'طباعة شاشة','drum-printing':'طباعة دروم','poster-printing':'طباعة بوستر وبنر','design-print':'تصمیم وطباعة','large-format':'طباعة كبيرة الحجم','high-quality':'جودة عالیة','book-printing':'طباعة كتب ومجلات','various-designs':'تصامیم وأحجام متنوعة','cover-printing':'طباعة الغلاف والداخل','card-printing':'طباعة بطاقات دعوة وأعمال','custom-design':'تصمیم مخصص','precise-cutting':'قطع دقیق','clothing-printing':'طباعة ملابس وأقمشة','direct-printing':'درومان وطباعة مباشرة','color-variety':'ألوان وتصامیم متنوعة','custom-packaging':'طباعة کرتون مخصص','packaging-desc':'مطبعة ریکس تتيح لك تصمیم وطباعة منتجات مخصصة لعلامتك.','designs-badge':'تصامیم ومنتجات مميزة','designs-title':'تصامیم ومنتجات مميزة','designs-subtitle':'قسم مخصص للتصامیم والمنتجات المميزة','partners-badge':'شركاؤنا وعملاؤنا','partners-title':'شركاؤنا وعملاؤنا','partners-subtitle':'عملاؤنا مصدر قوتنا ونجاحنا','contact-badge':'اتصل بنا','contact-title':'اتصل بنا','contact-subtitle':'نحن مستعدون لمساعدة علامتك','contact-form-title':'نموذج الاتصال','contact-form-name':'الاسم','contact-form-phone':'رقم الهاتف','contact-form-description':'وصف طلبك','contact-form-submit':'إرسال','contact-info-title':'معلومات الاتصال','contact-phone-label':'اتصل بنا','contact-email-label':'البريد','contact-address-label':'العنوان','view-map-btn':'عرض الموقع على الخريطة','footer-desc':'مطبعة متخصصة في الطباعة العامة في إقليم كردستان','footer-links':'روابط سريعة','footer-social':'وسائل التواصل','footer-services':'الخدمات','footer-designs':'التصامیم','footer-partners':'الشركاء','footer-contact':'اتصل بنا','show-more':'عرض المزيد','show-less':'عرض أقل','hero-designs':'تصامیم','hero-partners':'شركاء','hero-services':'خدمات'},en:{'nav-home':'Home','nav-services':'Services','nav-designs':'Designs','nav-partners':'Partners','nav-contact':'Contact','mobile-nav-home':'Home','mobile-nav-services':'Services','mobile-nav-designs':'Designs','mobile-nav-partners':'Partners','mobile-nav-contact':'Contact','hero-badge':'Rix Printing - Printing Pioneer','hero-title':'Rix Printing','hero-tagline':'For General Printing','hero-subtitle':'We help brands create unique and attractive printing.','hero-trust':'Trust','hero-quality':'Quality','hero-speed':'Speed','hero-cta':'Get Started','services-badge':'Our Services','services-title':'Our Services','services-subtitle':'Rix Printing Press offers these services','printing-types':'Types of Printing','offset-printing':'Offset Printing','digital-printing':'Digital Printing','embossing':'Embossing','uv-dtf':'UV DTF Printing','dtf-printing':'DTF Printing','tampo-printing':'Tampon Printing','laser-printing':'Laser Printing','thermal-printing':'Thermal Printing','screen-printing':'Screen Printing','drum-printing':'Drum Printing','poster-printing':'Poster & Banner Printing','design-print':'Design & Print','large-format':'Large Format Printing','high-quality':'High Quality','book-printing':'Book & Magazine Printing','various-designs':'Various Designs & Sizes','cover-printing':'Cover & Interior Printing','card-printing':'Invitation & Business Card Printing','custom-design':'Custom Design','precise-cutting':'Precise Cutting','clothing-printing':'Clothing & Fabric Printing','direct-printing':'Direct Printing & Drum','color-variety':'Various Colors & Designs','custom-packaging':'Custom Box Printing','packaging-desc':'Rix Printing allows you to design and print custom products for your brand.','designs-badge':'Featured Designs','designs-title':'Featured Designs','designs-subtitle':'Special section for unique designs and products','partners-badge':'Our Partners','partners-title':'Our Partners & Customers','partners-subtitle':'Our customers are our source of strength and success','contact-badge':'Contact Us','contact-title':'Contact Us','contact-subtitle':'We are ready to help your brand','contact-form-title':'Contact Form','contact-form-name':'Name','contact-form-phone':'Phone Number','contact-form-description':'Description of your request','contact-form-submit':'Send','contact-info-title':'Contact Information','contact-phone-label':'Phone','contact-email-label':'Email','contact-address-label':'Address','view-map-btn':'View Location on Map','footer-desc':'A printing press specializing in general printing in Kurdistan Region','footer-links':'Quick Links','footer-social':'Social Media','footer-services':'Services','footer-designs':'Designs','footer-partners':'Partners','footer-contact':'Contact','show-more':'Show More','show-less':'Show Less','hero-designs':'Designs','hero-partners':'Partners','hero-services':'Services'}};

let currentLang='ckb',isExpanded=false,lastVisibleCount=8;
const SHOW_MORE_COUNT=8;

// DOM Ready
document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{document.getElementById('loader')?.classList.add('hidden')},800);
    initAOS();
    initNavScroll();
    initMobileMenu();
    initSmoothScroll();
    initBackToTop();
    initContactForm();
    initDesignsToggle();
    applyTranslations(currentLang);
    updateLanguageButtons();
});

function initAOS(){
    if(typeof AOS!=='undefined'){
        const isMobile=window.innerWidth<768;
        AOS.init({duration:isMobile?300:600,easing:'ease-out-cubic',once:true,offset:30,disable:isMobile});
    }
}

function initNavScroll(){
    const navbar=document.getElementById('navbar');
    if(!navbar)return;
    const update=()=>{
        navbar.classList.toggle('scrolled',window.scrollY>50);
    };
    window.addEventListener('scroll',update,{passive:true});
    update();
}

function initMobileMenu(){
    const menuBtn=document.getElementById('mobile-menu-btn');
    const closeBtn=document.getElementById('close-menu');
    const mobileMenu=document.getElementById('mobile-menu');
    const overlay=document.getElementById('mobile-overlay');
    
    const close=()=>{
        mobileMenu?.classList.remove('open');
        overlay?.classList.remove('open');
        document.body.style.overflow='';
    };
    
    menuBtn?.addEventListener('click',()=>{
        mobileMenu?.classList.add('open');
        overlay?.classList.add('open');
        document.body.style.overflow='hidden';
    });
    
    closeBtn?.addEventListener('click',close);
    overlay?.addEventListener('click',close);
    
    document.querySelectorAll('.mobile-nav-link').forEach(link=>{
        link.addEventListener('click',close);
    });
}

function initSmoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
        anchor.addEventListener('click',function(e){
            e.preventDefault();
            const target=document.querySelector(this.getAttribute('href'));
            if(target){
                const offset=80;
                const top=target.getBoundingClientRect().top+window.pageYOffset-offset;
                window.scrollTo({top,behavior:'smooth'});
            }
        });
    });
}

function initBackToTop(){
    const btn=document.getElementById('back-to-top');
    if(!btn)return;
    
    window.addEventListener('scroll',()=>{
        btn.classList.toggle('visible',window.scrollY>300);
    },{passive:true});
    
    btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

function initContactForm(){
    if(typeof emailjs!=='undefined')emailjs.init('-vgH1fSbISlSxwNXK');
    
    const form=document.getElementById('contactForm');
    if(!form)return;
    
    form.addEventListener('submit',function(e){
        e.preventDefault();
        const btn=document.getElementById('contact-form-submit');
        const originalText=btn.textContent;
        btn.textContent='...';btn.disabled=true;
        
        if(typeof emailjs!=='undefined'){
            emailjs.sendForm('service_bycz8ta','template_k79rb9k',this)
                .then(()=>{alert('✓');form.reset()})
                .catch(()=>alert('✗'))
                .finally(()=>{btn.textContent=originalText;btn.disabled=false});
        }else{
            setTimeout(()=>{alert('✓');form.reset();btn.textContent=originalText;btn.disabled=false},500);
        }
    });
}

function initDesignsToggle(){
    const grid=document.getElementById('designs-grid');
    const toggle=document.getElementById('designs-toggle');
    const label=document.getElementById('designs-toggle-label');
    const toggleText=document.getElementById('toggle-text');
    const toggleCount=document.getElementById('toggle-count');
    
    if(!grid||!toggle)return;
    
    const items=Array.from(grid.querySelectorAll('.design-item'));
    const total=items.length;
    const remaining=total-8;
    
    if(total<=8){toggle.style.display='none';return}
    
    items.forEach((it,idx)=>{if(idx>=8)it.classList.add('hidden')});
    
    function updateUI(){
        if(isExpanded){
            label.style.transform='rotate(180deg)';
            toggleText.textContent=translations[currentLang]['show-less']||'شاردنەوە';
            toggleCount.textContent='';
        }else{
            label.style.transform='rotate(0deg)';
            toggleText.textContent=translations[currentLang]['show-more']||'نیشاندانی زیاتر';
            if(remaining>0)toggleCount.textContent='('+remaining+')';
        }
    }
    
    toggle.addEventListener('click',function(){
        const hidden=items.filter(it=>it.classList.contains('hidden'));
        
        if(hidden.length>0){
            const toShow=hidden.slice(0,SHOW_MORE_COUNT);
            toShow.forEach((it,idx)=>{
                it.classList.remove('hidden');
                it.style.opacity='0';it.style.transform='translateY(10px)';
                setTimeout(()=>{it.style.opacity='1';it.style.transform='translateY(0)'},idx*80);
            });
            
            if(hidden.length-SHOW_MORE_COUNT<=0){
                isExpanded=true;
                toggle.setAttribute('aria-expanded','true');
            }
        }else{
            isExpanded=false;
            lastVisibleCount=8;
            toggle.setAttribute('aria-expanded','false');
            
            items.forEach((it,idx)=>{
                if(idx>=8){
                    it.style.opacity='0';it.style.transform='translateY(10px)';
                    setTimeout(()=>{it.classList.add('hidden');it.style.opacity='';it.style.transform=''},idx*40);
                }
            });
            
            setTimeout(()=>{this.scrollIntoView({behavior:'smooth',block:'center'})},100);
        }
        updateUI();
    });
    
    updateUI();
}

function switchLanguage(lang){
    currentLang=lang;
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='en'?'ltr':'rtl';
    document.body.classList.remove('rtl','ltr');
    document.body.classList.add(lang==='en'?'ltr':'rtl');
    applyTranslations(lang);
    updateLanguageButtons();
    updateHeroLanguageButtons();
    
    const toggleText=document.getElementById('toggle-text');
    const toggleCount=document.getElementById('toggle-count');
    const items=Array.from(document.querySelectorAll('#designs-grid .design-item'));
    const hidden=items.filter(it=>it.classList.contains('hidden'));
    
    if(toggleText){
        toggleText.textContent=hidden.length===0?
            (translations[currentLang]['show-less']||'شاردنەوە'):
            (translations[currentLang]['show-more']||'نیشاندانی زیاتر');
    }
    if(toggleCount&&hidden.length>0)toggleCount.textContent='('+hidden.length+')';
    else if(toggleCount)toggleCount.textContent='';
}

function updateHeroLanguageButtons(){
    document.querySelectorAll('.lang-btn-hero').forEach(btn=>{
        btn.classList.toggle('active',btn.dataset.lang===currentLang);
    });
}

function applyTranslations(lang){
    const data=translations[lang];
    Object.keys(data).forEach(key=>{
        const el=document.getElementById(key);
        if(el)el.textContent=data[key];
    });
}

function updateLanguageButtons(){
    document.querySelectorAll('.lang-btn,.mobile-lang-btn').forEach(btn=>{
        btn.classList.toggle('active',btn.dataset.lang===currentLang);
    });
}

window.switchLanguage=switchLanguage;
