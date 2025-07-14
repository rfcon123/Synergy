const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// All product slugs
const products = [
  { slug: "rf-cable" }, { slug: "jumper-cable" }, { slug: "high-freq-cable" }, { slug: "fakra-connector" },
  { slug: "sfp-transceiver" }, { slug: "5g-product" }, { slug: "helical-antenna" }, { slug: "hf-and-vhf-antenna" },
  { slug: "fme-connector" }, { slug: "patanjali-solar-products" }, { slug: "high-frequency-termination" }, { slug: "tetra-band-products" },
  { slug: "cable-assembly" }, { slug: "solar-tracking-system" }, { slug: "elcom-solar-product" }, { slug: "surveillance-tools" },
  { slug: "telescopic-mast" }, { slug: "combiner" }, { slug: "mx-product" }, { slug: "amplifier-and-combiner" },
  { slug: "rf-coupler" }, { slug: "roxtec-comseal" }, { slug: "bts" }, { slug: "voip-phone" }, { slug: "rf-adapter" },
  { slug: "krone" }, { slug: "high-frequency-adapter" }, { slug: "uy-connector" }, { slug: "andrew-cutter" },
  { slug: "rf-attenuator" }, { slug: "high-freq-attenuator" }, { slug: "solar-product" }, { slug: "rf-connector" },
  { slug: "bma-connector" }, { slug: "bnc-connector" }, { slug: "bq-connector" }, { slug: "c4-connector" },
  { slug: "c-connector" }, { slug: "crc9-connector" }, { slug: "din-connector" }, { slug: "4.3-1.0-connector" },
  { slug: "f-type-connector" }, { slug: "hn-connector" }, { slug: "kmx3-connector" }, { slug: "l9-connector" },
  { slug: "m4-connector" }, { slug: "mcx-connector" }, { slug: "mmcx-connector" }, { slug: "n-type-connector" },
  { slug: "qma-connector" }, { slug: "qn-connector" }, { slug: "saa-connector" }, { slug: "sma-connector" },
  { slug: "smb-connector" }, { slug: "smc-connector" }, { slug: "smp-connector" }, { slug: "smz-connector" },
  { slug: "ssmb-connector" }, { slug: "tnc-connector" }, { slug: "triaxial-connector" }, { slug: "tq-connector" },
  { slug: "uhf-connector" }, { slug: "high-freq-connector" }, { slug: "1-85mm-connector" }, { slug: "2-4mm-connector" },
  { slug: "2-92mm-connectors" }, { slug: "3-5mm-connector" }, { slug: "circular-connector" }, { slug: "antenna" },
  { slug: "horn-antenna" }, { slug: "balun" }, { slug: "beryllium-copper" }, { slug: "bias-tee" },
  { slug: "broadcast-air-gap" }, { slug: "cable-lugs" }, { slug: "cable-tie" }, { slug: "network-connector" },
  { slug: "dc-power-cable" }, { slug: "dc-block" }, { slug: "dc-to-dc-converter" }, { slug: "diplexer" },
  { slug: "dummy-load" }, { slug: "emi-emc-shielding-product" }, { slug: "environmental-chamber" }, { slug: "feeder-clamp" },
  { slug: "feed-thru" }, { slug: "flange-connector" }, { slug: "gps-gps-module" }, { slug: "high-frequency-product" },
  { slug: "hoisting-grip" }, { slug: "ibs-product" }, { slug: "installation-kit" }, { slug: "microwave-component" },
  { slug: "mil-grade-cable" }, { slug: "optical-fiber-products" }, { slug: "proskit-toolkits" }, { slug: "protective-cap" },
  { slug: "rechargeable-battery" }, { slug: "rf-switch" }, { slug: "shield-box" }, { slug: "splitter" },
  { slug: "shrinkable-tube" }, { slug: "surge-arrester" }, { slug: "telecommunication-mast" }, { slug: "test-measurement-equipment" },
  { slug: "tools" }, { slug: "waveguide-adaptor" }, { slug: "waveguide-flange" }, { slug: "waveguide-component" },
  { slug: "all-connector-catalogue" }
];

const baseUrl = 'https://panaceaticsynergy.com';

const staticRoutes = [
  '/', '/about-us', '/contact-us', '/certificates', '/product-showroom', '/product-catalogue',
  '/hot-products', '/li-ion-battery', '/product-stock', '/product-price-list',
  '/group-product-data-sheet', '/defence-and-aerospace', '/gallery',
  '/video-gallery', '/image-gallery', '/customer-feedback', '/career', '/cable-creator'
];

const productShowroomRoutes = products.map(p => `/product-showroom/${p.slug}`);
const allRoutes = [...staticRoutes, ...productShowroomRoutes];

const sitemap = new SitemapStream({ hostname: baseUrl });
const writeStream = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));

(async () => {
  for (const route of allRoutes) {
    sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
  }

  sitemap.end();
  const data = await streamToPromise(sitemap);
  writeStream.write(data.toString());
  console.log('Sitemap with dynamic product routes generated!');
})();
