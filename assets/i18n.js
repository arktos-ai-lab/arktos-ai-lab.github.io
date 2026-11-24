(function(){
  'use strict';

  // English is the text in the HTML itself; only other languages need a dictionary.
  // Paper titles are never translated: they are cited as published.
  var DICT = {
    en: {},
    nl: {
      // meta / nav (shared)
      'meta.loc': 'Arktos AI Lab · Nederland · Opgericht 2025',
      'meta.kind': 'Curriculum Vitae',
      'meta.kind.corpora': 'Corpora-index',
      'meta.kind.home': 'Onafhankelijk onderzoek',
      'meta.kind.research': 'Werkdocument',
      'nav.research': 'Onderzoek',
      'nav.pubs': 'Publicaties',
      'nav.about': 'Over',
      'nav.cv': 'CV',
      'nav.corpora': 'Corpora',
      'nav.talitha': 'Talitha',
      'nav.contact': 'Contact',

      // CV
      'cv.num': '§ Curriculum Vitae',
      'cv.tagline': 'Onafhankelijk onderzoeker. Data-herkomst, NLP voor talen met weinig middelen, en het recht en de economie van AI.',
      'cv.print': 'Print / opslaan als PDF',
      'cv.back': 'Terug naar Arktos',
      'cv.profile': 'Profiel',
      'cv.profile.body': 'Onafhankelijk onderzoeker op het snijvlak van data-herkomst in machine learning, NLP voor talen met weinig middelen, en het recht en de economie van AI. Oprichter van Arktos AI Lab, een onafhankelijk onderzoekslab in Nederland dat met Claude, de AI van Anthropic, als onderzoekspartner werkt. Publiceert op congressen voor NLP, digital humanities en juridische informatica, en in internationale fiscale en economische tijdschriften.',
      'cv.research': 'Onderzoeksinteresses',
      'cv.pubs': 'Publicaties',
      'cv.talks': 'Lezingen',
      'cv.data': 'Data en code',
      'cv.collab': 'Samenwerking',
      'cv.collab.body': 'Co-auteurschap is welkom. Actief open voor medewerkers die werken aan data-herkomst, NLP voor talen met weinig middelen, of het recht en de economie van AI. Ook open voor reviewers en financiers die onderzoek in deze gebieden ondersteunen.',
      'cv.contact': 'Contact',
      'cv.languages': 'Talen',

      // tags
      'tag.provenance': 'Data-herkomst',
      'tag.licence': 'Licentiecompatibiliteit',
      'tag.lrlang': 'NLP · weinig middelen',
      'tag.african': 'Afrikaanse talen',
      'tag.legal': 'Juridische informatica',
      'tag.speech': 'Spraakarchieven',
      'tag.ethics': 'Onderzoeksethiek',
      'tag.tp': 'Verrekenprijzen',
      'tag.eu': 'EU-recht en -economie',
      'tag.macro': 'Macro-economie van open economieën',
      'tag.policy': 'AI-beleid',

      // CV publications
      'pill.workshop': 'Workshoppaper',
      'pill.conf': 'Congrespaper',
      'pill.journal': 'Tijdschriftartikel',
      'pub.forthcoming': 'Verschijnt',
      'pub.ruje.abs': 'Onderscheidt financiële schokken, die zich binnen functionerende markten voordoen, van beperkingsschokken, die de infrastructuur van het ruilverkeer zelf aantasten, en ordent de beleidsafwegingen in vier Russische crisisepisodes met het macro-economische trilemma.',
      'pub.lexsr.venue': 'JURIX 2026, Toulouse, geaccepteerd. Corpus: doi:10.5281/zenodo.23467651',
      'pub.rail.venue': 'Proceedings of RAIL 2026 bij LREC 2026, pp. 128-139.',
      'pub.rail.abs': 'Een empirische audit van Creative Commons-licentieherkomst over meer dan twintig corpusfamilies voor Afrikaanse NLP, met drie casustalen (Kituba/Munukutuba, Zarma en Moore). Documenteert vier faalpatronen op basis van primaire bronnen (JW300, WAXAL, Tanzil en het Congolese Radio Corpus) en stelt een due-diligencechecklist voor.',
      'pub.ibfd.venue': 'International Transfer Pricing Journal 32(6), IBFD. doi:10.59403/ka7jpq',
      'pub.ibfd.abs': 'Een methode in vijf fasen voor pan-Europese vergelijkbaarheidsanalyses: databasescreening, kwantitatieve filtering, handmatige beoordeling, vergelijkbaarheidsaanpassingen en interkwartielbereik, met marktclusters op basis van geografie, bbp, loonkosten en landenrisico.',
      'talk.dhasa': 'DHASA-colloquium Digital Humanities, online.',

      // kv
      'cv.work': 'Werkervaring',
      'work.d1': '2025 tot nu',
      'work.r1': 'Belastingadviseur, verrekenprijzen en internationaal belastingrecht',
      'work.p1': 'Leidt de uitrol van AI-hulpmiddelen binnen de praktijk.',
      'work.d2': 'okt 2023 tot dec 2024',
      'work.r2': 'Fiscaal medewerker, verrekenprijzen',
      'work.d3': 'sep 2021 tot sep 2023',
      'work.r3': 'Junior internationaal belastingadviseur',
      'work.d4': 'jan 2020 tot mrt 2021',
      'work.r4': 'Werkstudent en stagiair, verrekenprijzen en internationaal belastingrecht',
      'work.s4': 'Moore DRV (werkstudent) en Baker McKenzie (stagiair), Nederland',
      'kv.name': 'Naam',
      'kv.practice': 'Lab',
      'kv.based': 'Gevestigd',
      'kv.based.v': 'Nederland',
      'kv.pref': 'Voorkeur',
      'kv.pref.v': 'Bericht via LinkedIn, daarna e-mail',
      'kv.email': 'E-mail',

      'lang.nl': 'Nederlands',
      'lang.en': 'Engels',
      'lang.de': 'Duits',
      'lang.native': 'Moedertaal',
      'lang.fluent': 'Professionele werkbekwaamheid',
      'lang.working': 'Professionele werkvaardigheid',

      // HOME (index.html)
      'home.title': 'Arktos AI Lab · Onafhankelijk onderzoek naar data-herkomst, ethiek en economie',
      'home.eyebrow.practice': 'Een onafhankelijk onderzoekslab',
      'home.eyebrow.est': 'Opgericht 2025',
      'home.h1.a': 'Vragen over de',
      'home.h1.b': 'data',
      'home.h1.c': 'waarmee',
      'home.h1.d': 'modellen',
      'home.h1.e': ' worden getraind',
      'home.hero.lede': 'Arktos AI Lab is een onafhankelijk onderzoekslab in Nederland, gerund door één onderzoeker die met Claude, de AI van Anthropic, als onderzoekspartner werkt. Het werk ligt op het snijvlak van data-herkomst in machine learning, talen en rechtsstelsels met weinig middelen, en recht en economie.',
      'home.callout.a': 'Data-herkomst',
      'home.callout.b': 'NLP · weinig middelen',
      'home.callout.c': 'Recht & Economie',

      'home.s1.num': '§ 01 · Uitgangspunt',
      'home.s1.h2.a': 'Eén onderzoeker,',
      'home.s1.h2.em': 'werkend met Claude',
      'home.s1.lead': 'Arktos AI Lab is in 2025 opgericht door Ernst van Gassen en wordt door hem gerund. Waar het past, werkt het lab met Claude, de AI van Anthropic, als onderzoekspartner; de auteur controleert elk resultaat en staat ervoor in. Het werk richt zich op twee samenhangende vragen. Hoe de data achter machine learning-systemen wordt verzameld en gelicenseerd. En hoe verantwoorde praktijk er in dat domein uitziet.',
      'home.s1.pull': 'De makkelijkste manier om een model te verbeteren is op dit moment: meer data erin stoppen. De eerlijkste manier is veel moeilijker.',

      'home.s2.num': '§ 02 · Onderzoeksgebieden',
      'home.s2.h2.a': 'Vier',
      'home.s2.h2.em': 'onderzoekslijnen',
      'home.card1.tag': '01 / NLP & Data-ethiek',
      'home.card1.status': 'ACTIEF',
      'home.card1.h3.a': 'Data-herkomst &',
      'home.card1.h3.em': 'licentiecompatibiliteit',
      'home.card1.h3.b': 'in NLP voor talen met weinig middelen.',
      'home.card1.body': 'Wie heeft de rechten op de tekst die een corpus verspreidt, en zegt de licentie dat ook? Audits van corpora voor Afrikaanse talen, een gepubliceerde due-diligenceprocedure, en corpora die elk record herleiden tot de uitgever.',
      'home.card1.more': 'Lees het RAIL-paper',
      'home.card2.tag': '02 / Juridische informatica',
      'home.card2.status': 'GEACCEPTEERD',
      'home.card2.h3.a': 'Een juridische',
      'home.card2.h3.em': 'kennisgraaf',
      'home.card2.h3.b': 'voor een rechtsstelsel met weinig middelen.',
      'home.card2.body': 'LexSR consolideert de wetgeving van Suriname en koppelt die aan rechtspraak. Geaccepteerd op JURIX 2026; het corpus van wetgeving en uitspraken uit overheidsbronnen staat open op Zenodo.',
      'home.card3.tag': '03 / Spraak & Archieven',
      'home.card3.status': 'GEPUBLICEERD',
      'home.card3.h3.a': 'Publiek domein',
      'home.card3.h3.em': 'omroeparchieven',
      'home.card3.h3.b': 'als spraakdata.',
      'home.card3.body': 'Het auditen en verpakken van Afrikaanse spraakbronnen uit overheidsarchieven, en automatische transcriptie van Afrikaanstalige audio van Voice of America. Twee papers gepubliceerd in de DHASA 2026 selected papers.',
      'home.card3.more': 'Bekijk de publicaties',
      'home.card4.tag': '04 / Recht & Economie',
      'home.card4.status': 'GEPUBLICEERD',
      'home.card4.h3.a': 'Vergelijkingspunten, crises en',
      'home.card4.h3.em': 'het trilemma',
      'home.card4.body': 'Een pan-Europese clustermethode voor vergelijkingspunten in verrekenprijzen, in het International Transfer Pricing Journal van IBFD. En de Russische crisisrespons gelezen door het macro-economische trilemma, in het Russian Journal of Economics, met Busola Ijaware.',
      'home.card4.more': 'Bekijk de publicaties',

      'home.s3.num': '§ 03 · Publicaties',
      'home.s3.h2.a': 'Alles',
      'home.s3.h2.em': 'tot nu toe',
      'home.p.forthcoming': 'Verschijnt',
      'home.p.ruje': 'Russian Journal of Economics 12(3), 358-389. Onderscheidt financiële schokken, die zich binnen functionerende markten voordoen, van beperkingsschokken, die de infrastructuur van het ruilverkeer zelf aantasten, over vier crisisepisodes.',
      'home.p.lexsr': 'Geaccepteerd op JURIX 2026 (Toulouse, 9-10 december). Het bijbehorende corpus (751 wetgevingswerken, 300 rechterlijke uitspraken) staat op Zenodo.',
      'home.p.container': 'Journal of the Digital Humanities Association of Southern Africa 7(2), 167-179. DHASA 2026 Selected Papers. doi:10.55492/dhasa.v7i02.7706',
      'home.p.speech': 'Journal of the Digital Humanities Association of Southern Africa 7(2), 132-141. DHASA 2026 Selected Papers. doi:10.55492/dhasa.v7i02.7704',
      'home.p.voa': 'Journal of the Digital Humanities Association of Southern Africa 7(2), 142-150. DHASA 2026 Selected Papers. doi:10.55492/dhasa.v7i02.7705',
      'home.p.rail': 'Proceedings of RAIL 2026 bij LREC 2026, pp. 128-139. Een audit van licentieherkomst over meer dan twintig corpusfamilies, met drie casustalen (Kituba/Munukutuba, Zarma en Moore) en vier gedocumenteerde faalpatronen.',
      'home.p.itpj': 'International Transfer Pricing Journal 32(6), IBFD. Een methode in vijf fasen voor pan-Europese vergelijkbaarheidsanalyses, met marktclusters op basis van geografie, bbp, loonkosten en landenrisico.',
      'home.pubs.foot': 'Alleen gepubliceerd en geaccepteerd werk. Papers in review staan hier niet.',
      'home.talks.label': 'Lezingen',
      'home.talk.dhasa': 'DHASA-colloquium Digital Humanities, online.',
      'home.data.label': 'Data en code',
      'home.d.lexsr': 'Wetgeving en rechterlijke uitspraken van Suriname uit overheidsbronnen, met de code die ze opbouwt.',
      'home.d.ruje': 'Dataconstructie en figuren voor het paper in het Russian Journal of Economics, uit officiële bronnen van CBR, Rosstat en MinFin.',
      'home.d.lexsrcode': 'Code die het LexSR-corpus en de kennisgraaf opbouwt uit de brondocumenten.',
      'home.d.afribase': 'Code die publiekdomein-lesaudio van de Amerikaanse overheid omzet in trainingsdata voor Whisper-small, voor Afrikaanse talen.',
      'home.d.index': 'Licentietiers voor de corpusfamilies die in Open but Unvetted zijn beoordeeld.',
      'home.data.all': 'Alle repositories op GitHub →',

      'home.s4.num': '§ 04 · Over de onderzoeker',
      'home.founder.role': 'Onafhankelijk onderzoeker bij Arktos AI Lab',
      'home.founder.based': 'Gevestigd',
      'home.founder.based.v': 'Nederland',
      'home.founder.fields': 'Vakgebieden',
      'home.founder.fields.v': 'NLP · Recht · Economie',
      'home.bio.h3.a': 'Een',
      'home.bio.h3.em': 'onafhankelijk',
      'home.bio.h3.b': 'onderzoeker die over twee vakgebieden heen werkt.',
      'home.bio.p1': 'Arktos AI Lab is het onderzoeksvehikel dat ik in 2025 oprichtte. Het brengt mijn werk in internationaal belastingrecht en economie in gesprek met mijn interesse in hoe machine learning-systemen worden gebouwd. Concreet: de data waarmee ze getraind worden en de juridische kaders die dat beheersen.',
      'home.bio.p2': 'Mijn NLP-werk begon met een audit van Creative Commons-licenties over Afrikaanse taalcorpora, gepubliceerd op RAIL 2026 (LREC). Sindsdien is het uitgegroeid tot het bouwen van corpora en juridische bronnen: een juridische kennisgraaf voor Suriname, geaccepteerd op JURIX 2026, en drie papers op DHASA 2026 over spraakarchieven en het vermelden van rechten. Aan de economische kant schreef ik over vergelijkingspunten in verrekenprijzen in het International Transfer Pricing Journal van IBFD en, met Busola Ijaware, over de Russische crisisrespons in het Russian Journal of Economics.',
      'home.bio.p3': 'Het lab is één onderzoeker die waar het past met Claude als onderzoekspartner werkt. Claude helpt bij code, analyse en conceptteksten. Ik kies de vragen, controleer elk resultaat en sta in voor elke bewering.',
      'home.bio.p4': 'Co-auteurs zijn welkom. Als je werkt aan data-herkomst, NLP voor talen met weinig middelen, of het recht en de economie van AI, en op zoek bent naar een medewerker op een paper: dan hoor ik graag van je. Hetzelfde geldt voor reviewers en financiers.',

      'home.s5.num': '§ 05 · Neem contact op',
      'home.contact.h2.a': 'Voor vragen,',
      'home.contact.h2.em': 'samenwerkingen of financieringsgesprekken',
      'home.contact.lede1': 'LinkedIn is de beste plek om mij te bereiken. E-mail kan ook, via info@arktosailab.com. Ik beantwoord elk serieus bericht, meestal binnen een week.',
      'home.contact.lede2': 'Twee soorten gesprek hebben mijn bijzondere interesse. Ten eerste: co-auteurs. Werk je aan data-herkomst, NLP voor talen met weinig middelen, of het recht en de economie van AI, en zoek je een medewerker op een paper? Dan hoor ik graag van je. Ten tweede: financiers die onderzoek in diezelfde gebieden ondersteunen.',
      'home.contact.pref': 'Voorkeur',
      'home.contact.pref.v': 'Stuur een bericht via LinkedIn',
      'home.contact.email': 'E-mail',
      'home.contact.based': 'Gevestigd',
      'home.contact.based.v': 'Nederland',
      'home.contact.open': 'Open voor',
      'home.contact.open.v': 'Samenwerking · Financiering · Peer review',

      // footer
      'foot.tagline': 'Een onafhankelijk onderzoekslab in Nederland, met werk aan data-herkomst, NLP voor talen met weinig middelen, en recht en economie.',
      'foot.research': 'Onderzoek',
      'foot.pubs': 'Publicaties',
      'foot.allpubs': 'Alle publicaties',
      'foot.data': 'Data en code',
      'foot.lab': 'Over',
      'foot.contact': 'Contact',
      'foot.contactpage': 'Contactpagina',
      'foot.loc': 'Nederland'
    }
  };

  function apply(lang){
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    var d = DICT[lang] || {};
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var k = el.getAttribute('data-i18n');
      var v = d[k];
      if(v === undefined && lang !== 'en'){
        // leave original (english) text
        return;
      }
      if(v !== undefined){
        el.textContent = v;
      }else{
        // restore from cached original
        var orig = el.getAttribute('data-i18n-orig');
        if(orig !== null) el.textContent = orig;
      }
    });
    // title
    if(document.body.getAttribute('data-page') === 'home'){
      if(!document.documentElement.hasAttribute('data-title-orig')){
        document.documentElement.setAttribute('data-title-orig', document.title);
      }
      document.title = (lang === 'nl' && d['home.title']) ? d['home.title'] : document.documentElement.getAttribute('data-title-orig');
    }
    document.querySelectorAll('[data-lang-btn]').forEach(function(b){
      b.classList.toggle('on', b.getAttribute('data-lang-btn') === lang);
    });
    try{ localStorage.setItem('arktos.lang', lang); }catch(e){}
  }

  function init(){
    // cache original english text so EN toggle restores
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      el.setAttribute('data-i18n-orig', el.textContent);
    });
    var saved = 'en';
    try{ saved = localStorage.getItem('arktos.lang') || 'en'; }catch(e){}
    apply(saved);
    document.querySelectorAll('[data-lang-btn]').forEach(function(b){
      b.addEventListener('click', function(){
        apply(b.getAttribute('data-lang-btn'));
      });
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  }else{
    init();
  }
})();
