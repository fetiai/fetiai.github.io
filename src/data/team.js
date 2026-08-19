/**
 * The group roster, in ascending NIM order — the same order used by both project
 * repositories and by the report filename. Deliberately not reordered to spell F.E.T.I.
 *
 * MIRROR: the team table in `profile/README.md` of the `fetiai/.github` repository.
 *
 * Handles are case-sensitive, and a LinkedIn slug is not always the GitHub handle
 * (Thalita is `thalitazhrr` on GitHub but `thalitazahras` on LinkedIn).
 *
 * @typedef {Object} Member
 * @property {string} name
 * @property {string} nim
 * @property {string} github    GitHub handle, without the @
 * @property {string} linkedin  LinkedIn slug
 */

/** @type {Member[]} */
export const team = [
  { name: 'Thalita Zahra Sutejo', nim: '18222023', github: 'thalitazhrr', linkedin: 'thalitazahras' },
  { name: 'Irfan Musthofa', nim: '18222056', github: 'IrfanMusthofa', linkedin: 'irfanmusthofa' },
  { name: 'Eleanor Cordelia', nim: '18222059', github: 'EleanorCordelia', linkedin: 'eleanorcordelia' },
  { name: 'Muhammad Faiz Atharrahman', nim: '18222063', github: 'faizath', linkedin: 'faizath' },
];

/** The acronym the group name is built from, in roster order. */
export const acronym = [
  { initial: 'F', rest: 'aiz' },
  { initial: 'E', rest: 'leanor' },
  { initial: 'T', rest: 'halita' },
  { initial: 'I', rest: 'rfan' },
];

export const course = {
  code: 'IF3070',
  name: 'Foundations of Artificial Intelligence',
  institution: 'STEI ITB',
  year: '2024/2025-1',
  group: '16',
};
