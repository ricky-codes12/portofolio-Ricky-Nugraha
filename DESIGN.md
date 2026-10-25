# Portfolio design

## Intent
Help recruiters assess Ricky's application development work quickly, with clear ownership and real application screenshots. Position the profile around React, full-stack development and AI integration.

## Visual direction
Preserve the established dark and light themes, existing typography, cyan/violet accents and rounded surfaces. Keep the hero compact and let project screenshots provide the visual emphasis. Avoid decorative counters and unsupported claims.

## Tokens and ownership
`src/styles/main.scss` owns the existing CSS variables, fonts, theme selectors and shared surfaces. `src/styles/portfolio-refresh.scss` contains the scoped refresh mixin, included after the base rules. Use `--ink`, `--muted`, `--line`, `--brand-strong`, `--panel-solid`, `--soft` and `--tint` rather than creating a second palette. Existing Button, Badge, CVPicker and ProjectDetails components remain canonical.

## Layout and content
Order: hero, selected projects, project catalogue, about, skills, experience, education, certificates, contact. Lead with Warga BNH (personal) and Hexa.Simulator (company); distinguish ownership in text. Link screenshots to actual images and simulator details to the existing gallery dialog. Keep the full project catalogue accessible below selected work.

## Interaction and accessibility
Native links for navigation, buttons for dialogs. Preserve visible keyboard focus, Escape behavior and labelled controls. Collapse project columns to one on phones. Respect reduced motion in hero entrance effects and avoid perpetual hero animation. Support Indonesian, English, Chinese and Arabic, including RTL layout.

## CV constraint
The October 25 CV PDFs, public filenames, cache versions, CVPicker behavior and chat download actions are preserved by this refresh. Do not rewrite CV contents as part of visual changes.

## Verification
Run build, lint and diff checks. Exercise both themes, four locales, desktop and phone layouts, featured project actions and CV menus in a browser. Compare SHA-256 hashes of CV files and shared CV code with the pre-change baseline.
