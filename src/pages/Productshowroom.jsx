import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet-async";


import productLinks from './Productlinks';
import StyledButton  from '../components/StyledButton';
import rfcable from '../assets/components/rfcable.jpg';
import EMCSCANNER from '../assets/components/EMC SCANNER.jpg';


import jumpercable from '../assets/components/jumpercable.jpg';
import highfreqcable from '../assets/components/highfreqcable.jpg';
import fakraconnector from '../assets/components/fakraconnector.jpg';
// import 5gproduct from '../assets/components/5gproduct.jpg';
import sfptransceiver from '../assets/components/sfptransreceiver.jpg';
import helicalantenna from '../assets/components/helicalantenna.jpg';
import hfandvhfantenna from '../assets/components/hfandvhfantenna.jpg';
import fmeconnector from '../assets/components/fmeconnector.jpg';
import patanjalisolarproducts from '../assets/components/patanjalisolarprodcuts.jpg';
import highfrequencytermination from '../assets/components/highfrequencytermination.jpg';
import tetrabandproducts from '../assets/components/tetrabandproducts.jpg';
import cableassembly from '../assets/components/cableassembly.jpg';
import solartrackingsystem from '../assets/components/solartrackingsystem.jpg';
import elcomsolarproduct from '../assets/components/elcomsolarproducts.jpg';
import surveillancetools from '../assets/components/surveillancetools.jpg';
import telescopicmast from '../assets/components/telescopicmast.jpg';
import combinermxproduct from '../assets/components/mxproduct.jpg';
import amplifierandcombiner from '../assets/components/amplifier and combiner.jpg';
import rfcoupler from '../assets/components/rfcoupler.jpg';
import roxteccomsealbts from '../assets/components/roxteccomseal.jpg';
import voipphone from '../assets/components/voipphone.jpg';
import rfadapter from '../assets/components/rfadapter.jpg';
import kronehighfrequencyadapter from '../assets/components/krone.jpg';
import uyconnector from '../assets/components/uyconnector.jpg';
import andrewcutter from '../assets/components/andrewcutter.jpg';
import rfattenuator from '../assets/components/rfattenuator.jpg';
import highfreqattenuator from '../assets/components/highfreqattenuator.jpg';
import solarproduct from '../assets/components/solarproduct.jpg';
import rfconnector from '../assets/components/rfconnector.jpg';
import bmaconnector from '../assets/components/bmaconnector.jpg';
import bncconnector from '../assets/components/bncconnector.jpg';
import bqconnector from '../assets/components/bqconnector.jpg';
import c4connector from '../assets/components/c4connector.jpg';
import cconnector from '../assets/components/cconnector.jpg';
import crc9connector from '../assets/components/crc9connector.jpg';
import dinconnector from '../assets/components/dinconnector.jpg';
// import 4.3-1.0connector from '../assets/components/4310connector.jpg';
import ftypeconnector from '../assets/components/fconnector.jpg';
import hnconnector from '../assets/components/hnconnector.jpg';
import kmx3connector from '../assets/components/kmx3connector.jpg';
import l9connector from '../assets/components/l9connector.jpg';
import m4connector from '../assets/components/m4connector.jpg';
import mcxconnector from '../assets/components/mcxconnector.jpg';
import mmcxconnector from '../assets/components/mmcxconnector.jpg';
import ntypeconnector from '../assets/components/ntypeconnector.jpg';
import qmaconnector from '../assets/components/qmaconnector.jpg';
import qnconnector from '../assets/components/qnconnector.jpg';
import saaconnector from '../assets/components/saaconnector.jpg';
import smaconnector from '../assets/components/smaconnector.jpg';
import smbconnector from '../assets/components/smbconnector.jpg';
import smcconnector from '../assets/components/smcconnector.jpg';
import smpconnector from '../assets/components/smpconnector.jpg';
import smzconnector from '../assets/components/smzconnector.jpg';
import ssmbconnector from '../assets/components/ssmbconnector.jpg';
import tncconnector from '../assets/components/tncconnector.jpg';
import triaxialconnector from '../assets/components/triaxial connector.jpg';
import tqconnector from '../assets/components/tqconnector.jpg';
import uhfconnector from '../assets/components/uhfconnector.jpg';
import highfreqconnector from '../assets/components/highfreqconnector.jpg';
// import 1.85mmconnector from '../assets/components/185mmconnector.jpg';
// import 2.4mmconnector from '../assets/components/24mmconnector.jpg';
// import 2.92mmconnectors from '../assets/components/292mmconnectors.jpg';
// import 3.5mmconnector from '../assets/components/35mmconnector.jpg';
import circularconnector from '../assets/components/circularconnector.jpg';
// import allconnectorcatalogue from '../assets/components/allconnectorcatalogue.jpg';
import antennahornantenna from '../assets/components/hornantenna.jpg';
import balun from '../assets/components/balun.jpg';
import berylliumcopper from '../assets/components/berylliamcopper.jpg';
import biastee from '../assets/components/biastee.jpg';
import broadcastairgap from '../assets/components/broadcastairgapcablescatalogue.jpg';

import cablelugs from '../assets/components/cablelugs.jpg';
import cabletie from '../assets/components/cabletie.jpg';
import networkconnector from '../assets/components/networkconnector.jpg';
import dcpowercable from '../assets/components/dc_powercable.jpg';
import dcblock from '../assets/components/dcblock.jpg';
import dctodcconverter from '../assets/components/dctodcconverter.jpg';
import diplexer from '../assets/components/diplexer.jpg';
import dummyload from '../assets/components/dummyload.jpg';
// import emiemcshieldingproduct from '../assets/components/emiemcshieldingproduct.jpg';
import environmentalchamber from '../assets/components/environmentalchamber.jpg';
import feederclamp from '../assets/components/feederclamp.jpg';
import feedthru from '../assets/components/feedthru.jpg';
import flangeconnector from '../assets/components/flangeconnector.jpg';
// import gpsgpsmodule from '../assets/components/gpsgpsmodule.jpg';
import highfrequencyproduct from '../assets/components/highfrequencyproduct.jpg';
import hoistinggrip from '../assets/components/hoistinggrip.jpg';
import ibsproduct from '../assets/components/ibsproduct.jpg';
import installationkit from '../assets/components/installationkit.jpg';
import microwavecomponent from '../assets/components/microwavecomponent.jpg';
import milgradecable from '../assets/components/milgradecable.jpg';
import opticalfiberproducts from '../assets/components/opticalfiberproducts.jpg';
import proskittoolkits from '../assets/components/proskittoolkits.jpg';
import protectivecap from '../assets/components/protectivecap.jpg';
import rechargeablebattery from '../assets/components/rechargeablebattery.jpg';
import rfswitch from '../assets/components/rfswitch.jpg';
import shieldbox from '../assets/components/shieldbox.jpg';
import splitter from '../assets/components/splitter.jpg';
import shrinkabletube from '../assets/components/shrinkabetube.jpg';
import surgearrester from '../assets/components/surgearrester.jpg';
import telecommunicationmast from '../assets/components/telecommunicationmast.jpg';
import testmeasurementequipment from '../assets/components/spectrumanalyszer.jpg';
import tools from '../assets/components/tools.jpg';
import waveguideadaptor from '../assets/components/waveguideadapter.jpg';
import waveguideflange from '../assets/components/waveguideflange.jpg';
import waveguidecomponent from '../assets/components/waveguidecomponent.jpg';
import j5gproduct from '../assets/components/j5gproduct.jpg';
import j4310connector from '../assets/components/j4.3-1.0connector.jpg';
import j185mmconnector from '../assets/components/j1.85mmconnector.jpg';
import j24mmconnector from '../assets/components/j2.4mmconnector.jpg';
import j292mmconnectors from '../assets/components/j2.92mmconnector.jpg';
import j35mmconnector from '../assets/components/j3.5mmconnector.jpg';
import antenna from '../assets/components/antenna.jpg';
import emi_emcshieldingproduct from '../assets/components/emi_emcshieldingproduct.jpg';
import gps_gpsmodule from '../assets/components/gps_gpsmodule.jpg';
import combiner from '../assets/components/combiner.jpg';
import highfreqadapter from '../assets/components/highfrequencyadapter.jpg';
import bts from '../assets/components/bts.jpg';
import catalogue from '../assets/components/catalogue.jpg';
import analyzer1682A from '../assets/components/ANALYZER 1682A on.jpeg';
import wmodules from '../assets/components/140w modules.jpg';
import WATTMETER from '../assets/components/WATTMETER.jpeg';
import EX355POWERSUPPLY from '../assets/components/EX355 POWER SUPPLY.jpeg';
import HANDHELDLCRMETER from '../assets/components/HANDHELD LCR METER.jpeg';
import POWERBOX3303DS from '../assets/components/POWER BOX 3303DS.jpeg';
import POWERREFELECTIONMETERNAP from '../assets/components/POWER REFELECTION METER NAP.jpeg';
import POWERSUPPLYB703DT from '../assets/components/POWER SUPPLY B703DT.jpeg';
import MANTISVISIONOpticalMicroscoperemovebgpreview from '../assets/components/MANTIS_VISION_Optical_Microscope-removebg-preview.png';
import POWERMETERNRVD from '../assets/components/POWER METER NRVD.jpeg';
import POWERSUPPLYPW18 from '../assets/components/POWER SUPPLY PW18-2.jpeg';
import SignalGeneratorSMBV100A from '../assets/components/Signal Generator(SMBV100A).png';
import by2inchCableCuttingToolAndrew from '../assets/components/1by2 inch Cable Cutting Tool (Andrew).jpg';
import by2inchCableCuttingToolTG from '../assets/components/1by2 inch Cable Cutting Tool (T.G).jpg';
import by8inchAluminiumCableCuttingToolAndrew from '../assets/components/7by8 inch Aluminium Cable Cutting Tool (Andrew).jpg';
import by8inchCableCuttingToolAndrew from '../assets/components/7by8 inch Cable Cutting Tool (Andrew).jpg';
import BT3002RG316CrimpingTool from '../assets/components/BT3002 & RG316 Crimping Tool.jpg';
import CoaxialCableCuttingTool from '../assets/components/Coaxial Cable Cutting Tool.jpg';
import CoaxialCrimpingToolKitProskitPK330K from '../assets/components/Coaxial Crimping Tool Kit Proskit 6PK330K.jpg';
import HLF200CrimpingTool from '../assets/components/HLF 200 Crimping Tool.jpg';
import HLF300CrimpingTool from '../assets/components/HLF 300 Crimping Tool.jpg';
import HLF400CrimpingTool from '../assets/components/HLF 400 Crimping Tool.jpg';
import HLF400RACrimpingTool from '../assets/components/HLF 400 RA Crimping Tool.jpg';
import HydraulicCrimpingTool470mm from '../assets/components/Hydraulic Crimping Tool 4-70 mm.jpg';
import MC4CrimpingTool from '../assets/components/MC4 Crimping Tool.jpg';
import MC4RACrimpingTool from '../assets/components/MC4 RA Crimping Tool.jpg';
import MC4StrippingTool from '../assets/components/MC4 Stripping Tool.jpg';
import NConnectorTourqueWrench from '../assets/components/N Connector Tourque Wrench.jpg';
import SMAConnectorTourqueWrench from '../assets/components/SMA Connector Tourque Wrench.jpg';



































const productsData = [
  { name: "RF Cable", slug: "rf-cable", image: rfcable },
  { name: "Jumper Cable", slug: "jumper-cable", image: jumpercable },
  { name: "High Freq Cable", slug: "high-freq-cable", image: highfreqcable },
  { name: "Fakra Connector", slug: "fakra-connector", image: fakraconnector },
  { name: "SFP Transceiver", slug: "sfp-transceiver", image: sfptransceiver },
  { name: "5G Product", slug: "5g-product", image: j5gproduct },
  { name: "Helical Antenna", slug: "helical-antenna", image: helicalantenna },
  { name: "HF and VHF Antenna", slug: "hf-and-vhf-antenna", image: hfandvhfantenna },
  { name: "FME Connector", slug: "fme-connector", image: fmeconnector },
  { name: "Patanjali Solar Products", slug: "patanjali-solar-products", image: patanjalisolarproducts },
  { name: "High Frequency Termination", slug: "high-frequency-termination", image: highfrequencytermination },
  { name: "Tetra Band Products", slug: "tetra-band-products", image: tetrabandproducts },
  { name: "Cable Assembly", slug: "cable-assembly", image: cableassembly },
  { name: "Solar Tracking System", slug: "solar-tracking-system", image: solartrackingsystem },
  { name: "Elcom Solar Product", slug: "elcom-solar-product", image: elcomsolarproduct },
  { name: "Surveillance Tools", slug: "surveillance-tools", image: surveillancetools },
  { name: "Telescopic Mast", slug: "telescopic-mast", image: telescopicmast },
  { name: "Combiner", slug: "combiner", image: combiner },
  { name: "MX Product", slug: "mx-product", image: combinermxproduct },
  { name: "Amplifier and Combiner", slug: "amplifier-and-combiner", image: amplifierandcombiner },
  { name: "RF Coupler", slug: "rf-coupler", image: rfcoupler },
  { name: "Roxtec Comseal ", slug: "roxtec-comseal", image: roxteccomsealbts },
  { name: "BTS", slug: "bts", image: bts },
  { name: "VoIP Phone", slug: "voip-phone", image: voipphone },
  { name: "RF Adapter", slug: "rf-adapter", image: rfadapter },
  { name: "Krone", slug: "krone", image: kronehighfrequencyadapter },
  { name: "High Frequency Adapter", slug: "high-frequency-adapter", image: highfreqadapter },
  { name: "UY Connector", slug: "uy-connector", image: uyconnector },
  { name: "Andrew Cutter", slug: "andrew-cutter", image: andrewcutter },
  { name: "RF Attenuator", slug: "rf-attenuator", image: rfattenuator },
  { name: "High Freq Attenuator", slug: "high-freq-attenuator", image: highfreqattenuator },
  { name: "Solar Product", slug: "solar-product", image: solarproduct },
  { name: "RF Connector", slug: "rf-connector", image: rfconnector },
  { name: "BMA Connector", slug: "bma-connector", image: bmaconnector },
  { name: "BNC Connector", slug: "bnc-connector", image: bncconnector },
  { name: "BQ Connector", slug: "bq-connector", image: bqconnector },
  { name: "C4 Connector", slug: "c4-connector", image: c4connector },
  { name: "C Connector", slug: "c-connector", image: cconnector },
  { name: "CRC9 Connector", slug: "crc9-connector", image: crc9connector },
  { name: "DIN Connector", slug: "din-connector", image: dinconnector },
  { name: "4.3-1.0 Connector", slug: "4.3-1.0-connector", image: j4310connector },
  { name: "F Type Connector", slug: "f-type-connector", image: ftypeconnector },
  { name: "HN Connector", slug: "hn-connector", image: hnconnector },
  { name: "KMX3 Connector", slug: "kmx3-connector", image: kmx3connector },
  { name: "L9 Connector", slug: "l9-connector", image: l9connector },
  { name: "M4 Connector", slug: "m4-connector", image: m4connector },
  { name: "MCX Connector", slug: "mcx-connector", image: mcxconnector },
  { name: "MMCX Connector", slug: "mmcx-connector", image: mmcxconnector },
  { name: "N Type Connector", slug: "n-type-connector", image: ntypeconnector },
  { name: "QMA Connector", slug: "qma-connector", image: qmaconnector },
  { name: "QN Connector", slug: "qn-connector", image: qnconnector },
  { name: "SAA Connector", slug: "saa-connector", image: saaconnector },
  { name: "SMA Connector", slug: "sma-connector", image: smaconnector },
  { name: "SMB Connector", slug: "smb-connector", image: smbconnector },
  { name: "SMC Connector", slug: "smc-connector", image: smcconnector },
  { name: "SMP Connector", slug: "smp-connector", image: smpconnector },
  { name: "SMZ Connector", slug: "smz-connector", image: smzconnector },
  { name: "SSMB Connector", slug: "ssmb-connector", image: ssmbconnector },
  { name: "TNC Connector", slug: "tnc-connector", image: tncconnector },
  { name: "Triaxial Connector", slug: "triaxial-connector", image: triaxialconnector },
  { name: "TQ Connector", slug: "tq-connector", image: tqconnector },
  { name: "UHF Connector", slug: "uhf-connector", image: uhfconnector },
  { name: "High Freq Connector", slug: "high-freq-connector", image: highfreqconnector },
  { name: "1.85mm Connector", slug: "1-85mm-connector", image: j185mmconnector },
  { name: "2.4mm Connector", slug: "2-4mm-connector", image: j24mmconnector },
  { name: "2.92mm Connectors", slug: "2-92mm-connectors", image: j292mmconnectors },
  { name: "3.5mm Connector", slug: "3-5mm-connector", image: j35mmconnector },
  { name: "Circular Connector", slug: "circular-connector", image: circularconnector },
  { name: "Antenna", slug: "antenna", image: antenna },
  { name: "Horn Antenna", slug: "horn-antenna", image: antennahornantenna },
  { name: "Balun", slug: "balun", image: balun },
  { name: "Beryllium Copper", slug: "beryllium-copper", image: berylliumcopper },
  { name: "Bias Tee", slug: "bias-tee", image: biastee },
  { name: "Broadcast Air Gap", slug: "broadcast-air-gap", image: broadcastairgap },
  { name: "Cable Lugs", slug: "cable-lugs", image: cablelugs },
  { name: "Cable Tie", slug: "cable-tie", image: cabletie },
  { name: "Network Connector", slug: "network-connector", image: networkconnector },
  { name: "DC Power Cable", slug: "dc-power-cable", image: dcpowercable },
  { name: "DC Block", slug: "dc-block", image: dcblock },
  { name: "DC to DC Converter", slug: "dc-to-dc-converter", image: dctodcconverter },
  { name: "Diplexer", slug: "diplexer", image: diplexer },
  { name: "Dummy Load", slug: "dummy-load", image: dummyload },
  { name: "EMI/EMC Shielding Product", slug: "emi-emc-shielding-product", image: emi_emcshieldingproduct },
  { name: "Environmental Chamber", slug: "environmental-chamber", image: environmentalchamber },
  { name: "Feeder Clamp", slug: "feeder-clamp", image: feederclamp },
  { name: "Feed Thru", slug: "feed-thru", image: feedthru },
  { name: "Flange Connector", slug: "flange-connector", image: flangeconnector },
  { name: "GPS/GPS Module", slug: "gps-gps-module", image: gps_gpsmodule },
  { name: "High Frequency Product", slug: "high-frequency-product", image: highfrequencyproduct },
  { name: "Hoisting Grip", slug: "hoisting-grip", image: hoistinggrip },
  { name: "IBS Product", slug: "ibs-product", image: ibsproduct },
  { name: "Installation Kit", slug: "installation-kit", image: installationkit },
  { name: "Microwave Component", slug: "microwave-component", image: microwavecomponent },
  { name: "Mil Grade Cable", slug: "mil-grade-cable", image: milgradecable },
  { name: "Optical Fiber Products", slug: "optical-fiber-products", image: opticalfiberproducts },
  { name: "Proskit Toolkits", slug: "proskit-toolkits", image: proskittoolkits },
  { name: "Protective Cap", slug: "protective-cap", image: protectivecap },
  { name: "Rechargeable Battery", slug: "rechargeable-battery", image: rechargeablebattery },
  { name: "RF Switch", slug: "rf-switch", image: rfswitch },
  { name: "Shield Box", slug: "shield-box", image: shieldbox },
  { name: "Splitter", slug: "splitter", image: splitter },
  { name: "Shrinkable Tube", slug: "shrinkable-tube", image: shrinkabletube },
  { name: "Surge Arrester", slug: "surge-arrester", image: surgearrester },
  { name: "Telecommunication Mast", slug: "telecommunication-mast", image: telecommunicationmast },
  { name: "Test Measurement Equipment", slug: "test-measurement-equipment", image: testmeasurementequipment },
  { name: "Tools", slug: "tools", image: tools },
  { name: "Waveguide Adaptor", slug: "waveguide-adaptor", image: waveguideadaptor },
  { name: "Waveguide Flange", slug: "waveguide-flange", image: waveguideflange },
  { name: "Waveguide Component", slug: "waveguide-component", image: waveguidecomponent },
  { name: "All Connector Catalogue", slug: "all-connector-catalogue", image: catalogue },
  { name: "Analyzer 1682A", slug: "analyzer-1682a", image: analyzer1682A },
  { name: "140W Modules", slug: "140w-modules", image: wmodules },
  { name: "Wattmeter", slug: "wattmeter", image: WATTMETER },
  { name: "EX355 Power Supply", slug: "ex355-power-supply", image: EX355POWERSUPPLY },
  { name: "Handheld LCR Meter", slug: "handheld-lcr-meter", image: HANDHELDLCRMETER },
  { name: "Power Box 3303DS", slug: "power-box-3303ds", image: POWERBOX3303DS },
  { name: "Power Reflection Meter NAP", slug: "power-reflection-meter-nap", image: POWERREFELECTIONMETERNAP },
  { name: "Power Supply B703DT", slug: "power-supply-b703dt", image: POWERSUPPLYB703DT },
  { name: "Mantis Vision Optical Microscope", slug: "mantis-vision-optical-microscope", image: MANTISVISIONOpticalMicroscoperemovebgpreview },
  { name: "Power Meter NRVD", slug: "power-meter-nrvd", image: POWERMETERNRVD },
  { name: "Power Supply PW18-2", slug: "power-supply-pw18-2", image: POWERSUPPLYPW18 },
  { name: "EMC SCANNER", slug: "EMC-SCANNER", image: EMCSCANNER },
  { name: "Signal Generator SMBV100A", slug: "signal-generator-smbv100a", image: SignalGeneratorSMBV100A },
  { name: "1/2 inch Cable Cutting Tool (Andrew)", slug: "1-2-inch-cable-cutting-tool-andrew", image: by2inchCableCuttingToolAndrew },
  { name: "1/2 inch Cable Cutting Tool (T.G)", slug: "1-2-inch-cable-cutting-tool-tg", image: by2inchCableCuttingToolTG },
  { name: "7/8 inch Aluminium Cable Cutting Tool (Andrew)", slug: "7-8-inch-aluminium-cable-cutting-tool-andrew", image: by8inchAluminiumCableCuttingToolAndrew },
  { name: "7/8 inch Cable Cutting Tool (Andrew)", slug: "7-8-inch-cable-cutting-tool-andrew", image: by8inchCableCuttingToolAndrew },
  { name: "BT3002 & RG316 Crimping Tool", slug: "bt3002-rg316-crimping-tool", image: BT3002RG316CrimpingTool },
  { name: "Coaxial Cable Cutting Tool", slug: "coaxial-cable-cutting-tool", image: CoaxialCableCuttingTool },
  { name: "Coaxial Crimping Tool Kit Proskit 6PK330K", slug: "coaxial-crimping-tool-kit-proskit-6pk330k", image: CoaxialCrimpingToolKitProskitPK330K },
  { name: "HLF 200 Crimping Tool", slug: "hlf-200-crimping-tool", image: HLF200CrimpingTool },
  { name: "HLF 300 Crimping Tool", slug: "hlf-300-crimping-tool", image: HLF300CrimpingTool },
  { name: "HLF 400 Crimping Tool", slug: "hlf-400-crimping-tool", image: HLF400CrimpingTool },
  { name: "HLF 400 RA Crimping Tool", slug: "hlf-400-ra-crimping-tool", image: HLF400RACrimpingTool },
  { name: "Hydraulic Crimping Tool 4-70 mm", slug: "hydraulic-crimping-tool-4-70-mm", image: HydraulicCrimpingTool470mm },
  { name: "MC4 Crimping Tool", slug: "mc4-crimping-tool", image: MC4CrimpingTool },
  { name: "MC4 RA Crimping Tool", slug: "mc4-ra-crimping-tool", image: MC4RACrimpingTool },
  { name: "MC4 Stripping Tool", slug: "mc4-stripping-tool", image: MC4StrippingTool },
  { name: "N Connector Tourque Wrench", slug: "n-connector-tourque-wrench", image: NConnectorTourqueWrench },
  { name: "SMA Connector Tourque Wrench", slug: "sma-connector-tourque-wrench", image: SMAConnectorTourqueWrench },


  
  
  
  
  


].map(product => ({
  ...product,
  slug: product.slug || product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
}));

export const productsWithSlugs = productsData;

const ProductShowroom = () => {
  const location = useLocation();
  // Get ?search= from URL
  const params = new URLSearchParams(location.search);
  const initialSearch = params.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  // Update searchTerm if the URL param changes
  React.useEffect(() => {
    setSearchTerm(params.get('search') || '');
  }, [location.search]);

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen px-4 py-10 md:px-10">
<Helmet>
  <title>Product Showroom | RF Connector - Synergy Telecom</title>
  <meta
    name="description"
    content="Browse Synergy Telecom’s full product range including RF connectors, cables, antennas, adapters, and more at panaceaticsynergy.com."
  />
  <meta
    name="keywords"
    content="Synergy Telecom products, RF connectors, antennas, coaxial cables, adapters, microwave components, panaceaticsynergy.com"
  />
  <meta property="og:title" content="Synergy Telecom Product Showroom" />
  <meta
    property="og:description"
    content="Explore our complete collection of RF and telecom products—connectors, antennas, adapters, cables, and tools."
  />
  <meta property="og:url" content="https://www.panaceaticsynergy.com/product-showroom" />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="https://www.panaceaticsynergy.com/product-showroom" />
</Helmet>



      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
            Explore Our Product Showroom
            <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
          </h1>
          <p className="text-gray-600 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover a wide range of high-quality products tailored to your telecom and RF needs.
          </p>
        </div>

        <div className="mb-10 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-5 py-3 rounded-xl border border-blue-300 shadow-lg text-base transition focus:ring-4 focus:ring-blue-300 focus:border-blue-500 focus:outline-none focus:shadow-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Link
                to={`/product/${product.slug}`}
                key={index}
                className="bg-white shadow-md p-4 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center text-center border border-gray-200 hover:border-blue-400 group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-45 h-auto object-contain p-3 bg-white transition-transform duration-300 group-hover:scale-[1.05]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400?text=Image+Not+Found";
                  }}
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold text-black leading-snug tracking-tight">
                    {product.name}
                  </h3>
                </div>
                <div className="pb-4">
                  <StyledButton
                    label="Explore"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `/product/${product.slug}`;
                    }}
                  />
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No products found.</p>
          )}
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-sm text-gray-600">
            Need help finding the right product? Reach out to our team for personalized assistance.
          </p>
          <div className="flex justify-center">
            <StyledButton
              label="Contact Support"
              icon={true}
              onClick={() => window.location.href = 'mailto:info@synergytpl.com'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowroom;

