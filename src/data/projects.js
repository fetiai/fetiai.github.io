/**
 * Canonical project data for the site.
 *
 * MIRROR: `profile/README.md` in the `fetiai/.github` repository renders this same
 * content by hand. When anything here changes, change the matching block there and
 * ship both together, or the two surfaces drift.
 *
 * @typedef {Object} TechItem
 * @property {string}      name  Display name, e.g. "SvelteKit"
 * @property {string|null} logo  Path under /logos/, or null to render a letter tile
 * @property {string=}     logoDark  Variant used on the dark theme, where the brand
 *                                   colour is too dark to read on the card surface
 *
 * @typedef {Object} ProjectVideo
 * @property {string} mp4
 * @property {string} webm
 * @property {string} poster
 * @property {number} seconds
 *
 * @typedef {Object} ProjectLinks
 * @property {string} live
 * @property {{label: string, href: string}[]} repos
 * @property {string} report
 *
 * @typedef {Object} MetricRow
 * @property {string} model
 * @property {number} accuracy
 * @property {number} recall
 * @property {number} f1
 *
 * @typedef {Object} ProjectMetrics
 * @property {number}      baseline
 * @property {string}      baselineNote
 * @property {MetricRow[]} rows
 *
 * @typedef {Object} Project
 * @property {string}          slug
 * @property {string}          name
 * @property {string}          tagline
 * @property {string}          description
 * @property {string[]}        algorithms
 * @property {TechItem[]}      techStack
 * @property {ProjectVideo}    video
 * @property {ProjectLinks}    links
 * @property {ProjectMetrics=} metrics
 * @property {{value: string, label: string}[]=} facts  Domain figures for the card's
 *           details strip. Used where a project has no single headline metric.
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: 'magic-cube',
    name: 'Magic Cube Solver',
    tagline: 'Six search algorithms racing a 5×5×5 diagonal magic cube — replayed move by move.',
    description:
      'A 5×5×5 diagonal magic cube has 125 cells that must be a permutation of 1..125, ' +
      'with all 109 rows, columns, pillars and diagonals summing to 315. Six local-search ' +
      'and metaheuristic algorithms attack it server-side in Go, and the browser replays ' +
      'the resulting swap log on a scrubber against a live objective-value plot.',
    algorithms: [
      'Steepest Ascent Hill Climbing',
      'Hill Climbing with Sideways Move',
      'Random Restart Hill Climbing',
      'Stochastic Hill Climbing',
      'Simulated Annealing',
      'Genetic Algorithm',
    ],
    techStack: [
      { name: 'Go', logo: '/logos/go.svg' },
      // Fiber ships no official brand mark, so this one renders as a letter tile.
      { name: 'Fiber', logo: null },
      { name: 'SvelteKit', logo: '/logos/svelte.svg' },
      { name: 'Three.js', logo: '/logos/threejs.svg', logoDark: '/logos/threejs-dark.svg' },
      { name: 'Chart.js', logo: '/logos/chartjs.svg' },
      { name: 'Tailwind', logo: '/logos/tailwind.svg' },
      { name: 'Vite', logo: '/logos/vite.svg' },
      { name: 'Docker', logo: '/logos/docker.svg' },
    ],
    video: {
      mp4: '/video/magic-cube.mp4',
      webm: '/video/magic-cube.webm',
      poster: '/video/magic-cube.jpg',
      seconds: 18,
    },
    // A solver has no single headline number the way a classifier does, so the card
    // carries the shape of the problem instead.
    facts: [
      { value: '125', label: 'cells, a permutation of 1..125' },
      { value: '109', label: 'sums that must all match' },
      { value: '315', label: 'the magic constant' },
    ],
    links: {
      live: 'https://fetiai.github.io/magic-cube/',
      repos: [
        { label: 'Front end', href: 'https://github.com/fetiai/magic-cube' },
        { label: 'Solver API', href: 'https://github.com/fetiai/magic-cube-core' },
      ],
      report:
        'https://github.com/fetiai/magic-cube/blob/master/doc/Tubes1_Kelompok16_18222023_18222056_18222059_18222063.pdf',
    },
  },
  {
    slug: 'phishing-url-classifier',
    name: 'Phishing URL Classifier',
    tagline: 'Two algorithms, each written twice — and the baseline that keeps them honest.',
    description:
      'The UCI PhiUSIIL corpus runs 140,404 URLs deep and only 7.5% of it is hostile — ' +
      'which is exactly why accuracy flatters here and recall does the real work. KNN ' +
      'and Gaussian Naive Bayes are each built twice across its 49 features, once from ' +
      'scratch and once from scikit-learn, so every number has a reference to answer to.',
    algorithms: [
      'K-Nearest Neighbors (from scratch)',
      'K-Nearest Neighbors (scikit-learn)',
      'Gaussian Naive Bayes (from scratch)',
      'Gaussian Naive Bayes (scikit-learn)',
      'EDA',
      'Feature Engineering',
      'SMOTE',
    ],
    techStack: [
      { name: 'Python', logo: '/logos/python.svg' },
      { name: 'scikit-learn', logo: '/logos/scikit-learn.svg' },
      { name: 'NumPy', logo: '/logos/numpy.svg', logoDark: '/logos/numpy-dark.svg' },
      { name: 'pandas', logo: '/logos/pandas.svg', logoDark: '/logos/pandas-dark.svg' },
      { name: 'SciPy', logo: '/logos/scipy.svg' },
      { name: 'Streamlit', logo: '/logos/streamlit.svg' },
      { name: 'Jupyter', logo: '/logos/jupyter.svg' },
      { name: 'Docker', logo: '/logos/docker.svg' },
    ],
    video: {
      mp4: '/video/phishing-url-classifier.mp4',
      webm: '/video/phishing-url-classifier.webm',
      poster: '/video/phishing-url-classifier.jpg',
      seconds: 20,
    },
    links: {
      live: 'https://phiusiil.faizath.com',
      repos: [{ label: 'Repository', href: 'https://github.com/fetiai/phishing-url-classifier' }],
      report:
        'https://github.com/fetiai/phishing-url-classifier/blob/main/doc/Tubes2_Kelompok16_18222023_18222056_18222059_18222063.pdf',
    },
    metrics: {
      baseline: 0.9248,
      baselineNote: 'A constant "legitimate" predictor scores this.',
      rows: [
        { model: 'KNN (from scratch)', accuracy: 0.9805, recall: 0.759, f1: 0.856 },
        { model: 'KNN (scikit-learn)', accuracy: 0.9807, recall: 0.763, f1: 0.859 },
        { model: 'Gaussian NB (from scratch)', accuracy: 0.9779, recall: 0.788, f1: 0.845 },
        { model: 'Gaussian NB (scikit-learn)', accuracy: 0.9819, recall: 0.888, f1: 0.883 },
      ],
    },
  },
];

/** Shown wherever a classifier accuracy appears. */
export const classifierDisclaimer =
  'Coursework reimplementation — not a security product. Do not use it to decide whether a link is safe.';
