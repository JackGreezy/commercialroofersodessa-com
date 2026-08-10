import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(file);
    return file.endsWith('.html') ? [file] : [];
  });
}

const files = walk(publicDir);
const stylesheet = '<link href="/odessa-funnel.css" id="odessa-funnel-css" rel="stylesheet">';
const headerHelp = '<li class="odessa-header-help"><a href="/contact?request=emergency">Roof Help</a></li>';
const stickyHelp = '<a class="odessa-sticky-help" href="/contact?request=emergency" aria-label="Request emergency commercial roof help">Roof Help</a>';
const map = '<iframe title="Commercial Roofers of Odessa location map" src="https://www.google.com/maps?q=200%20N%20Grant%20Ave%2C%20Suite%20700%2C%20Odessa%2C%20TX%2079761&amp;output=embed" width="100%" height="320" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';

function leadForm() {
  return `<form action="/api/submit" method="post" data-contact-form>
    <input type="hidden" name="page" value="/">
    <input type="text" name="_company" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden">
    <label>First name<input name="firstName" type="text" autocomplete="given-name" required></label>
    <label>Last name<input name="lastName" type="text" autocomplete="family-name" required></label>
    <label>Email<input name="emailAddress" type="email" autocomplete="email" required></label>
    <label>Phone<input name="phoneNumber" type="tel" autocomplete="tel" required></label>
    <label>What do you need?<select name="serviceType" required><option value="">Choose one</option><option>Emergency roof leak or storm damage</option><option>Commercial flat roof inspection</option><option>Commercial roof repair</option><option>Preventive maintenance service agreement</option><option>Roof coating or restoration review</option><option>Commercial roof replacement planning</option><option>Not sure yet</option></select></label>
    <label>Timing<select name="timeline" required><option value="">Choose one</option><option>Emergency - active leak</option><option>Within 30 days</option><option>1-3 months</option><option>3-6 months</option><option>Planning or budgeting</option></select></label>
    <label class="odessa-form-wide">Building address<input name="propertyAddress" type="text" autocomplete="street-address"></label>
    <label class="odessa-form-wide">What is happening?<textarea name="projectDetails" rows="5" required></textarea></label>
    <button type="submit">Request Commercial Roof Help</button>
    <p class="odessa-form-status" data-form-status role="status" aria-live="polite"></p>
  </form>`;
}

const homepage = `<main class="odessa-main">
  <section class="odessa-hero" data-rr-band="roof-help">
    <div class="odessa-hero__media">
      <img src="/ours/services/commercial-roof-inspection-commercial-roofers-odessa-tx.webp" alt="Commercial roof inspection on an Odessa metal roof" width="2400" height="1600" fetchpriority="high">
      <div class="odessa-hero__copy">
        <span class="odessa-kicker">Commercial Roofers of Odessa</span>
        <h1>Commercial Roof Help in Odessa</h1>
        <p>Active leak, aging flat roof, storm damage, coating question, or replacement budget. Start with the roof problem in front of you. We will help move it toward a clear next step.</p>
        <div class="odessa-hero__buttons">
          <a class="odessa-button" href="/contact?request=emergency">Report a Roof Problem</a>
          <a class="odessa-button odessa-button--outline" href="/contact?request=inspection">Request a Flat Roof Inspection</a>
        </div>
      </div>
    </div>
    <aside class="odessa-hero__actions" aria-label="Commercial roof help paths">
      <article><span>Water is coming in</span><h2>Start with the leak.</h2><p>Send the building address, leak area, access notes, and photos if available.</p><a href="/contact?request=emergency">Request emergency roof help</a></article>
      <article><span>Repair or replace?</span><h2>Inspect before you price the answer.</h2><p>Document moisture, drainage, details, and remaining service life before committing capital.</p><a href="/contact?request=inspection">Request an inspection</a></article>
      <article><span>Tired of surprise calls?</span><h2>Put the roof on a service plan.</h2><p>Track inspections, repairs, drainage work, photos, and priorities under one agreement.</p><a href="/contact?request=service">Ask about roof service</a></article>
    </aside>
  </section>

  <nav class="odessa-decision-strip" aria-label="Commercial roofing priorities">
    <a href="/services/commercial-roof-leak-repair"><span>Active problem</span><strong>Commercial roof repair</strong></a>
    <a href="/services/commercial-roof-inspection"><span>Need the facts</span><strong>Flat roof inspection and report</strong></a>
    <a href="/services/silicone-roof-coatings"><span>Extend roof life</span><strong>Coating and restoration review</strong></a>
    <a href="/services/commercial-reroofing"><span>Capital project</span><strong>Reroofing and replacement</strong></a>
  </nav>

  <section class="odessa-story">
    <div><span class="odessa-kicker">The first call</span><h2>Stop the leak. See the whole roof.</h2></div>
    <div class="odessa-story__body"><p>A repair call should solve today without hiding tomorrow.</p><p>Commercial Roofers of Odessa helps owners and facility teams connect the immediate roof problem to the bigger decision. The answer may be a focused repair. It may be a coating, recover system, or planned replacement. The roof condition, wet insulation, drainage, details, operations, and budget should decide.</p><a class="odessa-button" href="/contact?request=roof-help">Tell Us What the Roof Is Doing</a></div>
  </section>

  <section class="odessa-inspection">
    <div class="odessa-inspection__image"><img src="/ours/services/commercial-roof-leak-repair-commercial-roofers-odessa-tx.webp" alt="Commercial flat roof leak investigation" width="1800" height="1200" loading="lazy"></div>
    <div class="odessa-inspection__copy">
      <span class="odessa-kicker">Flat roof replacement inspection</span>
      <h2>Know what failed before you buy a new roof.</h2>
      <p>A replacement estimate without a roof condition picture leaves too much unanswered. Start with evidence that helps separate repairable areas from wet or failed assemblies.</p>
      <ul class="odessa-checks"><li>Leak history and visible failure points</li><li>Membrane, flashing, penetrations, and edge conditions</li><li>Drainage, ponding, and roof access</li><li>Repair, coating, recover, or replacement direction</li></ul>
      <a class="odessa-button" href="/contact?request=inspection">Request a Commercial Roof Inspection</a>
    </div>
  </section>

  <section class="odessa-service-plan">
    <img src="/ours/services/preventive-maintenance-programs-commercial-roofers-odessa-tx.webp" alt="Preventive commercial roof maintenance" width="1024" height="768" loading="lazy">
    <div class="odessa-service-plan__card"><span class="odessa-kicker">Roof service agreements</span><h2>Get ahead of the next leak.</h2><p>A service agreement gives the roof a record. Inspections, repairs, drainage observations, photos, and budget priorities stay connected instead of disappearing after each call.</p><p>Use that history to control service work now and prepare for coating, recover, or replacement later.</p><a class="odessa-button" href="/contact?request=service">Ask About a Service Agreement</a></div>
  </section>

  <section class="odessa-options">
    <div class="odessa-options__head"><div><span class="odessa-kicker">Spend where it matters</span><h2>Repair, restore, or reroof.</h2></div><p>The cheapest proposal is not automatically the lowest roof cost. Compare the options against current moisture, remaining service life, disruption, warranty goals, and the time you expect to own the building.</p></div>
    <div class="odessa-options__grid">
      <article><span>Focused scope</span><h3>Repair</h3><p>Best when failures are limited and the surrounding roof still has useful service life.</p><a href="/services/commercial-roof-leak-repair">Explore commercial roof repair</a></article>
      <article><span>Restoration path</span><h3>Coat</h3><p>Worth reviewing when the existing roof is dry, stable, cleanable, and compatible with the proposed coating system.</p><a href="/services/silicone-roof-coatings">Explore roof coatings</a></article>
      <article><span>Capital path</span><h3>Reroof</h3><p>Needed when wet insulation, repeated failures, poor details, or end-of-life conditions make continued repair a bad trade.</p><a href="/services/commercial-reroofing">Plan commercial reroofing</a></article>
    </div>
  </section>

  <section class="odessa-markets">
    <span class="odessa-kicker">Odessa buildings</span><h2>Roof work has to respect the operation below it.</h2>
    <div class="odessa-markets__grid">
      <article class="odessa-market"><img src="/ours/project-types/warehouse-roofing-commercial-roofers-odessa-tx.webp" alt="Warehouse commercial roofing in Odessa" width="2400" height="1600" loading="lazy"><div class="odessa-market__copy"><h3>Warehouses and distribution</h3><p>Large roof areas, active docks, equipment, drainage, and tight access windows.</p><a href="/project-types/warehouse-roofing">Warehouse roofing</a></div></article>
      <article class="odessa-market"><img src="/ours/project-types/manufacturing-plant-roofing-commercial-roofers-odessa-tx.webp" alt="Industrial and manufacturing roof work in Odessa" width="2400" height="1600" loading="lazy"><div class="odessa-market__copy"><h3>Industrial and oilfield facilities</h3><p>Roof scopes that account for production, safety, penetrations, heat, wind, and dust.</p><a href="/project-types/manufacturing-plant-roofing">Industrial roofing</a></div></article>
      <article class="odessa-market"><img src="/ours/industries/property-management-firms-commercial-roofers-odessa-tx.webp" alt="Commercial roof planning for Odessa property managers" width="2400" height="1600" loading="lazy"><div class="odessa-market__copy"><h3>Owners and property managers</h3><p>One roof request can become a documented service, inspection, and capital plan.</p><a href="/industries/property-management-firms">Property management roofing</a></div></article>
    </div>
  </section>

  <section class="odessa-faq">
    <span class="odessa-kicker">Common Odessa roof questions</span><h2>Start with the decision you need to make.</h2>
    <div class="odessa-faq__grid">
      <article><h3>What should I do during an active commercial roof leak?</h3><p>Protect people and equipment first. Record where water appears, note weather and timing, and submit the building address plus access instructions. Roof entry should wait for safe conditions.</p></article>
      <article><h3>When does a flat roof need replacement instead of repair?</h3><p>Replacement becomes more likely when moisture is widespread, failures repeat across the field, insulation or deck conditions are poor, or the existing assembly has reached the end of useful service life. An inspection should establish that picture first.</p></article>
      <article><h3>Can a commercial roof coating delay replacement?</h3><p>Sometimes. The roof must be a suitable candidate. Existing moisture, adhesion, drainage, details, surface preparation, and manufacturer requirements all matter. A coating should not cover a failed assembly.</p></article>
      <article><h3>What belongs in a commercial roof service agreement?</h3><p>At minimum, define inspection frequency, documentation, drainage review, repair authorization, response expectations, roof access, and how findings move into a repair or capital plan.</p></article>
    </div>
  </section>

  <section class="odessa-lead">
    <div><span class="odessa-kicker">Commercial roof desk</span><h2>Tell us what is happening at the building.</h2><p>Use the form for an active leak, inspection, roof report, service agreement, coating review, repair, recover option, or replacement plan.</p><p>For urgent problems, include the building address, affected area, safe roof access, and photos if available.</p></div>
    ${leadForm()}
  </section>
</main>`;

let changed = 0;
for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  const before = html;

  html = html
    .replace(/<link href="\/odessa-funnel\.css" id="odessa-funnel-css" rel="stylesheet">/g, '')
    .replace(/<li class="odessa-header-help">[\s\S]*?<\/li>/g, '')
    .replace(/<a class="odessa-sticky-help"[\s\S]*?<\/a>/g, '')
    .replace(/<p>You can also call[\s\S]*?<\/p>/g, '<p>For an active leak, include the building address, affected area, and safe access notes so the request can be triaged quickly. You may also email <a href="mailto:install@commercialroofersodessa.com">install@commercialroofersodessa.com</a>.</p>')
    .replace('If phone follow-up is preferred, call 555-555-6132.', 'For follow-up, use the contact form or email install@commercialroofersodessa.com.')
    .replace('Questions about the website terms may be directed to install@commercialroofersodessa.com or 555-555-6132.', 'Questions about the website terms may be directed to install@commercialroofersodessa.com.')
    .replace(/<a\b([^>]*?)href=["']tel:5555556132["']([^>]*)>[\s\S]*?<\/a>/gi, '<a$1href="/contact?request=roof-help"$2>Request Roof Help</a>')
    .replace(/,\s*"telephone":\s*"555-555-6132"/g, '')
    .replace(/&mdash;|&#8212;|—/g, ',')
    .replace(/&ndash;|&#8211;|–/g, ' to ')
    .replace(/<textarea class="form-control" name="projectDetails"(?: required)*/g, '<textarea class="form-control" name="projectDetails" required')
    .replace(/(<a aria-controls="rr-dropdown-contact"[\s\S]*?<\/div><\/li>)/, `$1`)
    .replace(/(<li class="dropdown b3-location-scroller[^>]*><a aria-controls="rr-dropdown-contact")/, `${headerHelp}$1`)
    .replace('<div class="rr-footer-map" data-rr-footer-map=""></div>', `<div class="rr-footer-map" data-rr-footer-map="">${map}</div>`)
    .replace(/<\/head>/i, `${stylesheet}</head>`)
    .replace(/<\/body>/i, `${stickyHelp}</body>`);

  const name = path.basename(file);
  if (name === 'home.html' || name === 'index.html') {
    html = html
      .replace(/<main class="odessa-main">[\s\S]*?<\/main>/, homepage)
      .replace(/<section class="main-container siteid-">[\s\S]*?<\/section>/, homepage)
      .replace(/<title>[\s\S]*?<\/title>/, '<title>Commercial Roofing Odessa, TX | Repair, Inspection &amp; Reroofing</title>')
      .replace(/<meta content="[^"]*" name="description"\/>/, '<meta content="Need commercial roof help in Odessa? Request leak repair, a flat roof inspection, service agreement, coating review, or reroofing plan." name="description"/>')
      .replace(/<meta content="[^"]*" property="og:title"\/>/, '<meta content="Commercial Roofing Odessa, TX | Repair, Inspection &amp; Reroofing" property="og:title"/>')
      .replace(/<meta content="[^"]*" property="og:description"\/>/, '<meta content="Request commercial roof repair, a flat roof inspection, service agreement, coating review, or reroofing plan in Odessa, Texas." property="og:description"/>')
      .replace(/<meta content="[^"]*" name="twitter:title"\/>/, '<meta content="Commercial Roofing Odessa, TX | Repair, Inspection &amp; Reroofing" name="twitter:title"/>')
      .replace(/<meta content="[^"]*" name="twitter:description"\/>/, '<meta content="Request commercial roof repair, a flat roof inspection, service agreement, coating review, or reroofing plan in Odessa, Texas." name="twitter:description"/>');
  }

  if (html.includes('555-555-6132') || html.includes('tel:5555556132')) {
    throw new Error(`Fake phone number remains in ${path.relative(root, file)}`);
  }

  if (html !== before) {
    fs.writeFileSync(file, html);
    changed += 1;
  }
}

console.log(`Odessa conversion funnel rebuilt across ${changed} pages.`);
