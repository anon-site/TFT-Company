// ===== TFT Company — Main JS =====

// ===== Loading State =====
window.addEventListener('load', () => {
  const loadingState = document.getElementById('loadingState');
  if (loadingState) {
    loadingState.classList.add('hidden');
  }
});

// ===== i18n translations =====
const TFT_TRANSLATIONS = {
  en: {
    "nav.home":"Home","nav.about":"About","nav.work":"Our Work","nav.services":"Services","nav.team":"Team","nav.details":"Coverage","nav.join":"Join Our Team",
    "ops.eyebrow":"Where We Operate","ops.title":"Two Countries. Countless Streets.","ops.desc":"From the bustling boulevards of Athens to the sun-lit coasts of Cyprus — we deliver where it matters most.",
    "ops.gr.name":"Greece","ops.gr.tag":"Mainland & islands coverage","ops.cy.name":"Cyprus","ops.cy.tag":"Serving the island's major hubs",
    "ops.f1.t":"Wide Coverage","ops.f1.d":"10+ cities across two countries.",
    "ops.f2.t":"Fast Dispatch","ops.f2.d":"Riders ready in minutes.",
    "ops.f3.t":"Insured Fleet","ops.f3.d":"Every parcel protected end-to-end.",
    "ops.f4.t":"Multilingual Support","ops.f4.d":"EN · EL · AR and more.",
    "hero.badge":"Trusted Across Greece & Cyprus","hero.title":"TFT Company","hero.subtitle":"Where Prompt Delivery Meets Today's Need",
    "hero.desc":"Delivering Excellence. Apply now for a delivery role and join our dedicated team serving communities across Greece and Cyprus.",
    "hero.btnJoin":"Join Our Team","hero.btnServices":"Our Services",
    "about.eyebrow":"Get to Know Us","about.title":"Delivering Excellence Across Greece & Cyprus",
    "about.p1":"Welcome to our digital realm! We're here to inspire, inform, and assist you. Explore, learn, and let your curiosity thrive.",
    "about.p2":"Our delivery company, operating successfully in Greece and Cyprus for the past two years, boasts a versatile fleet comprising motorcycles, electric bikes, and vans. We specialize in providing top-notch delivery services across the region, ensuring swift and reliable solutions for all your logistical needs.",
    "about.stat1":"Years Active","about.stat2":"Deliveries","about.stat3":"Countries",
    "gallery.eyebrow":"Our Work","gallery.title":"Moments In Motion","gallery.desc":"A look at our fleet, our riders, and the streets we serve every day.",
    "gallery.o1":"On the Move","gallery.o2":"Ready to Ride","gallery.o3":"City Streets","gallery.o4":"Fast Service","gallery.o5":"Our Team","gallery.o6":"Riders First",
    "services.eyebrow":"Services","services.title":"Elevate Your Experience with Our Premium Services","services.desc":"Reliable, fast, and tailored delivery solutions for every need.",
    "services.s1.title":"Same Day Delivery","services.s1.desc":"\"Swift solutions, your way, every day.\"",
    "services.s2.title":"Parcel Delivery","services.s2.desc":"\"Reliable Parcel Delivery, Where Speed Meets Safety.\"",
    "services.s3.title":"Door To Door Delivery","services.s3.desc":"\"Seamless, efficient door-to-door delivery at your service.\"",
    "team.eyebrow":"Our People","team.title":"Our Team.",
    "team.p1":"Our team is the heart and soul of our company, and what sets us apart. With a blend of passion, expertise, and dedication, we're committed to delivering unparalleled service excellence.",
    "team.p2":"Trust in our capable hands, and experience the difference that a truly exceptional team can make. Your satisfaction is our ultimate goal.",
    "team.f1":"Experienced & trained riders","team.f2":"Versatile fleet — bikes, e-bikes & vans","team.f3":"Customer-first mindset","team.f4":"Active across Greece & Cyprus",
    "business.eyebrow":"Business Details","business.title":"Find Us. Reach Us. Visit Us.","business.desc":"Everything you need to get in touch and plan a visit to TFT Company.",
    "business.contact":"Contact","business.address":"Address","business.hours":"Opening Hours","business.hoursWeek":"Mon - Fri: 11am - 7pm","business.hoursWeekend":"Saturday / Sunday: Closed",
    "contact.eyebrow":"Join Our Team","contact.title":"Apply Now & Ride With Us","contact.desc":"Apply now for a delivery role and join our dedicated team serving communities across Greece and Cyprus.",
    "contact.available":"Available Now","contact.infoTitle":"Get in Touch","contact.infoDesc":"Delivering Excellence. Get in touch today and let us handle your delivery needs across Greece and Cyprus.",
    "contact.lblAddress":"Address","contact.lblPhone":"Phone","contact.lblEmail":"Email","contact.lblHours":"Working Hours",
    "form.title":"Send Us a Message","form.desc":"Fill out the form below and our team will reach out within 24 hours.",
    "form.name":"Full Name *","form.email":"Email *","form.phone":"Phone","form.subject":"Subject","form.message":"Message *","form.messagePh":"Tell us about yourself or your inquiry...","form.openBtn":"Open Message Form","form.send":"Send Message","form.success":"Thank you! Your message has been sent successfully.",
    "footer.desc":"Where Prompt Delivery Meets Today's Need.<br>Reliable same-day, parcel, and door-to-door delivery across Greece and Cyprus.",
    "settings.title":"Settings","settings.lang":"Language","credit.design":"Design & Development",
    "map.eyebrow":"Our Location","map.title":"Find Us on the Map","map.desc":"Visit our headquarters in Athens, Greece — we're easy to find and always ready to welcome you.",
    "cookie.title":"We use cookies","cookie.desc":"We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking \"Accept\", you consent to our use of cookies.","cookie.accept":"Accept All","cookie.decline":"Decline"
  },
  el: {
    "nav.home":"Αρχική","nav.about":"Σχετικά","nav.work":"Έργα μας","nav.services":"Υπηρεσίες","nav.team":"Ομάδα","nav.details":"Κάλυψη","nav.join":"Γίνε μέλος",
    "ops.eyebrow":"Πού Δραστηριοποιούμαστε","ops.title":"Δύο Χώρες. Αμέτρητοι Δρόμοι.","ops.desc":"Από τους ζωντανούς δρόμους της Αθήνας μέχρι τις ηλιόλουστες ακτές της Κύπρου — παραδίδουμε εκεί που έχει σημασία.",
    "ops.gr.name":"Ελλάδα","ops.gr.tag":"Κάλυψη ηπειρωτικής και νησιών","ops.cy.name":"Κύπρος","ops.cy.tag":"Εξυπηρετούμε τα μεγάλα κέντρα του νησιού",
    "ops.f1.t":"Ευρεία Κάλυψη","ops.f1.d":"10+ πόλεις σε δύο χώρες.",
    "ops.f2.t":"Γρήγορη Αποστολή","ops.f2.d":"Οι οδηγοί έτοιμοι σε λεπτά.",
    "ops.f3.t":"Ασφαλισμένος Στόλος","ops.f3.d":"Κάθε δέμα προστατευμένο από άκρο σε άκρο.",
    "ops.f4.t":"Πολύγλωσση Υποστήριξη","ops.f4.d":"EN · EL · AR και άλλες.",
    "hero.badge":"Αξιόπιστοι σε Ελλάδα & Κύπρο","hero.title":"TFT Company","hero.subtitle":"Όπου η ταχεία παράδοση συναντά τις σύγχρονες ανάγκες",
    "hero.desc":"Παρέχουμε αριστεία. Κάνε αίτηση για θέση οδηγού και γίνε μέλος της αφοσιωμένης ομάδας μας σε Ελλάδα και Κύπρο.",
    "hero.btnJoin":"Γίνε μέλος","hero.btnServices":"Οι Υπηρεσίες μας",
    "about.eyebrow":"Γνωρίστε μας","about.title":"Αριστεία στις Παραδόσεις σε Ελλάδα & Κύπρο",
    "about.p1":"Καλώς ήρθατε στον ψηφιακό μας χώρο! Είμαστε εδώ για να εμπνεύσουμε, να ενημερώσουμε και να βοηθήσουμε.",
    "about.p2":"Η εταιρεία μας δραστηριοποιείται με επιτυχία σε Ελλάδα και Κύπρο τα τελευταία δύο χρόνια, με στόλο μοτοσικλετών, ηλεκτρικών ποδηλάτων και φορτηγών. Προσφέρουμε γρήγορες και αξιόπιστες λύσεις για κάθε εφοδιαστική ανάγκη.",
    "about.stat1":"Χρόνια δράσης","about.stat2":"Παραδόσεις","about.stat3":"Χώρες",
    "gallery.eyebrow":"Έργα μας","gallery.title":"Στιγμές σε Κίνηση","gallery.desc":"Μια ματιά στον στόλο, τους οδηγούς και τους δρόμους που υπηρετούμε.",
    "gallery.o1":"Σε κίνηση","gallery.o2":"Έτοιμοι","gallery.o3":"Στους δρόμους","gallery.o4":"Γρήγορη εξυπηρέτηση","gallery.o5":"Η ομάδα μας","gallery.o6":"Οδηγοί πρώτα",
    "services.eyebrow":"Υπηρεσίες","services.title":"Αναβάθμισε την εμπειρία σου με τις Premium Υπηρεσίες μας","services.desc":"Αξιόπιστες, γρήγορες και προσαρμοσμένες λύσεις παράδοσης.",
    "services.s1.title":"Αυθημερόν Παράδοση","services.s1.desc":"«Γρήγορες λύσεις, με τον δικό σου τρόπο, κάθε μέρα.»",
    "services.s2.title":"Παράδοση Δεμάτων","services.s2.desc":"«Αξιόπιστη παράδοση δεμάτων, όπου η ταχύτητα συναντά την ασφάλεια.»",
    "services.s3.title":"Παράδοση Πόρτα-Πόρτα","services.s3.desc":"«Άψογη, αποδοτική παράδοση πόρτα-πόρτα στη διάθεσή σας.»",
    "team.eyebrow":"Οι άνθρωποί μας","team.title":"Η Ομάδα μας.",
    "team.p1":"Η ομάδα μας είναι η καρδιά και η ψυχή της εταιρείας μας. Με πάθος, εξειδίκευση και αφοσίωση παρέχουμε άριστη εξυπηρέτηση.",
    "team.p2":"Εμπιστευθείτε τα ικανά μας χέρια και ζήστε τη διαφορά μιας πραγματικά εξαιρετικής ομάδας. Η ικανοποίησή σας είναι ο τελικός μας στόχος.",
    "team.f1":"Έμπειροι & εκπαιδευμένοι οδηγοί","team.f2":"Ευέλικτος στόλος — μηχανές, e-bikes & βαν","team.f3":"Πελατοκεντρική νοοτροπία","team.f4":"Ενεργοί σε Ελλάδα & Κύπρο",
    "business.eyebrow":"Στοιχεία επιχείρησης","business.title":"Βρες μας. Επικοινώνησε. Επισκέψου μας.","business.desc":"Όλα όσα χρειάζεσαι για να επικοινωνήσεις και να μας επισκεφθείς.",
    "business.contact":"Επικοινωνία","business.address":"Διεύθυνση","business.hours":"Ώρες λειτουργίας","business.hoursWeek":"Δευ - Παρ: 11:00 - 19:00","business.hoursWeekend":"Σαβ / Κυρ: Κλειστά",
    "contact.eyebrow":"Γίνε μέλος","contact.title":"Κάνε Αίτηση & Ακολούθησέ μας","contact.desc":"Κάνε αίτηση για θέση οδηγού και γίνε μέλος της ομάδας μας σε Ελλάδα και Κύπρο.",
    "contact.available":"Διαθέσιμοι Τώρα","contact.infoTitle":"Επικοινώνησε","contact.infoDesc":"Παρέχουμε αριστεία. Επικοινώνησε σήμερα και αφήσε σε μας τις ανάγκες παράδοσής σου.",
    "contact.lblAddress":"Διεύθυνση","contact.lblPhone":"Τηλέφωνο","contact.lblEmail":"Email","contact.lblHours":"Ώρες λειτουργίας",
    "form.title":"Στείλε μας μήνυμα","form.desc":"Συμπλήρωσε τη φόρμα και η ομάδα μας θα επικοινωνήσει εντός 24 ωρών.",
    "form.name":"Ονοματεπώνυμο *","form.email":"Email *","form.phone":"Τηλέφωνο","form.subject":"Θέμα","form.message":"Μήνυμα *","form.messagePh":"Πες μας για σένα ή το αίτημά σου...","form.openBtn":"Άνοιγμα Φόρμας","form.send":"Αποστολή","form.success":"Ευχαριστούμε! Το μήνυμά σας στάλθηκε επιτυχώς.",
    "footer.desc":"Όπου η ταχεία παράδοση συναντά τις σύγχρονες ανάγκες.<br>Αξιόπιστη παράδοση σε Ελλάδα και Κύπρο.",
    "settings.title":"Ρυθμίσεις","settings.lang":"Γλώσσα","credit.design":"Σχεδιασμός & Ανάπτυξη",
    "map.eyebrow":"Η Τοποθεσία μας","map.title":"Βρες μας στον χάρτη","map.desc":"Επισκέψου τα γραφεία μας στην Αθήνα — είμαστε εύκολα προσβάσιμοι και πάντα έτοιμοι να σε υποδεχθούμε.",
    "cookie.title":"Χρησιμοποιούμε cookies","cookie.desc":"Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησης και να εξατομικεύσουμε το περιεχόμενο.","cookie.accept":"Αποδοχή όλων","cookie.decline":"Απόρριψη"
  },
  ar: {
    "nav.home":"الرئيسية","nav.about":"من نحن","nav.work":"أعمالنا","nav.services":"الخدمات","nav.team":"الفريق","nav.details":"التغطية","nav.join":"انضم إلى فريقنا",
    "ops.eyebrow":"أين نعمل","ops.title":"دولتان. شوارع لا تعد ولا تحصى.","ops.desc":"من شوارع أثينا النابضة إلى سواحل قبرص المشمسة — نوصل حيث يهم الأمر.",
    "ops.gr.name":"اليونان","ops.gr.tag":"تغطية البر الرئيسي والجزر","ops.cy.name":"قبرص","ops.cy.tag":"نخدم المراكز الرئيسية في الجزيرة",
    "ops.f1.t":"تغطية واسعة","ops.f1.d":"أكثر من  10 مدن في دولتين.",
    "ops.f2.t":"إرسال سريع","ops.f2.d":"السائقون جاهزون خلال دقائق.",
    "ops.f3.t":"أسطول مؤمّن","ops.f3.d":"كل طرد محمي من البداية إلى النهاية.",
    "ops.f4.t":"دعم متعدد اللغات","ops.f4.d":"الإنجليزية · اليونانية · العربية وأكثر.",
    "hero.badge":"موثوقون في اليونان وقبرص","hero.title":"شركة TFT","hero.subtitle":"حيث يلتقي التوصيل السريع باحتياجات اليوم",
    "hero.desc":"نقدم التميز. قدّم الآن للحصول على وظيفة توصيل وانضم إلى فريقنا المتفاني الذي يخدم المجتمعات في اليونان وقبرص.",
    "hero.btnJoin":"انضم إلى فريقنا","hero.btnServices":"خدماتنا",
    "about.eyebrow":"تعرّف علينا","about.title":"التميز في التوصيل عبر اليونان وقبرص",
    "about.p1":"مرحباً بك في عالمنا الرقمي! نحن هنا لنُلهمك ونُعلمك ونساعدك. استكشف وتعلّم ودع فضولك يزدهر.",
    "about.p2":"تعمل شركتنا بنجاح في اليونان وقبرص منذ عامين، بأسطول متنوع من الدراجات النارية والدراجات الكهربائية والشاحنات الصغيرة. نتخصص في تقديم خدمات توصيل متميزة وحلول سريعة وموثوقة لجميع احتياجاتك اللوجستية.",
    "about.stat1":"سنوات نشاط","about.stat2":"عمليات توصيل","about.stat3":"دول",
    "gallery.eyebrow":"أعمالنا","gallery.title":"لحظات في الحركة","gallery.desc":"نظرة على أسطولنا وسائقينا والشوارع التي نخدمها يومياً.",
    "gallery.o1":"في الطريق","gallery.o2":"جاهزون للانطلاق","gallery.o3":"شوارع المدينة","gallery.o4":"خدمة سريعة","gallery.o5":"فريقنا","gallery.o6":"السائقون أولاً",
    "services.eyebrow":"الخدمات","services.title":"ارتقِ بتجربتك مع خدماتنا المميزة","services.desc":"حلول توصيل موثوقة وسريعة ومخصصة لكل احتياج.",
    "services.s1.title":"التوصيل في نفس اليوم","services.s1.desc":"«حلول سريعة، بطريقتك، كل يوم.»",
    "services.s2.title":"توصيل الطرود","services.s2.desc":"«توصيل طرود موثوق، حيث تلتقي السرعة بالأمان.»",
    "services.s3.title":"التوصيل من الباب إلى الباب","services.s3.desc":"«توصيل سلس وفعّال من الباب إلى الباب في خدمتك.»",
    "team.eyebrow":"موظفونا","team.title":"فريقنا.",
    "team.p1":"فريقنا هو قلب وروح شركتنا وما يميزنا. بمزيج من الشغف والخبرة والتفاني، نلتزم بتقديم تميز خدمي لا مثيل له.",
    "team.p2":"ثق بأيدينا القديرة، واختبر الفرق الذي يصنعه فريق استثنائي حقاً. رضاك هو هدفنا الأسمى.",
    "team.f1":"سائقون مدربون وذوو خبرة","team.f2":"أسطول متنوع — دراجات، دراجات كهربائية وشاحنات","team.f3":"عقلية تضع العميل أولاً","team.f4":"نشطون في اليونان وقبرص",
    "business.eyebrow":"تفاصيل الشركة","business.title":"اعثر علينا. تواصل معنا. زرنا.","business.desc":"كل ما تحتاجه للتواصل وتخطيط زيارة لشركة TFT.",
    "business.contact":"التواصل","business.address":"العنوان","business.hours":"ساعات العمل","business.hoursWeek":"الإثنين - الجمعة: 11ص - 7م","business.hoursWeekend":"السبت / الأحد: مغلق",
    "contact.eyebrow":"انضم إلى فريقنا","contact.title":"قدّم الآن وانطلق معنا","contact.desc":"قدّم الآن للحصول على وظيفة توصيل وانضم إلى فريقنا في اليونان وقبرص.",
    "contact.available":"متاحون الآن","contact.infoTitle":"تواصل معنا","contact.infoDesc":"نقدم التميز. تواصل معنا اليوم ودعنا نتولى احتياجات التوصيل الخاصة بك.",
    "contact.lblAddress":"العنوان","contact.lblPhone":"الهاتف","contact.lblEmail":"البريد الإلكتروني","contact.lblHours":"ساعات العمل",
    "form.title":"أرسل لنا رسالة","form.desc":"املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة.",
    "form.name":"الاسم الكامل *","form.email":"البريد الإلكتروني *","form.phone":"الهاتف","form.subject":"الموضوع","form.message":"الرسالة *","form.messagePh":"أخبرنا عن نفسك أو استفسارك...","form.openBtn":"فتح نموذج الرسالة","form.send":"إرسال الرسالة","form.success":"شكراً لك! تم إرسال رسالتك بنجاح.",
    "footer.desc":"حيث يلتقي التوصيل السريع باحتياجات اليوم.<br>توصيل موثوق في نفس اليوم وللطرود ومن الباب إلى الباب في اليونان وقبرص.",
    "settings.title":"الإعدادات","settings.lang":"اللغة","credit.design":"تصميم وتطوير",
    "map.eyebrow":"موقعنا","map.title":"اعثر علينا على الخريطة","map.desc":"قم بزيارة مقرنا الرئيسي في أثينا، اليونان — يسهل العثور علينا ونحن دائماً جاهزون للترحيب بك.",
    "cookie.title":"نستخدم ملفات تعريف الارتباط","cookie.desc":"نستخدم ملفات تعريف الارتباط لتعزيز تجربة التصفح وتحليل حركة الموقع وتخصيص المحتوى. بالنقر على «قبول»، فإنك توافق على استخدامنا لها.","cookie.accept":"قبول الكل","cookie.decline":"رفض"
  },
  fa: {
    "nav.home":"خانه","nav.about":"درباره ما","nav.work":"کارهای ما","nav.services":"خدمات","nav.team":"تیم","nav.details":"پوشش","nav.join":"به تیم ما بپیوندید",
    "ops.eyebrow":"جایی که فعالیت می‌کنیم","ops.title":"دو کشور. خیابان‌های بی‌شمار.","ops.desc":"از خیابان‌های پررفت‌و‌آمد آتن تا سواحل آفتابی قبرس — هر جا که مهم باشد تحویل می‌دهیم.",
    "ops.gr.name":"یونان","ops.gr.tag":"پوشش خاک اصلی و جزایر","ops.cy.name":"قبرس","ops.cy.tag":"خدمت‌رسانی به مراکز اصلی جزیره",
    "ops.f1.t":"پوشش گسترده","ops.f1.d":"بیش از ۱۰ شهر در دو کشور.",
    "ops.f2.t":"ارسال سریع","ops.f2.d":"پیک‌ها ظرف چند دقیقه آماده‌اند.",
    "ops.f3.t":"ناوگان بیمه‌شده","ops.f3.d":"هر بسته از ابتدا تا انتها محافظت می‌شود.",
    "ops.f4.t":"پشتیبانی چندزبانه","ops.f4.d":"انگلیسی · یونانی · عربی و بیشتر.",
    "hero.badge":"مورد اعتماد در یونان و قبرس","hero.title":"شرکت TFT","hero.subtitle":"جایی که تحویل سریع با نیاز امروز ملاقات می‌کند",
    "hero.desc":"ارائه‌دهنده تعالی. همین حالا برای موقعیت پیک درخواست دهید و به تیم متعهد ما در یونان و قبرس بپیوندید.",
    "hero.btnJoin":"به تیم ما بپیوندید","hero.btnServices":"خدمات ما",
    "about.eyebrow":"با ما آشنا شوید","about.title":"ارائه تعالی در سراسر یونان و قبرس",
    "about.p1":"به دنیای دیجیتال ما خوش آمدید! ما اینجا هستیم تا الهام‌بخش، آگاه‌کننده و یاری‌دهنده باشیم.",
    "about.p2":"شرکت ما طی دو سال گذشته با موفقیت در یونان و قبرس فعالیت می‌کند و از ناوگانی متنوع شامل موتورسیکلت، دوچرخه برقی و وانت برخوردار است.",
    "about.stat1":"سال فعالیت","about.stat2":"تحویل","about.stat3":"کشور",
    "gallery.eyebrow":"کارهای ما","gallery.title":"لحظاتی در حرکت","gallery.desc":"نگاهی به ناوگان، پیک‌ها و خیابان‌هایی که هر روز خدمت می‌کنیم.",
    "gallery.o1":"در حرکت","gallery.o2":"آماده حرکت","gallery.o3":"خیابان‌های شهر","gallery.o4":"سرویس سریع","gallery.o5":"تیم ما","gallery.o6":"اول پیک‌ها",
    "services.eyebrow":"خدمات","services.title":"تجربه خود را با خدمات ویژه ما ارتقا دهید","services.desc":"راه‌حل‌های تحویل قابل اعتماد، سریع و سفارشی.",
    "services.s1.title":"تحویل در همان روز","services.s1.desc":"«راه‌حل‌های سریع، به سبک شما، هر روز.»",
    "services.s2.title":"تحویل بسته","services.s2.desc":"«تحویل بسته قابل اعتماد، آنجا که سرعت با ایمنی ملاقات می‌کند.»",
    "services.s3.title":"تحویل درب به درب","services.s3.desc":"«تحویل بدون نقص و کارآمد درب به درب در خدمت شما.»",
    "team.eyebrow":"کارکنان ما","team.title":"تیم ما.",
    "team.p1":"تیم ما قلب و روح شرکت ماست و آنچه ما را متمایز می‌کند. با ترکیبی از اشتیاق، تخصص و تعهد، به ارائه خدمات بی‌نظیر متعهد هستیم.",
    "team.p2":"به دستان توانمند ما اعتماد کنید و تفاوت یک تیم واقعاً استثنایی را تجربه کنید.",
    "team.f1":"پیک‌های مجرب و آموزش‌دیده","team.f2":"ناوگان متنوع — موتور، دوچرخه برقی و وانت","team.f3":"رویکرد مشتری‌محور","team.f4":"فعال در یونان و قبرس",
    "business.eyebrow":"جزئیات شرکت","business.title":"ما را پیدا کنید. با ما تماس بگیرید. ما را ملاقات کنید.","business.desc":"هر آنچه برای تماس و برنامه‌ریزی بازدید از TFT نیاز دارید.",
    "business.contact":"تماس","business.address":"آدرس","business.hours":"ساعات کاری","business.hoursWeek":"دوشنبه - جمعه: ۱۱ تا ۱۹","business.hoursWeekend":"شنبه / یکشنبه: تعطیل",
    "contact.eyebrow":"به تیم ما بپیوندید","contact.title":"همین حالا درخواست دهید و با ما همراه شوید","contact.desc":"همین حالا برای موقعیت پیک درخواست دهید و به تیم ما بپیوندید.",
    "contact.available":"اکنون در دسترس","contact.infoTitle":"در تماس باشید","contact.infoDesc":"ارائه‌دهنده تعالی. همین امروز تماس بگیرید و نیازهای تحویل خود را به ما بسپارید.",
    "contact.lblAddress":"آدرس","contact.lblPhone":"تلفن","contact.lblEmail":"ایمیل","contact.lblHours":"ساعات کاری",
    "form.title":"برای ما پیام بفرستید","form.desc":"فرم زیر را پر کنید؛ تیم ما ظرف ۲۴ ساعت پاسخ خواهد داد.",
    "form.name":"نام کامل *","form.email":"ایمیل *","form.phone":"تلفن","form.subject":"موضوع","form.message":"پیام *","form.messagePh":"درباره خود یا درخواستتان به ما بگویید...","form.openBtn":"باز کردن فرم پیام","form.send":"ارسال پیام","form.success":"متشکریم! پیام شما با موفقیت ارسال شد.",
    "footer.desc":"جایی که تحویل سریع با نیاز امروز ملاقات می‌کند.<br>تحویل قابل اعتماد در سراسر یونان و قبرس.",
    "settings.title":"تنظیمات","settings.lang":"زبان","credit.design":"طراحی و توسعه",
    "map.eyebrow":"موقعیت ما","map.title":"ما را روی نقشه پیدا کنید","map.desc":"از دفتر مرکزی ما در آتن، یونان دیدن کنید — یافتن ما آسان است و همیشه آماده استقبال از شما هستیم.",
    "cookie.title":"ما از کوکی استفاده می‌کنیم","cookie.desc":"ما از کوکی‌ها برای بهبود تجربه مرور، تحلیل ترافیک و شخصی‌سازی محتوا استفاده می‌کنیم.","cookie.accept":"پذیرش همه","cookie.decline":"رد کردن"
  },
  ur: {
    "nav.home":"ہوم","nav.about":"ہمارے بارے میں","nav.work":"ہمارا کام","nav.services":"خدمات","nav.team":"ٹیم","nav.details":"کوریج","nav.join":"ہماری ٹیم میں شامل ہوں",
    "ops.eyebrow":"ہم کہاں کام کرتے ہیں","ops.title":"دو ممالک۔ بے شمار گلیاں۔","ops.desc":"ایتھنز کی مصروف سڑکوں سے لے کر قبرص کے دھوپ بھرے ساحلوں تک — جہاں ضرورت ہو ہم دیلیوری کرتے ہیں۔",
    "ops.gr.name":"یونان","ops.gr.tag":"مرکزی علاقے اور جزائر کی کوریج","ops.cy.name":"قبرص","ops.cy.tag":"جزیرے کے اہم مراکز کی خدمت",
    "ops.f1.t":"وسیع کوریج","ops.f1.d":"دو ممالک میں 10+ شہر.",
    "ops.f2.t":"تیز دسپیچ","ops.f2.d":"رائڈرز چند منٹ میں تیار.",
    "ops.f3.t":"بیمہ شدہ بیڑا","ops.f3.d":"ہر پارسل شروع سے آخر تک محفوظ.",
    "ops.f4.t":"کئی زبانوں میں سپورٹ","ops.f4.d":"انگریزی · یونانی · عربی اور بھی۔",
    "hero.badge":"یونان اور قبرص میں قابل اعتماد","hero.title":"TFT کمپنی","hero.subtitle":"جہاں فوری ڈلیوری آج کی ضرورت سے ملتی ہے",
    "hero.desc":"عمدگی کی فراہمی۔ ابھی ڈلیوری کے کردار کے لیے درخواست دیں اور یونان اور قبرص میں ہماری وقف ٹیم میں شامل ہوں۔",
    "hero.btnJoin":"ہماری ٹیم میں شامل ہوں","hero.btnServices":"ہماری خدمات",
    "about.eyebrow":"ہمیں جانیں","about.title":"یونان اور قبرص میں عمدہ ڈلیوری",
    "about.p1":"ہمارے ڈیجیٹل دائرے میں خوش آمدید! ہم یہاں آپ کو متاثر، مطلع اور مدد کرنے کے لیے ہیں۔",
    "about.p2":"ہماری ڈلیوری کمپنی پچھلے دو سال سے یونان اور قبرص میں کامیابی سے کام کر رہی ہے، جس میں موٹر سائیکلیں، الیکٹرک بائیکس اور وینز شامل ہیں۔",
    "about.stat1":"سال فعال","about.stat2":"ڈلیوریاں","about.stat3":"ممالک",
    "gallery.eyebrow":"ہمارا کام","gallery.title":"حرکت میں لمحے","gallery.desc":"ہمارے بیڑے، رائیڈرز اور سڑکوں کی ایک جھلک۔",
    "gallery.o1":"حرکت میں","gallery.o2":"تیار","gallery.o3":"شہر کی سڑکیں","gallery.o4":"تیز سروس","gallery.o5":"ہماری ٹیم","gallery.o6":"رائیڈرز پہلے",
    "services.eyebrow":"خدمات","services.title":"ہماری پریمیم خدمات کے ساتھ تجربہ بلند کریں","services.desc":"ہر ضرورت کے لیے قابل اعتماد، تیز اور موزوں ڈلیوری حل۔",
    "services.s1.title":"اسی دن ڈلیوری","services.s1.desc":"«تیز حل، آپ کے انداز میں، ہر روز۔»",
    "services.s2.title":"پارسل ڈلیوری","services.s2.desc":"«قابل اعتماد پارسل ڈلیوری، جہاں رفتار حفاظت سے ملتی ہے۔»",
    "services.s3.title":"دروازے سے دروازے ڈلیوری","services.s3.desc":"«ہموار، موثر دروازے سے دروازے ڈلیوری آپ کی خدمت میں۔»",
    "team.eyebrow":"ہمارے لوگ","team.title":"ہماری ٹیم۔",
    "team.p1":"ہماری ٹیم ہماری کمپنی کا دل اور روح ہے۔ جذبے، مہارت اور لگن کے امتزاج کے ساتھ، ہم بے مثال خدمت کے لیے پرعزم ہیں۔",
    "team.p2":"ہمارے قابل ہاتھوں پر بھروسہ کریں اور ایک واقعی غیر معمولی ٹیم کا فرق محسوس کریں۔",
    "team.f1":"تجربہ کار اور تربیت یافتہ رائیڈرز","team.f2":"متنوع بیڑا — بائیکس، ای-بائیکس اور وینز","team.f3":"کسٹمر فرسٹ سوچ","team.f4":"یونان اور قبرص میں سرگرم",
    "business.eyebrow":"کاروباری تفصیلات","business.title":"ہمیں تلاش کریں۔ رابطہ کریں۔ ملاقات کریں۔","business.desc":"رابطے اور وزٹ کے لیے درکار ہر چیز۔",
    "business.contact":"رابطہ","business.address":"پتہ","business.hours":"اوقات کار","business.hoursWeek":"پیر - جمعہ: 11 صبح - 7 شام","business.hoursWeekend":"ہفتہ / اتوار: بند",
    "contact.eyebrow":"ہماری ٹیم میں شامل ہوں","contact.title":"ابھی درخواست دیں اور ہمارے ساتھ رائیڈ کریں","contact.desc":"ابھی ڈلیوری کے کردار کے لیے درخواست دیں اور ہماری ٹیم میں شامل ہوں۔",
    "contact.available":"ابھی دستیاب","contact.infoTitle":"رابطہ کریں","contact.infoDesc":"عمدگی کی فراہمی۔ آج ہی رابطہ کریں اور اپنی ڈلیوری ضروریات ہم پر چھوڑ دیں۔",
    "contact.lblAddress":"پتہ","contact.lblPhone":"فون","contact.lblEmail":"ای میل","contact.lblHours":"اوقات کار",
    "form.title":"ہمیں پیغام بھیجیں","form.desc":"نیچے فارم پُر کریں اور ہماری ٹیم 24 گھنٹوں میں رابطہ کرے گی۔",
    "form.name":"پورا نام *","form.email":"ای میل *","form.phone":"فون","form.subject":"موضوع","form.message":"پیغام *","form.messagePh":"اپنے بارے میں یا اپنے سوال کے بارے میں بتائیں...","form.openBtn":"پیغام فارم کھولیں","form.send":"پیغام بھیجیں","form.success":"شکریہ! آپ کا پیغام کامیابی سے بھیج دیا گیا ہے۔",
    "footer.desc":"جہاں فوری ڈلیوری آج کی ضرورت سے ملتی ہے۔<br>یونان اور قبرص میں قابل اعتماد ڈلیوری۔",
    "settings.title":"ترتیبات","settings.lang":"زبان","credit.design":"ڈیزائن اور تیاری",
    "map.eyebrow":"ہمارا مقام","map.title":"نقشے پر ہمیں تلاش کریں","map.desc":"ایتھنز، یونان میں ہمارے ہیڈکوارٹر کا دورہ کریں — ہمیں تلاش کرنا آسان ہے اور ہم ہمیشہ آپ کا استقبال کرنے کے لیے تیار ہیں۔",
    "cookie.title":"ہم کوکیز استعمال کرتے ہیں","cookie.desc":"ہم آپ کے براؤزنگ تجربے کو بہتر بنانے، ٹریفک کا تجزیہ کرنے اور مواد کو ذاتی بنانے کے لیے کوکیز استعمال کرتے ہیں۔","cookie.accept":"سب قبول کریں","cookie.decline":"مسترد کریں"
  },
  es: {
    "nav.home":"Inicio","nav.about":"Acerca","nav.work":"Nuestro Trabajo","nav.services":"Servicios","nav.team":"Equipo","nav.details":"Cobertura","nav.join":"Únete a Nuestro Equipo",
    "ops.eyebrow":"Dónde Operamos","ops.title":"Dos Países. Calles Sin Fin.","ops.desc":"Desde las animadas avenidas de Atenas hasta las costas soleadas de Chipre — entregamos donde más importa.",
    "ops.gr.name":"Grecia","ops.gr.tag":"Cobertura continental e insular","ops.cy.name":"Chipre","ops.cy.tag":"Servimos los principales centros de la isla",
    "ops.f1.t":"Amplia Cobertura","ops.f1.d":"Más de 10 ciudades en dos países.",
    "ops.f2.t":"Envío Rápido","ops.f2.d":"Repartidores listos en minutos.",
    "ops.f3.t":"Flota Asegurada","ops.f3.d":"Cada paquete protegido de extremo a extremo.",
    "ops.f4.t":"Soporte Multilingüe","ops.f4.d":"EN · EL · AR y más.",
    "hero.badge":"De confianza en Grecia y Chipre","hero.title":"TFT Company","hero.subtitle":"Donde la entrega rápida se encuentra con la necesidad de hoy",
    "hero.desc":"Entregando excelencia. Solicita ahora un puesto de repartidor y únete a nuestro equipo dedicado en Grecia y Chipre.",
    "hero.btnJoin":"Únete a Nuestro Equipo","hero.btnServices":"Nuestros Servicios",
    "about.eyebrow":"Conócenos","about.title":"Entregando excelencia en Grecia y Chipre",
    "about.p1":"¡Bienvenido a nuestro mundo digital! Estamos aquí para inspirar, informar y ayudarte.",
    "about.p2":"Nuestra empresa de entregas opera con éxito en Grecia y Chipre desde hace dos años, con una flota versátil de motocicletas, bicicletas eléctricas y furgonetas.",
    "about.stat1":"Años activos","about.stat2":"Entregas","about.stat3":"Países",
    "gallery.eyebrow":"Nuestro Trabajo","gallery.title":"Momentos en Movimiento","gallery.desc":"Una mirada a nuestra flota, repartidores y las calles que servimos cada día.",
    "gallery.o1":"En Movimiento","gallery.o2":"Listos","gallery.o3":"Calles de la Ciudad","gallery.o4":"Servicio Rápido","gallery.o5":"Nuestro Equipo","gallery.o6":"Repartidores Primero",
    "services.eyebrow":"Servicios","services.title":"Eleva tu experiencia con nuestros servicios premium","services.desc":"Soluciones de entrega fiables, rápidas y a medida.",
    "services.s1.title":"Entrega el Mismo Día","services.s1.desc":"«Soluciones rápidas, a tu manera, todos los días.»",
    "services.s2.title":"Entrega de Paquetes","services.s2.desc":"«Entrega de paquetes fiable, donde la velocidad se une a la seguridad.»",
    "services.s3.title":"Entrega Puerta a Puerta","services.s3.desc":"«Entrega puerta a puerta fluida y eficiente a tu servicio.»",
    "team.eyebrow":"Nuestra Gente","team.title":"Nuestro Equipo.",
    "team.p1":"Nuestro equipo es el corazón y alma de nuestra empresa. Con pasión, experiencia y dedicación, nos comprometemos a ofrecer un servicio excelente.",
    "team.p2":"Confía en nuestras manos capaces y experimenta la diferencia que un equipo realmente excepcional puede marcar.",
    "team.f1":"Repartidores experimentados y formados","team.f2":"Flota versátil — motos, e-bikes y furgonetas","team.f3":"Mentalidad centrada en el cliente","team.f4":"Activos en Grecia y Chipre",
    "business.eyebrow":"Detalles de la Empresa","business.title":"Encuéntranos. Contáctanos. Visítanos.","business.desc":"Todo lo que necesitas para contactarnos y planear una visita.",
    "business.contact":"Contacto","business.address":"Dirección","business.hours":"Horario","business.hoursWeek":"Lun - Vie: 11:00 - 19:00","business.hoursWeekend":"Sábado / Domingo: Cerrado",
    "contact.eyebrow":"Únete a Nuestro Equipo","contact.title":"Solicita ahora y conduce con nosotros","contact.desc":"Solicita ahora un puesto de repartidor y únete a nuestro equipo en Grecia y Chipre.",
    "contact.available":"Disponible Ahora","contact.infoTitle":"Ponte en Contacto","contact.infoDesc":"Entregando excelencia. Contáctanos hoy y deja que gestionemos tus necesidades de entrega.",
    "contact.lblAddress":"Dirección","contact.lblPhone":"Teléfono","contact.lblEmail":"Email","contact.lblHours":"Horario",
    "form.title":"Envíanos un Mensaje","form.desc":"Rellena el formulario y nuestro equipo te contactará en 24 horas.",
    "form.name":"Nombre Completo *","form.email":"Email *","form.phone":"Teléfono","form.subject":"Asunto","form.message":"Mensaje *","form.messagePh":"Cuéntanos sobre ti o tu consulta...","form.openBtn":"Abrir Formulario","form.send":"Enviar Mensaje","form.success":"¡Gracias! Tu mensaje se ha enviado correctamente.",
    "footer.desc":"Donde la entrega rápida se encuentra con la necesidad de hoy.<br>Entrega fiable en Grecia y Chipre.",
    "settings.title":"Configuración","settings.lang":"Idioma","credit.design":"Diseño & Desarrollo",
    "map.eyebrow":"Nuestra Ubicación","map.title":"Encuéntranos en el mapa","map.desc":"Visita nuestra sede en Atenas, Grecia — somos fáciles de encontrar y siempre listos para recibirte.",
    "cookie.title":"Usamos cookies","cookie.desc":"Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico y personalizar el contenido.","cookie.accept":"Aceptar Todo","cookie.decline":"Rechazar"
  },
  fr: {
    "nav.home":"Accueil","nav.about":"À propos","nav.work":"Nos Travaux","nav.services":"Services","nav.team":"Équipe","nav.details":"Couverture","nav.join":"Rejoignez-nous",
    "ops.eyebrow":"Où Nous Opérons","ops.title":"Deux Pays. D'innombrables Rues.","ops.desc":"Des boulevards animés d'Athènes aux côtes ensoleillées de Chypre — nous livrons là où ça compte.",
    "ops.gr.name":"Grèce","ops.gr.tag":"Couverture du continent et des îles","ops.cy.name":"Chypre","ops.cy.tag":"Au service des principaux centres de l'île",
    "ops.f1.t":"Large Couverture","ops.f1.d":"Plus de 10 villes dans deux pays.",
    "ops.f2.t":"Envoi Rapide","ops.f2.d":"Livreurs prêts en quelques minutes.",
    "ops.f3.t":"Flotte Assurée","ops.f3.d":"Chaque colis protégé de bout en bout.",
    "ops.f4.t":"Support Multilingue","ops.f4.d":"EN · EL · AR et plus.",
    "hero.badge":"De confiance en Grèce et à Chypre","hero.title":"TFT Company","hero.subtitle":"Où la livraison rapide rencontre les besoins d'aujourd'hui",
    "hero.desc":"L'excellence livrée. Postulez dès maintenant pour un poste de livreur et rejoignez notre équipe dévouée en Grèce et à Chypre.",
    "hero.btnJoin":"Rejoignez-nous","hero.btnServices":"Nos Services",
    "about.eyebrow":"Découvrez-nous","about.title":"L'excellence livrée en Grèce et à Chypre",
    "about.p1":"Bienvenue dans notre univers numérique ! Nous sommes là pour vous inspirer, vous informer et vous aider.",
    "about.p2":"Notre société de livraison opère avec succès en Grèce et à Chypre depuis deux ans, avec une flotte variée de motos, vélos électriques et fourgonnettes.",
    "about.stat1":"Années actives","about.stat2":"Livraisons","about.stat3":"Pays",
    "gallery.eyebrow":"Nos Travaux","gallery.title":"Moments en Mouvement","gallery.desc":"Un aperçu de notre flotte, de nos livreurs et des rues que nous desservons.",
    "gallery.o1":"En Mouvement","gallery.o2":"Prêts à Rouler","gallery.o3":"Rues de la Ville","gallery.o4":"Service Rapide","gallery.o5":"Notre Équipe","gallery.o6":"Livreurs d'Abord",
    "services.eyebrow":"Services","services.title":"Sublimez votre expérience avec nos services premium","services.desc":"Des solutions de livraison fiables, rapides et sur mesure.",
    "services.s1.title":"Livraison le Jour Même","services.s1.desc":"«Des solutions rapides, à votre façon, chaque jour.»",
    "services.s2.title":"Livraison de Colis","services.s2.desc":"«Livraison de colis fiable, où vitesse rime avec sécurité.»",
    "services.s3.title":"Livraison Porte à Porte","services.s3.desc":"«Livraison porte à porte fluide et efficace à votre service.»",
    "team.eyebrow":"Nos Collaborateurs","team.title":"Notre Équipe.",
    "team.p1":"Notre équipe est le cœur et l'âme de notre entreprise. Avec passion, expertise et dévouement, nous offrons un service d'excellence.",
    "team.p2":"Faites confiance à nos mains expertes et découvrez la différence d'une équipe véritablement exceptionnelle.",
    "team.f1":"Livreurs expérimentés et formés","team.f2":"Flotte variée — motos, vélos électriques et fourgonnettes","team.f3":"Approche centrée client","team.f4":"Actifs en Grèce et à Chypre",
    "business.eyebrow":"Détails de l'entreprise","business.title":"Trouvez-nous. Contactez-nous. Visitez-nous.","business.desc":"Tout ce dont vous avez besoin pour nous contacter et prévoir une visite.",
    "business.contact":"Contact","business.address":"Adresse","business.hours":"Horaires d'ouverture","business.hoursWeek":"Lun - Ven : 11h - 19h","business.hoursWeekend":"Samedi / Dimanche : Fermé",
    "contact.eyebrow":"Rejoignez-nous","contact.title":"Postulez maintenant et roulez avec nous","contact.desc":"Postulez dès maintenant pour un poste de livreur et rejoignez notre équipe en Grèce et à Chypre.",
    "contact.available":"Disponible Maintenant","contact.infoTitle":"Contactez-nous","contact.infoDesc":"L'excellence livrée. Contactez-nous aujourd'hui et laissez-nous gérer vos besoins de livraison.",
    "contact.lblAddress":"Adresse","contact.lblPhone":"Téléphone","contact.lblEmail":"Email","contact.lblHours":"Horaires",
    "form.title":"Envoyez-nous un Message","form.desc":"Remplissez le formulaire et notre équipe vous répondra sous 24 heures.",
    "form.name":"Nom Complet *","form.email":"Email *","form.phone":"Téléphone","form.subject":"Sujet","form.message":"Message *","form.messagePh":"Parlez-nous de vous ou de votre demande...","form.openBtn":"Ouvrir le Formulaire","form.send":"Envoyer","form.success":"Merci ! Votre message a été envoyé avec succès.",
    "footer.desc":"Où la livraison rapide rencontre les besoins d'aujourd'hui.<br>Livraison fiable en Grèce et à Chypre.",
    "settings.title":"Paramètres","settings.lang":"Langue","credit.design":"Conception & Développement",
    "map.eyebrow":"Notre Emplacement","map.title":"Trouvez-nous sur la carte","map.desc":"Visitez notre siège à Athènes, en Grèce — facile à trouver et toujours prêts à vous accueillir.",
    "cookie.title":"Nous utilisons des cookies","cookie.desc":"Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic et personnaliser le contenu.","cookie.accept":"Tout Accepter","cookie.decline":"Refuser"
  },
  de: {
    "nav.home":"Start","nav.about":"Über uns","nav.work":"Unsere Arbeit","nav.services":"Leistungen","nav.team":"Team","nav.details":"Abdeckung","nav.join":"Werde Teil des Teams",
    "ops.eyebrow":"Wo wir tätig sind","ops.title":"Zwei Länder. Unzählige Straßen.","ops.desc":"Von den lebhaften Boulevards Athens bis zu den sonnigen Küsten Zyperns — wir liefern dort, wo es zählt.",
    "ops.gr.name":"Griechenland","ops.gr.tag":"Festland & Inseln Abdeckung","ops.cy.name":"Zypern","ops.cy.tag":"Wir bedienen die wichtigsten Zentren der Insel",
    "ops.f1.t":"Breite Abdeckung","ops.f1.d":"Über 10 Städte in zwei Ländern.",
    "ops.f2.t":"Schneller Versand","ops.f2.d":"Fahrer in Minuten bereit.",
    "ops.f3.t":"Versicherte Flotte","ops.f3.d":"Jedes Paket durchgängig geschützt.",
    "ops.f4.t":"Mehrsprachiger Support","ops.f4.d":"EN · EL · AR und mehr.",
    "hero.badge":"Vertrauenswürdig in Griechenland & Zypern","hero.title":"TFT Company","hero.subtitle":"Wo schnelle Lieferung auf den heutigen Bedarf trifft",
    "hero.desc":"Exzellenz geliefert. Bewirb dich jetzt für eine Lieferposition und werde Teil unseres engagierten Teams.",
    "hero.btnJoin":"Werde Teil des Teams","hero.btnServices":"Unsere Leistungen",
    "about.eyebrow":"Lerne uns kennen","about.title":"Exzellenz in Griechenland & Zypern",
    "about.p1":"Willkommen in unserer digitalen Welt! Wir sind hier, um zu inspirieren, zu informieren und zu helfen.",
    "about.p2":"Unser Lieferunternehmen ist seit zwei Jahren erfolgreich in Griechenland und Zypern tätig, mit einer vielseitigen Flotte aus Motorrädern, E-Bikes und Transportern.",
    "about.stat1":"Jahre aktiv","about.stat2":"Lieferungen","about.stat3":"Länder",
    "gallery.eyebrow":"Unsere Arbeit","gallery.title":"Momente in Bewegung","gallery.desc":"Ein Blick auf unsere Flotte, Fahrer und die Straßen, die wir täglich bedienen.",
    "gallery.o1":"Unterwegs","gallery.o2":"Startklar","gallery.o3":"Stadtstraßen","gallery.o4":"Schneller Service","gallery.o5":"Unser Team","gallery.o6":"Fahrer Zuerst",
    "services.eyebrow":"Leistungen","services.title":"Erlebe mehr mit unseren Premium-Diensten","services.desc":"Zuverlässige, schnelle und maßgeschneiderte Lieferlösungen.",
    "services.s1.title":"Lieferung am selben Tag","services.s1.desc":"«Schnelle Lösungen, auf deine Art, jeden Tag.»",
    "services.s2.title":"Paketlieferung","services.s2.desc":"«Zuverlässige Paketlieferung – Geschwindigkeit trifft Sicherheit.»",
    "services.s3.title":"Tür-zu-Tür Lieferung","services.s3.desc":"«Nahtlose, effiziente Tür-zu-Tür-Lieferung in deinem Dienst.»",
    "team.eyebrow":"Unsere Leute","team.title":"Unser Team.",
    "team.p1":"Unser Team ist Herz und Seele des Unternehmens. Mit Leidenschaft, Expertise und Hingabe bieten wir herausragenden Service.",
    "team.p2":"Vertraue auf unsere fähigen Hände und erlebe den Unterschied eines wirklich außergewöhnlichen Teams.",
    "team.f1":"Erfahrene & geschulte Fahrer","team.f2":"Vielseitige Flotte — Motorräder, E-Bikes & Transporter","team.f3":"Kundenorientiert","team.f4":"Aktiv in Griechenland & Zypern",
    "business.eyebrow":"Unternehmensdetails","business.title":"Finde uns. Kontaktiere uns. Besuche uns.","business.desc":"Alles, was du brauchst, um uns zu erreichen.",
    "business.contact":"Kontakt","business.address":"Adresse","business.hours":"Öffnungszeiten","business.hoursWeek":"Mo - Fr: 11 - 19 Uhr","business.hoursWeekend":"Samstag / Sonntag: Geschlossen",
    "contact.eyebrow":"Werde Teil des Teams","contact.title":"Jetzt bewerben & mit uns fahren","contact.desc":"Bewirb dich jetzt für eine Lieferposition und werde Teil unseres Teams in Griechenland und Zypern.",
    "contact.available":"Jetzt verfügbar","contact.infoTitle":"Kontaktiere uns","contact.infoDesc":"Exzellenz geliefert. Kontaktiere uns heute und lass uns deine Lieferbedürfnisse erfüllen.",
    "contact.lblAddress":"Adresse","contact.lblPhone":"Telefon","contact.lblEmail":"E-Mail","contact.lblHours":"Arbeitszeiten",
    "form.title":"Sende uns eine Nachricht","form.desc":"Fülle das Formular aus und unser Team meldet sich innerhalb von 24 Stunden.",
    "form.name":"Vollständiger Name *","form.email":"E-Mail *","form.phone":"Telefon","form.subject":"Betreff","form.message":"Nachricht *","form.messagePh":"Erzähl uns von dir oder deiner Anfrage...","form.openBtn":"Formular öffnen","form.send":"Nachricht senden","form.success":"Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.",
    "footer.desc":"Wo schnelle Lieferung auf den heutigen Bedarf trifft.<br>Zuverlässige Lieferung in Griechenland und Zypern.",
    "settings.title":"Einstellungen","settings.lang":"Sprache","credit.design":"Design & Entwicklung",
    "map.eyebrow":"Unser Standort","map.title":"Finde uns auf der Karte","map.desc":"Besuche unser Hauptquartier in Athen, Griechenland — wir sind leicht zu finden und freuen uns immer auf dich.",
    "cookie.title":"Wir verwenden Cookies","cookie.desc":"Wir verwenden Cookies, um dein Surferlebnis zu verbessern, den Verkehr zu analysieren und Inhalte zu personalisieren.","cookie.accept":"Alle akzeptieren","cookie.decline":"Ablehnen"
  },
  it: {
    "nav.home":"Home","nav.about":"Chi siamo","nav.work":"I nostri lavori","nav.services":"Servizi","nav.team":"Team","nav.details":"Copertura","nav.join":"Unisciti al Team",
    "ops.eyebrow":"Dove Operiamo","ops.title":"Due Paesi. Strade Infinite.","ops.desc":"Dai vivaci viali di Atene alle coste soleggiate di Cipro — consegniamo dove conta di più.",
    "ops.gr.name":"Grecia","ops.gr.tag":"Copertura continentale e isole","ops.cy.name":"Cipro","ops.cy.tag":"Serviamo i principali centri dell'isola",
    "ops.f1.t":"Ampia Copertura","ops.f1.d":"Oltre 10 città in due paesi.",
    "ops.f2.t":"Spedizione Rapida","ops.f2.d":"Rider pronti in pochi minuti.",
    "ops.f3.t":"Flotta Assicurata","ops.f3.d":"Ogni pacco protetto dall'inizio alla fine.",
    "ops.f4.t":"Supporto Multilingue","ops.f4.d":"EN · EL · AR e altre.",
    "hero.badge":"Affidabili in Grecia e Cipro","hero.title":"TFT Company","hero.subtitle":"Dove la consegna rapida incontra le esigenze di oggi",
    "hero.desc":"Eccellenza consegnata. Candidati ora per un ruolo di consegna e unisciti al nostro team in Grecia e Cipro.",
    "hero.btnJoin":"Unisciti al Team","hero.btnServices":"I Nostri Servizi",
    "about.eyebrow":"Conoscici","about.title":"Eccellenza nelle consegne in Grecia e Cipro",
    "about.p1":"Benvenuto nel nostro mondo digitale! Siamo qui per ispirare, informare e aiutarti.",
    "about.p2":"La nostra azienda di consegne opera con successo in Grecia e Cipro da due anni, con una flotta versatile di moto, e-bike e furgoni.",
    "about.stat1":"Anni di attività","about.stat2":"Consegne","about.stat3":"Paesi",
    "gallery.eyebrow":"I nostri lavori","gallery.title":"Momenti in Movimento","gallery.desc":"Uno sguardo alla nostra flotta, ai rider e alle strade che serviamo ogni giorno.",
    "gallery.o1":"In Movimento","gallery.o2":"Pronti a Partire","gallery.o3":"Strade della Città","gallery.o4":"Servizio Veloce","gallery.o5":"Il Nostro Team","gallery.o6":"Rider al Primo Posto",
    "services.eyebrow":"Servizi","services.title":"Eleva la tua esperienza con i nostri servizi premium","services.desc":"Soluzioni di consegna affidabili, veloci e su misura.",
    "services.s1.title":"Consegna in Giornata","services.s1.desc":"«Soluzioni rapide, a modo tuo, ogni giorno.»",
    "services.s2.title":"Consegna Pacchi","services.s2.desc":"«Consegna pacchi affidabile, dove velocità incontra sicurezza.»",
    "services.s3.title":"Consegna Porta a Porta","services.s3.desc":"«Consegna porta a porta fluida ed efficiente al tuo servizio.»",
    "team.eyebrow":"Le nostre persone","team.title":"Il Nostro Team.",
    "team.p1":"Il nostro team è il cuore e l'anima dell'azienda. Con passione, competenza e dedizione, offriamo un servizio eccellente.",
    "team.p2":"Affidati alle nostre mani esperte e scopri la differenza di un team davvero eccezionale.",
    "team.f1":"Rider esperti e formati","team.f2":"Flotta versatile — moto, e-bike e furgoni","team.f3":"Mentalità orientata al cliente","team.f4":"Attivi in Grecia e Cipro",
    "business.eyebrow":"Dettagli aziendali","business.title":"Trovaci. Contattaci. Visitaci.","business.desc":"Tutto ciò che ti serve per contattarci e pianificare una visita.",
    "business.contact":"Contatto","business.address":"Indirizzo","business.hours":"Orari di apertura","business.hoursWeek":"Lun - Ven: 11:00 - 19:00","business.hoursWeekend":"Sabato / Domenica: Chiuso",
    "contact.eyebrow":"Unisciti al Team","contact.title":"Candidati ora e guida con noi","contact.desc":"Candidati ora per un ruolo di consegna e unisciti al nostro team in Grecia e Cipro.",
    "contact.available":"Disponibile Ora","contact.infoTitle":"Mettiti in Contatto","contact.infoDesc":"Eccellenza consegnata. Contattaci oggi e lasciaci gestire le tue esigenze di consegna.",
    "contact.lblAddress":"Indirizzo","contact.lblPhone":"Telefono","contact.lblEmail":"Email","contact.lblHours":"Orari di lavoro",
    "form.title":"Inviaci un Messaggio","form.desc":"Compila il modulo e il nostro team ti risponderà entro 24 ore.",
    "form.name":"Nome Completo *","form.email":"Email *","form.phone":"Telefono","form.subject":"Oggetto","form.message":"Messaggio *","form.messagePh":"Parlaci di te o della tua richiesta...","form.openBtn":"Apri il Modulo","form.send":"Invia Messaggio","form.success":"Grazie! Il tuo messaggio è stato inviato con successo.",
    "footer.desc":"Dove la consegna rapida incontra le esigenze di oggi.<br>Consegna affidabile in Grecia e Cipro.",
    "settings.title":"Impostazioni","settings.lang":"Lingua","credit.design":"Design & Sviluppo",
    "map.eyebrow":"La Nostra Posizione","map.title":"Trovaci sulla mappa","map.desc":"Visita la nostra sede ad Atene, in Grecia — siamo facili da trovare e sempre pronti ad accoglierti.",
    "cookie.title":"Utilizziamo i cookie","cookie.desc":"Utilizziamo i cookie per migliorare la tua esperienza di navigazione, analizzare il traffico e personalizzare i contenuti.","cookie.accept":"Accetta Tutto","cookie.decline":"Rifiuta"
  }
};

const TFT_RTL_LANGS = ['ar','fa','ur'];

// On-demand font loading for non-Latin scripts (saves ~250KB on initial load)
const TFT_LANG_FONTS = {
  ar: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap',
  fa: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap',
  ur: 'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap'
};
const _tftLoadedFonts = new Set();
function tftLoadLangFont(lang){
  const url = TFT_LANG_FONTS[lang];
  if (!url || _tftLoadedFonts.has(lang)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
  _tftLoadedFonts.add(lang);
}

function tftApplyLang(lang){
  const dict = TFT_TRANSLATIONS[lang] || TFT_TRANSLATIONS.en;
  tftLoadLangFont(lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  const isRTL = TFT_RTL_LANGS.includes(lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  try { localStorage.setItem('tft_lang', lang); } catch(e){}
  document.querySelectorAll('.lang-option').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
}

document.addEventListener('DOMContentLoaded', () => {

  // Navbar scroll + back-to-top
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('backTop');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 20);
    if (backTop) backTop.classList.toggle('show', y > 500);
    // Hide scroll indicator when scrolling down
    if (scrollIndicator) {
      scrollIndicator.style.opacity = y > 100 ? '0' : '1';
      scrollIndicator.style.pointerEvents = y > 100 ? 'none' : 'auto';
    }
  });
  if (backTop) {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navBackdrop = document.getElementById('navBackdrop');
  function closeMenu() {
    if (!navLinks) return;
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded','false');
  }
  function openMenu() {
    if (!navLinks) return;
    navLinks.classList.add('active');
    document.body.classList.add('menu-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded','true');
  }
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.contains('active') ? closeMenu() : openMenu();
    });
    if (navBackdrop) navBackdrop.addEventListener('click', closeMenu);
    document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', closeMenu));
    // Close on Escape
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Contact form (FormSubmit.co handles delivery to tft@tftinfo.net)
  const form = document.getElementById('contactForm');
  if (form) {
    // Real-time validation
    const nameInput = form.name;
    const emailInput = form.email;
    const messageInput = form.message;

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    function showError(input, message) {
      const formGroup = input.parentElement;
      let errorElement = formGroup.querySelector('.error-message');
      if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
      }
      errorElement.textContent = message;
      input.style.borderColor = '#ef4444';
    }

    function clearError(input) {
      const formGroup = input.parentElement;
      const errorElement = formGroup.querySelector('.error-message');
      if (errorElement) {
        errorElement.remove();
      }
      input.style.borderColor = '#e5e7eb';
    }

    nameInput.addEventListener('blur', () => {
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Name is required');
      } else {
        clearError(nameInput);
      }
    });

    emailInput.addEventListener('blur', () => {
      if (!emailInput.value.trim()) {
        showError(emailInput, 'Email is required');
      } else if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email');
      } else {
        clearError(emailInput);
      }
    });

    messageInput.addEventListener('blur', () => {
      if (!messageInput.value.trim()) {
        showError(messageInput, 'Message is required');
      } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'Message must be at least 10 characters');
      } else {
        clearError(messageInput);
      }
    });

    form.addEventListener('submit', e => {
      let isValid = true;

      if (!nameInput.value.trim()) {
        showError(nameInput, 'Name is required');
        isValid = false;
      }

      if (!emailInput.value.trim()) {
        showError(emailInput, 'Email is required');
        isValid = false;
      } else if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email');
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        showError(messageInput, 'Message is required');
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'Message must be at least 10 characters');
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
      }
    });
  }

  // Generic modal helpers (Escape close + focus trap; backdrop click is intentionally disabled)
  const FOCUSABLE = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let _lastFocused = null;
  function _trapFocus(modal, e){
    const focusables = [...modal.querySelectorAll(FOCUSABLE)].filter(el => el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function tftOpenModal(modal, focusTarget){
    if (!modal) return;
    _lastFocused = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    const focusEl = focusTarget || modal.querySelector(FOCUSABLE);
    if (focusEl) setTimeout(() => focusEl.focus(), 200);
  }
  function tftCloseModal(modal){
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    if (_lastFocused && typeof _lastFocused.focus === 'function') _lastFocused.focus();
  }
  function tftWireModal(modal, closeFn){
    if (!modal) return;
    modal.querySelectorAll('[data-close]').forEach(el =>
      el.addEventListener('click', closeFn)
    );
    modal.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeFn();
      else if (e.key === 'Tab' && modal.classList.contains('open')) _trapFocus(modal, e);
    });
  }

  // Contact modal (CTA button opens popup form)
  const contactModal = document.getElementById('contactModal');
  const openContactBtn = document.getElementById('openContactForm');
  function openContactModal(){
    tftOpenModal(contactModal, contactModal && contactModal.querySelector('input[name="name"]'));
  }
  function closeContactModal(){ tftCloseModal(contactModal); }
  if (openContactBtn && contactModal) {
    openContactBtn.addEventListener('click', openContactModal);
    tftWireModal(contactModal, closeContactModal);
  }

  // Settings modal + language switcher
  const langBtn = document.getElementById('langBtn');
  const settingsModal = document.getElementById('settingsModal');
  const langGrid = document.getElementById('langGrid');
  function openSettings(){ tftOpenModal(settingsModal); }
  function closeSettings(){ tftCloseModal(settingsModal); }
  if (langBtn && settingsModal) {
    langBtn.addEventListener('click', openSettings);
    tftWireModal(settingsModal, closeSettings);
  }
  if (langGrid) {
    langGrid.addEventListener('click', e => {
      const btn = e.target.closest('.lang-option');
      if (!btn) return;
      tftApplyLang(btn.dataset.lang);
    });
  }

  // Draggable modals (desktop only)
  function makeDraggable(modal, headerSelector) {
    if (!modal || window.matchMedia('(max-width: 992px)').matches) return;
    const header = modal.querySelector(headerSelector);
    if (!header) return;
    const panel = modal.querySelector('[class*="-panel"]');
    if (!panel) return;

    let isDragging = false;
    let startX, startY, initialX, initialY;

    header.addEventListener('mousedown', e => {
      if (e.target.closest('[data-close]')) return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      const rect = panel.getBoundingClientRect();
      initialX = rect.left;
      initialY = rect.top;
      panel.style.position = 'fixed';
      panel.style.margin = '0';
      panel.style.transform = 'none';
      panel.classList.add('dragging');
    });

    document.addEventListener('mousemove', e => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      panel.style.left = initialX + dx + 'px';
      panel.style.top = initialY + dy + 'px';
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        panel.classList.remove('dragging');
      }
    });
  }

  // Enable dragging for modals
  makeDraggable(contactModal, '.contact-modal-header');
  makeDraggable(settingsModal, '.settings-header');
  // Initial language: saved -> browser -> en
  let initialLang = 'en';
  try { initialLang = localStorage.getItem('tft_lang') || ''; } catch(e){}
  if (!initialLang) {
    const nav = (navigator.language || 'en').slice(0,2).toLowerCase();
    if (TFT_TRANSLATIONS[nav]) initialLang = nav;
    else initialLang = 'en';
  }
  tftApplyLang(initialLang);

  // Cookie consent (GDPR)
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');
  const cookieDecline = document.getElementById('cookieDecline');
  if (cookieBanner && cookieAccept && cookieDecline) {
    if (!localStorage.getItem('tft_cookie_consent')) {
      setTimeout(() => cookieBanner.classList.add('show'), 1200);
    }
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('tft_cookie_consent', 'accepted');
      cookieBanner.classList.remove('show');
    });
    cookieDecline.addEventListener('click', () => {
      localStorage.setItem('tft_cookie_consent', 'declined');
      cookieBanner.classList.remove('show');
    });
  }

});
