(function(){
function __R(p){ return String(p).replace(/^app\/photos\//,'media/photos/').replace(/^app\//,''); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Bluecrux Brand Library — converted from brand-hub (React + Vite). Source: src-orig/ */
const {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
  Fragment
} = React;
function __Icon(paths) {
  return function Icon({
    size = 24,
    strokeWidth = 2,
    className = '',
    color = 'currentColor',
    ...rest
  }) {
    return React.createElement('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('lucide ' + className).trim(),
      'aria-hidden': 'true',
      ...rest
    }, ...paths.map((p, i) => React.createElement(p[0], {
      key: i,
      ...p[1]
    })));
  };
}
const ArrowRight = __Icon([['path', {
  d: 'M5 12h14'
}], ['path', {
  d: 'm12 5 7 7-7 7'
}]]);
const ArrowUpRight = __Icon([['path', {
  d: 'M7 7h10v10'
}], ['path', {
  d: 'M7 17 17 7'
}]]);
const Check = __Icon([['path', {
  d: 'M20 6 9 17l-5-5'
}]]);
const ChevronDown = __Icon([['path', {
  d: 'm6 9 6 6 6-6'
}]]);
const Copy = __Icon([['rect', {
  width: 14,
  height: 14,
  x: 8,
  y: 8,
  rx: 2,
  ry: 2
}], ['path', {
  d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'
}]]);
const Download = __Icon([['path', {
  d: 'M12 15V3'
}], ['path', {
  d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'
}], ['path', {
  d: 'm7 10 5 5 5-5'
}]]);
const Play = __Icon([['path', {
  d: 'M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z'
}]]);
const Search = __Icon([['circle', {
  cx: 11,
  cy: 11,
  r: 8
}], ['path', {
  d: 'm21 21-4.34-4.34'
}]]);
function HeroVideo({
  poster
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) ref.current.play().catch(() => {});
  }, []);
  return /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: 'media/video/homepage-video.mp4',
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    poster: poster
  });
}
const X = __Icon([['path', {
  d: 'M18 6 6 18'
}], ['path', {
  d: 'm6 6 12 12'
}]]);
const __data = (() => {
  /** Monday WorkForms — Brand & Design request intake (wkf.ms short link). */
  const DEFAULT_MONDAY_REQUEST_FORM_URL = 'https://wkf.ms/4e6YxBW';

  /** Override with `VITE_MONDAY_REQUEST_FORM_URL` when the WorkForms link changes. */
  const MONDAY_REQUEST_FORM_URL = String(undefined ?? '').trim() || DEFAULT_MONDAY_REQUEST_FORM_URL;

  /** Live external links — SharePoint (tenant login) + YouTube. */
  const SHAREPOINT_PPT_MASTER = 'https://upcbe1046076.sharepoint.com/:p:/s/BC_40Marketing/IQB5oU8LuyBjSJp2wxTbtkm9ARPCzNjweRA5OcqYjJw3_qs?e=0rs64k';
  const YOUTUBE_BRAND_FILM_ID = 'l5Ij7nUy9UQ';
  function youtubeEmbedSrc(id, opts) {
    const autoplay = opts?.autoplay ? '1' : '0';
    const mute = opts?.mute === false ? '0' : '1';
    const controls = opts?.controls === false ? '0' : '1';
    const loop = opts?.loop ? `1&playlist=${id}` : '0';
    return `https://www.youtube.com/embed/${id}?autoplay=${autoplay}&mute=${mute}&controls=${controls}&loop=${loop}&playsinline=1&rel=0`;
  }
  function youtubeThumb(id) {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }

  /** Resolve a download button label / library title to an external URL. */
  const downloadLinks = {
    'PowerPoint master v4': SHAREPOINT_PPT_MASTER,
    'PowerPoint master v4.pptx': SHAREPOINT_PPT_MASTER
  };

  /** Design SharePoint site — collections open here until folder-level URLs are provided. */
  const SHAREPOINT_DESIGN_SITE = 'https://upcbe1046076.sharepoint.com/sites/BC_40Marketing';
  const imageryCollections = [{
    id: 'photo-all',
    title: 'Photography — all',
    description: 'Approved stills for decks and internal use. Browse and download in Design SharePoint.',
    meta: 'SharePoint · Design',
    sharePointUrl: SHAREPOINT_DESIGN_SITE,
    accent: '#000021'
  }, {
    id: 'photo-events',
    title: 'Events & people',
    description: 'Gatherings, workshops, faces. Confirm rights before external publish.',
    meta: 'SharePoint · Design',
    sharePointUrl: SHAREPOINT_DESIGN_SITE,
    accent: '#717BEE'
  }, {
    id: 'photo-ops',
    title: 'Operations & workplace',
    description: 'Floors, labs, planning rooms — warm, documentary, less tech-aggressive.',
    meta: 'SharePoint · Design',
    sharePointUrl: SHAREPOINT_DESIGN_SITE,
    accent: '#D6EDA6'
  }, {
    id: 'motion',
    title: 'Motion & brand film',
    description: 'Approved motion lives with Design. Brand film also on YouTube when you need a quick share.',
    meta: 'SharePoint · YouTube',
    sharePointUrl: SHAREPOINT_DESIGN_SITE,
    youtubeUrl: `https://www.youtube.com/watch?v=${YOUTUBE_BRAND_FILM_ID}`,
    accent: '#FAF7F5'
  }];
  const photos = [__R('app/photos/photo-01.jpg'), __R('app/photos/photo-02.jpg'), __R('app/photos/photo-03.jpg'), __R('app/photos/photo-04.jpg'), __R('app/photos/photo-05.jpg')];
  const videos = [{
    title: 'Brand film',
    filename: 'Brand-film.mp4',
    youtubeId: YOUTUBE_BRAND_FILM_ID,
    src: youtubeEmbedSrc(YOUTUBE_BRAND_FILM_ID),
    meta: 'YouTube · Brand film',
    subject: 'Brand'
  }, {
    title: 'Technology background',
    filename: 'Technology-Background.mp4',
    youtubeId: YOUTUBE_BRAND_FILM_ID,
    src: youtubeEmbedSrc(YOUTUBE_BRAND_FILM_ID),
    meta: 'YouTube · LOOP',
    subject: 'Technology'
  }, {
    title: 'Digital and AI background',
    filename: 'DigitalAI-background.mp4',
    youtubeId: YOUTUBE_BRAND_FILM_ID,
    src: youtubeEmbedSrc(YOUTUBE_BRAND_FILM_ID),
    meta: 'YouTube · LOOP',
    subject: 'Digital & AI'
  }, {
    title: 'Capabilities background',
    filename: 'Capabilities-background.mp4',
    youtubeId: YOUTUBE_BRAND_FILM_ID,
    src: youtubeEmbedSrc(YOUTUBE_BRAND_FILM_ID),
    meta: 'YouTube · LOOP',
    subject: 'Capabilities'
  }];
  const libraryItems = [{
    id: 'powerpoint-v4',
    section: 'templates',
    templateKind: 'powerpoint',
    title: 'PowerPoint master v4',
    description: 'Cover, framework, statement. Grid and type set.',
    meta: 'PPTX · SharePoint · JUL 2026',
    action: 'Download',
    visual: 'slide',
    downloadUrl: SHAREPOINT_PPT_MASTER
  }, {
    id: 'proposal-template',
    section: 'templates',
    templateKind: 'powerpoint',
    title: 'Proposal deck',
    description: 'Brief, approach, team, price — in that order.',
    meta: 'PPTX · 28 MB · JUN 2026',
    action: 'Download',
    visual: 'slide'
  }, {
    id: 'document-template',
    section: 'templates',
    templateKind: 'word',
    title: 'Business document',
    description: 'Word styles for reports, notes and summaries.',
    meta: 'DOCX · 8 MB · MAY 2026',
    action: 'Download',
    visual: 'doc'
  }, {
    id: 'onepager-company',
    section: 'resources',
    title: 'Company one-pager',
    description: 'Who we are, what we do, why it matters — one page.',
    meta: 'PDF · 1.2 MB · JUL 2026',
    action: 'Download',
    visual: 'doc',
    previewSources: [__R('app/brand/diagram-workload.png'), __R('app/brand/diagram-gains.png'), __R('app/docs/word-whitepaper.png')]
  }, {
    id: 'onepager-value-chain',
    section: 'resources',
    title: 'Value chain one-pager',
    description: 'The operating system for the value chain, at a glance.',
    meta: 'PDF · 980 KB · JUL 2026',
    action: 'Download',
    visual: 'doc',
    previewSources: [__R('app/brand/diagram-gains.png'), __R('app/brand/diagram-workload.png'), __R('app/docs/brochure-ops.png')]
  }, {
    id: 'brochure-solutions',
    section: 'resources',
    title: 'Solutions brochure',
    description: 'Capability overview for sales and partner conversations.',
    meta: 'PDF · 4.8 MB · JUN 2026',
    action: 'Download',
    visual: 'doc',
    previewSources: [__R('app/brand/diagram-workload.png'), __R('app/brand/diagram-gains.png'), __R('app/docs/whitepaper-lean-lab.png')]
  }, {
    id: 'brochure-capabilities',
    section: 'resources',
    title: 'Capabilities brochure',
    description: 'How Bluecrux works with teams on the floor and in the plan.',
    meta: 'PDF · 6.1 MB · MAY 2026',
    action: 'Download',
    visual: 'doc',
    previewSources: [__R('app/brand/diagram-workload.png'), __R('app/brand/diagram-gains.png'), __R('app/docs/brochure-ops.png')]
  }, {
    id: 'leavebehind-event',
    section: 'resources',
    title: 'Event leave-behind',
    description: 'Short handout for booths and client sessions.',
    meta: 'PDF · 1.6 MB · JUN 2026',
    action: 'Download',
    visual: 'doc',
    previewSources: [__R('app/brand/diagram-workload.png'), __R('app/brand/diagram-gains.png'), __R('app/docs/word-whitepaper.png')]
  }, {
    id: 'whitepaper-ops',
    section: 'resources',
    title: 'Operations whitepaper',
    description: 'Longer read on planning, execution and control.',
    meta: 'PDF · 3.4 MB · APR 2026',
    action: 'Download',
    visual: 'doc',
    previewSources: [__R('app/brand/diagram-gains.png'), __R('app/brand/diagram-workload.png'), __R('app/docs/brochure-ops.png')]
  }, {
    id: 'visual-system',
    section: 'brand',
    title: 'Visual identity',
    description: 'Logo, colour, type, icons. Graphic charter v4.',
    meta: 'PDF · GRAPHIC CHARTER · V4',
    action: 'Open guide',
    visual: 'monogram'
  }, {
    id: 'tone-guide',
    section: 'brand',
    title: 'Tone of voice',
    description: 'How Bluecrux writes. Principles, sequence, yes/no examples.',
    meta: 'PDF · VERBAL CHARTER · V1',
    action: 'Open guide',
    visual: 'words'
  }, {
    id: 'logo-pack',
    section: 'brand',
    title: 'Logo pack',
    description: 'Logotype, monogram, lock-up. Binocs, Axon, Helion.',
    meta: 'SVG · PNG · EPS · 24 FILES',
    action: 'Browse',
    visual: 'wordmark'
  }, {
    id: 'photo-library',
    section: 'media',
    title: 'Photography',
    description: 'Approved stills in Design SharePoint. Confirm usage rights before publishing.',
    meta: 'SHAREPOINT · DESIGN',
    action: 'Browse',
    downloadUrl: SHAREPOINT_DESIGN_SITE
  }, {
    id: 'video-library',
    section: 'media',
    title: 'Motion & brand film',
    description: 'Motion assets in Design SharePoint. Brand film also on YouTube.',
    meta: 'SHAREPOINT · YOUTUBE',
    action: 'Browse',
    downloadUrl: SHAREPOINT_DESIGN_SITE
  }];
  const sectionLabels = {
    templates: 'Templates',
    resources: 'Collateral',
    brand: 'Brand guidelines',
    media: 'Imagery'
  };
  const templateKindLabels = {
    powerpoint: 'PowerPoint',
    word: 'Word'
  };
  const primaryPalette = [{
    name: 'Blue-black',
    hex: '#000021',
    note: 'Text, structure, key marks.'
  }, {
    name: 'White',
    hex: '#FFFFFF',
    note: 'Containers, reversed marks.'
  }, {
    name: 'Off-white',
    hex: '#FAF7F5',
    note: 'Page background.'
  }];
  const secondaryPalette = [{
    name: 'Pistachio',
    hex: '#D6EDA6'
  }, {
    name: 'Petrol blue',
    hex: '#125E8C'
  }, {
    name: 'Salvia blue',
    hex: '#717BEE'
  }, {
    name: 'Purple',
    hex: '#610A4F'
  }, {
    name: 'Sapin green',
    hex: '#0A4F52'
  }, {
    name: 'Baby pink',
    hex: '#FAC4C7'
  }, {
    name: 'Green lemon',
    hex: '#D6FF7D'
  }, {
    name: 'Yellow lemon',
    hex: '#FAFF00'
  }, {
    name: 'Orange',
    hex: '#FF7833'
  }];
  const colourRules = [{
    index: '01',
    title: 'Blue-black, not black',
    rule: 'Primary text and structure always use blue-black (#000021).',
    why: 'Warmer and brand-distinct from pure black. Holds on screen and in print without crushing detail — decks, UI and documents stay recognisable as Bluecrux.'
  }, {
    index: '02',
    title: 'Off-white carries the page',
    rule: 'Page backgrounds use off-white. Space does the hierarchy.',
    why: 'Soft contrast eases long reading in decks and PDFs. Pure white glare fatigues; off-white keeps type clear without competing with the content.'
  }, {
    index: '03',
    title: 'Colour has a job',
    rule: 'Secondary colours explain plans and diagrams. They do not decorate.',
    why: 'In schematics and charts, colour encodes meaning. Using it as fill or ornament dilutes that signal across slides and print.'
  }];
  const pptVideo = youtubeEmbedSrc(YOUTUBE_BRAND_FILM_ID, {
    autoplay: false,
    mute: false,
    controls: true
  });
  const tutorials = [{
    id: 'deck-overview',
    index: '01',
    title: 'Deck overview',
    subtitle: 'How the master works',
    description: 'General overview of the PowerPoint master — cover, framework, and statement layouts.',
    duration: '~4 min',
    typeLabel: 'Walkthrough',
    videoSrc: pptVideo,
    primary: true,
    takeaways: ['Open a new file from the master — never copy last week’s deck.', 'One point per slide. Title carries the claim.', 'Use New Slide layouts. Hand-drawn text boxes break the grid.'],
    practices: [{
      index: '01',
      title: 'Start from the master',
      copy: 'Copied slides bring old fonts and colours.'
    }, {
      index: '02',
      title: 'One point per slide',
      copy: 'Body only carries evidence.'
    }, {
      index: '03',
      title: 'Layouts hold the grid',
      copy: 'Add slides with New Slide, not free boxes.'
    }, {
      index: '04',
      title: 'Give the eye a rest',
      copy: 'Alternate dense slides with one full-frame idea.'
    }]
  }, {
    id: 'proposal-narrative',
    index: '02',
    title: 'Proposal narrative',
    subtitle: 'Client proposal flow',
    description: 'Placeholder — how to assemble a client proposal from the master layouts. Video still in production.',
    duration: 'Soon',
    typeLabel: 'Placeholder',
    videoSrc: null,
    takeaways: ['Start from the proposal layout set, not a blank slide.', 'Keep the claim on the title; proof stays in the body.', 'Match section rhythm to the client story, not the old deck order.'],
    practices: [{
      index: '01',
      title: 'Pick the right layouts',
      copy: 'Cover, agenda, proof, close — stay inside the set.'
    }, {
      index: '02',
      title: 'One claim per beat',
      copy: 'Each slide advances one argument.'
    }, {
      index: '03',
      title: 'Reuse, don’t rebuild',
      copy: 'Duplicate layouts; don’t redraw boxes.'
    }, {
      index: '04',
      title: 'Close clean',
      copy: 'End on next step, not a wall of logos.'
    }]
  }, {
    id: 'charts-data',
    index: '03',
    title: 'Charts & data slides',
    subtitle: 'Data storytelling',
    description: 'Placeholder — using chart and diagram layouts without breaking the grid. Video still in production.',
    duration: 'Soon',
    typeLabel: 'Placeholder',
    videoSrc: null,
    takeaways: ['Prefer built-in chart layouts over pasted screenshots.', 'One visual idea per slide — annotate, don’t decorate.', 'Keep secondary colour for meaning, not fill.'],
    practices: [{
      index: '01',
      title: 'Use the chart layouts',
      copy: 'They already hold type and spacing.'
    }, {
      index: '02',
      title: 'Label what matters',
      copy: 'Highlight the insight, not every data point.'
    }, {
      index: '03',
      title: 'Colour explains',
      copy: 'Secondary colours mark plans and series — not accents.'
    }, {
      index: '04',
      title: 'Crop with intent',
      copy: 'If a chart needs a legend wall, simplify first.'
    }]
  }, {
    id: 'ai-for-brand',
    index: '04',
    title: 'How to use AI for Brand',
    subtitle: 'AI with brand guardrails',
    description: 'Practical guidance for drafting with ChatGPT while staying on Bluecrux voice, assets, and approvals. Pair with the AI library for the copy engine.',
    duration: '~5 min',
    typeLabel: 'Guide',
    videoSrc: null,
    takeaways: ['Feed the brief: audience, channel, one claim, and a short fact list — never invent floors, labs, or results.', 'Ask AI to draft options; you choose the line that sounds like a colleague on the floor.', 'Lock logo, colour, type, and final client language with the brand team — AI does not approve brand.'],
    practices: [{
      index: '01',
      title: 'Brief before you prompt',
      copy: 'State channel, audience, one claim, and verified facts. Paste Tone of voice rules when the draft must sound Bluecrux.'
    }, {
      index: '02',
      title: 'Use ChatGPT for drafts',
      copy: 'Outlines, variants, shortening, and plain-language rewrites. Keep Focused · Approachable · Simple — cut adjective stacks and AI filler.'
    }, {
      index: '03',
      title: 'Escalate to brand',
      copy: 'New campaigns, client-facing decks, logo misuse questions, imagery rights, and anything that sets a lasting pattern.'
    }, {
      index: '04',
      title: 'Do / don’t',
      copy: 'Do fact-check and read aloud. Don’t paste confidential client data, invent case results, or ship AI visuals as brand assets.'
    }]
  }];
  return {
    DEFAULT_MONDAY_REQUEST_FORM_URL,
    MONDAY_REQUEST_FORM_URL,
    SHAREPOINT_PPT_MASTER,
    YOUTUBE_BRAND_FILM_ID,
    youtubeEmbedSrc,
    youtubeThumb,
    downloadLinks,
    SHAREPOINT_DESIGN_SITE,
    imageryCollections,
    photos,
    videos,
    libraryItems,
    sectionLabels,
    templateKindLabels,
    primaryPalette,
    secondaryPalette,
    colourRules,
    tutorials
  };
})();
const __exercises = (() => {
  function useSlideDrag(onDrop) {
    const drag = useRef(null);
    const [live, setLive] = useState(null);
    const start = (event, x, y) => {
      const slide = event.currentTarget.closest('.slide');
      if (!slide) return;
      event.stopPropagation();
      drag.current = {
        x,
        y,
        px: event.clientX,
        py: event.clientY,
        slide
      };
      const move = ev => {
        const current = drag.current;
        if (!current) return;
        const rect = current.slide.getBoundingClientRect();
        setLive({
          x: current.x + (ev.clientX - current.px) / rect.width * 100,
          y: current.y + (ev.clientY - current.py) / rect.height * 100
        });
      };
      const up = ev => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        const current = drag.current;
        drag.current = null;
        setLive(null);
        if (!current) return;
        const rect = current.slide.getBoundingClientRect();
        const moved = Math.hypot(ev.clientX - current.px, ev.clientY - current.py) > 3;
        if (!moved) return;
        onDrop(current.x + (ev.clientX - current.px) / rect.width * 100, current.y + (ev.clientY - current.py) / rect.height * 100);
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
    };
    return {
      live,
      start
    };
  }
  function OneMessage({
    onSolved,
    setNote
  }) {
    const [kept, setKept] = useState(null);
    const lines = [{
      id: 'slip',
      text: 'The pilot slips two weeks because data access is still blocked'
    }, {
      id: 'logo',
      text: 'The new logo is ready for review'
    }, {
      id: 'kpi',
      text: 'Finance wants a different KPI'
    }];
    const choose = id => {
      setKept(id);
      if (id === 'slip') {
        onSolved(true);
        setNote('One slide, one message. The logo and the KPI are other meetings.');
        return;
      }
      onSolved(false);
      setNote('The room will leave with that. The slip was the decision.');
    };
    const shown = kept ? lines.filter(line => line.id === kept) : lines;
    return /*#__PURE__*/React.createElement("div", {
      className: `slide${kept === 'slip' ? ' is-quiet' : ''}`
    }, shown.map(line => /*#__PURE__*/React.createElement("button", {
      key: line.id,
      type: "button",
      className: `line${kept === line.id ? ' is-title' : ''}`,
      onClick: () => choose(line.id)
    }, line.text)));
  }
  function AnswerFirst({
    onSolved,
    setNote
  }) {
    const [pos, setPos] = useState({
      x: 8,
      y: 68
    });
    const {
      live,
      start
    } = useSlideDrag((x, y) => {
      const next = {
        x: Math.min(24, Math.max(6, x)),
        y: Math.min(78, Math.max(8, y))
      };
      if (next.y < 26) {
        setPos({
          x: 8,
          y: 12
        });
        onSolved(true);
        setNote('Answer first. The reasons stay underneath to hold it up.');
        return;
      }
      setPos(next);
      onSolved(false);
      setNote(null);
    });
    const at = live ?? pos;
    const home = pos.y < 20;
    return /*#__PURE__*/React.createElement("div", {
      className: "slide"
    }, /*#__PURE__*/React.createElement("p", {
      className: "ghost"
    }, home ? '' : 'The answer goes here'), /*#__PURE__*/React.createElement("ul", {
      className: "reasons"
    }, /*#__PURE__*/React.createElement("li", null, "Can play different positions"), /*#__PURE__*/React.createElement("li", null, "Scores a lot of points"), /*#__PURE__*/React.createElement("li", null, "Team leader")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `answer${home ? ' is-title' : ''}`,
      style: {
        left: `${at.x}%`,
        top: `${at.y}%`
      },
      onPointerDown: event => start(event, pos.x, pos.y)
    }, "LeBron James is my favourite player"));
  }
  const parts = ['Frame the problem', 'Show the options', 'Recommend one'];
  const dates = [['March', 'Data access is still blocked'], ['April', 'The pilot slips'], ['May', 'Go-live moves']];
  function Built({
    kind,
    items
  }) {
    if (kind === 'list') {
      return /*#__PURE__*/React.createElement("ul", {
        className: "plain"
      }, items.map(item => /*#__PURE__*/React.createElement("li", {
        key: String(item)
      }, Array.isArray(item) ? `${item[0]} — ${item[1]}` : item)));
    }
    if (kind === 'lump') {
      return /*#__PURE__*/React.createElement("p", {
        className: "lump"
      }, items.map(item => Array.isArray(item) ? `${item[0]}: ${item[1]}` : item).join(' '));
    }
    if (kind === 'time') {
      return /*#__PURE__*/React.createElement("ol", {
        className: "time"
      }, items.map((item, index) => /*#__PURE__*/React.createElement("li", {
        key: String(item)
      }, /*#__PURE__*/React.createElement("span", null, Array.isArray(item) ? item[0] : `0${index + 1}`), Array.isArray(item) ? item[1] : item)));
    }
    return /*#__PURE__*/React.createElement("ol", {
      className: "three"
    }, items.map(item => /*#__PURE__*/React.createElement("li", {
      key: String(item)
    }, /*#__PURE__*/React.createElement("span", null, Array.isArray(item) ? item[0] : ''), Array.isArray(item) ? item[1] : item)));
  }
  function ShapeChoice({
    items,
    right,
    notes,
    onSolved,
    setNote
  }) {
    const [kind, setKind] = useState('list');
    const pick = next => {
      setKind(next);
      onSolved(next === right);
      setNote(notes[next]);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "shape-choice"
    }, /*#__PURE__*/React.createElement("div", {
      className: "slide"
    }, /*#__PURE__*/React.createElement(Built, {
      kind: kind,
      items: items
    })), /*#__PURE__*/React.createElement("div", {
      className: "layouts",
      role: "group",
      "aria-label": "Slide shape"
    }, [['lump', 'One paragraph'], ['three', 'Three blocks'], ['time', 'Timeline']].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      className: kind === id ? 'is-on' : '',
      onClick: () => pick(id)
    }, label))));
  }
  function ThreeParts(props) {
    return /*#__PURE__*/React.createElement(ShapeChoice, _extends({
      items: parts,
      right: "three",
      notes: {
        lump: 'Still one lump. The three parts are in the sentence, not on the slide.',
        time: 'A timeline is for time. Nothing here is a date.',
        three: 'Three parts, three blocks. The format is the content.'
      }
    }, props));
  }
  function Sequence(props) {
    return /*#__PURE__*/React.createElement(ShapeChoice, _extends({
      items: dates,
      right: "time",
      notes: {
        lump: 'The order disappears into a paragraph.',
        three: 'Three blocks make them peers. The sequence was the point.',
        time: 'Dates become a line. The format is the content.'
      }
    }, props));
  }
  function TitleStays({
    onSolved,
    setNote
  }) {
    const [y, setY] = useState(52);
    const {
      live,
      start
    } = useSlideDrag((_x, nextY) => {
      const placed = Math.min(70, Math.max(8, nextY));
      if (placed < 24) {
        setY(14);
        onSolved(true);
        setNote('The title stays put. If it moves, the next slide feels new before it is read.');
        return;
      }
      setY(placed);
      onSolved(false);
      setNote(null);
    });
    const top = live?.y ?? y;
    return /*#__PURE__*/React.createElement("div", {
      className: "pair"
    }, /*#__PURE__*/React.createElement("div", {
      className: "slide slide--mini"
    }, /*#__PURE__*/React.createElement("p", {
      className: "mini-kicker"
    }, "01"), /*#__PURE__*/React.createElement("p", {
      className: "mini-title"
    }, "The pilot slips two weeks"), /*#__PURE__*/React.createElement("p", {
      className: "mini-body"
    }, "Data access is still blocked.")), /*#__PURE__*/React.createElement("div", {
      className: "slide slide--mini"
    }, /*#__PURE__*/React.createElement("p", {
      className: "mini-kicker"
    }, "02"), /*#__PURE__*/React.createElement("i", {
      className: "title-line"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "mini-title is-movable",
      style: {
        top: `${top}%`
      },
      onPointerDown: event => start(event, 8, y)
    }, "The pilot slips two weeks"), /*#__PURE__*/React.createElement("p", {
      className: "mini-body"
    }, "Two planners are still missing.")));
  }
  function SameSet({
    onSolved,
    setNote
  }) {
    const [fixed, setFixed] = useState(false);
    const click = id => {
      if (id !== 'owner') {
        onSolved(false);
        setNote('That one already matches. The difference should be the thing that means something.');
        return;
      }
      setFixed(true);
      onSolved(true);
      setNote('Same means same. Owner was shouting, and nothing had asked it to.');
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "slide"
    }, /*#__PURE__*/React.createElement("div", {
      className: "set"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "card",
      onClick: () => click('access')
    }, "Access"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `card${fixed ? '' : ' is-odd'}`,
      onClick: () => click('owner')
    }, "Owner"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "card",
      onClick: () => click('date')
    }, "Date")));
  }
  function LookHere({
    onSolved,
    setNote
  }) {
    const [color, setColor] = useState(false);
    const [big, setBig] = useState(false);
    const [bold, setBold] = useState(false);
    const apply = next => {
      setColor(next.color);
      setBig(next.big);
      setBold(next.bold);
      if (next.color && !next.big && !next.bold) {
        onSolved(true);
        setNote('Colour says look here first. Size would say this matters most. Weight would say pay attention.');
        return;
      }
      onSolved(false);
      if (next.big && next.color) setNote('Colour found the number. Size is still claiming it matters most.');else if (next.big) setNote('Size says this matters most. The number is shouting.');else if (next.bold && next.color) setNote('Colour found the number. Weight is still saying pay attention.');else if (next.bold) setNote('Weight says pay attention. The eye still has no place to start.');else setNote(null);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "shape-choice"
    }, /*#__PURE__*/React.createElement("div", {
      className: "slide"
    }, /*#__PURE__*/React.createElement("p", {
      className: `figure${color ? ' is-accent' : ''}${big ? ' is-big' : ''}${bold ? ' is-bold' : ''}`
    }, "27"), /*#__PURE__*/React.createElement("p", {
      className: "caption"
    }, "points per game")), /*#__PURE__*/React.createElement("div", {
      className: "layouts",
      role: "group",
      "aria-label": "What the signal says"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: color ? 'is-on' : '',
      onClick: () => apply({
        color: !color,
        big,
        bold
      })
    }, "Colour \xB7 look here first"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: big ? 'is-on' : '',
      onClick: () => apply({
        color,
        big: !big,
        bold
      })
    }, "Size \xB7 this matters most"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: bold ? 'is-on' : '',
      onClick: () => apply({
        color,
        big,
        bold: !bold
      })
    }, "Weight \xB7 pay attention")));
  }
  const exercises = [{
    id: 'message',
    title: 'One message',
    ask: 'Three things are on the slide. Click the one the room should leave with.',
    Lesson: OneMessage
  }, {
    id: 'answer',
    title: 'Answer first',
    ask: 'The answer is sitting with the reasons. Drag it to where the eye starts.',
    Lesson: AnswerFirst
  }, {
    id: 'parts',
    title: 'Three parts',
    ask: 'One argument, three parts. Choose the shape that says that.',
    Lesson: ThreeParts
  }, {
    id: 'dates',
    title: 'A sequence',
    ask: 'Same three shapes. This time the content is a sequence. Choose again.',
    Lesson: Sequence
  }, {
    id: 'title',
    title: 'The title stays',
    ask: 'Slide 02 moved the title. Drag it back onto the line it held on 01.',
    Lesson: TitleStays
  }, {
    id: 'same',
    title: 'Same means same',
    ask: 'Click the block that stopped following the set.',
    Lesson: SameSet
  }, {
    id: 'look',
    title: 'Look here',
    ask: 'Make 27 the first place the eye goes. The other two signals say something else.',
    Lesson: LookHere
  }];
  return {
    OneMessage,
    AnswerFirst,
    ThreeParts,
    Sequence,
    TitleStays,
    SameSet,
    LookHere,
    exercises
  };
})();
const __training = (() => {
  const {
    exercises
  } = __exercises;
  const SAVE_KEY = 'bc-slide-training-v4';
  function readIndex() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return 0;
      const index = Number(JSON.parse(raw));
      if (!Number.isFinite(index)) return 0;
      return Math.min(Math.max(index, 0), exercises.length - 1);
    } catch {
      return 0;
    }
  }
  function Training() {
    const [index, setIndex] = useState(readIndex);
    const [ready, setReady] = useState(false);
    const [note, setNote] = useState(null);
    const [attempt, setAttempt] = useState(0);
    const exercise = exercises[index];
    const Lesson = exercise.Lesson;
    useEffect(() => {
      localStorage.setItem(SAVE_KEY, JSON.stringify(index));
    }, [index]);
    useEffect(() => {
      setReady(false);
      setNote(null);
    }, [index, attempt]);
    const go = next => {
      setNote(null);
      setReady(false);
      setIndex(Math.min(Math.max(next, 0), exercises.length - 1));
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "practice"
    }, /*#__PURE__*/React.createElement("header", {
      className: "practice-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "Slide practice \xB7 ", String(index + 1).padStart(2, '0'), " / ", String(exercises.length).padStart(2, '0')), /*#__PURE__*/React.createElement("h1", null, exercise.title)), /*#__PURE__*/React.createElement(Lesson, {
      key: `${exercise.id}-${attempt}`,
      onSolved: setReady,
      setNote: setNote
    }), /*#__PURE__*/React.createElement("footer", {
      className: "practice-foot"
    }, /*#__PURE__*/React.createElement("p", null, note ?? exercise.ask), /*#__PURE__*/React.createElement("div", {
      className: "practice-nav"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "text-button",
      onClick: () => go(index - 1),
      disabled: index === 0
    }, "Back"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "text-button",
      onClick: () => setAttempt(value => value + 1)
    }, "Reset"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "chip-button chip-button--ink",
      onClick: () => {
        if (index < exercises.length - 1) go(index + 1);
      },
      disabled: !ready
    }, index === exercises.length - 1 ? 'Done' : 'Next'))));
  }
  return {
    default: Training
  };
})();
const __app = (() => {
  const {
    colourRules,
    downloadLinks,
    imageryCollections,
    libraryItems,
    MONDAY_REQUEST_FORM_URL,
    photos,
    primaryPalette,
    secondaryPalette,
    sectionLabels,
    SHAREPOINT_PPT_MASTER,
    templateKindLabels,
    tutorials,
    YOUTUBE_BRAND_FILM_ID
  } = __data;
  const Training = __training.default;
  /** TODO: replace with the live custom GPT / copy engine URL */
  const COPY_ENGINE_URL = '#';
  const AI_BRAND_CONSTRAINTS = 'Bluecrux brand: blue-black ink #000021, paper #FAF7F5, salvia #717BEE and pistachio #D6EDA6 as accents only. Warm, human, less tech-aggressive. No purple neon glow, no cyberpunk HUD, no glassmorphism spam. English UI labels if any text appears.';
  const thin = {
    strokeWidth: 1.25
  };
  const EXTERNAL_MEDIA_REFERRER = 'strict-origin-when-cross-origin';

  /** Same-tab → Monday WorkForms (Brand & Design request intake). */
  function openRequestForm() {
    window.open(MONDAY_REQUEST_FORM_URL, '_blank', 'noopener,noreferrer');
  }
  function Logo({
    className = ''
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      "aria-label": "Bluecrux",
      className: `logo ${className}`,
      fill: "none",
      viewBox: "0 0 111 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.70088 9.996L5.16783 6.19067L4.13159 4.66533H6.47184L10.0411 9.996L8.95535 11.5933L6.45979 15.3347H4.1182L7.70088 9.996ZM11.1269 11.5933L10.0425 9.996L13.6118 4.66533H15.952L14.9158 6.19067L12.3827 9.996L15.9654 15.3347H13.6238L11.1282 11.5933H11.1269ZM0 20H20.0823V0H0V20Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41.269 2.65867H39.0613V17.3347H41.269V2.65867Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32.3967 15.3347H28.2142V10.6627H32.3967C34.0448 10.6627 35.069 11.5947 35.069 13.0387C35.069 14.4827 34.0448 15.3347 32.3967 15.3347ZM28.2142 4.66533H32.2883C33.8038 4.66533 34.745 5.48533 34.745 6.86267C34.745 8.24 33.8038 8.68133 32.2883 8.68133H28.2142V4.66533ZM36.5618 10.856C36.0958 10.2427 35.4318 9.872 34.5843 9.67333L34.5575 9.668L34.583 9.65733C36.0878 9.048 36.9514 7.91467 36.9514 6.61733C36.9514 5.42933 36.5109 4.464 35.6755 3.732C34.8896 3.044 33.8011 2.65867 32.6122 2.65867H26.0079V17.3347H32.8278C34.0193 17.3347 35.1265 16.9387 35.9446 16.2213C36.8014 15.4693 37.274 14.4053 37.274 13.2253C37.274 12.2907 37.0277 11.4707 36.5618 10.856Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M108.646 6.664L105.077 11.996L106.162 13.5933L108.658 17.3347H111L107.417 11.996L109.95 8.18933L110.987 6.664H108.646Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M99.1675 6.664L100.202 8.18933L102.735 11.996L99.1541 17.3347H101.496L103.991 13.5933L105.077 11.996L101.508 6.664H99.1675Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M85.8771 6.664H81.4684V8.664H85.8771V6.664Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M81.4684 8.664H79.2607V17.3347H81.4684V8.664Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M72.4862 15.6267C71.0015 15.6267 69.5034 14.7493 69.5034 12.7893V11.268C69.5034 9.552 70.7297 8.35467 72.4862 8.35467C73.8987 8.35467 74.9684 9.13067 75.3326 10.3267H77.3984C76.8414 7.92133 75.0353 6.44133 72.4862 6.44133C69.3909 6.44133 67.3907 8.62 67.3907 11.9907C67.3907 13.6213 67.8499 15 68.7201 15.976C69.6212 16.988 70.9238 17.5227 72.4849 17.5227C74.046 17.5227 75.3486 16.988 76.2497 15.976C76.8695 15.2813 77.2792 14.3813 77.4653 13.3333H75.4249C75.1746 14.9133 73.8237 15.628 72.4836 15.628",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M60.6337 8.35467C62.2952 8.35467 63.4814 9.42667 63.6045 10.9947H57.6615C57.7847 9.42667 58.9722 8.35467 60.6324 8.35467M65.7011 12.6627C65.7199 12.444 65.7292 12.22 65.7292 11.9907C65.7292 8.62 63.729 6.44133 60.6337 6.44133C57.5383 6.44133 55.5382 8.62 55.5382 11.9907C55.5382 13.6213 55.9974 15 56.8676 15.976C57.77 16.9867 59.0713 17.5227 60.6324 17.5227C62.1934 17.5227 63.4961 16.988 64.3971 15.976C64.8818 15.432 65.2392 14.764 65.4601 13.996H63.3836C62.9083 15.1133 61.7663 15.628 60.631 15.628C59.1463 15.628 57.6481 14.7507 57.6481 12.7907V12.6653H65.6984L65.7011 12.6627Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M53.8713 6.66533H51.6636V15.336H53.8713V6.66533Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45.8063 6.664H43.5986V11.7547C43.5986 15.3787 45.1971 17.3333 48.7423 17.3333H51.6636V15.3333H45.8063V6.664Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M97.8716 6.66533H95.6638V15.336H97.8716V6.66533Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M89.8065 6.664H87.5988V11.7547C87.5988 15.3787 89.1973 17.3333 92.7425 17.3333H95.6638V15.3333H89.8065V6.664Z",
      fill: "currentColor"
    }));
  }

  /** Wordmark only — Bluecrux letterforms without the leading monogram. */
  function Wordmark({
    className = ''
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      "aria-label": "Bluecrux wordmark",
      className: `wordmark ${className}`,
      fill: "none",
      viewBox: "26 0 85 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M41.269 2.65867H39.0613V17.3347H41.269V2.65867Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32.3967 15.3347H28.2142V10.6627H32.3967C34.0448 10.6627 35.069 11.5947 35.069 13.0387C35.069 14.4827 34.0448 15.3347 32.3967 15.3347ZM28.2142 4.66533H32.2883C33.8038 4.66533 34.745 5.48533 34.745 6.86267C34.745 8.24 33.8038 8.68133 32.2883 8.68133H28.2142V4.66533ZM36.5618 10.856C36.0958 10.2427 35.4318 9.872 34.5843 9.67333L34.5575 9.668L34.583 9.65733C36.0878 9.048 36.9514 7.91467 36.9514 6.61733C36.9514 5.42933 36.5109 4.464 35.6755 3.732C34.8896 3.044 33.8011 2.65867 32.6122 2.65867H26.0079V17.3347H32.8278C34.0193 17.3347 35.1265 16.9387 35.9446 16.2213C36.8014 15.4693 37.274 14.4053 37.274 13.2253C37.274 12.2907 37.0277 11.4707 36.5618 10.856Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M108.646 6.664L105.077 11.996L106.162 13.5933L108.658 17.3347H111L107.417 11.996L109.95 8.18933L110.987 6.664H108.646Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M99.1675 6.664L100.202 8.18933L102.735 11.996L99.1541 17.3347H101.496L103.991 13.5933L105.077 11.996L101.508 6.664H99.1675Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M85.8771 6.664H81.4684V8.664H85.8771V6.664Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M81.4684 8.664H79.2607V17.3347H81.4684V8.664Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M72.4862 15.6267C71.0015 15.6267 69.5034 14.7493 69.5034 12.7893V11.268C69.5034 9.552 70.7297 8.35467 72.4862 8.35467C73.8987 8.35467 74.9684 9.13067 75.3326 10.3267H77.3984C76.8414 7.92133 75.0353 6.44133 72.4862 6.44133C69.3909 6.44133 67.3907 8.62 67.3907 11.9907C67.3907 13.6213 67.8499 15 68.7201 15.976C69.6212 16.988 70.9238 17.5227 72.4849 17.5227C74.046 17.5227 75.3486 16.988 76.2497 15.976C76.8695 15.2813 77.2792 14.3813 77.4653 13.3333H75.4249C75.1746 14.9133 73.8237 15.628 72.4836 15.628",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M60.6337 8.35467C62.2952 8.35467 63.4814 9.42667 63.6045 10.9947H57.6615C57.7847 9.42667 58.9722 8.35467 60.6324 8.35467M65.7011 12.6627C65.7199 12.444 65.7292 12.22 65.7292 11.9907C65.7292 8.62 63.729 6.44133 60.6337 6.44133C57.5383 6.44133 55.5382 8.62 55.5382 11.9907C55.5382 13.6213 55.9974 15 56.8676 15.976C57.77 16.9867 59.0713 17.5227 60.6324 17.5227C62.1934 17.5227 63.4961 16.988 64.3971 15.976C64.8818 15.432 65.2392 14.764 65.4601 13.996H63.3836C62.9083 15.1133 61.7663 15.628 60.631 15.628C59.1463 15.628 57.6481 14.7507 57.6481 12.7907V12.6653H65.6984L65.7011 12.6627Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M53.8713 6.66533H51.6636V15.336H53.8713V6.66533Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45.8063 6.664H43.5986V11.7547C43.5986 15.3787 45.1971 17.3333 48.7423 17.3333H51.6636V15.3333H45.8063V6.664Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M97.8716 6.66533H95.6638V15.336H97.8716V6.66533Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M89.8065 6.664H87.5988V11.7547C87.5988 15.3787 89.1973 17.3333 92.7425 17.3333H95.6638V15.3333H89.8065V6.664Z",
      fill: "currentColor"
    }));
  }
  function Monogram() {
    return /*#__PURE__*/React.createElement("svg", {
      "aria-label": "Bluecrux monogram",
      className: "monogram",
      fill: "none",
      viewBox: "0 0 20.0823 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.70088 9.996L5.16783 6.19067L4.13159 4.66533H6.47184L10.0411 9.996L8.95535 11.5933L6.45979 15.3347H4.1182L7.70088 9.996ZM11.1269 11.5933L10.0425 9.996L13.6118 4.66533H15.952L14.9158 6.19067L12.3827 9.996L15.9654 15.3347H13.6238L11.1282 11.5933H11.1269ZM0 20H20.0823V0H0V20Z",
      fill: "currentColor"
    }));
  }
  const sectionOrder = ['templates', 'resources', 'brand', 'media'];
  const pageLabels = {
    home: 'Home',
    library: 'Resources',
    templates: 'Templates',
    resources: 'Collateral',
    brand: 'Brand guidelines',
    media: 'Imagery',
    powerpoint: 'Tutorial',
    faq: 'FAQ',
    ai: 'AI library',
    tools: 'Tools'
  };
  function CtaLine({
    children
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: "link-cta"
    }, children, /*#__PURE__*/React.createElement(ArrowRight, _extends({
      size: 14
    }, thin)));
  }
  const MASTER_SLIDE_IMAGES = {
    0: __R('app/slides/master-cover-pillars.png'),
    1: __R('app/slides/master-numbers.png'),
    2: __R('app/slides/master-perspective.png'),
    3: __R('app/slides/master-bringing-together.png'),
    4: __R('app/slides/master-cover-white.png'),
    5: __R('app/slides/master-cover-dark.png')
  };
  function TemplatePreview({
    variant = 0
  }) {
    const photo = MASTER_SLIDE_IMAGES[variant] ?? MASTER_SLIDE_IMAGES[0];
    return /*#__PURE__*/React.createElement("div", {
      className: `template-preview template-preview--photo variant-${variant}`
    }, /*#__PURE__*/React.createElement("img", {
      src: photo,
      alt: ""
    }));
  }

  /** Shared deck stack: back → front; hover peels the front layer (via CSS). */
  const MASTER_STACK_SOURCES = [MASTER_SLIDE_IMAGES[3], MASTER_SLIDE_IMAGES[1], MASTER_SLIDE_IMAGES[2], MASTER_SLIDE_IMAGES[0]];
  const PROPOSAL_STACK_SOURCES = [__R('app/slides/ppt-value-chain-01.png'), __R('app/slides/master-perspective.png'), __R('app/slides/master-numbers.png')];

  /** Front = Word cover; peeks = interior diagrams only (no Bluecrux cover lockups). */
  const DOC_STACK_SOURCES = [__R('app/brand/diagram-workload.png'), __R('app/brand/diagram-gains.png'), __R('app/docs/word-whitepaper.png')];
  const HOME_SLIDES_STACK_SOURCES = [MASTER_SLIDE_IMAGES[2], MASTER_SLIDE_IMAGES[1], MASTER_SLIDE_IMAGES[0]];
  function PreviewStack({
    sources,
    aspect = 'slide'
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: `asset-slide-stack${aspect === 'doc' ? ' asset-slide-stack--doc' : ''}`,
      "aria-hidden": "true"
    }, sources.map((src, i) => {
      const depth = sources.length - 1 - i;
      const layer = depth === 0 ? 'asset-slide-layer--front' : `asset-slide-layer--${Math.min(depth, 3)}`;
      return /*#__PURE__*/React.createElement("span", {
        className: `asset-slide-layer ${layer}`,
        key: `${src}-${i}`
      }, aspect === 'doc' ? /*#__PURE__*/React.createElement("img", {
        className: "asset-stack-doc-img",
        src: src,
        alt: ""
      }) : /*#__PURE__*/React.createElement("div", {
        className: "template-preview template-preview--photo"
      }, /*#__PURE__*/React.createElement("img", {
        src: src,
        alt: ""
      })));
    }));
  }
  function AccentDiagrams() {
    return /*#__PURE__*/React.createElement("figure", {
      className: "accent-diagrams"
    }, /*#__PURE__*/React.createElement("figcaption", {
      className: "mono-label"
    }, "In use \xB7 diagram"), /*#__PURE__*/React.createElement("div", {
      className: "accent-diagrams-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "accent-diagram"
    }, /*#__PURE__*/React.createElement("img", {
      src: __R(__R('app/brand/diagram-workload.png')),
      alt: "Brand guide diagram: workload over time sine wave with blue to pistachio gradient"
    }))));
  }
  function AssetCard({
    item,
    open,
    showKind = true,
    onTutorial
  }) {
    const isMaster = item.id === 'powerpoint-v4' && onTutorial;
    const slideStack = item.id === 'powerpoint-v4' ? MASTER_STACK_SOURCES : item.id === 'proposal-template' ? PROPOSAL_STACK_SOURCES : null;
    return /*#__PURE__*/React.createElement("article", {
      className: `asset-card${isMaster ? ' asset-card--master' : ''}`
    }, /*#__PURE__*/React.createElement("button", {
      className: "asset-card-hit",
      type: "button",
      onClick: () => open(item)
    }, /*#__PURE__*/React.createElement("span", {
      className: "asset-visual"
    }, item.image && /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: "",
      referrerPolicy: EXTERNAL_MEDIA_REFERRER
    }), item.visual === 'slide' && /*#__PURE__*/React.createElement("span", {
      className: "asset-slide-frame",
      "aria-hidden": "true"
    }, slideStack ? /*#__PURE__*/React.createElement(PreviewStack, {
      sources: slideStack
    }) : /*#__PURE__*/React.createElement(TemplatePreview, {
      variant: 1
    })), item.visual === 'doc' && /*#__PURE__*/React.createElement("span", {
      className: "asset-doc-frame",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement(PreviewStack, {
      sources: item.previewSources ?? DOC_STACK_SOURCES,
      aspect: "doc"
    })), item.visual === 'wordmark' && /*#__PURE__*/React.createElement("span", {
      className: "visual-mark"
    }, /*#__PURE__*/React.createElement(Logo, null)), item.visual === 'monogram' && /*#__PURE__*/React.createElement("span", {
      className: "visual-mark"
    }, /*#__PURE__*/React.createElement(Monogram, null)), item.visual === 'words' && /*#__PURE__*/React.createElement("span", {
      className: "visual-words"
    }, "One point", /*#__PURE__*/React.createElement("br", null), "per line.")), /*#__PURE__*/React.createElement("span", {
      className: "asset-body"
    }, showKind && /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, item.templateKind ? templateKindLabels[item.templateKind] : sectionLabels[item.section]), /*#__PURE__*/React.createElement("h3", null, item.title), /*#__PURE__*/React.createElement("p", null, item.description), !isMaster && /*#__PURE__*/React.createElement("span", {
      className: "asset-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "asset-meta"
    }, item.meta), /*#__PURE__*/React.createElement(CtaLine, null, item.action)), isMaster && /*#__PURE__*/React.createElement("span", {
      className: "asset-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "asset-meta"
    }, item.meta)))), isMaster && /*#__PURE__*/React.createElement("div", {
      className: "asset-master-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "chip-button chip-button--ink",
      type: "button",
      onClick: () => open(item)
    }, /*#__PURE__*/React.createElement(Download, _extends({
      size: 13
    }, thin)), " Download"), /*#__PURE__*/React.createElement("button", {
      className: "chip-button chip-button--pistachio",
      type: "button",
      onClick: onTutorial
    }, "Tutorial ", /*#__PURE__*/React.createElement(ArrowRight, _extends({
      size: 14
    }, thin)))));
  }
  function PageIntro({
    title,
    copy
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "page-intro"
    }, /*#__PURE__*/React.createElement("div", {
      className: "page-intro-main"
    }, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", null, copy)));
  }
  function BandHead({
    title,
    copy
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "band-head"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, title)), copy && /*#__PURE__*/React.createElement("p", null, copy));
  }
  function MasterNote({
    navigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "note-band"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Start from the master, not from last week\u2019s deck.")), /*#__PURE__*/React.createElement("div", {
      className: "note-body"
    }, /*#__PURE__*/React.createElement("p", null, "A copied slide brings the old fonts and the old colours with it. Two hours later someone is fixing type instead of finishing the story."), /*#__PURE__*/React.createElement("p", null, "Open a new file from the master. The grid, the type and the colour are already set."), /*#__PURE__*/React.createElement("button", {
      className: "text-button",
      onClick: () => navigate('powerpoint')
    }, "Tutorial ", /*#__PURE__*/React.createElement(ArrowRight, _extends({
      size: 14
    }, thin)))));
  }
  const homeAccess = [{
    page: 'templates',
    eyebrow: '01',
    title: 'Templates',
    copy: 'PowerPoint and Word.',
    action: 'Open',
    kind: 'slides'
  }, {
    page: 'brand',
    eyebrow: '02',
    title: 'Brand guidelines',
    copy: 'Visual, tone and logos.',
    action: 'Open',
    kind: 'brand',
    image: photos[1]
  }, {
    page: 'media',
    eyebrow: '03',
    title: 'Imagery',
    copy: 'Photos and motion in Design SharePoint.',
    action: 'Open',
    kind: 'media',
    image: photos[1]
  }];
  function Home({
    navigate,
    openSearch,
    download
  }) {
    const essentialsRef = useRef(null);
    const featuredRef = useRef(null);
    useEffect(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;
      const nodes = [essentialsRef.current, featuredRef.current].filter(Boolean);
      if (!nodes.length) return;
      const io = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-inview');
          io.unobserve(entry.target);
        }
      }, {
        threshold: 0.16,
        rootMargin: '0px 0px -6% 0px'
      });
      for (const node of nodes) io.observe(node);
      return () => io.disconnect();
    }, []);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      className: "hero"
    }, /*#__PURE__*/React.createElement(HeroVideo, {
      poster: photos[1]
    }), /*#__PURE__*/React.createElement("div", {
      className: "hero-veil"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hero-inner"
    }, /*#__PURE__*/React.createElement("h1", null, "Bluecrux Brand Library"), /*#__PURE__*/React.createElement("p", {
      className: "hero-lede"
    }, "Current logos, templates, brand and imagery."), /*#__PURE__*/React.createElement("button", {
      className: "hero-search",
      onClick: openSearch
    }, /*#__PURE__*/React.createElement(Search, _extends({
      size: 15
    }, thin)), /*#__PURE__*/React.createElement("span", null, "Search the library"), /*#__PURE__*/React.createElement("kbd", null, "\u2318K \xB7 Ctrl K")))), /*#__PURE__*/React.createElement("section", {
      className: "essentials",
      ref: essentialsRef
    }, /*#__PURE__*/React.createElement(BandHead, {
      title: "Essentials"
    }), /*#__PURE__*/React.createElement("div", {
      className: "essentials-grid"
    }, homeAccess.map(item => /*#__PURE__*/React.createElement("button", {
      className: `essentials-card essentials-card--${item.kind}`,
      key: item.eyebrow,
      onClick: () => navigate(item.page)
    }, /*#__PURE__*/React.createElement("span", {
      className: "essentials-media"
    }, item.kind === 'slides' && /*#__PURE__*/React.createElement("span", {
      className: "essentials-ppt-frame",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement(PreviewStack, {
      sources: HOME_SLIDES_STACK_SOURCES
    })), item.kind === 'brand' && /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: "",
      referrerPolicy: EXTERNAL_MEDIA_REFERRER
    }), item.kind === 'media' && /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: "",
      referrerPolicy: EXTERNAL_MEDIA_REFERRER
    }), /*#__PURE__*/React.createElement("span", {
      className: "essentials-veil"
    })), /*#__PURE__*/React.createElement("span", {
      className: "essentials-body"
    }, /*#__PURE__*/React.createElement("span", {
      className: "essentials-copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "essentials-eyebrow"
    }, item.eyebrow), /*#__PURE__*/React.createElement("h3", null, item.title), /*#__PURE__*/React.createElement("p", null, item.copy)), /*#__PURE__*/React.createElement("span", {
      className: "essentials-go",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement(ArrowRight, _extends({
      size: 14
    }, thin)))))))), /*#__PURE__*/React.createElement("section", {
      className: "featured-master",
      ref: featuredRef
    }, /*#__PURE__*/React.createElement("div", {
      className: "featured-master-copy"
    }, /*#__PURE__*/React.createElement("h2", null, "PowerPoint master v4"), /*#__PURE__*/React.createElement("p", null, "Cover, framework, statement. Download the current file."), /*#__PURE__*/React.createElement("div", {
      className: "featured-master-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "chip-button chip-button--ink",
      type: "button",
      onClick: () => download('PowerPoint master v4')
    }, /*#__PURE__*/React.createElement(Download, _extends({
      size: 14
    }, thin)), " Download master"), /*#__PURE__*/React.createElement("button", {
      className: "text-button text-button--mark",
      type: "button",
      onClick: () => navigate('powerpoint')
    }, "Tutorial ", /*#__PURE__*/React.createElement(ArrowRight, _extends({
      size: 14
    }, thin))))), /*#__PURE__*/React.createElement("div", {
      className: "featured-master-visual",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement(TemplatePreview, {
      variant: 4
    }), /*#__PURE__*/React.createElement(TemplatePreview, {
      variant: 2
    }))), /*#__PURE__*/React.createElement("section", {
      className: "call-band"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Not in the library?"), /*#__PURE__*/React.createElement("p", null, "Write what you need. It lands on the brand board.")), /*#__PURE__*/React.createElement("button", {
      className: "chip-button",
      onClick: openRequestForm
    }, "Open a request ", /*#__PURE__*/React.createElement(ArrowUpRight, _extends({
      size: 14
    }, thin)))));
  }
  function Library({
    openItem,
    openTutorial,
    initialFilter = 'all'
  }) {
    const [filter, setFilter] = useState(initialFilter);
    const filtered = filter === 'all' ? libraryItems : libraryItems.filter(item => item.section === filter);
    const resourceCount = libraryItems.filter(item => item.section === 'resources').length;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageIntro, {
      title: "Resources.",
      copy: `Templates, collateral, brand and imagery — one filterable list. Files open in Design SharePoint. Collateral covers one-pagers, brochures and related PDFs (${resourceCount}).`
    }), /*#__PURE__*/React.createElement("div", {
      className: "filter-row",
      role: "tablist",
      "aria-label": "Resources sections"
    }, /*#__PURE__*/React.createElement("button", {
      className: filter === 'all' ? 'active' : '',
      type: "button",
      onClick: () => setFilter('all')
    }, "All ", /*#__PURE__*/React.createElement("span", null, libraryItems.length)), sectionOrder.map(section => /*#__PURE__*/React.createElement("button", {
      key: section,
      type: "button",
      className: filter === section ? 'active' : '',
      onClick: () => setFilter(section)
    }, sectionLabels[section], " ", /*#__PURE__*/React.createElement("span", null, libraryItems.filter(item => item.section === section).length)))), filter === 'resources' && /*#__PURE__*/React.createElement("p", {
      className: "library-section-hint"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "Collateral"), "Latest sales and comms PDFs \u2014 open in Design SharePoint."), filter === 'media' && /*#__PURE__*/React.createElement("p", {
      className: "library-section-hint"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "Imagery"), "Photography and motion collections live in Design SharePoint \u2014 open from Imagery or here."), /*#__PURE__*/React.createElement("section", {
      className: "asset-grid"
    }, filtered.map(item => /*#__PURE__*/React.createElement(AssetCard, {
      item: item,
      open: openItem,
      key: item.id,
      onTutorial: item.id === 'powerpoint-v4' ? openTutorial : undefined
    }))));
  }
  const templateGroups = [{
    kind: 'powerpoint',
    index: '01',
    copy: 'Masters and proposal decks.'
  }, {
    kind: 'word',
    index: '02',
    copy: 'Reports, notes, summaries.'
  }];
  function Templates({
    navigate,
    openItem
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "templates-page"
    }, /*#__PURE__*/React.createElement("section", {
      className: "page-intro page-intro--compact"
    }, /*#__PURE__*/React.createElement("div", {
      className: "page-intro-main"
    }, /*#__PURE__*/React.createElement("h1", null, "Templates."), /*#__PURE__*/React.createElement("p", null, "Current masters. Downloads open Design SharePoint."))), /*#__PURE__*/React.createElement("nav", {
      className: "type-tabs",
      "aria-label": "Template types"
    }, templateGroups.map(group => {
      const count = libraryItems.filter(item => item.templateKind === group.kind).length;
      return /*#__PURE__*/React.createElement("a", {
        className: "type-tab",
        href: `#templates-${group.kind}`,
        key: group.kind
      }, /*#__PURE__*/React.createElement("span", {
        className: "type-tab-label"
      }, templateKindLabels[group.kind]), /*#__PURE__*/React.createElement("span", {
        className: "type-tab-count"
      }, count));
    })), templateGroups.map(group => {
      const items = libraryItems.filter(item => item.templateKind === group.kind);
      if (!items.length) return null;
      return /*#__PURE__*/React.createElement("section", {
        className: "tpl-section",
        key: group.kind,
        id: `templates-${group.kind}`
      }, /*#__PURE__*/React.createElement("header", {
        className: "tpl-section-head"
      }, /*#__PURE__*/React.createElement("span", {
        className: "tpl-section-index"
      }, group.index), /*#__PURE__*/React.createElement("div", {
        className: "tpl-section-title"
      }, /*#__PURE__*/React.createElement("h2", null, templateKindLabels[group.kind]), /*#__PURE__*/React.createElement("p", null, group.copy)), group.kind === 'powerpoint' ? /*#__PURE__*/React.createElement("button", {
        className: "chip-button chip-button--pistachio",
        type: "button",
        onClick: () => navigate('powerpoint')
      }, "Tutorial ", /*#__PURE__*/React.createElement(ArrowRight, _extends({
        size: 14
      }, thin))) : /*#__PURE__*/React.createElement("span", {
        className: "tpl-section-meta"
      }, items.length, " file", items.length > 1 ? 's' : '')), /*#__PURE__*/React.createElement("div", {
        className: `tpl-grid${group.kind === 'powerpoint' ? ' tpl-grid--ppt' : ''}`
      }, items.map(item => /*#__PURE__*/React.createElement(AssetCard, {
        item: item,
        open: openItem,
        showKind: false,
        key: item.id,
        onTutorial: item.id === 'powerpoint-v4' ? () => navigate('powerpoint') : undefined
      }))));
    }), /*#__PURE__*/React.createElement(MasterNote, {
      navigate: navigate
    }));
  }
  const defaultTutorial = tutorials.find(t => t.primary) ?? tutorials[0];
  function PowerPoint({
    download,
    initialTutorialId,
    onTraining
  }) {
    const videoRef = useRef(null);
    const startId = initialTutorialId && tutorials.some(t => t.id === initialTutorialId) ? initialTutorialId : defaultTutorial.id;
    const [activeId, setActiveId] = useState(startId);
    const [playing, setPlaying] = useState(false);
    const active = tutorials.find(t => t.id === activeId) ?? defaultTutorial;
    const hasVideo = Boolean(active.videoSrc);
    const isYoutube = Boolean(active.videoSrc?.includes('youtube.com'));
    const isSoon = active.typeLabel === 'Placeholder' || active.duration === 'Soon';
    const selectTutorial = tutorial => {
      if (tutorial.id === activeId) return;
      const el = videoRef.current;
      if (el) {
        el.pause();
        el.removeAttribute('src');
        el.load();
      }
      setPlaying(false);
      setActiveId(tutorial.id);
    };
    const startWalkthrough = () => {
      if (!hasVideo) return;
      setPlaying(true);
      if (isYoutube) return;
      const el = videoRef.current;
      if (el) {
        void el.play().catch(() => undefined);
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "tutorial-page"
    }, /*#__PURE__*/React.createElement("section", {
      className: "page-intro page-intro--compact"
    }, /*#__PURE__*/React.createElement("div", {
      className: "page-intro-main"
    }, /*#__PURE__*/React.createElement("h1", null, "Tutorial."), /*#__PURE__*/React.createElement("p", null, "PowerPoint master walkthroughs and how to use AI for brand."), onTraining && /*#__PURE__*/React.createElement("button", {
      className: "text-button",
      type: "button",
      onClick: onTraining
    }, "Slide training ", /*#__PURE__*/React.createElement(ArrowRight, _extends({
      size: 14
    }, thin))))), /*#__PURE__*/React.createElement("div", {
      className: "tutorial-sticky"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tutorial-sticky-copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "PowerPoint master v4"), /*#__PURE__*/React.createElement("strong", null, active.subtitle)), /*#__PURE__*/React.createElement("div", {
      className: "tutorial-sticky-actions"
    }, /*#__PURE__*/React.createElement("label", {
      className: "tutorial-switcher"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, "Select tutorial"), /*#__PURE__*/React.createElement("select", {
      value: active.id,
      onChange: e => {
        const next = tutorials.find(t => t.id === e.target.value);
        if (next) selectTutorial(next);
      },
      "aria-label": "Select tutorial"
    }, tutorials.map(tutorial => {
      const soon = tutorial.typeLabel === 'Placeholder' || tutorial.duration === 'Soon';
      return /*#__PURE__*/React.createElement("option", {
        key: tutorial.id,
        value: tutorial.id
      }, tutorial.index, " \xB7 ", tutorial.title, soon ? ' — Soon' : '');
    })), /*#__PURE__*/React.createElement("span", {
      className: "tutorial-switcher-face",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tutorial-switcher-index"
    }, active.index), /*#__PURE__*/React.createElement("span", {
      className: "tutorial-switcher-label"
    }, active.title), isSoon && /*#__PURE__*/React.createElement("span", {
      className: "tutorial-switcher-soon"
    }, "Soon"), /*#__PURE__*/React.createElement(ChevronDown, _extends({
      size: 14
    }, thin)))), /*#__PURE__*/React.createElement("button", {
      className: "chip-button chip-button--ink",
      type: "button",
      onClick: () => download('PowerPoint master v4')
    }, /*#__PURE__*/React.createElement(Download, _extends({
      size: 14
    }, thin)), " Download master"))), /*#__PURE__*/React.createElement("div", {
      className: "tutorial-body"
    }, /*#__PURE__*/React.createElement("section", {
      className: "tutorial-video"
    }, /*#__PURE__*/React.createElement("div", {
      className: `tutorial-player${playing ? ' is-playing' : ''}${!hasVideo ? ' is-placeholder' : ''}`
    }, !playing && /*#__PURE__*/React.createElement("button", {
      className: "tutorial-poster",
      type: "button",
      onClick: startWalkthrough,
      disabled: !hasVideo,
      "aria-disabled": !hasVideo
    }, /*#__PURE__*/React.createElement("span", {
      className: "tutorial-poster-slide",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement(TemplatePreview, {
      variant: 3
    })), hasVideo ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "tutorial-poster-badge"
    }, /*#__PURE__*/React.createElement(Play, _extends({
      size: 14
    }, thin)), " Play walkthrough"), /*#__PURE__*/React.createElement("span", {
      className: "tutorial-poster-note"
    }, active.title, " \xB7 ", active.subtitle)) : isSoon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "tutorial-poster-badge tutorial-poster-badge--muted"
    }, "Video coming soon"), /*#__PURE__*/React.createElement("span", {
      className: "tutorial-poster-note"
    }, "Notes below are ready \xB7 walkthrough still in production")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "tutorial-poster-badge tutorial-poster-badge--muted"
    }, "Read the guide"), /*#__PURE__*/React.createElement("span", {
      className: "tutorial-poster-note"
    }, active.title, " \xB7 notes below"))), hasVideo && active.videoSrc && isYoutube && playing && /*#__PURE__*/React.createElement("a", {
      className: "tutorial-youtube",
      href: `https://www.youtube.com/watch?v=${YOUTUBE_BRAND_FILM_ID}`,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        background: '#000021',
        color: '#fff',
        textDecoration: 'none',
        fontFamily: "'Aptos Mono', 'Cascadia Mono', ui-monospace, monospace",
        fontSize: 12,
        letterSpacing: '.12em',
        textTransform: 'uppercase'
      }
    }, "Watch on YouTube ", /*#__PURE__*/React.createElement(ArrowUpRight, {
      size: 16,
      strokeWidth: 1.25
    })), hasVideo && active.videoSrc && !isYoutube && /*#__PURE__*/React.createElement("video", {
      key: active.id,
      ref: videoRef,
      controls: playing,
      playsInline: true,
      preload: "metadata",
      onPlay: () => setPlaying(true),
      onPause: () => {
        if (videoRef.current && videoRef.current.currentTime > 0.2) setPlaying(true);
      }
    }, /*#__PURE__*/React.createElement("source", {
      src: active.videoSrc,
      type: "video/mp4"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "tutorial-video-meta"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tutorial-video-copy"
    }, /*#__PURE__*/React.createElement("strong", null, active.title), /*#__PURE__*/React.createElement("p", null, active.description)), /*#__PURE__*/React.createElement("span", {
      className: "asset-meta"
    }, hasVideo ? `${isYoutube ? 'YOUTUBE' : 'MP4'} · ${active.typeLabel.toUpperCase()}` : isSoon ? `PLACEHOLDER · ${active.typeLabel.toUpperCase()}` : `GUIDE · ${active.duration.toUpperCase()}`))), /*#__PURE__*/React.createElement("section", {
      className: "tutorial-notes"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tutorial-col"
    }, /*#__PURE__*/React.createElement("h2", null, "Takeaways"), /*#__PURE__*/React.createElement("ul", {
      className: "tutorial-list"
    }, active.takeaways.map(line => /*#__PURE__*/React.createElement("li", {
      key: line
    }, /*#__PURE__*/React.createElement("span", {
      className: "tutorial-bullet",
      "aria-hidden": "true"
    }), line)))), /*#__PURE__*/React.createElement("div", {
      className: "tutorial-col"
    }, /*#__PURE__*/React.createElement("h2", null, "Best practices"), /*#__PURE__*/React.createElement("ul", {
      className: "tutorial-practices"
    }, active.practices.map(practice => /*#__PURE__*/React.createElement("li", {
      key: practice.index
    }, /*#__PURE__*/React.createElement("span", {
      className: "tpl-section-index"
    }, practice.index), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, practice.title), /*#__PURE__*/React.createElement("p", null, practice.copy)))))))));
  }
  const toneTriad = [['01', 'Focused', 'One claim per sentence. Lead with what happened, not what we believe.'], ['02', 'Approachable', 'Write as a colleague on the floor — plain words, no jargon stack.'], ['03', 'Simple', 'Cut ornament. Prefer the short path from fact to who benefits.']];
  const toneSequence = [['01', 'Moment', 'Where it happens.'], ['02', 'Friction', 'What\u2019s stuck.'], ['03', 'Change', 'What moved.'], ['04', 'Landing', 'Who feels it.']];
  const toneSequenceExample = 'It\u2019s 8:55 — doors open in five. Late orders pile up. The plan clears the queue. The floor starts with customers, not calls.';
  const toneExamples = [{
    index: '01',
    title: 'Open on the floor',
    when: 'Campaign openers · story lead-ins',
    why: 'A concrete time and place beats an abstract transformation claim.',
    yes: 'It\u2019s 8:55 and the doors open in five minutes. The shelf is set, the plan holds, and the floor starts with customers, not calls.',
    no: 'Transforming today\u2019s supply chains into smart, efficient, AI-powered value chains.'
  }, {
    index: '02',
    title: 'Show what moved',
    when: 'Case studies · results slides · LinkedIn',
    why: 'Outcomes the reader can picture. Skip ownership theatre.',
    yes: 'Orders went out on time again. Fewer late orders, fewer end-of-shift calls.',
    no: 'Taking ownership from strategy to implementation and delivering tangible results.'
  }, {
    index: '03',
    title: 'Name the routine',
    when: 'Product stories · process explainers',
    why: 'One clear decision is stronger than a pile of buzzwords.',
    yes: 'At the lab bench, "release" is routine: one check, one clear decision, and the batch moves on.',
    no: 'We enable future-ready operations through innovation, agility, and measurable impact at scale.'
  }, {
    index: '04',
    title: 'Say it in one line',
    when: 'Bios · about blurbs · deck openers',
    why: 'Short company line. No stacked adjectives, no AI filler.',
    yes: 'Consulting and technology for value chains. Value moves with your decisions. We make them easier.',
    no: 'Bluecrux is a value chain consulting and technology company. We help transform today\u2019s supply chains into smart, efficient, fully integrated AI-powered value chains.'
  }];
  const toneGuardrails = [['01', 'No self-praise', 'Show the result. Do not list our values as proof.'], ['02', 'No adjective stacks', 'One precise noun beats three marketing adjectives.'], ['03', 'No lecturing', 'Do not tell the reader what they should already be doing.'], ['04', 'No gotcha tone', 'Be direct. Never sound corrective or superior.'], ['05', 'No pet phrases', 'Say it once, then find the next real thing.'], ['06', 'No invented facts', 'If it did not happen on a floor or in a lab, leave it out.']];
  function BrandVisual({
    download
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      className: "charter-download"
    }, /*#__PURE__*/React.createElement("div", {
      className: "charter-frame"
    }, /*#__PURE__*/React.createElement("img", {
      src: __R(__R('app/brand/logo-tee.png')),
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "charter-copy"
    }, /*#__PURE__*/React.createElement("h2", null, "Logo, colour, type, icons."), /*#__PURE__*/React.createElement("ul", {
      className: "scan-list"
    }, /*#__PURE__*/React.createElement("li", null, "Primary: blue-black, white, off-white"), /*#__PURE__*/React.createElement("li", null, "Secondary: sparingly, for diagrams"), /*#__PURE__*/React.createElement("li", null, "Type: Helvetica + Aptos Mono"), /*#__PURE__*/React.createElement("li", null, "Icons: Google Icons, thin weight")), /*#__PURE__*/React.createElement("button", {
      className: "chip-button chip-button--ink",
      onClick: () => download('Graphic charter v4.pdf')
    }, /*#__PURE__*/React.createElement(Download, _extends({
      size: 14
    }, thin)), " Download graphic charter \xB7 PDF"))), /*#__PURE__*/React.createElement("section", {
      className: "palette"
    }, /*#__PURE__*/React.createElement(BandHead, {
      title: "Primary palette."
    }), /*#__PURE__*/React.createElement("div", {
      className: "palette-primary"
    }, primaryPalette.map(colour => /*#__PURE__*/React.createElement("div", {
      className: `swatch swatch--${colour.name === 'Blue-black' ? 'ink' : colour.name === 'White' ? 'white' : 'paper'}`,
      key: colour.hex
    }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, colour.name), /*#__PURE__*/React.createElement("dd", null, colour.hex, " \xB7 ", colour.note))))), /*#__PURE__*/React.createElement("div", {
      className: "palette-secondary-block"
    }, /*#__PURE__*/React.createElement("header", {
      className: "palette-secondary-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "Secondary palette"), /*#__PURE__*/React.createElement("h3", null, "Plans, diagrams, schematics."), /*#__PURE__*/React.createElement("p", null, "Use sparingly. Limit colours per visual. Check contrast.")), /*#__PURE__*/React.createElement("div", {
      className: "palette-secondary-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "palette-secondary",
      "aria-label": "Secondary colours"
    }, secondaryPalette.map(colour => /*#__PURE__*/React.createElement("div", {
      className: "secondary-swatch",
      key: colour.hex
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        background: colour.hex
      },
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, colour.name), /*#__PURE__*/React.createElement("em", null, colour.hex))))), /*#__PURE__*/React.createElement(AccentDiagrams, null)))), /*#__PURE__*/React.createElement("section", {
      className: "story-split"
    }, /*#__PURE__*/React.createElement("div", {
      className: "story-media"
    }, /*#__PURE__*/React.createElement("img", {
      src: photos[4],
      alt: "Colleagues in conversation at a Bluecrux gathering",
      referrerPolicy: EXTERNAL_MEDIA_REFERRER
    })), /*#__PURE__*/React.createElement("div", {
      className: "story-copy"
    }, /*#__PURE__*/React.createElement("h2", null, "We grew. The brand needed warmth to match."), /*#__PURE__*/React.createElement("p", null, "Bluecrux got bigger \u2014 and the old look felt too tech-hard, too aggressive for who we are now."), /*#__PURE__*/React.createElement("p", null, "The new system brings more colour and a warmer side of us: still precise, more human."))), /*#__PURE__*/React.createElement("section", {
      className: "band"
    }, /*#__PURE__*/React.createElement(BandHead, {
      title: "How colour works.",
      copy: "Three rules that keep decks, UI and print on-brand. Follow them before you reach for a secondary swatch."
    }), /*#__PURE__*/React.createElement("div", {
      className: "rule-list"
    }, colourRules.map(item => /*#__PURE__*/React.createElement("div", {
      className: "rule-row rule-row--why",
      key: item.index
    }, /*#__PURE__*/React.createElement("span", null, item.index), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, item.title), /*#__PURE__*/React.createElement("p", null, item.rule)), /*#__PURE__*/React.createElement("p", {
      className: "rule-why"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "Why"), item.why))))), /*#__PURE__*/React.createElement("section", {
      className: "specimens"
    }, /*#__PURE__*/React.createElement("div", {
      className: "specimen"
    }, /*#__PURE__*/React.createElement("p", {
      className: "specimen-display"
    }, "Helvetica"), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "Weight"), /*#__PURE__*/React.createElement("dd", null, "Regular"), /*#__PURE__*/React.createElement("dt", null, "Fallback"), /*#__PURE__*/React.createElement("dd", null, "Arial, sans-serif"), /*#__PURE__*/React.createElement("dt", null, "Use"), /*#__PURE__*/React.createElement("dd", null, "Headings, display, running text."))), /*#__PURE__*/React.createElement("div", {
      className: "specimen"
    }, /*#__PURE__*/React.createElement("p", {
      className: "specimen-mono"
    }, "Aptos Mono"), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "Weight"), /*#__PURE__*/React.createElement("dd", null, "Regular"), /*#__PURE__*/React.createElement("dt", null, "Fallback"), /*#__PURE__*/React.createElement("dd", null, "Cascadia Mono, system monospace"), /*#__PURE__*/React.createElement("dt", null, "Use"), /*#__PURE__*/React.createElement("dd", null, "Labels, meta, H3. Blue-black container in documents.")))));
  }
  function CopyEnginePanel({
    hero = false
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      className: `copy-engine-panel${hero ? ' copy-engine-panel--hero' : ''}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "Copy engine"), /*#__PURE__*/React.createElement("h3", null, "Draft in Bluecrux tone."), /*#__PURE__*/React.createElement("p", null, "Use our custom GPT to write the first pass \u2014 focused, approachable, simple."), /*#__PURE__*/React.createElement("a", {
      className: "chip-button chip-button--ink",
      href: COPY_ENGINE_URL,
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Open copy engine ", /*#__PURE__*/React.createElement(ArrowUpRight, _extends({
      size: 14
    }, thin))));
  }
  const aiPromptCategories = [{
    id: 'photo',
    index: '01',
    title: 'Realistic photography.',
    copy: 'Floor, lab and workplace stills. Prefer real light and people over stock-tech tropes.'
  }, {
    id: 'illustration',
    index: '02',
    title: 'Illustration.',
    copy: 'Editorial and conceptual art. Warm, clear shapes — not neon futurism.'
  }, {
    id: 'graphics',
    index: '03',
    title: 'Graphics / charts / diagrams.',
    copy: 'Decks, Firefly, and ChatGPT images for schematics. Colour explains meaning.'
  }];
  const aiImagePrompts = [{
    id: 'photo-floor',
    category: 'photo',
    title: 'Operations floor moment',
    platform: 'ChatGPT images · Midjourney',
    note: 'Use for campaign stills and internal decks. Keep faces natural; avoid staged “tech hero” poses.',
    exampleColor: '#000021',
    exampleLabel: 'Ink',
    prompt: `Photorealistic workplace photograph, early morning on a manufacturing or logistics floor. Two colleagues in conversation beside a clear workbench — calm focus, natural window light, slight warmth. Documentary feel, 35mm, shallow depth of field. Colour mood: soft paper whites, deep blue-black shadows, a quiet pistachio accent in a vest or label — never neon. ${AI_BRAND_CONSTRAINTS} No logos unless specified. No HUD overlays.`
  }, {
    id: 'photo-lab',
    category: 'photo',
    title: 'Lab release beat',
    platform: 'Midjourney · Adobe Firefly',
    note: 'Good for life-sciences stories. Show the decision moment, not a sci-fi cleanroom.',
    exampleColor: '#717BEE',
    exampleLabel: 'Salvia',
    prompt: `Photorealistic lab photograph at a bench: one scientist completing a routine release check on a tablet, soft overhead light, clean but lived-in lab. Warm skin tones, muted greens and blues in equipment, paper-white surfaces. Honest documentary style, no cinematic smoke, no purple rim light. ${AI_BRAND_CONSTRAINTS} English labels only if text is needed. Empty brand-safe space for later compositing.`
  }, {
    id: 'photo-meeting',
    category: 'photo',
    title: 'Client workshop table',
    platform: 'ChatGPT images · Firefly',
    note: 'Prefer real paper and screens over floating AR. Crop for 16:9 slides.',
    exampleColor: '#D6EDA6',
    exampleLabel: 'Pistachio',
    prompt: `Photorealistic meeting photograph around a long table: mixed ages collaborating over printed plans and a laptop. Soft daylight, off-white walls (#FAF7F5 feel), blue-black clothing accents. Approachable and precise — not a startup pitch theatre. ${AI_BRAND_CONSTRAINTS} No glowing UI holograms, no purple gradients in the room.`
  }, {
    id: 'illu-value-chain',
    category: 'illustration',
    title: 'Value-chain concept',
    platform: 'Midjourney · ChatGPT images',
    note: 'Editorial illustration for articles and covers. Keep shapes simple.',
    exampleColor: '#FAF7F5',
    exampleLabel: 'Paper',
    prompt: `Flat editorial illustration of a value chain as connected stations — floor, plan, decision, customer — in a warm off-white field. Limited palette: blue-black #000021 lines, salvia #717BEE and pistachio #D6EDA6 only where they mark flow. Soft geometry, human scale figures, no isometric city spam. ${AI_BRAND_CONSTRAINTS} Minimal English labels. Calm, approachable, not tech-aggressive.`
  }, {
    id: 'illu-metaphor',
    category: 'illustration',
    title: 'Friction → clarity metaphor',
    platform: 'ChatGPT images · Midjourney',
    note: 'Use when the story needs a metaphor, not a photo. One idea only.',
    exampleColor: '#000021',
    exampleLabel: 'Ink',
    prompt: `Contemporary illustration: a tangled queue of late orders resolving into a clear straight path. Paper background #FAF7F5, ink #000021, pistachio highlight on the clear path, salvia on a single decision node. Hand-drawn-meets-vector, generous whitespace, no purple glow, no circuit-board clichés. ${AI_BRAND_CONSTRAINTS}`
  }, {
    id: 'illu-icon-set',
    category: 'illustration',
    title: 'Thin icon moodboard',
    platform: 'Firefly · ChatGPT images',
    note: 'Reference only — final icons stay Google Icons thin weight in product work.',
    exampleColor: '#717BEE',
    exampleLabel: 'Salvia',
    prompt: `Set of 6 simple line icons on off-white: plan, queue, check, handoff, lab flask, warehouse. Ultra-thin strokes matching Google Icons weight, blue-black #000021 only, no fill gradients, no glow. Square grid, consistent corners, English titles under each. ${AI_BRAND_CONSTRAINTS}`
  }, {
    id: 'chart-process',
    category: 'graphics',
    title: 'Process diagram for PowerPoint',
    platform: 'ChatGPT images · Firefly · paste into PPT',
    note: 'Generate, then rebuild in the master if possible. Colour encodes steps, not decoration.',
    exampleColor: '#D6EDA6',
    exampleLabel: 'Pistachio',
    prompt: `Clean horizontal process diagram, 4 steps, for a business slide. Off-white background #FAF7F5, blue-black #000021 type and connectors, pistachio #D6EDA6 for the active step, salvia #717BEE for a secondary path. Helvetica-like sans, short English labels. Flat vector, hairline rules, no 3D, no purple neon, no shadows. Leave margins for a 16:9 slide. ${AI_BRAND_CONSTRAINTS}`
  }, {
    id: 'chart-bars',
    category: 'graphics',
    title: 'Bar chart with one insight',
    platform: 'ChatGPT images · PowerPoint rebuild',
    note: 'Highlight one bar. Prefer rebuilding data in the PowerPoint chart layout.',
    exampleColor: '#FAF7F5',
    exampleLabel: 'Paper',
    prompt: `Minimal bar chart graphic on paper #FAF7F5: five bars, one highlighted in pistachio #D6EDA6, others in muted blue-black tints. Sparse English axis labels, one callout line to the insight. No grid clutter, no gradient fills, no purple glow. Slide-ready 16:9 composition. ${AI_BRAND_CONSTRAINTS}`
  }, {
    id: 'chart-schematic',
    category: 'graphics',
    title: 'Schematic / plan legend',
    platform: 'Firefly · Midjourney (vector-leaning)',
    note: 'Secondary colours mark meaning. Limit colours per visual.',
    exampleColor: '#000021',
    exampleLabel: 'Ink',
    prompt: `Technical-but-warm schematic of a planning board: zones, arrows, and a small legend. Paper ground, ink structure, salvia and pistachio only in the legend keys that explain two plan types. Aptos Mono–like labels in English. Precise, readable at slide size, zero cyberpunk. ${AI_BRAND_CONSTRAINTS}`
  }];
  function AiPromptCard({
    item
  }) {
    const [copied, setCopied] = useState(false);
    const copyPrompt = () => {
      void navigator.clipboard?.writeText(item.prompt).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      });
    };
    return /*#__PURE__*/React.createElement("article", {
      className: "ai-prompt-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ai-prompt-card-plane"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ai-prompt-swatch",
      style: {
        background: item.exampleColor
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ai-prompt-swatch-label"
    }, item.exampleLabel), /*#__PURE__*/React.createElement("span", {
      className: "ai-prompt-swatch-hex"
    }, item.exampleColor)), /*#__PURE__*/React.createElement("div", {
      className: "ai-prompt-card-scrim"
    }, /*#__PURE__*/React.createElement("header", {
      className: "ai-prompt-card-head"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, item.title), /*#__PURE__*/React.createElement("p", {
      className: "ai-prompt-platform"
    }, item.platform)), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "ai-prompt-copy",
      onClick: copyPrompt,
      "aria-label": `Copy prompt: ${item.title}`
    }, copied ? /*#__PURE__*/React.createElement(Check, _extends({
      size: 13
    }, thin)) : /*#__PURE__*/React.createElement(Copy, _extends({
      size: 13
    }, thin)), copied ? 'Copied' : 'Copy')), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "ai-prompt-card-text",
      onClick: copyPrompt,
      title: "Click to copy prompt"
    }, item.prompt))), /*#__PURE__*/React.createElement("p", {
      className: "ai-prompt-note"
    }, item.note));
  }
  function AiLibrary({
    openTutorial
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageIntro, {
      title: "AI library.",
      copy: "Copy engine and the AI-for-brand tutorial \u2014 with Bluecrux guardrails built in."
    }), /*#__PURE__*/React.createElement("section", {
      className: "charter-download charter-download--tone ai-copy-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "charter-copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label ai-copy-eyebrow"
    }, "Start here"), /*#__PURE__*/React.createElement("h2", null, "Write with the copy engine."), /*#__PURE__*/React.createElement("p", {
      className: "ai-copy-lead"
    }, "The fastest on-brand first draft \u2014 same custom GPT as Tone of voice."), /*#__PURE__*/React.createElement("ul", {
      className: "scan-list"
    }, /*#__PURE__*/React.createElement("li", null, "Focused \xB7 Approachable \xB7 Simple"), /*#__PURE__*/React.createElement("li", null, "Verbal charter stays the source of truth"), /*#__PURE__*/React.createElement("li", null, "Escalate to brand when the line has to ship public")), /*#__PURE__*/React.createElement("button", {
      className: "text-button",
      type: "button",
      onClick: () => openTutorial('ai-for-brand')
    }, "How to use AI for Brand ", /*#__PURE__*/React.createElement(ArrowRight, _extends({
      size: 14
    }, thin)))), /*#__PURE__*/React.createElement(CopyEnginePanel, {
      hero: true
    })));
  }
  function BrandTone({
    download
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      className: "charter-download charter-download--tone"
    }, /*#__PURE__*/React.createElement("div", {
      className: "charter-copy"
    }, /*#__PURE__*/React.createElement("h2", null, "How Bluecrux writes."), /*#__PURE__*/React.createElement("ul", {
      className: "scan-list"
    }, /*#__PURE__*/React.createElement("li", null, "Focused \xB7 Approachable \xB7 Simple"), /*#__PURE__*/React.createElement("li", null, "Build lines: moment \u2192 friction \u2192 change \u2192 landing"), /*#__PURE__*/React.createElement("li", null, "Prefer facts and outcomes over claims")), /*#__PURE__*/React.createElement("button", {
      className: "chip-button chip-button--ink",
      onClick: () => download('Verbal charter v1.pdf')
    }, /*#__PURE__*/React.createElement(Download, _extends({
      size: 14
    }, thin)), " Download verbal charter \xB7 PDF")), /*#__PURE__*/React.createElement(CopyEnginePanel, null)), /*#__PURE__*/React.createElement("section", {
      className: "voice-band"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "The rule"), /*#__PURE__*/React.createElement("h2", null, "One point per line."), /*#__PURE__*/React.createElement("p", null, "Start from a real moment. Name the friction. Show what changed. Land on who feels it.")), /*#__PURE__*/React.createElement("section", {
      className: "band"
    }, /*#__PURE__*/React.createElement(BandHead, {
      title: "Three principles.",
      copy: "Every Bluecrux line should pass these three checks before it ships."
    }), /*#__PURE__*/React.createElement("div", {
      className: "rule-list"
    }, toneTriad.map(([index, title, copy]) => /*#__PURE__*/React.createElement("div", {
      className: "rule-row",
      key: index
    }, /*#__PURE__*/React.createElement("span", null, index), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, copy))))), /*#__PURE__*/React.createElement("section", {
      className: "band"
    }, /*#__PURE__*/React.createElement(BandHead, {
      title: "Write in four beats.",
      copy: "For stories and campaigns, write in this order. Single lines can skip steps."
    }), /*#__PURE__*/React.createElement("ol", {
      className: "beat-strip"
    }, toneSequence.map(([index, title, copy], i) => /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, index), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, copy), i < toneSequence.length - 1 && /*#__PURE__*/React.createElement(ArrowRight, _extends({
      className: "beat-strip-arrow",
      size: 16
    }, thin, {
      "aria-hidden": true
    }))))), /*#__PURE__*/React.createElement("p", {
      className: "beat-example"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "Example"), toneSequenceExample)), /*#__PURE__*/React.createElement("section", {
      className: "voice-examples"
    }, /*#__PURE__*/React.createElement(BandHead, {
      title: "Write it like this.",
      copy: "Same idea, two versions. Prefer the Yes. Copy it when it fits."
    }), toneExamples.map(example => /*#__PURE__*/React.createElement("article", {
      key: example.index,
      className: "voice-pair"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("span", null, example.index), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, example.title), /*#__PURE__*/React.createElement("p", {
      className: "voice-when"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "Use for"), " ", example.when))), /*#__PURE__*/React.createElement("div", {
      className: "voice-compare",
      role: "group",
      "aria-label": `${example.title}: preferred versus avoid`
    }, /*#__PURE__*/React.createElement("div", {
      className: "example example--yes"
    }, /*#__PURE__*/React.createElement("div", {
      className: "example-head"
    }, /*#__PURE__*/React.createElement("span", null, "Yes"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => navigator.clipboard?.writeText(example.yes),
      "aria-label": `Copy the example: ${example.title}`
    }, /*#__PURE__*/React.createElement(Copy, _extends({
      size: 12
    }, thin)), " Copy")), /*#__PURE__*/React.createElement("p", {
      className: "example-copy"
    }, example.yes), /*#__PURE__*/React.createElement("p", {
      className: "voice-why"
    }, example.why)), /*#__PURE__*/React.createElement("div", {
      className: "example example--no",
      "aria-label": "Avoid this wording"
    }, /*#__PURE__*/React.createElement("div", {
      className: "example-head"
    }, /*#__PURE__*/React.createElement("span", null, "No")), /*#__PURE__*/React.createElement("p", {
      className: "example-copy"
    }, example.no)))))), /*#__PURE__*/React.createElement("section", {
      className: "band"
    }, /*#__PURE__*/React.createElement(BandHead, {
      title: "Do not cross.",
      copy: "Hard stops. If a draft hits one of these, rewrite before it leaves the desk."
    }), /*#__PURE__*/React.createElement("div", {
      className: "rule-list"
    }, toneGuardrails.map(([index, title, copy]) => /*#__PURE__*/React.createElement("div", {
      className: "rule-row",
      key: index
    }, /*#__PURE__*/React.createElement("span", null, index), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, copy))))));
  }
  function Brand({
    download,
    initialTab = 'visual'
  }) {
    const [tab, setTab] = useState(initialTab);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageIntro, {
      title: "Brand guidelines.",
      copy: "Visual identity, tone of voice and logos. Full charters downloadable below."
    }), /*#__PURE__*/React.createElement("div", {
      className: "brand-tabs",
      role: "tablist",
      "aria-label": "Brand sections"
    }, /*#__PURE__*/React.createElement("button", {
      role: "tab",
      "aria-selected": tab === 'visual',
      className: tab === 'visual' ? 'active' : '',
      onClick: () => setTab('visual')
    }, "Visual identity"), /*#__PURE__*/React.createElement("button", {
      role: "tab",
      "aria-selected": tab === 'tone',
      className: tab === 'tone' ? 'active' : '',
      onClick: () => setTab('tone')
    }, "Tone of voice"), /*#__PURE__*/React.createElement("button", {
      role: "tab",
      "aria-selected": tab === 'logos',
      className: tab === 'logos' ? 'active' : '',
      onClick: () => setTab('logos')
    }, "Logos")), tab === 'visual' && /*#__PURE__*/React.createElement(BrandVisual, {
      download: download
    }), tab === 'tone' && /*#__PURE__*/React.createElement(BrandTone, {
      download: download
    }), tab === 'logos' && /*#__PURE__*/React.createElement(BrandLogos, {
      download: download
    }));
  }
  const logoVariants = [{
    name: 'Blue-black on off-white',
    files: 'SVG · PNG · EPS',
    bg: '#FAF7F5',
    color: '#000021',
    mark: 'logotype'
  }, {
    name: 'White on blue-black',
    files: 'SVG · PNG · EPS',
    bg: '#000021',
    color: '#FAF7F5',
    mark: 'logotype'
  }, {
    name: 'Monogram, blue-black',
    files: 'SVG · PNG · EPS',
    bg: '#FFFFFF',
    color: '#000021',
    mark: 'monogram'
  }, {
    name: 'White on image',
    files: 'SVG · PNG',
    bg: '#000021',
    color: '#FFFFFF',
    mark: 'logotype',
    image: __R('app/brand/ops-floor.jpg')
  }];
  const logoUsages = [{
    key: 'lockup',
    title: 'Full lock-up',
    mark: 'lockup',
    share: 70,
    usage: 'Most used. Monogram and wordmark as one designed composition — the default for partner kits, event packs, and shared placements where both mark and name should appear together. Do not restack or re-space them.'
  }, {
    key: 'wordmark',
    title: 'Wordmark',
    mark: 'wordmark',
    share: 20,
    usage: 'Bluecrux as letterforms only — decks, documents, email headers, signatures, and page chrome when the name should read clearly without the monogram beside it.'
  }, {
    key: 'monogram',
    title: 'Monogram',
    mark: 'monogram',
    share: 10,
    usage: 'The X mark alone. Use when space is tight or the name is already nearby — favicons, app icons, avatars, social profile images, and small corner placements. Prefer this over shrinking the wordmark until it becomes hard to read.'
  }];
  const logoBgSamples = [{
    step: 0,
    mark: 'black'
  }, {
    step: 25,
    mark: 'black'
  }, {
    step: 50,
    mark: 'black'
  }, {
    step: 75,
    mark: 'white'
  }, {
    step: 100,
    mark: 'white'
  }];
  const productBrands = [{
    name: 'Binocs',
    slug: 'binocs',
    files: 'SVG · PNG'
  }, {
    name: 'Axon',
    slug: 'axon',
    files: 'SVG · PNG'
  }, {
    name: 'Helion',
    slug: 'helion',
    files: 'SVG · PNG'
  }];
  function BrandLogos({
    download
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      className: "logo-grid"
    }, logoVariants.map(variant => /*#__PURE__*/React.createElement("div", {
      className: "logo-card",
      key: variant.name
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: variant.bg,
        color: variant.color
      }
    }, variant.image && /*#__PURE__*/React.createElement("img", {
      src: variant.image,
      alt: "",
      referrerPolicy: EXTERNAL_MEDIA_REFERRER
    }), variant.mark === 'monogram' ? /*#__PURE__*/React.createElement(Monogram, null) : /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, variant.name), /*#__PURE__*/React.createElement("small", null, variant.files)), /*#__PURE__*/React.createElement("button", {
      onClick: () => download(`${variant.name} logo`)
    }, /*#__PURE__*/React.createElement(Download, _extends({
      size: 13
    }, thin)), " Download"))))), /*#__PURE__*/React.createElement("section", {
      className: "logo-specs"
    }, /*#__PURE__*/React.createElement(BandHead, {
      title: "Below this, it stops reading."
    }), /*#__PURE__*/React.createElement("div", {
      className: "spec-row spec-row--head"
    }, /*#__PURE__*/React.createElement("span", null, "Asset"), /*#__PURE__*/React.createElement("span", null, "Usage")), logoUsages.map(({
      key,
      title,
      mark,
      share,
      usage
    }) => /*#__PURE__*/React.createElement("div", {
      className: "spec-row",
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      className: "spec-asset"
    }, /*#__PURE__*/React.createElement("span", {
      className: `spec-mark spec-mark--${mark}`,
      "aria-hidden": "true"
    }, mark === 'monogram' ? /*#__PURE__*/React.createElement(Monogram, null) : mark === 'lockup' ? /*#__PURE__*/React.createElement(Logo, null) : /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("div", {
      className: "spec-asset-title"
    }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, share, "%"))), /*#__PURE__*/React.createElement("p", null, usage)))), /*#__PURE__*/React.createElement("section", {
      className: "product-brands"
    }, /*#__PURE__*/React.createElement(BandHead, {
      title: "Product brands.",
      copy: "Binocs, Axon and Helion are product brands under Bluecrux \u2014 the parent company. They share the same blue-black colour system so the house reads as one. Product names change; the house colour does not."
    }), /*#__PURE__*/React.createElement("div", {
      className: "product-logo-grid"
    }, productBrands.map(brand => /*#__PURE__*/React.createElement("div", {
      className: "logo-card product-logo-card",
      key: brand.slug
    }, /*#__PURE__*/React.createElement("div", {
      className: "product-logo-stage",
      "aria-label": `${brand.name} logo`
    }, /*#__PURE__*/React.createElement("img", {
      className: "product-logo-mark",
      src: __R(`app/brand/logo-${brand.slug}.svg`),
      alt: ""
    })), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, brand.name), /*#__PURE__*/React.createElement("small", null, brand.files)), /*#__PURE__*/React.createElement("button", {
      onClick: () => download(`${brand.name} logo`)
    }, /*#__PURE__*/React.createElement(Download, _extends({
      size: 13
    }, thin)), " Download")))))), /*#__PURE__*/React.createElement("section", {
      className: "logo-rules"
    }, /*#__PURE__*/React.createElement("section", {
      className: "logo-bg-rule"
    }, /*#__PURE__*/React.createElement("h2", null, "Background picks the version."), /*#__PURE__*/React.createElement("p", null, "Match the logotype to the field. Use black on light backgrounds through 50% intensity; switch to white once the field goes darker."), /*#__PURE__*/React.createElement("div", {
      className: "bg-version",
      role: "img",
      "aria-label": "Black logotype on light backgrounds through 50% intensity; white logotype on darker backgrounds"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-version-zones"
    }, /*#__PURE__*/React.createElement("span", null, "Light backgrounds \u2192 black"), /*#__PURE__*/React.createElement("span", {
      className: "bg-version-mid"
    }, "50%"), /*#__PURE__*/React.createElement("span", null, "Dark backgrounds \u2192 white")), /*#__PURE__*/React.createElement("div", {
      className: "bg-version-strip"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-version-half"
    }, logoBgSamples.filter(sample => sample.mark === 'black').map(({
      step
    }) => {
      const tone = Math.round(255 - step * 2.55);
      return /*#__PURE__*/React.createElement("i", {
        key: step,
        style: {
          background: `rgb(${tone}, ${tone}, ${tone})`,
          color: '#000000'
        }
      }, /*#__PURE__*/React.createElement(Logo, null));
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-version-split",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bg-version-half"
    }, logoBgSamples.filter(sample => sample.mark === 'white').map(({
      step
    }) => {
      const tone = Math.round(255 - step * 2.55);
      return /*#__PURE__*/React.createElement("i", {
        key: step,
        style: {
          background: `rgb(${tone}, ${tone}, ${tone})`,
          color: '#FFFFFF'
        }
      }, /*#__PURE__*/React.createElement(Logo, null));
    })))))));
  }
  function openExternal(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  function ImageryPage() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageIntro, {
      title: "Imagery.",
      copy: "Approved photography and motion live in Design SharePoint. Open a collection to browse and download \u2014 confirm usage rights before any external publish."
    }), /*#__PURE__*/React.createElement("p", {
      className: "library-section-hint imagery-sp-hint"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "Design SharePoint"), "Files are not stored in this hub. You need a Bluecrux Microsoft account to open collections."), /*#__PURE__*/React.createElement("section", {
      className: "imagery-collections",
      "aria-label": "Imagery collections"
    }, imageryCollections.map(item => /*#__PURE__*/React.createElement("article", {
      className: "imagery-card",
      key: item.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "imagery-card-swatch",
      style: {
        background: item.accent
      },
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "imagery-card-body"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, item.meta), /*#__PURE__*/React.createElement("h3", null, item.title), /*#__PURE__*/React.createElement("p", null, item.description), /*#__PURE__*/React.createElement("div", {
      className: "imagery-card-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "chip-button chip-button--ink",
      type: "button",
      onClick: () => openExternal(item.sharePointUrl)
    }, "Open in SharePoint ", /*#__PURE__*/React.createElement(ArrowUpRight, _extends({
      size: 13
    }, thin))), item.youtubeUrl && /*#__PURE__*/React.createElement("button", {
      className: "text-button text-button--mark",
      type: "button",
      onClick: () => openExternal(item.youtubeUrl)
    }, "Brand film on YouTube ", /*#__PURE__*/React.createElement(ArrowRight, _extends({
      size: 14
    }, thin)))))))));
  }
  const faqItems = [{
    id: 'ppt-master',
    question: 'Which PowerPoint file should I start from?',
    answer: 'Always open a new deck from PowerPoint master v4 in Templates. Do not duplicate last week’s file — old fonts and colours travel with the slides.',
    links: [{
      label: 'Templates',
      page: 'templates'
    }, {
      label: 'Tutorial',
      page: 'powerpoint'
    }]
  }, {
    id: 'templates-vs-tutorial',
    question: 'Templates or Tutorial — which do I need?',
    answer: 'Templates is the download. Tutorial walks through how the master is built: layouts, notes, and common mistakes. Grab the file first, then open Tutorial if something is unclear.',
    links: [{
      label: 'Templates',
      page: 'templates'
    }, {
      label: 'Tutorial',
      page: 'powerpoint'
    }]
  }, {
    id: 'logo-choice',
    question: 'Logotype or monogram — which logo do I use?',
    answer: 'Default to the logotype. Use the monogram only when space is tight (avatars, favicons, small corners) or when the name is already nearby. Never redraw or recolour either.',
    links: [{
      label: 'Logos',
      page: 'brand',
      brandTab: 'logos'
    }]
  }, {
    id: 'photo-rights',
    question: 'Can I use library photos externally?',
    answer: 'Approved imagery lives in Design SharePoint. Internal use first — confirm usage rights before any external publish, client-facing site, or paid media. If rights are unclear, ask the brand team before you ship.',
    links: [{
      label: 'Imagery',
      page: 'media'
    }, {
      label: 'Request a task',
      href: MONDAY_REQUEST_FORM_URL
    }]
  }, {
    id: 'fonts',
    question: 'Where do I get Helvetica and Aptos Mono?',
    answer: 'Helvetica is the display and body face; Aptos Mono is for labels and meta. Specs live in Brand guidelines. Helvetica ships with macOS (use Arial on Windows if needed); Aptos Mono comes with Microsoft 365. Do not substitute decorative lookalikes in client work.',
    links: [{
      label: 'Brand guidelines',
      page: 'brand',
      brandTab: 'visual'
    }]
  }, {
    id: 'tone-copy',
    question: 'How should we write — and what is the copy engine?',
    answer: 'Tone is Focused, Approachable, Simple. Prefer facts and outcomes over claims. The copy engine (custom GPT) lives on Tone of voice and in the AI library; the verbal charter stays the source of truth.',
    links: [{
      label: 'Tone of voice',
      page: 'brand',
      brandTab: 'tone'
    }, {
      label: 'AI library',
      page: 'ai'
    }]
  }, {
    id: 'ai-library',
    question: 'Where are AI prompts and the AI-for-brand tutorial?',
    answer: 'AI library has the ChatGPT copy engine and a link to Tutorial 04 · How to use AI for Brand.',
    links: [{
      label: 'AI library',
      page: 'ai'
    }, {
      label: 'Tutorial',
      page: 'powerpoint'
    }]
  }, {
    id: 'missing-file',
    question: 'Something is missing — what do I do?',
    answer: 'Search first, then check Resources for the full index. If it still is not there, use Request a task — it opens the Monday form. Add context, deadline and who will see the work. Submissions land on the Brand & Design board.',
    links: [{
      label: 'Resources',
      page: 'library'
    }, {
      label: 'Request a task',
      href: MONDAY_REQUEST_FORM_URL
    }]
  }, {
    id: 'full-index',
    question: 'Where is the full list of approved files?',
    answer: 'Resources is the complete index — templates, collateral (one-pagers, brochures), brand files and imagery collections. Downloads and imagery open Design SharePoint. Prefer Templates, Brand guidelines or Imagery when you already know the section; use the Collateral filter for sales and comms PDFs.',
    links: [{
      label: 'Resources',
      page: 'library'
    }]
  }];
  function Faq({
    navigate,
    openBrand
  }) {
    const runLink = link => {
      if (link.href) {
        window.open(link.href, '_blank', 'noopener,noreferrer');
        return;
      }
      if (link.brandTab) {
        openBrand(link.brandTab);
        return;
      }
      if (link.page) navigate(link.page);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageIntro, {
      title: "FAQ.",
      copy: "Short answers to the questions we hear most."
    }), /*#__PURE__*/React.createElement("section", {
      className: "band faq"
    }, /*#__PURE__*/React.createElement("div", {
      className: "faq-list"
    }, faqItems.map((item, index) => /*#__PURE__*/React.createElement("article", {
      className: "faq-item",
      key: item.id
    }, /*#__PURE__*/React.createElement("span", {
      className: "faq-index"
    }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      className: "faq-body"
    }, /*#__PURE__*/React.createElement("h2", null, item.question), /*#__PURE__*/React.createElement("p", null, item.answer), item.links && item.links.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "faq-links"
    }, item.links.map(link => /*#__PURE__*/React.createElement("button", {
      key: `${item.id}-${link.label}`,
      type: "button",
      className: "text-button",
      onClick: () => runLink(link)
    }, link.label, " ", /*#__PURE__*/React.createElement(ArrowRight, _extends({
      size: 14
    }, thin)))))))))));
  }
  function SearchOverlay({
    close,
    closing = false,
    navigate,
    openItem,
    openBrand
  }) {
    const [query, setQuery] = useState('');
    useEffect(() => {
      if (closing) return;
      const onKey = event => {
        if (event.key === 'Escape') close();
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }, [close, closing]);
    const entries = useMemo(() => {
      const pages = [{
        id: 'page-templates',
        title: 'Templates',
        label: 'Page',
        haystack: 'templates powerpoint word master',
        run: () => navigate('templates')
      }, {
        id: 'page-brand',
        title: 'Brand guidelines',
        label: 'Page',
        haystack: 'brand guidelines visual identity tone of voice charter logos',
        run: () => openBrand('visual')
      }, {
        id: 'page-media',
        title: 'Imagery',
        label: 'Page',
        haystack: 'photo film motion media stills video imagery sharepoint design photography collections',
        run: () => navigate('media')
      }, {
        id: 'page-tutorial',
        title: 'Tutorial',
        label: 'Page',
        haystack: 'tutorial powerpoint notes master how to usage walkthrough ai brand chatgpt prompts',
        run: () => navigate('powerpoint')
      }, {
        id: 'page-library',
        title: 'Resources',
        label: 'Page',
        haystack: 'library resources all files approved index collateral one-pagers brochures',
        run: () => navigate('library')
      }, {
        id: 'page-resources',
        title: 'Collateral',
        label: 'Resources',
        haystack: 'resources collateral one-pager onepager brochure leave-behind whitepaper pdf sales',
        run: () => navigate('resources')
      }, {
        id: 'page-faq',
        title: 'FAQ',
        label: 'Page',
        haystack: 'faq questions answers help how to logo fonts rights request',
        run: () => navigate('faq')
      }, {
        id: 'page-ai',
        title: 'AI library',
        label: 'Page',
        haystack: 'ai library chatgpt copy engine prompts midjourney firefly image gen illustration charts diagrams how to use ai for brand',
        run: () => navigate('ai')
      }, {
        id: 'page-tools',
        title: 'Tools',
        label: 'Page',
        haystack: 'tools external links apps',
        run: () => navigate('tools')
      }, {
        id: 'page-request',
        title: 'Request a task',
        label: 'Monday',
        haystack: 'request task ask brand team monday',
        run: openRequestForm
      }, {
        id: 'page-logos',
        title: 'Logos',
        label: 'Brand',
        haystack: 'logos logotype monogram lock-up mark wordmark binocs axon helion product brands parent company',
        run: () => openBrand('logos')
      }, {
        id: 'alias-palette',
        title: 'Colour palette',
        label: 'Brand',
        haystack: 'colour color palette blue-black blue black pistachio salvia petrol secondary primary',
        run: () => openBrand('visual')
      }, {
        id: 'alias-type',
        title: 'Helvetica / Aptos Mono',
        label: 'Brand · Type',
        haystack: 'helvetica aptos mono typography type font headings labels die grotesk riforma',
        run: () => openBrand('visual')
      }, {
        id: 'alias-tone',
        title: 'Tone of voice',
        label: 'Brand',
        haystack: 'tone voice verbal charter focused approachable simple how we write principles examples do not copy engine',
        run: () => openBrand('tone')
      }, {
        id: 'alias-copy-engine',
        title: 'Copy engine',
        label: 'AI',
        haystack: 'copy engine custom gpt chatgpt draft writing tone',
        run: () => navigate('ai')
      }, {
        id: 'alias-film',
        title: 'Motion & brand film',
        label: 'Imagery',
        haystack: 'film motion video brand film loops youtube sharepoint',
        run: () => navigate('media')
      }];
      const items = libraryItems.map(item => ({
        id: item.id,
        title: item.title,
        label: sectionLabels[item.section],
        haystack: `${item.title} ${item.description} ${sectionLabels[item.section]} ${item.templateKind ?? ''} ${item.action}`,
        run: () => openItem(item)
      }));
      return [...pages, ...items];
    }, [navigate, openBrand, openItem]);
    const results = useMemo(() => {
      const q = query.trim().toLowerCase();
      if (!q) {
        const startIds = ['page-templates', 'page-brand', 'page-media', 'page-tutorial', 'page-library', 'page-faq', 'page-ai'];
        return startIds.map(id => entries.find(entry => entry.id === id)).filter(entry => Boolean(entry));
      }
      return entries.filter(entry => `${entry.title} ${entry.label} ${entry.haystack}`.toLowerCase().includes(q));
    }, [entries, query]);
    const suggestions = useMemo(() => {
      if (!query.trim() || results.length > 0) return [];
      const q = query.trim().toLowerCase();
      const synonymMap = [[['ppt', 'pptx', 'slides', 'deck', 'powerpoint', 'presentation'], 'powerpoint'], [['logo', 'logotype', 'mark', 'monogram', 'svg'], 'logo'], [['photo', 'photos', 'image', 'images', 'still', 'stills', 'picture'], 'photo'], [['film', 'video', 'motion', 'reel', 'loop'], 'film'], [['colour', 'color', 'palette', 'swatch'], 'colour'], [['font', 'type', 'typography', 'helvetica', 'aptos', 'die grotesk', 'riforma'], 'type'], [['tone', 'voice', 'copy', 'writing', 'verbal'], 'tone'], [['one-pager', 'onepager', 'brochure', 'leave-behind', 'whitepaper', 'collateral', 'resources', 'pdf'], 'resources'], [['request', 'ask', 'help', 'monday', 'task'], 'request'], [['tutorial', 'howto', 'how to', 'guide', 'walkthrough'], 'tutorial'], [['faq', 'question', 'questions', 'answers'], 'faq'], [['ai', 'chatgpt', 'midjourney', 'firefly', 'prompt', 'prompts', 'image gen', 'copy engine'], 'ai']];
      const matchedKeys = synonymMap.filter(([keys]) => keys.some(key => q.includes(key) || key.includes(q))).map(([, token]) => token);
      const scored = entries.map(entry => {
        const hay = `${entry.title} ${entry.label} ${entry.haystack}`.toLowerCase();
        let score = 0;
        for (const token of matchedKeys) {
          if (hay.includes(token)) score += 3;
        }
        const words = q.split(/\s+/).filter(Boolean);
        for (const word of words) {
          if (word.length < 2) continue;
          if (hay.includes(word)) score += 2;else if (entry.title.toLowerCase().startsWith(word.slice(0, 3))) score += 1;
        }
        return {
          entry,
          score
        };
      }).filter(row => row.score > 0).sort((a, b) => b.score - a.score).slice(0, 3).map(row => row.entry);
      return scored;
    }, [entries, query, results.length]);
    const runAndClose = run => {
      run();
      close();
    };
    return /*#__PURE__*/React.createElement("div", {
      className: `search-overlay${closing ? ' is-closing' : ''}`,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Search the library",
      onMouseDown: event => {
        if (closing) return;
        const target = event.target;
        if (target.closest('button, a, input, textarea, select, label')) return;
        if (target.closest('.search-results, .search-suggest')) return;
        close();
      }
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: close,
      disabled: closing
    }, "Close ", /*#__PURE__*/React.createElement(X, _extends({
      size: 15
    }, thin)))), /*#__PURE__*/React.createElement("div", {
      className: "search-body"
    }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement(Search, _extends({
      size: 26
    }, thin)), /*#__PURE__*/React.createElement("input", {
      autoFocus: true,
      value: query,
      onChange: event => setQuery(event.target.value),
      placeholder: "Search the library",
      "aria-label": "Search the library",
      disabled: closing
    })), /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, query ? `${results.length} result${results.length === 1 ? '' : 's'}` : 'Start here'), results.length > 0 ? /*#__PURE__*/React.createElement("div", {
      className: "search-results"
    }, results.slice(0, 8).map((item, index) => /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => runAndClose(item.run),
      disabled: closing
    }, /*#__PURE__*/React.createElement("span", null, String(index + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("small", null, item.label), /*#__PURE__*/React.createElement("h3", null, item.title)), /*#__PURE__*/React.createElement(ArrowUpRight, _extends({
      size: 18
    }, thin))))) : /*#__PURE__*/React.createElement("div", {
      className: "search-empty-block"
    }, /*#__PURE__*/React.createElement("p", {
      className: "search-empty"
    }, "Nothing matches."), suggestions.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "search-suggest"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, "Did you mean"), suggestions.map(item => /*#__PURE__*/React.createElement("button", {
      key: item.id,
      type: "button",
      onClick: () => runAndClose(item.run),
      disabled: closing
    }, /*#__PURE__*/React.createElement("small", null, item.label), /*#__PURE__*/React.createElement("strong", null, item.title)))), /*#__PURE__*/React.createElement("p", {
      className: "search-empty-hint"
    }, "Try a shorter word, or open a request.")), /*#__PURE__*/React.createElement("button", {
      className: "text-button",
      onClick: () => runAndClose(openRequestForm),
      disabled: closing
    }, "Not here? Open a request ", /*#__PURE__*/React.createElement(ArrowRight, _extends({
      size: 14
    }, thin)))));
  }
  const menuEntries = [{
    page: 'templates',
    index: '00',
    copy: 'PowerPoint and Word.'
  }, {
    page: 'brand',
    index: '01',
    copy: 'Visual identity, tone and logos.'
  }, {
    page: 'media',
    index: '02',
    copy: 'Photography and motion in Design SharePoint.'
  }, {
    page: 'powerpoint',
    index: '03',
    copy: 'PowerPoint master and AI-for-brand guide.'
  }, {
    page: 'library',
    index: '04',
    copy: 'Templates, collateral, brand and imagery.'
  }, {
    page: 'faq',
    index: '05',
    copy: 'Short answers to common questions.'
  }, {
    page: 'ai',
    index: '06',
    copy: 'Copy engine, AI tutorial.'
  }, {
    page: 'tools',
    index: '07',
    copy: 'External tools, one click away.'
  }];
  // Add external tools here: { id, title, copy, href }
  const toolItems = [{
    id: 'social-studio',
    title: 'Social Studio',
    copy: 'Build on-brand social visuals: LinkedIn posts, carousels and other formats, with headline, quote, stats or list layouts, brand pictures and colours. Preview as artwork, mockup or animation, then export.',
    cta: 'Open Social Studio',
    href: 'https://social-studio-wine.vercel.app'
  }];
  function ToolPreview({
    href,
    title
  }) {
    const W = 1440,
      H = 900;
    const box = useRef(null);
    const [scale, setScale] = useState(0.4);
    useEffect(() => {
      if (!box.current) return;
      const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / W));
      ro.observe(box.current);
      return () => ro.disconnect();
    }, []);
    return /*#__PURE__*/React.createElement("a", {
      ref: box,
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `Open ${title}`,
      style: {
        display: 'block',
        position: 'relative',
        width: '100%',
        aspectRatio: `${W} / ${H}`,
        overflow: 'hidden',
        background: '#faf7f5',
        border: '1px solid rgba(0,0,33,.14)',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("iframe", {
      src: href,
      title: `${title} preview`,
      loading: "lazy",
      tabIndex: -1,
      style: {
        width: W,
        height: H,
        border: 0,
        transform: `scale(${scale})`,
        transformOrigin: '0 0',
        pointerEvents: 'none'
      }
    }));
  }
  function Tools() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageIntro, {
      title: "Tools.",
      copy: "External tools used with the brand. Each one opens in a new tab."
    }), /*#__PURE__*/React.createElement("section", {
      className: "band faq"
    }, /*#__PURE__*/React.createElement("div", {
      className: "faq-list"
    }, toolItems.map((item, index) => /*#__PURE__*/React.createElement("article", {
      className: "faq-item",
      key: item.id
    }, /*#__PURE__*/React.createElement("span", {
      className: "faq-index"
    }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      className: "faq-body"
    }, /*#__PURE__*/React.createElement(ToolPreview, {
      href: item.href,
      title: item.title
    }), /*#__PURE__*/React.createElement("h2", null, item.title), /*#__PURE__*/React.createElement("p", null, item.copy), /*#__PURE__*/React.createElement("div", {
      className: "faq-links"
    }, /*#__PURE__*/React.createElement("a", {
      className: "text-button",
      href: item.href,
      target: "_blank",
      rel: "noopener noreferrer"
    }, item.cta ?? 'Open', " ", /*#__PURE__*/React.createElement(ArrowUpRight, _extends({
      size: 14
    }, thin))))))))));
  }
  function MenuPanel({
    close,
    navigate,
    openSearch,
    closing = false
  }) {
    useEffect(() => {
      if (closing) return;
      const onKey = event => {
        if (event.key === 'Escape') close();
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }, [close, closing]);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: `menu-backdrop${closing ? ' is-closing' : ''}`,
      onClick: close,
      "aria-label": "Close the menu",
      disabled: closing
    }), /*#__PURE__*/React.createElement("div", {
      className: `menu-panel${closing ? ' is-closing' : ''}`,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Menu"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("button", {
      onClick: close,
      disabled: closing
    }, "Close ", /*#__PURE__*/React.createElement(X, _extends({
      size: 15
    }, thin)))), /*#__PURE__*/React.createElement("nav", null, menuEntries.map(entry => /*#__PURE__*/React.createElement("button", {
      key: entry.page,
      onClick: () => navigate(entry.page),
      disabled: closing
    }, /*#__PURE__*/React.createElement("span", null, entry.index), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, pageLabels[entry.page]), /*#__PURE__*/React.createElement("small", null, entry.copy)), /*#__PURE__*/React.createElement(ArrowUpRight, _extends({
      size: 18
    }, thin))))), /*#__PURE__*/React.createElement("div", {
      className: "menu-foot"
    }, /*#__PURE__*/React.createElement("button", {
      className: "chip-button",
      onClick: () => {
        close();
        openSearch();
      },
      disabled: closing
    }, "Search ", /*#__PURE__*/React.createElement(Search, _extends({
      size: 13
    }, thin))), /*#__PURE__*/React.createElement("button", {
      className: "chip-button",
      onClick: openRequestForm,
      disabled: closing
    }, "Request a task ", /*#__PURE__*/React.createElement(ArrowUpRight, _extends({
      size: 13
    }, thin))))));
  }
  function App() {
    const [page, setPage] = useState('home');
    const [brandTab, setBrandTab] = useState('visual');
    const [tutorialId, setTutorialId] = useState();
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchClosing, setSearchClosing] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuClosing, setMenuClosing] = useState(false);
    const [toast, setToast] = useState('');
    const menuTimer = useRef(null);
    const searchTimer = useRef(null);
    const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const closeMenu = () => {
      if (!menuOpen || menuClosing) return;
      if (prefersReducedMotion()) {
        setMenuOpen(false);
        setMenuClosing(false);
        return;
      }
      setMenuClosing(true);
      if (menuTimer.current) window.clearTimeout(menuTimer.current);
      menuTimer.current = window.setTimeout(() => {
        setMenuOpen(false);
        setMenuClosing(false);
        menuTimer.current = null;
      }, 320);
    };
    const closeSearch = () => {
      if (!searchOpen || searchClosing) return;
      if (prefersReducedMotion()) {
        setSearchOpen(false);
        setSearchClosing(false);
        return;
      }
      setSearchClosing(true);
      if (searchTimer.current) window.clearTimeout(searchTimer.current);
      searchTimer.current = window.setTimeout(() => {
        setSearchOpen(false);
        setSearchClosing(false);
        searchTimer.current = null;
      }, 320);
    };
    const openSearch = () => {
      if (searchTimer.current) window.clearTimeout(searchTimer.current);
      setSearchClosing(false);
      setSearchOpen(true);
    };
    const openMenu = () => {
      if (menuTimer.current) window.clearTimeout(menuTimer.current);
      setMenuClosing(false);
      setMenuOpen(true);
    };
    useEffect(() => () => {
      if (menuTimer.current) window.clearTimeout(menuTimer.current);
      if (searchTimer.current) window.clearTimeout(searchTimer.current);
    }, []);
    useEffect(() => {
      const onKey = event => {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
          event.preventDefault();
          openSearch();
        }
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }, []);
    const navigate = next => {
      setTutorialId(undefined);
      setPage(next);
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
      if (menuOpen) closeMenu();
      if (searchOpen) closeSearch();
    };
    const download = (name, url) => {
      const href = url ?? downloadLinks[name] ?? (name === 'PowerPoint master v4' ? SHAREPOINT_PPT_MASTER : undefined);
      if (href) {
        window.open(href, '_blank', 'noopener,noreferrer');
        setToast(`${name} · opening SharePoint`);
        window.setTimeout(() => setToast(''), 2800);
        return;
      }
      setToast(`${name} · not linked yet`);
      window.setTimeout(() => setToast(''), 3200);
    };
    const openTutorial = id => {
      setTutorialId(id);
      setPage('powerpoint');
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
      if (menuOpen) closeMenu();
      if (searchOpen) closeSearch();
    };
    const openBrand = tab => {
      setBrandTab(tab);
      navigate('brand');
    };
    const openMedia = () => {
      navigate('media');
    };
    const openItem = item => {
      if (item.action === 'Download') {
        download(item.title, item.downloadUrl);
        return;
      }
      if (item.id === 'tone-guide') {
        openBrand('tone');
        return;
      }
      if (item.id === 'visual-system') {
        openBrand('visual');
        return;
      }
      if (item.id === 'logo-pack') {
        openBrand('logos');
        return;
      }
      if (item.id === 'video-library' || item.id === 'photo-library') {
        openMedia();
        return;
      }
      navigate(item.section);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "site"
    }, /*#__PURE__*/React.createElement("header", {
      className: "site-header"
    }, /*#__PURE__*/React.createElement("button", {
      className: "brand",
      onClick: () => navigate('home'),
      "aria-label": "Bluecrux brand library, home"
    }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("span", {
      className: "brand-tag"
    }, "/ Brand library")), page !== 'home' && /*#__PURE__*/React.createElement("span", {
      className: "header-here"
    }, "/ ", pageLabels[page]), /*#__PURE__*/React.createElement("div", {
      className: "header-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "header-link",
      onClick: openSearch
    }, "Search ", /*#__PURE__*/React.createElement(Search, _extends({
      size: 13
    }, thin))), /*#__PURE__*/React.createElement("button", {
      className: "header-link header-link--underline header-link--request",
      onClick: openRequestForm
    }, "Request a task"), /*#__PURE__*/React.createElement("button", {
      className: "header-link",
      onClick: openMenu
    }, "Menu"))), /*#__PURE__*/React.createElement("main", null, page === 'home' && /*#__PURE__*/React.createElement(Home, {
      navigate: navigate,
      openSearch: openSearch,
      download: download
    }), (page === 'library' || page === 'resources') && /*#__PURE__*/React.createElement(Library, {
      key: page,
      openItem: openItem,
      openTutorial: () => navigate('powerpoint'),
      initialFilter: page === 'resources' ? 'resources' : 'all'
    }), page === 'templates' && /*#__PURE__*/React.createElement(Templates, {
      navigate: navigate,
      openItem: openItem
    }), page === 'powerpoint' && /*#__PURE__*/React.createElement(PowerPoint, {
      download: download,
      initialTutorialId: tutorialId,
      key: tutorialId ?? 'default'
    }), page === 'brand' && /*#__PURE__*/React.createElement(Brand, {
      download: download,
      initialTab: brandTab,
      key: brandTab
    }), page === 'media' && /*#__PURE__*/React.createElement(ImageryPage, null), page === 'faq' && /*#__PURE__*/React.createElement(Faq, {
      navigate: navigate,
      openBrand: openBrand
    }), page === 'ai' && /*#__PURE__*/React.createElement(AiLibrary, {
      openTutorial: openTutorial
    }), page === 'tools' && /*#__PURE__*/React.createElement(Tools, null)), /*#__PURE__*/React.createElement("footer", {
      className: "site-footer"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "footer-brand"
    }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("span", {
      className: "brand-tag"
    }, "/ Brand library")), /*#__PURE__*/React.createElement("p", null, "Internal use only \xB7 Graphic charter v4 \xB7 Verbal charter v1")), /*#__PURE__*/React.createElement("button", {
      onClick: openRequestForm
    }, "Contact the brand team ", /*#__PURE__*/React.createElement(ArrowUpRight, _extends({
      size: 14
    }, thin)))), searchOpen && /*#__PURE__*/React.createElement(SearchOverlay, {
      close: closeSearch,
      closing: searchClosing,
      navigate: navigate,
      openItem: openItem,
      openBrand: openBrand
    }), menuOpen && /*#__PURE__*/React.createElement(MenuPanel, {
      close: closeMenu,
      navigate: navigate,
      openSearch: openSearch,
      closing: menuClosing
    }), toast && /*#__PURE__*/React.createElement("div", {
      className: "download-toast",
      role: "status"
    }, /*#__PURE__*/React.createElement(Check, _extends({
      size: 14
    }, thin)), " ", toast));
  }
  return {
    default: App
  };
})();
const BrandHub = __app.default;
ReactDOM.createRoot(document.getElementById('bx-brand-hub')).render(React.createElement(BrandHub));
})();
