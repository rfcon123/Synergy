const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// A function to create URL-friendly slugs, matching the one in your React component.
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

// All product slugs from your existing data source.
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
  { slug: "all-connector-catalogue" }, { slug: "telecommunication-solution" }, { slug: "power-supply" }, { slug: "mobile-network-solutions" },
  { slug: "solar-products" }, { slug: "rf-component" }, { slug: "microwave-component" }, { slug: "defence-and-aerospace" },
  { slug: "ibd-and-das-product" }, { slug: "ibd-das-product" }
];

// Product names from the catalogue, now only used for slug generation.
const catalogueNames = [
  "ST-Antenna Catalog", "ST-Technology product catalog6.9", "LOGIC ANALAYZER", "NETWORK ANALYZER", "OSCILLOSCOPE",
  "SIGNAL GENERATOR", "SPECTRUM ANALAYZER", "Patch Panel Antenna", "Omni Antenna", "LPDA Antenna",
  "GSM Whip & Magnetic Base Antenna", "GPS Indoor & Outdoor Antenna", "Yagi Antenna",
  "HF VHF UHF Defence Required Antenna", "Microwave Horn Antenna", "RG Cable", "Feeder And Leaky Cable",
  "HLF & LMR Series Cable", "High Frequency Test Cable Assembly", "Jumper Cable", "SMA Connector",
  "N Connector", "DIN Connector", "TNC Connector", "BNC Connector", "UHF Connector",
  "High Frequency Connector", "Other Connector", "Fixed Attenuator & Variable Attenuator",
  "Dummy Load & Termination", "Power Splitter Cavity and Microstrip", "Coupler & Combiners",
  "Duplexer_Triplexer_Quadplexer", "RF Coaxial Adaptor", "Rigid & Flexible Waveguide",
  "RF Shield Box/Shield Room", "Test & Measurement Equipment", "Tools", "Solar Products",
  "Surge Arrestor", "Weather Proofing Kits", "Feeder Clamp", "Earthing Kit", "Telecom Antenna Mast",
  "Cirlculator & Isolator", "SFP Stock List 1", "SFP Stock List 2", "RF Filter", "RF Balun",
  "Jammer Modular", "ST-C2400M2483.5M-N", "ST-C5150M5850M-N", "SY QUASTAR SDRRF",
  "Waveguide Components", "Waveguide Components WR137", "SY25 OMNI ANTENNA", "tnms new",
  "Antenna New Ver2022", "5G Horn Antennas", "All Types Of RF Antenna", "High Frequency Product Catalogue",
  "High Frequency Product Catalogue 2nd", "High Frequency Test Cable Assemblies",
  "MM Wave & Microwave Components", "MM Wave & Microwave Components 2nd", "RF Products Broucher",
  "RF Products Catalouge", "RF Products Catalouge 2nd", "RF Products Catalouge 2021",
  "RF Products Catalouge 2021 2nd", "SYNERGY TELECOM PVT LTD NEW CATALOUGE (Bl Version)",
  "SFP Stock List 2022", "Electronic Electrical Instruments Connectors",
  "Cable Terminal Brass Lugs Brass Sheet Terminal Jumper Cables Catalogue",
  "Anti Drone Devices Antenna, Case Box, Drone Jammer", "High Frequency Test Cables",
  "Jammer Antenna Catalogue 2024", "RF Components Catalogue 2024", "Waveguide Catalogue 2024",
  "Electronic Switches Connector", "Auto Electrical Connector", "RF Test Measurement Equipment Stock",
  "Equipment Photo And Price", "ST High Frequency Antenna", "ST 140W_MODULE-SPECIFICATION",
  "WAVEGUIDEtoCOAXIALADAPTER", "OLYMPUSSZSTV", "EMCSOLUTIONSPRODUCTIONS", "Power supply",
  "4dbi_Omni_Celling_Antenna_698_4000Mhz", "2T2R Panel Antenna 698-3800MHz",
  "2G-3G-4G WIDEBAND PCB FLEXIBLE ANTENNA", "17dbi High frequency antenna", "12_dBi_LPDA_Antenna",
  "5G Parabolic Grid Antenna", "5DBI OMNI ANTENNA 690-6000MHz", "4dbi_Omni_Celling_Antenna_698_4000Mhz",
  "3dbi Screw Mount Antenna", "117.9-137 two daipole ant STACKED FOLDED DIPOLE OMNI DIRECTIONAL ANTENNA",
  "12_dBi_LPDA_Antenna", "ad-18-d-3512rev-aang", "Double_rigid_horn_antenna_0.8-18GHz",
  "Double_rigid_horn_antenna_4-40GHz", "Double_rigid_horn_antenna_18-40GHz", "LORA 3DBI PCB ANTENNA",
  "LPDA_ANTENNA_Bi_Directional_6DBI_700_3500Mhz_NF", "MAGNETIC ANTENNA MCX_M", "OMNI ANTENNA 798-2500",
  "PARABOLIC ANTENNA 600-6000MHz.pdf", "RFID ANTENNAS DATA", "RUBBER DUCK ANTENNA",
  "ST 866-925MHz 12dbi RFID Patch Panel Antenna", "ST 868MHz PCB", "BNC F 4HOLE CLAMP LMR200",
  "BNC F 4HOLE CRIMP LMR200", "BNC F BH BT 3002 CPS", "BNC F BH BT 3002 CRIMP", "BNC F BH SOLDER",
  "BNC F LMR 100 CRIMP", "BNC F LMR 200 CRIMP", "BNC F LMR 240 CLAMP", "BNC F LMR 240 CRIMP",
  "BNC F RA PCB MOUNT", "BNC F RP LMR 100 CRIMP", "BNC F LMR 200 CLAMP", "BNC M 4HOLE SOLDER 17.5MM",
  "BNC M BH SOLDER", "BNC M BT3002 CPS", "BNC M BT3002 CRIMP", "BNC M LMR 100 CRIMP",
  "BNC M LMR 200 CLAMP", "BNC M LMR 200 CRIMP", "BNC M LMR 400 CLAMP", "BNC M LMR 400 CRIMP",
  "BNC M PLASTIC HOOD", "BNC M RA LMR 200 CRIMP", "BNC M RA LMR400 CRIMP", "BNC M RG 6 CRIMP",
  "BNC M RG 11 CRIMP", "BNC M RG 59 COMPRESSION", "BNC M RG 59 CPS", "BNC M RG 59 CRIMP",
  "ST 7 16F 12 YG23 00", "ST 7 16F 22 YF23 00", "ST-7-16M-12 YI24 00", "ST-7-16M-22-YF23-00",
  "ST-7-16MA-12-YJ23-00", "ST-4310F-12-YC23-YP", "ST-4310F-22-HW-YP", "ST-4310M-12-YH23-YP",
  "ST-4310M-22-YG23", "ST-NF-12-YD23-00", "ST-NF-22-YG23-00", "ST-NM-12-YH23-00", "ST-NM-22-YM23-00",
  "9dBi Collinear Omni Directional Antenna", "9dbi Magnetic Base Antenna with 3Mtr 698 2700Mhz",
  "antenna catalogue", "BNC Connector", "Coupler Combiners", "DIN Connector", "Dummy Load & Termination",
  "Feeder And Leaky Cable", "Feeder Clamp", "Fixed Attenuator & Variable Attenuator",
  "GPS INDOOR ANTENNA 28DBI 3MTR RG174 SMAM1", "GPS Indoor Outdoor Antenna", "HLF & LMR Series Cable",
  "High Frequency Connector", "High Frequency Test Cable Assembly", "HLF LMR Series Cable",
  "Jumper Cable", "LPDA ANTENNA 14DBI 698 2700Mhz 1FEET RG58 NF", "LPDA Antenna", "N Connector",
  "N Male for 1 1 4 Feeder Cable", "Omni Antenna", "Other Connector", "Patch Panel Antenna",
  "Power Splitter Cavity and Microstrip", "RF Coaxial Adaptor", "Rigid Flexible Waveguide",
  "SMA Connector", "SMA Female BH Rightangle PCB Mount", "TNC Connector", "8-BAND ATENNA PATCH-PANEL",
  "TELESCOPIC MAST", "L1 l2 L5 AMPLIFIER", "100W POWER MODULE 400-6000MHZ", "ST-DISCONE ANTENNA Data Sheet 30-150mhz",
  "RG 217 Co-Axial Cable", "ST-Medical wires 5c-46awg", "ST-Medical wires 7c-44awg",
  "ST-AWG46 50ω data sheet", "Sy25 Hf conn", "10 MTR ELECTRIC MAST", "EQUIPMENT list", "LOGIC ANALAYZER",
  "600-4200MHz 4.3-10 Female Directional Coupler", "600-4200MHz DIN Female Directional Coupler",
  "600-4200MHz N Female Directional Coupler", "600-4200MHz 2in 2out 4.3-10F Hybrid Coupler",
  "600-4200MHz 2in 2out DIN Female Hybrid Coupler", "600-4200MHz 2in 2out N Female Hybrid Coupler",
  "600-4200MHz 2Way 4.3-10 Female Power Splitter", "600-4200MHz 2Way DIN Female Power Splitter",
  "600-4200MHz 2Way N Female Power Splitter", "600-4200MHz 3Way DIN Female Power Splitter",
  "600-4200MHz 4Way 4.3-10 Female Power Splitter", "600-4200MHz 4Way DIN Female Power Splitter",
  "600-4200MHz 4Way N Female Power Splitter", "UHF ANTENNA"
];

// Combine all product slugs from both sources.
const productShowroomRoutes = products.map(p => `/product-showroom/${p.slug}`);
const productCatalogueRoutes = catalogueNames.map(name => `/product-catalogue/${slugify(name)}`);

// New: Hot products data with names to generate slugs.
const hotProducts = [
  "3dbi Whip Antenna 2.4Ghz with UFL Cable 150mm", "Phoenix Contact Flashtrab (FLT N/PE CTRL -1.5)",
  "Phoenix Contact Flashtrab (FLT 35 CTRL -1.5)", "Phoenix Contact Valvetrab (VAL-MS 400 ST)",
  "Solar Panel Box (Flbox/All parts Enclosure)", "Val MS 230 ST (Type 2 Surge protection Plug)",
  "Val MS 320 ST", "FMS - 12 ST", "FLT 100-260", "FLT 60-400", "32 mm HDPE Coupler",
  "Feeder Clamp (HDG Telecom) 1 Way, 2 Way,3 Way, 6 Way for 1/2 inch and 7/8 inch",
  "Huawei 16 port DDF MPX272-16 (Patch panel fully loaded)",
  "CNT cable 15 cm (QMA(M) RA to QMA(M) RA with Rubber Boot)",
  "Old Test equipment Anritsu MS 710i 23 GHz spectrum Analyzer", "Anritsu Ma247 A Power meter",
  "Anritsu Ma247X Diode sensor",
  "Polyphase 400 MHz Surge Arrester NM-NF 60 Watts for VHF and UHF application",
  "Tilt Actuator factory set to AISG 2.0 Mode", "DCS-UMTS Diplexer", "RJ45 data canopy surge arrester",
  '7/8" Feeder cable', "All Microwave IBS products", "Patch panel Antenna", "Omni Antenna",
  "2 Way Cavity Splitter", "3 Way Cavity Splitter", "4 Way Cavity Splitter", "6 dB Coupler",
  "10 dB Coupler", "6 Way Feeder Clamp", "Surge Arrester", "Jumper Cable 1 Mtr (N-M to N-F, 1/4\" SF)",
  "Jumper Cable 1 Mtr (N-M to N-M, 1/4\" SF)", "Jumper Cable 1.5 Mtr (N-M to N-F, 1/4\" SF)",
  "Jumper Cable 1.5 Mtr (N-M to N-M, 1/4\" SF)", "Jumper Cable 1.5 Mtr (D-M to D-F, 1/2\" SF)",
  "Jumper Cable 2 Mtr (DIN-M to DIN-F, 1/2\" SF)", "Jumper Cable 2 Mtr (DIN-M RA to DIN-F, 1/2\" SF)",
  "Jumper Cable 2.5 Mtr (DIN-F 4H to N-M RA, 1/4\" SF)", "Jumper Cable 3 Mtr (DIN-M to DIN-M, 1/2\" SF)",
  "Jumper Cable 3.5 Mtr", "Jumper Cable 4.5 Mtr (N-M to DIN-M)",
  "Jumper Cable 4.5 Mtr (N-M RA to DIN-M)", "Jumper Cable 5 Mtr", "Jumper Cable 7 Mtr",
  "Jumper Cable 8 Mtr", "Waveguide", "S325D Cable Antenna Analyzers", "MT822A Site Analyser",
  "Calkit OSL N50-1", "ICN50 Instacal Module", "15NNF50 -1.5C Testing Cable", "Power Sensor",
  "RF Switch", "Bias Tee", "GPS Amplifier", "6 Way Feeder Clamp for 7/8\"", "Power Meter",
  "Surge Protector 2.1~2.5Ghz", "SFP", "1.25 G - 1310 NM 10 KM SM (FINISAR + PDR CLASS)",
  "1.25 G - 850 NM 0.5 KM MM (JDSU)", "1.25 G - 850 NM 0.5 KM MM (SUMITOMO)",
  "2.125 G - 850 NM 0.5 KM MM (FINISAR)", "2.125 G - 850 NM 0.5 KM MM (JDSU)",
  "4.25 G - 850 NM 0.5 KM MM (FINISAR)", "4.25 G - 850 NM 0.5 KM MM (JDSU)",
  "SFP 10 G 1310 Nm 10KM LC CONNECTOR", "SFP 1.25 G 1310 Nm 10KM LC CONNECTOR",
  "SFP 155 M 1310 Nm 15 KM AND OTHER WITH LC CONNECTOR",
  "SFP 2.5 G 1310 Nm 15KM/40 KM LC CONNECTOR", "SFP 6 G 1310 Nm 2KM LC CONNECTOR",
  "SFP RJ 45 1000 Base T", "SFP TO SFP CABLE 1 MTR"
];

const hotProductsRoutes = hotProducts.map(name => `/hot-products/${slugify(name)}`);

// Existing static routes.
const staticRoutes = [
  '/', '/about-us', '/contact-us', '/certificates', '/product-showroom', '/product-catalogue',
  '/hot-products', '/li-ion-battery', '/product-stock', '/product-price-list',
  '/group-product-data-sheet', '/defence-and-aerospace', '/gallery',
  '/video-gallery', '/image-gallery', '/customer-feedback', '/career', '/cable-creator'
];

const baseUrl = 'https://panaceaticsynergy.com';

const allRoutes = [
  ...staticRoutes,
  ...productShowroomRoutes,
  ...productCatalogueRoutes,
  ...hotProductsRoutes // Add the new hot product routes here
];

const sitemap = new SitemapStream({ hostname: baseUrl });
const writeStream = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));

(async () => {
  try {
    for (const route of allRoutes) {
      sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
    }
    sitemap.end();
    const data = await streamToPromise(sitemap);
    writeStream.write(data.toString());
    console.log('Sitemap with dynamic routes generated from slugs!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
})();