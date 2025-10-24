/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";


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
import SIGNALGENERATORallproduct from '../assets/components/SIGNAL GENERATOR all product.jpeg';
import NIESSIPOWERMETER from '../assets/components/NIESSI POWER METER.jpg';
import Bird43WattMeter from '../assets/components/Bird 43 Watt Meter.jpg';
import POWERSUPPLYE3616A from '../assets/components/POWER SUPPLY E3616A.jpeg';
import POWERSUPPLYE3620A from '../assets/components/POWER SUPPLY E3620A.jpeg';
import POWERSUPPLYE3632A from '../assets/components/POWER SUPPLY E3632A.jpeg';
import POWERSUPPLYE3634A from '../assets/components/POWER SUPPLY E3634A.jpeg';
import POWERSUPPLYEX354D from '../assets/components/POWER SUPPLY EX354D.jpeg';
import POWERSUPPLY from '../assets/components/POWER SUPPLY.jpeg';
import POWERWAVEINVENTERAD from '../assets/components/POWER WAVE INVENTERAD1.png';
import QL355TPPOWERSUPPLY from '../assets/components/QL355TP POWER SUPPLY.jpeg';
import ROHDESCHWARZ1085709902 from '../assets/components/ROHDE&SCHWARZ 1085.7099.02 INSIDE.jpeg';
import ROSENBERGER05CK10R150 from '../assets/components/ROSENBERGER 05CK10R-150 INSIDE.jpeg';
import ROSENBERGER06CK100150 from '../assets/components/ROSENBERGER 06 CK100-150 INSIDE.jpeg';
import RPHDESCHWARZSIGNALGENERATORSMY from '../assets/components/RPHDE & SCHWARZ SIGNAL GENERATOR SMY.jpeg';
import SIGNALGENERATORE4437B from '../assets/components/SIGNAL GENERATOR E4437B.jpg';
import SIGNALGENERATORESGD3000A from '../assets/components/SIGNAL GENERATOR ESG-D3000A.jpeg';
import sitemasterS331D from '../assets/components/site master S331D.jpeg';
import TDS3052OscilloscopeTEKTRONIX from '../assets/components/TDS 3052 Oscilloscope TEKTRONIX.jpeg';
import AFM1100TUFVASSONSTRANSFORMER from '../assets/components/AFM 1100 TUFVASSONS TRANSFORMER 1.jpeg';
import ATTENUATORSPINNER from '../assets/components/ATTENUATOR SPINNER.jpeg';
import GFW from '../assets/components/GFW.jpeg';
import AGILENTE4418BPOWERMETER from '../assets/components/AGILENT E4418B POWER METER.jpeg';
import AgilentE4432B from '../assets/components/Agilent E4432B.png';
import AgilentE4436BBB from '../assets/components/Agilent E4436B  BB.png';
import AgilentE44208B from '../assets/components/Agilent E44208B.png';
import ANALLOGDIGITALSCOPEHM407 from '../assets/components/ANALLOG DIGITAL SCOPE HM407-2.jpeg';
import ESisSParameterNetworkAnalyser from '../assets/components/8753ES is S-Parameter Network Analyser.jpeg';
import ROHDESCHWARZSMBV100A from '../assets/components/ROHDE&SCHWARZ SMBV100A.jpeg';
import rohdeschwarzvectornetworkanalyzerzvre from '../assets/components/rohde-schwarz-vector-network-analyzer-zvre.png';
import AGILENTE4420B from '../assets/components/AGILENT E4420B.jpeg';
import POWERMETERML2438A from '../assets/components/POWER METER ML2438A.jpeg';
import AGILENT3631A from '../assets/components/AGILENT 3631A.jpeg';
import AGILENT8753ES from '../assets/components/AGILENT 8753ES.jpeg';
import AGILENTE3616A from '../assets/components/AGILENT E3616A.jpeg';
import AGILENTE4420BESG from '../assets/components/AGILENT E4420B ESG.jpeg';
import AGILENTN8973A from '../assets/components/AGILENT N8973A.jpeg';
import AGILENTE3640A from '../assets/components/AGILENT-E3640A.jpeg';
import LISTENTALK from '../assets/components/LISTEN & TALK.jpeg';
import POWERSUPPLYSM3540 from '../assets/components/POWER SUPPLY SM-3540.jpeg';
import GENERATOR33210A from '../assets/components/GENERATOR 33210A.jpeg';
import PowerboxLVM210290 from '../assets/components/Powerbox LVM 210.290.jpg';
import NRVZ53POWERMETERSENSOR from '../assets/components/NRV Z53 POWER METER SENSOR.png';
import NRVZ53POWERMEAltusenPNS108PowerOverNetTERSENSOR from '../assets/components/Altusen PNS108 Power Over Net.jpg';
import gpibcontrolopticaltorfswitch from '../assets/components/gpib control optical to rf switch group.jpg';
import HEWLETTPACKARD8753D from '../assets/components/HEWLETT PACKARD 8753D.jpeg';
import HEWLETTPACKARD75000SeriesBRepeater from '../assets/components/HEWLETT PACKARD75000 Series B Repeater.png';
import AGILENT8502A from '../assets/components/AGILENT 8502A.jpg';
import AGILENT34401A from '../assets/components/AGILENT 34401A.jpeg';
import HEWLETTPACKARD11582A from '../assets/components/HEWLETT PACKARD 11582A.jpeg';
import THEROELECTRA80110 from '../assets/components/THERO ELECTRA 80110.jpeg';
import SUHNERHUBERSUHNERAG74Z0070 from '../assets/components/SUHNER HUBER SUHNER AG 74Z-0-0-70.jpeg';
import ROSENBERGER716CALIBRATIONKIT60CK100150 from '../assets/components/ROSENBERGER 7-16 CALIBRATION KIT 60CK100-150.jpeg';
import ROHDESSCHWARZZNB8 from '../assets/components/ROHDES & SCHWARZ ZNB8.jpeg';
import PROTEKU3000AUNIVERSALCOUNTER from '../assets/components/PROTEK U3000A UNIVERSAL COUNTER.jpeg';
import HUBERSUHNER74Z0071 from '../assets/components/HUBER-SUHNER 74Z-0-0-71.jpeg';
import ROHDESCHWARZ1085724702INS from '../assets/components/ROHDE & SCHWARZ 1085. 7247.02 INS.jpeg';
import AGILENT85092CCOVER from '../assets/components/AGILENT 85092C COVER.jpeg';
import HUBERSUHNER74Z0070INS from '../assets/components/HUBER-SUHNER 74Z-0-0-70 INS.png';
import RohdeSchwarz10798500FSEM from '../assets/components/Rohde & Schwarz 1079-8500 FSEM.webp';
import HEWLETTPACKARD8560A from '../assets/components/HEWLETT PACKARD 8560A.jpeg';
import HEWLETTPACKARD8648B from '../assets/components/HEWLETT PACKARD 8648B.jpeg';
import HEWLETTPACKARD8648C from '../assets/components/HEWLETT PACKARD 8648C.jpeg';











const productsLocalData = [
  { name: "RF Cable", slug: "rf-cable", image: rfcable },
  { name: "Signal Generator All Product", slug: "signal-generator-all-product", image: SIGNALGENERATORallproduct },
  { name: "NIESSI Power Meter", slug: "niessi-power-meter", image: NIESSIPOWERMETER },
  { name: "Power Supply E3616A", slug: "power-supply-e3616a", image: POWERSUPPLYE3616A },
  { name: "Power Supply E3620A", slug: "power-supply-e3620a", image: POWERSUPPLYE3620A },
  { name: "Power Supply E3632A", slug: "power-supply-e3632a", image: POWERSUPPLYE3632A },
  { name: "Power Supply E3634A", slug: "power-supply-e3634a", image: POWERSUPPLYE3634A },
  { name: "Power Supply EX354D", slug: "power-supply-ex354d", image: POWERSUPPLYEX354D },
  { name: "Power Supply", slug: "power-supply", image: POWERSUPPLY },
  { name: "Power Wave Inverter AD1", slug: "power-wave-inverter-ad1", image: POWERWAVEINVENTERAD },
  { name: "QL355TP Power Supply", slug: "ql355tp-power-supply", image: QL355TPPOWERSUPPLY },
  { name: "Rohde & Schwarz 1085.7099.02", slug: "rohde-schwarz-1085-7099-02", image: ROHDESCHWARZ1085709902 },
  { name: "Rosenberger 05CK10R-150", slug: "rosenberger-05ck10r-150", image: ROSENBERGER05CK10R150 },
  { name: "Rosenberger 06 CK100-150", slug: "rosenberger-06-ck100-150", image: ROSENBERGER06CK100150 },
  { name: "RPHDE & Schwarz Signal Generator SMY", slug: "rphde-schwarz-signal-generator-smy", image: RPHDESCHWARZSIGNALGENERATORSMY },
  { name: "Signal Generator E4437B", slug: "signal-generator-e4437b", image: SIGNALGENERATORE4437B },
  { name: "Signal Generator ESG-D3000A", slug: "signal-generator-esg-d3000a", image: SIGNALGENERATORESGD3000A },
  { name: "Site Master S331D", slug: "site-master-s331d", image: sitemasterS331D },
  { name: "TDS 3052 Oscilloscope TEKTRONIX", slug: "tds-3052-oscilloscope-tektronix", image: TDS3052OscilloscopeTEKTRONIX },
  { name: "AFM 1100 TUFVASSONS Transformer", slug: "afm-1100-tufvassons-transformer", image: AFM1100TUFVASSONSTRANSFORMER },
  { name: "Attenuator Spinner", slug: "attenuator-spinner", image: ATTENUATORSPINNER },
  { name: "GFW", slug: "gfw", image: GFW },
  { name: "Agilent E4418B Power Meter", slug: "agilent-e4418b-power-meter", image: AGILENTE4418BPOWERMETER },
  { name: "Agilent E4432B", slug: "agilent-e4432b", image: AgilentE4432B },
  { name: "Agilent E4436B BB", slug: "agilent-e4436b-bb", image: AgilentE4436BBB },
  { name: "Agilent E44208B", slug: "agilent-e44208b", image: AgilentE44208B },
  { name: "Analog Digital Scope HM407-2", slug: "analog-digital-scope-hm407-2", image: ANALLOGDIGITALSCOPEHM407 },
  { name: "8753ES is S-Parameter Network Analyser", slug: "8753es-is-s-parameter-network-analyser", image: ESisSParameterNetworkAnalyser },
  { name: "Rohde & Schwarz SMBV100A", slug: "rohde-schwarz-smbv100a", image: ROHDESCHWARZSMBV100A },
  { name: "Rohde & Schwarz Vector Network Analyzer ZVRE", slug: "rohde-schwarz-vector-network-analyzer-zvre", image: rohdeschwarzvectornetworkanalyzerzvre },
  { name: "Agilent E4420B", slug: "agilent-e4420b", image: AGILENTE4420B },
  { name: "Power Meter ML2438A", slug: "power-meter-ml2438a", image: POWERMETERML2438A },
  { name: "Agilent 3631A", slug: "agilent-3631a", image: AGILENT3631A },
  { name: "Agilent 8753ES", slug: "agilent-8753es", image: AGILENT8753ES },
  { name: "Agilent E3616A", slug: "agilent-e3616a", image: AGILENTE3616A },
  { name: "Agilent E4420B ESG", slug: "agilent-e4420b-esg", image: AGILENTE4420BESG },
  { name: "Agilent N8973A", slug: "agilent-n8973a", image: AGILENTN8973A },
  { name: "Agilent E3640A", slug: "agilent-e3640a", image: AGILENTE3640A },
  { name: "Listen & Talk", slug: "listen-talk", image: LISTENTALK },
  { name: "Power Supply SM-3540", slug: "power-supply-sm-3540", image: POWERSUPPLYSM3540 },
  { name: "Generator 33210A", slug: "generator-33210a", image: GENERATOR33210A },
  { name: "Powerbox LVM 210.290", slug: "powerbox-lvm-210-290", image: PowerboxLVM210290 },
  { name: "NRV Z53 Power Meter Sensor", slug: "nrv-z53-power-meter-sensor", image: NRVZ53POWERMETERSENSOR },
  { name: "Altusen PNS108 Power Over Net", slug: "altusen-pns108-power-over-net", image: NRVZ53POWERMEAltusenPNS108PowerOverNetTERSENSOR },
  { name: "GPIB Control Optical to RF Switch Group", slug: "gpib-control-optical-to-rf-switch-group", image: gpibcontrolopticaltorfswitch },
  { name: "Hewlett Packard 8753D", slug: "hewlett-packard-8753d", image: HEWLETTPACKARD8753D },
  { name: "Hewlett Packard 75000 Series B Repeater", slug: "hewlett-packard-75000-series-b-repeater", image: HEWLETTPACKARD75000SeriesBRepeater },
  { name: "Agilent 8502A", slug: "agilent-8502a", image: AGILENT8502A },
  { name: "Agilent 34401A", slug: "agilent-34401a", image: AGILENT34401A },
  { name: "Hewlett Packard 11582A", slug: "hewlett-packard-11582a", image: HEWLETTPACKARD11582A },
  { name: "Thero Electra 80110", slug: "thero-electra-80110", image: THEROELECTRA80110 },
  { name: "SUHNER HUBER SUHNER AG 74Z-0-0-70", slug: "suhner-huber-suhner-ag-74z-0-0-70", image: SUHNERHUBERSUHNERAG74Z0070 },
  { name: "Rosenberger 7-16 Calibration Kit 60CK100-150", slug: "rosenberger-7-16-calibration-kit-60ck100-150", image: ROSENBERGER716CALIBRATIONKIT60CK100150 },
  { name: "Rohde & Schwarz ZNB8", slug: "rohde-schwarz-znb8", image: ROHDESSCHWARZZNB8 },
  { name: "Rohde & Schwarz 1085. 7247.02", slug: "rohde-schwarz-1085-7247-02", image: ROHDESCHWARZ1085724702INS },
  { name: "Protek U3000A Universal Counter", slug: "protek-u3000a-universal-counter", image: PROTEKU3000AUNIVERSALCOUNTER },
  { name: "HUBER-SUHNER 74Z-0-0-71", slug: "huber-suhner-74z-0-0-71", image: HUBERSUHNER74Z0071 },
  { name: "Agilent 85092C Cover", slug: "agilent-85092c-cover", image: AGILENT85092CCOVER },
  { name: "HUBER-SUHNER 74Z-0-0-70", slug: "huber-suhner-74z-0-0-70", image: HUBERSUHNER74Z0070INS },
  { name: "Rohde & Schwarz 1079-8500 FSEM", slug: "rohde-schwarz-1079-8500-fsem", image: RohdeSchwarz10798500FSEM },
  { name: "Hewlett Packard 8560A", slug: "hewlett-packard-8560a", image: HEWLETTPACKARD8560A },
  { name: "Hewlett Packard 8648B", slug: "hewlett-packard-8648b", image: HEWLETTPACKARD8648B },
  { name: "Hewlett Packard 8648C", slug: "hewlett-packard-8648c", image: HEWLETTPACKARD8648C },

  
  


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
  { name: "Bird 43 Watt Meter", slug: "bird-43-watt-meter", image: Bird43WattMeter }


  
  
  
  
  


].map(product => ({
  ...product,
  slug: product.slug || product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}));
 
export const productsWithSlugs = productsLocalData;

const ProductShowroom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // controlled input: start empty, optionally prefill from URL once
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    // Prefill from URL on mount only (won't reset while typing)
    const p = new URLSearchParams(location.search);
    const s = p.get('search');
    if (s) setSearchTerm(s);
     
  }, []);

  const filteredProducts = productsLocalData.filter(product =>
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
  aria-label="Search products"
/>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                to={`/product/${product.slug}`}
                key={product.slug}
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
                      navigate(`/product/${product.slug}`);
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
            <a href="mailto:info@synergytpl.com" aria-label="Email support">
              <StyledButton
                label="Contact Support"
                icon={true}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowroom;

