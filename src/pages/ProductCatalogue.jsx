import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FiFileText } from "react-icons/fi";
import StyledButton from "../components/StyledButton";

const catalogueLinks = [
  { name: "ST-Antenna Catalog", link: "/pdfs/ST- Antenna Catalog.pdf" },
  { name: "ST-Technology  product catalog6.9", link: "/pdfs/ST-Technology  product catalog6.9.pdf" },
  { name: "LOGIC ANALAYZER", link: "/pdfs/LOGIC ANALAYZER.pdf" },
  { name: "NETWORK ANALYZER", link: "/pdfs/NETWORK ANALYZER.pdf" },
  { name: "OSCILLOSCOPE", link: "/pdfs/OSCILLOSCOPE.pdf" },
  { name: "SIGNAL GENERATOR", link: "/pdfs/SIGNAL GENERATOR.pdf" },
  { name: "SPECTRUM ANALAYZER", link: "/pdfs/SPECTRUM ANALAYZER.pdf" },
  { name: "1-3.5mm Lifting lighting lamp", link: "/pdfs/1-3.5mm Lifting lighting lamp.pdf" },
  { name: "HIGH PERFORMANCE DISH ANTENNA", link: "/pdfs/HIGH PERFORMANCE DISH ANTENNA.pdf" },
  { name: "LONG ELEMENT CLOSED", link: "/pdfs/LONG ELEMENT CLOSED.pdf" },
  { name: "LONG ELEMENT OPEN", link: "/pdfs/LONG ELEMENT OPEN.pdf" },
  { name: "RF COAXIAL", link: "/pdfs/RF COAXIAL.pdf" },
  { name: "29 DBI (5.8 GHZ)- WGMSD WITH CLOSEUP", link: "/pdfs/29 DBI (5.8 GHZ)- WGMSD WITH CLOSEUP.pdf" },
  { name: "Fully Anechoic chamber", link: "/pdfs/Fully Anechoic chamber.pdf" },
  { name: "SMA-4.3-10-KJ(ST3.640.334)", link: "/pdfs/SMA-4.3-10-KJ(ST3.640.334).pdf" },
  { name: "ST-K-ZLB780G", link: "/pdfs/ST-K-ZLB780G.pdf" },
  { name: "ST120 WEL1000PMC", link: "/pdfs/ST120 WEL1000PMC.pdf" },
  { name: "ST120WEL1000PPC", link: "/pdfs/ST120WEL1000PPC.pdf" },
  { name: "5G INDOOR DIRECTIONAL PANEL ANTENNA", link: "/pdfs/5G INDOOR DIRECTIONAL PANEL ANTENNA.pdf" },
  { name: "Wideband Dual-ridged Horn Antenna", link: "/pdfs/Wideband Dual-ridged Horn Antenna.pdf" },
  { name: "2W Dummy Load  Termination Load", link: "/pdfs/2W Dummy Load  Termination Load.pdf" },
  { name: "SMA-18-2WG-1", link: "/pdfs/SMA-18-2WG-1.pdf" },
  { name: "ST-10-6G-SMAF", link: "/pdfs/ST-10-6G-SMAF.pdf" },
  { name: "TNC-18-2WG-1", link: "/pdfs/TNC-18-2WG-1.pdf" },
  { name: "18~26.5GHz, 5W, Solid State Power Amplifier", link: "/pdfs/18~26.5GHz, 5W, Solid State Power Amplifier.pdf" },
  { name: "18~26.5GHz, 10W, Solid State Power Amplifier.pdf", link: "/pdfs/18~26.5GHz, 10W, Solid State Power Amplifier.pdf" },
  { name: "25~32GHz, 8W, Solid State Power Amplifier", link: "/pdfs/25~32GHz, 8W, Solid State Power Amplifier.pdf" },
  { name: "26.5~40GHz, 5W, Solid State Power Amplifier", link: "/pdfs/26.5~40GHz, 5W, Solid State Power Amplifier.pdf" },
  { name: "26.5~40GHz, 10W, Solid State Power Amplifier", link: "/pdfs/26.5~40GHz, 10W, Solid State Power Amplifier.pdf" },
  { name: "26.5~40GHz, 20W, Solid State Power Amplifier", link: "/pdfs/26.5~40GHz, 20W, Solid State Power Amplifier.pdf" },
  { name: "29~31GHz, 20W, Solid State Power Amplifier", link: "/pdfs/29~31GHz, 20W, Solid State Power Amplifier.pdf" },
  { name: "40~43GHz, 10W, Solid State Power Amplifier", link: "/pdfs/40~43GHz, 10W, Solid State Power Amplifier.pdf" },
  { name: "47~52GHz, 10W, Solid State Power Amplifier", link: "/pdfs/47~52GHz, 10W, Solid State Power Amplifier.pdf" },
  { name: "0.5~2.7GHz, 50W, Solid State Power Amplifier", link: "/pdfs/0.5~2.7GHz, 50W, Solid State Power Amplifier.pdf" },
  { name: "0.5~6GHz, 20W, Solid State Power Amplifier", link: "/pdfs/0.5~6GHz, 20W, Solid State Power Amplifier.pdf" },
  { name: "0.5~6GHz, 40W, Solid State Power Amplifier", link: "/pdfs/0.5~6GHz, 40W, Solid State Power Amplifier.pdf" },
  { name: "0.6~2GHz, 20W, Solid State Power Amplifier", link: "/pdfs/0.6~2GHz, 20W, Solid State Power Amplifier.pdf" },
  { name: "0.7~2.5GHz, 50W, Solid State Power Amplifier", link: "/pdfs/0.7~2.5GHz, 50W, Solid State Power Amplifier.pdf" },
  { name: "0.8~3.0GHz, 10W, Solid State Power Amplifier", link: "/pdfs/0.8~3.0GHz, 10W, Solid State Power Amplifier.pdf" },
  { name: "0.8~3.0GHz, 50W, Solid State Power Amplifier", link: "/pdfs/0.8~3.0GHz, 50W, Solid State Power Amplifier.pdf" },
  { name: "2.5~6GHz, 100W, Solid State Power Amplifier", link: "/pdfs/2.5~6GHz, 100W, Solid State Power Amplifier.pdf" },
  { name: "2~6GHz, 30W, Solid State Power Amplifier", link: "/pdfs/2~6GHz, 30W, Solid State Power Amplifier.pdf" },
  { name: "2~6GHz, 50W, Solid State Power Amplifier", link: "/pdfs/2~6GHz, 50W, Solid State Power Amplifier.pdf" },
  { name: "2~6GHz, 100W, Solid State Power Amplifier", link: "/pdfs/2~6GHz, 100W, Solid State Power Amplifier.pdf" },
  { name: "10~1000MHz, 50W, Solid State Power Amplifier", link: "/pdfs/10~1000MHz, 50W, Solid State Power Amplifier.pdf" },
  { name: "20~1000MHz, 80W, Solid State Power Amplifier", link: "/pdfs/20~1000MHz, 80W, Solid State Power Amplifier.pdf" },
  { name: "20~1000MHz, 100W, Solid State Power Amplifier", link: "/pdfs/20~1000MHz, 100W, Solid State Power Amplifier.pdf" },
  { name: "ST-Flat Antenna Vertical Polarization 425～430MHz", link: "/pdfs/ST-Flat Antenna Vertical Polarization 425～430MHz.pdf" },
  { name: "ST-Indoor Omni Antenna Vertical Polarization 425～430MHz", link: "/pdfs/ST-Indoor Omni Antenna Vertical Polarization 425～430MHz.pdf" },
  { name: "ST-Vehicle Antenna Vertical Polarization 425～430MHz", link: "/pdfs/ST-Vehicle Antenna Vertical Polarization 425～430MHz.pdf" },
  { name: "UHF RFID  5400", link: "/pdfs/UHF RFID  5400.pdf" },
  { name: "UHF RFID 904", link: "/pdfs/UHF RFID 904.pdf" },
  { name: "UHF RFID 915", link: "/pdfs/UHF RFID 915.pdf" },
  { name: "STK PDF", link: "/pdfs/STK PDF.pdf" },
  { name: "SDR PRICE LIST PDF", link: "/pdfs/SDR PRICE LIST PDF.pdf" },
  { name: "50W Module", link: "/pdfs/50W Module.pdf" },
  { name: "AMP1006000-100W-28V-FUNC", link: "/pdfs/AMP1006000-100W-28V-FUNC.pdf" },
  { name: "COAXIAL FIXED TERMINATION-TF5000", link: "/pdfs/COAXIAL FIXED TERMINATION-TF5000.pdf" },
  { name: "Right-Hand Circularly Polarized Antenna, 17.7-21.2 GHz", link: "/pdfs/Right-Hand Circularly Polarized Antenna, 17.7-21.2 GHz.pdf" },
  { name: "ST-1006000-30W-28V", link: "/pdfs/ST-1006000-30W-28V.pdf" },
  { name: "SY1L5-ST-3P", link: "/pdfs/SY1L5-ST-3P.pdf" },
  { name: "Solar Catalogue", link: "/pdfs/Solar Catalogue.pdf" },
  { name: "STPL_Horn_Antennas", link: "/pdfs/STPL_Horn_Antennas.pdf" },
  { name: "STPL_IBS_DAS_Products_Catalouge1", link: "/pdfs/STPL_IBS_DAS_Products_Catalouge1.pdf" },
  { name: "STPL_RF_Components_Catalouge", link: "/pdfs/STPL_RF_Components_Catalouge.pdf" },
  { name: "Module Data Sheet-30W-28V", link: "/pdfs/Module Data Sheet-30W-28V.pdf" },
  { name: "Module Data Sheet-50W Module", link: "/pdfs/Module Data Sheet-50W Module.pdf" },
  { name: "Module Data Sheet-100W-28V-FUNC", link: "/pdfs/Module Data Sheet-100W-28V-FUNC.pdf" },
  { name: "ST-Ultra Wide Band Low Noise Amplifier", link: "/pdfs/ST-Ultra Wide Band Low Noise Amplifier.pdf" },
  { name: "SY-10W Wideband Power Amplifier", link: "/pdfs/SY-10W Wideband Power Amplifier.pdf" },
  { name: "SY-Ultra Wide Band Low Noise Amplifier", link: "/pdfs/SY-Ultra Wide Band Low Noise Amplifier.pdf" },
  { name: "GTF3000 Coaxial Fixed", link: "/pdfs/GTF3000 Coaxial Fixed.pdf" },
  { name: "SHX Quotation", link: "/pdfs/SHX Quotation.pdf" },
  { name: "TF3000 Coaxial Fixed", link: "/pdfs/TF3000 Coaxial Fixed.pdf" },
  { name: "2400_2500M_150W_Jammer", link: "/pdfs/2400_2500M_150W_Jammer.pdf" },
  { name: "5725_5850M_150W_Jammer", link: "/pdfs/5725_5850M_150W_Jammer.pdf" },
  { name: "AMP1006000-100W-28V", link: "/pdfs/AMP1006000-100W-28V.pdf" },
  { name: "TRIAX RG-58A-U 50Ω", link: "/pdfs/TRIAX RG-58A-U 50Ω.pdf" },
  { name: "Automotive_Cable_COMBIND", link: "/pdfs/Automotive_Cable_COMBIND.pdf" },
 





  


  
  



  

  
  { name: "Patch Panel Antenna", link: "https://www.rfconnector.in/Product/Patch_Panel_Antenna.pdf" },
  { name: "Omni Antenna", link: "https://www.rfconnector.in/Product/Omni_Antenna.pdf" },
  { name: "LPDA Antenna", link: "https://www.rfconnector.in/Product/LPDA_Antenna.pdf" },
  { name: "GSM Whip & Magnetic Base Antenna", link: "https://www.rfconnector.in/Product/GSM_Whip_Magnetic_Base_Antenna.pdf" },
  { name: "GPS Indoor & Outdoor Antenna", link: "https://www.rfconnector.in/Product/GPS_Indoor_Outdoor_Antenna.pdf" },
  { name: "Yagi Antenna", link: "https://www.rfconnector.in/Product/Yagi_Antenna.pdf" },
  { name: "HF VHF UHF Defence Required Antenna", link: "https://www.rfconnector.in/Product/HF_VHF_UHF_Defence_Required_Antenna.pdf" },
  { name: "Microwave Horn Antenna", link: "https://www.rfconnector.in/Product/Microwave_Horn_Antenna.pdf" },
  { name: "RG Cable", link: "https://www.rfconnector.in/Product/RG_Cable.pdf" },
  { name: "Feeder And Leaky Cable", link: "https://www.rfconnector.in/Product/Feeder_And_Leaky_Cable.pdf" },
  { name: "HLF & LMR Series Cable", link: "https://www.rfconnector.in/Product/HLF_LMR_Series_Cable.pdf" },
  { name: "High Frequency Test Cable Assembly", link: "https://www.rfconnector.in/Product/High_Frequency_Test_Cable_Assembly.pdf" },
  { name: "Jumper Cable", link: "https://www.rfconnector.in/Product/Jumper_Cable.pdf" },
  { name: "SMA Connector", link: "https://www.rfconnector.in/Product/SMA_Connector.pdf" },
  { name: "N Connector", link: "https://www.rfconnector.in/Product/N_Connector.pdf" },
  { name: "DIN Connector", link: "https://www.rfconnector.in/Product/DIN_Connector.pdf" },
  { name: "TNC Connector", link: "https://www.rfconnector.in/Product/TNC_Connector.pdf" },
  { name: "BNC Connector", link: "https://www.rfconnector.in/Product/BNC%20_Connector.pdf" },
  { name: "UHF Connector", link: "https://www.rfconnector.in/Product/UHF_Connector.pdf" },
  { name: "High Frequency Connector", link: "https://www.rfconnector.in/Product/High_Frequency_Connector.pdf" },
  { name: "Other Connector", link: "https://www.rfconnector.in/Product/Other_Connector.pdf" },
  { name: "Fixed Attenuator & Variable Attenuator", link: "https://www.rfconnector.in/Product/Fixed_Attenuator_Variable_Attenuator.pdf" },
  { name: "Dummy Load & Termination", link: "https://www.rfconnector.in/Product/Dummy_Load_Termination.pdf" },
  { name: "Power Splitter Cavity and Microstrip", link: "https://www.rfconnector.in/Product/Power_Splitter_Cavity_Microstrip.pdf" },
  { name: "Coupler & Combiners", link: "https://www.rfconnector.in/Product/Coupler_Combiners.pdf" },
  { name: "Duplexer_Triplexer_Quadplexer", link: "https://www.rfconnector.in/Product/Duplexer_Triplexer_Quadplexer.pdf" },
  { name: "RF Coaxial Adaptor", link: "https://www.rfconnector.in/Product/RF_Coaxial_Adaptor.pdf" },
  { name: "Rigid & Flexible Waveguide", link: "https://www.rfconnector.in/Product/Rigid_Flexible_Waveguide.pdf" },
  { name: "RF Shield Box/Shield Room", link: "https://www.rfconnector.in/Product/RF_Shield_Box1.pdf" },
  { name: "Test & Measurement Equipment", link: "https://www.rfconnector.in/Product/Test_&_Measurment_Euipment.pdf" },
  { name: "Tools", link: "https://www.rfconnector.in/Product/Tools.pdf" },
  { name: "Solar Products", link: "https://www.rfconnector.in/Product/Solar_Products.pdf" },
  { name: "Surge Arrestor", link: "https://www.rfconnector.in/Product/Surge_Arrestor.pdf" },
  { name: "Weather Proofing Kits", link: "https://www.rfconnector.in/Product/Weather_Proofing_Kits.pdf" },
  { name: "Feeder Clamp", link: "https://www.rfconnector.in/Product/Feeder_Clamp.pdf" },
  { name: "Earthing Kit", link: "https://www.rfconnector.in/Product/Earthing_Kit.pdf" },
  { name: "Telecom Antenna Mast", link: "https://www.rfconnector.in/Product/Telecom_Antenna_Mast.pdf" },
  { name: "Cirlculator & Isolator", link: "https://www.rfconnector.in/Product/Cirlculator_&_Isolator.pdf" },
  { name: "SFP Stock List 1", link: "https://www.rfconnector.in/Product/SFP_Stock_List_1.pdf" },
  { name: "SFP Stock List 2", link: "https://www.rfconnector.in/Product/SFP_Stock_List_2.pdf" },
  { name: "RF Filter", link: "https://www.rfconnector.in/Product/Cables/RF_Filter.pdf" },
  { name: "RF Balun", link: "https://www.rfconnector.in/Product/RF_Balun.pdf" },
  { name: "Jammer Modular", link: "https://www.rfconnector.in/Product/JAMMER_MODULAR.pdf" },
  { name: "ST-C2400M2483.5M-N", link: "https://www.rfconnector.in/Product/ST-C2400M2483.5M-N.pdf" },
  { name: "ST-C5150M5850M-N", link: "https://www.rfconnector.in/Product/ST-C5150M5850M-N.pdf" },
  { name: "SY QUASTAR SDRRF", link: "https://www.rfconnector.in/Product/SY_QUASTAR_SDRRF.pdf" },
  { name: "Waveguide Components", link: "https://www.rfconnector.in/Product/Waveguide_Components.pdf" },
  { name: "Waveguide Components WR137", link: "https://www.rfconnector.in/Product/Waveguide_Components_WR137.pdf" },
  { name: "SY25 OMNI ANTENNA", link: "https://www.rfconnector.in/Product/SY25_OMNI_ANTENNA.pdf" },
  { name: "tnms new", link: "https://www.rfconnector.in/Product/tnms new.pdf" },
  { name: "Antenna New Ver2022", link: "https://www.rfconnector.in/Product/Antenna_Catalouge_Ver2022.pdf" },
  { name: "5G Horn Antennas", link: "https://www.rfconnector.in/Product/Dual Rigid Horn Antenna 18~40Ghz.pdf" },
  { name: "All Types Of RF Antenna", link: "https://www.rfconnector.in/Product/All_Types_Of_Antennas.pdf" },
  { name: "High Frequency Product Catalogue", link: "https://www.rfconnector.in/Product/High_Frequency_Product_Catalouge.pdf" },
  { name: "High Frequency Product Catalogue 2nd", link: "https://www.rfconnector.in/Product/High_Frequency_Product_Catalouge_2nd.pdf" },
  { name: "High Frequency Test Cable Assemblies", link: "https://www.rfconnector.in/Product/High_Frequency_Test_Cable_Assemblies.pdf" },
  { name: "MM Wave & Microwave Components", link: "https://www.rfconnector.in/Product/MM_Wave_&_Microwave_Components.pdf" },
  { name: "MM Wave & Microwave Components 2nd", link: "https://www.rfconnector.in/Product/MM_Wave_&_Microwave_Components_2nd.pdf" },
  { name: "RF Products Broucher", link: "https://www.rfconnector.in/Product/RF_Products_Broucher.pdf" },
  { name: "RF Products Catalouge", link: "https://www.rfconnector.in/Product/RF_Products_Catalouge.pdf" },
  { name: "RF Products Catalouge 2nd", link: "https://www.rfconnector.in/Product/RF_Products_Catalouge_2nd.pdf" },
  { name: "RF Products Catalouge 2021", link: "https://www.rfconnector.in/Product/RF_Products_Catalouge_2021.pdf" },
  { name: "RF Products Catalouge 2021 2nd", link: "https://www.rfconnector.in/Product/RF_Products_Catalouge_2021_2nd.pdf" },
  { name: "SYNERGY TELECOM PVT LTD NEW CATALOUGE (Bl Version)", link: "https://www.rfconnector.in/Synergy_Telecom_New_Version.pdf" },
  { name: "SFP Stock List 2022", link: "https://www.rfconnector.in/catalog/Optical_Test_Equipment/SFP_Stock_List.pdf" },
  { name: "Electronic Electrical Instruments Connectors", link: "https://www.rfconnector.in/Product/ELECTRONIC_ELECTRICAL_INSTRUMENTS_CONNECTORS.pdf" },
  { name: "Cable Terminal Brass Lugs Brass Sheet Terminal Jumper Cables Catalogue", link: "https://www.rfconnector.in/Product/Cable_Termincal_Brass_Lugs_Brass_Sheet_Terminal_Jumper_Cables_Catalogue.pdf" },
  { name: "Anti Drone Devices Antenna, Case Box, Drone Jammer", link: "https://www.rfconnector.in/Product/Product_Cataloge/Anti_Drone_Devices.pdf" },
  { name: "High Frequency Test Cables", link: "https://www.rfconnector.in/Product/Product_Cataloge/High_Frequency_Cables_DC_110Ghz.pdf" },
  { name: "Jammer Antenna Catalogue 2024", link: "https://www.rfconnector.in/Product/Product_Cataloge/Jammer_Antenna_Catalogue_2024.pdf" },
  { name: "RF Components Catalogue 2024", link: "https://www.rfconnector.in/Product/Product_Cataloge/RF_Components_Catalogue_2024.pdf" },
  { name: "Waveguide Catalogue 2024", link: "https://www.rfconnector.in/Product/Product_Cataloge/Waveguide_Catalogue_2024.pdf" },
  { name: "Electronic Switches Connector", link: "https://www.rfconnector.in/Product/Product_Cataloge/Electronic_Switches_Connector_2024.pdf" },
  { name: "Auto Electrical Connector", link: "https://www.rfconnector.in/Product/Product_Cataloge/Auto_Electrical_Connector_2024.pdf" },
  { name: "RF Test Measurement Equipment Stock", link: "https://www.rfconnector.in/Product/Product_Cataloge/RF_Test_Measurement_Equipment_Stock.pdf" },
  { name: "Equipment Photo And Price", link: "https://rfconnector.in/Product/EQUIPMENT%20PHOTO%20AND%20PRICE.pdf" },
  { name: "ST High Frequency Antenna", link: "https://rfconnector.in/Product/ST_HIGH%20_FREQUENCY_ANTENNA.pdf" },
  {name: "ST 140W_MODULE-SPECIFICATION", link: "/pdfs/ST 140W_MODULE-SPECIFICATION.pdf" },
  {name: "WAVEGUIDEtoCOAXIALADAPTER", link: "/pdfs/WAVEGUIDE to COAXIAL ADAPTER.pdf" },
  {name: "OLYMPUSSZSTV", link: "/pdfs/OLYMPUS SZ-STV.pdf" },
  {name: "EMCSOLUTIONSPRODUCTIONS", link: "/pdfs/EMC solutions products.pdf" },
  {name: "Power supply", link: "/pdfs/Power supply.pdf" },
  {name: "4dbi_Omni_Celling_Antenna_698_4000Mhz", link: "/pdfs/4dbi_Omni_Celling_Antenna_698_4000Mhz.pdf" },
  {name: "2T2R Panel Antenna 698-3800MHz", link: "/pdfs/2T2R Panel Antenna 698-3800MHz.pdf" },
  {name: "2G-3G-4G WIDEBAND PCB FLEXIBLE ANTENNA", link: "/pdfs/2G-3G-4G WIDEBAND PCB FLEXIBLE ANTENNA.pdf" },
  {name: "17dbi High frequency antenna", link: "/pdfs/17dbi High frequency antenna.pdf" },
  {name: "12_dBi_LPDA_Antenna", link: "/pdfs/12_dBi_LPDA_Antenna.pdf" },
  {name: "5G Parabolic Grid Antenna", link: "/pdfs/5G Parabolic Grid Antenna.pdf" },
  {name: "5DBI OMNI ANTENNA 690-6000MHz", link: "/pdfs/5DBI OMNI ANTENNA 690-6000MHz.pdf" },
  {name: "4dbi_Omni_Celling_Antenna_698_4000Mhz", link: "/pdfs/4dbi_Omni_Celling_Antenna_698_4000Mhz.pdf" },
  {name: "3dbi Screw Mount Antenna", link: "/pdfs/3dbi Screw Mount Antenna.pdf" },
  {name: "117.9-137 two daipole ant STACKED FOLDED DIPOLE OMNI DIRECTIONAL ANTENNA", link: "/pdfs/117.9-137 two daipole ant STACKED FOLDED DIPOLE OMNI DIRECTIONAL ANTENNA....pdf" },
  {name: "12_dBi_LPDA_Antenna", link: "/pdfs/12_dBi_LPDA_Antenna.pdf" },
  {name: "ad-18-d-3512rev-aang", link: "/pdfs/ad-18-d-3512rev-aang.pdf" },
  {name: "Double_rigid_horn_antenna_0.8-18GHz", link: "/pdfs/Double_rigid_horn_antenna_0.8-18GHz.pdf" },
  {name: "Double_rigid_horn_antenna_4-40GHz", link: "/pdfs/Double_rigid_horn_antenna_4-40GHz.pdf" },
  {name: "Double_rigid_horn_antenna_18-40GHz", link: "/pdfs/Double_rigid_horn_antenna_18-40GHz.pdf" },
  {name: "LORA 3DBI PCB ANTENNA", link: "/pdfs/LORA 3DBI PCB ANTENNA.pdf" },
  {name: "LPDA_ANTENNA_Bi_Directional_6DBI_700_3500Mhz_NF", link: "/pdfs/LPDA_ANTENNA_Bi_Directional_6DBI_700_3500Mhz_NF.pdf" },
  {name: "MAGNETIC ANTENNA MCX_M", link: "/pdfs/MAGNETIC_ANTENNA_MCX_M.pdf" },
  {name: "OMNI ANTENNA 798-2500", link: "/pdfs/OMNI ANTENNA 798-2500.pdf" },
  {name: "PARABOLIC ANTENNA 600-6000MHz.pdf", link: "/pdfs/PARABOLIC ANTENNA 600-6000MHz.pdf" },
  {name: "RFID ANTENNAS DATA", link: "/pdfs/RFID ANTENNAS DATA.pdf" },
  {name: "RUBBER DUCK ANTENNA", link: "/pdfs/RUBBER DUCK ANTENNA.pdf" },
  {name: "ST 866-925MHz 12dbi RFID Patch Panel Antenna", link: "/pdfs/ST 866-925MHz 12dbi RFID Patch Panel Antenna.pdf" },
  {name: "ST 868MHz PCB", link: "/pdfs/ST 868MHz PCB.pdf" },
  {name: "BNC F 4HOLE CLAMP LMR200", link: "/pdfs/BNC_F_4HOLE_CLAMP_LMR200.pdf" },
  {name: "BNC F 4HOLE CRIMP LMR200", link: "/pdfs/BNC_F_4HOLE_CRIMP_LMR200.pdf" },
  {name: "BNC F BH BT 3002 CPS", link: "/pdfs/BNC_F_BH_BT_3002_CPS.pdf" },
  {name: "BNC F BH BT 3002 CRIMP", link: "/pdfs/BNC_F_BH_BT_3002_CRIMP.pdf" },
  {name: "BNC F BH SOLDER", link: "/pdfs/BNC_F_BH_SOLDER.pdf" },
  {name: "BNC F LMR 100 CRIMP", link: "/pdfs/BNC_F_LMR_100_CRIMP.pdf" },
  { name: "BNC F LMR 200 CRIMP", link: "/pdfs/BNC_F_LMR_200_CRIMP.pdf" },
  { name: "BNC F LMR 240 CLAMP", link: "/pdfs/BNC_F_LMR_240_CLAMP.pdf" },
  { name: "BNC F LMR 240 CRIMP", link: "/pdfs/BNC_F_LMR_240_CRIMP.pdf" },
  { name: "BNC F RA PCB MOUNT", link: "/pdfs/BNC_F_RA_PCB_MOUNT.pdf" },
  { name: "BNC F RP LMR 100 CRIMP", link: "/pdfs/BNC_F_RP_LMR_100_CRIMP.pdf" },
  { name: "BNC M 4HOLE SOLDER 17.5MM", link: "/pdfs/BNC_M_4HOLE_SOLDER_17.5MM.pdf" },
  { name: "BNC M BH SOLDER", link: "/pdfs/BNC_M_BH_SOLDER.pdf" },
  { name: "BNC M BT3002 CPS", link: "/pdfs/BNC_M_BT3002_CPS.pdf" },
  { name: "BNC M BT3002 CRIMP", link: "/pdfs/BNC_M_BT3002_CRIMP.pdf" },
  { name: "BNC M LMR 100 CRIMP", link: "/pdfs/BNC_M_LMR_100_CRIMP.pdf" },
  { name: "BNC M LMR 200 CLAMP", link: "/pdfs/BNC_M_LMR_200_CLAMP.pdf" },
  { name: "BNC M LMR 200 CRIMP", link: "/pdfs/BNC_M_LMR_200_CRIMP.pdf" },
  { name: "BNC M LMR 400 CLAMP", link: "/pdfs/BNC_M_LMR_400_CLAMP.pdf" },
  { name: "BNC M LMR 400 CRIMP", link: "/pdfs/BNC_M_LMR_400_CRIMP.pdf" },
  { name: "BNC M PLASTIC HOOD", link: "/pdfs/BNC_M_PLASTIC_HOOD.pdf" },
  { name: "BNC M RA LMR 200 CRIMP", link: "/pdfs/BNC_M_RA_LMR_200_CRIMP.pdf" },
  { name: "BNC M RA LMR400 CRIMP", link: "/pdfs/BNC_M_RA_LMR400_CRIMP..pdf" },
  { name: "BNC M RG 6 CRIMP", link: "/pdfs/BNC_M_RG_6_CRIMP.pdf" },
  { name: "BNC M RG 11 CRIMP", link: "/pdfs/BNC_M_RG_11_CRIMP.pdf" },
  { name: "BNC M RG 59 COMPRESSION", link: "/pdfs/BNC_M_RG_59_COMPRESSION.pdf" },
  { name: "BNC M RG 59 CPS", link: "/pdfs/BNC_M_RG_59_CPS.pdf" },
  { name: "BNC M RG 59 CRIMP", link: "/pdfs/BNC_M_RG_59_CRIMP.pdf" },
  { name: "ST 7 16F 12 YG23 00", link: "/pdfs/ST-7-16F-12-YG23-00.pdf" },
  { name: "ST 7 16F 22 YF23 00", link: "/pdfs/ST-7-16F-22-YF23-00.pdf" },
  { name: "ST-7-16M-12 YI24 00", link: "/pdfs/ST-7-16M-12-YI24-00.pdf" },
  { name: "ST-7-16M-22-YF23-00", link: "/pdfs/ST-7-16M-22-YF23-00.pdf" },
  { name: "ST-7-16MA-12-YJ23-00", link: "/pdfs/ST-7-16MA-12-YJ23-00.pdf" },
  { name: "ST-4310F-12-YC23-YP", link: "/pdfs/ST-4310F-12-YC23-YP.pdf" },
  { name: "ST-4310F-22-HW-YP", link: "/pdfs/ST-4310F-22-HW-YP.pdf" },
  { name: "ST-4310M-12-YH23-YP", link: "/pdfs/ST-4310M-12-YH23-YP.pdf" },
  { name: "pdfs/ST-4310M-22-YG23", link: "/pdfs/ST-4310M-22-YG23.pdf" },
  { name: "ST-NF-12-YD23-00", link: "/pdfs/ST-NF-12-YD23-00.pdf" },
  { name: "ST-NF-22-YG23-00", link: "/pdfs/ST-NF-22-YG23-00.pdf" },
  { name: "ST-NM-12-YH23-00", link: "/pdfs/ST-NM-12-YH23-00.pdf" },
  { name: "ST-NM-22-YM23-00", link: "/pdfs/ST-NM-22-YM23-00.pdf" },
  { name: "9dBi Collinear Omni Directional Antenna", link: "/pdfs/9dBi_Collinear_Omni_Directional_Antenna.pdf" },
  { name: "9dbi Magnetic Base Antenna with 3Mtr 698 2700Mhz", link: "/pdfs/9dbi_Magnetic_Base_Antenna_with_3Mtr_698_2700Mhz.pdf" },
  { name: "antenna catalogue", link: "/pdfs/antenna catalogue.pdf" },
  { name: "BNC Connector", link: "/pdfs/BNC _Connector.pdf" },
  { name: "Coupler Combiners", link: "/pdfs/Coupler_Combiners.pdf" },
  { name: "DIN Connector", link: "/pdfs/DIN_Connector.pdf" },
  { name: "Dummy Load & Termination", link: "/pdfs/Dummy_Load_Termination.pdf" },
  { name: "Feeder And Leaky Cable", link: "/pdfs/Feeder_And_Leaky_Cable.pdf" },
  { name: "Feeder Clamp", link: "/pdfs/Feeder_Clamp.pdf" },
  { name: "Fixed Attenuator & Variable Attenuator", link: "/pdfs/Fixed_Attenuator_Variable_Attenuator.pdf" },
  { name: "GPS INDOOR ANTENNA 28DBI 3MTR RG174 SMAM1", link: "/pdfs/GPS_INDOOR_ANTENNA_28DBI_3MTR_RG174_SMAM1.pdf" },
  { name: "GPS Indoor Outdoor Antenna", link: "/pdfs/GPS_Indoor_Outdoor_Antenna.pdf" },
  { name: "HLF & LMR Series Cable", link: "/pdfs/HLF_LMR_Series_Cable.pdf" },
  { name: "High Frequency Connector", link: "/pdfs/High_Frequency_Connector.pdf" },
  { name: "High Frequency Test Cable Assembly", link: "/pdfs/High_Frequency_Test_Cable_Assembly.pdf" },
  { name: "HLF LMR Series Cable", link: "/pdfs/HLF_LMR_Series_Cable.pdf" },
  { name: "Jumper Cable", link: "/pdfs/Jumper_Cable.pdf" },
  { name: "LPDA ANTENNA 14DBI 698 2700Mhz 1FEET RG58 NF", link: "/pdfs/LPDA_ANTENNA_14DBI_698_2700Mhz_1FEET_RG58_NF.pdf" },
  { name: "LPDA Antenna", link: "/pdfs/LPDA_Antenna.pdf" },
  { name: "N Connector", link: "/pdfs/N_Connector.pdf" },
  { name: "N Male for 1 1 4 Feeder Cable", link: "/pdfs/N_Male_for_1_1_4_Feeder_Cable.pdf" },
  { name: "Omni Antenna", link: "/pdfs/Omni_Antenna.pdf" },
  { name: "Other Connector", link: "/pdfs/Other_Connector.pdf" },
  { name: "Patch Panel Antenna", link: "/pdfs/Patch_Panel_Antenna.pdf" },
  { name: "Power Splitter Cavity and Microstrip", link: "/pdfs/Power_Splitter_Cavity_Microstrip.pdf" },
  { name: "RF Coaxial Adaptor", link: "/pdfs/RF_Coaxial_Adaptor.pdf" },
  { name: "Rigid Flexible Waveguide", link: "/pdfs/Rigid_Flexible_Waveguide.pdf" },
  { name: "SMA Connector", link: "/pdfs/SMA_Connector.pdf" },
  { name: "SMA Female BH Rightangle PCB Mount", link: "/pdfs/SMA_Female_BH_Rightangle_PCB_Mount_.pdf" },
  { name: "TNC Connector", link: "/pdfs/TNC_Connector.pdf" },
  { name: "8-BAND ATENNA PATCH-PANEL", link: "/pdfs/8-BAND_ATENNA_PATCH-PANEL..pdf" },
  { name: "TELESCOPIC MAST", link: "/pdfs/TELESCOPIC MAST.pdf" },
  { name: "L1 l2 L5 AMPLIFIER", link: "/pdfs/L1 l2 L5 AMPLIFIER.pdf" },
  { name: "100W POWER MODULE 400-6000MHZ", link: "/pdfs/100W_POWER_MODULE_400-6000MHZ backup.pdf" },
  { name: "ST-DISCONE ANTENNA Data Sheet 30-150mhz", link: "/pdfs/ST-DISCONE ANTENNA Data Sheet 30-150mhz.pdf" },
  { name: "RG 217 Co-Axial Cable", link: "/pdfs/RG_217 co-axial cable.pdf" },
  { name: "ST-Medical wires 5c-46awg", link: "/pdfs/ST- Medical wires 5c-46awg.pdf" },
  { name: "ST-Medical wires 7c-44awg", link: "/pdfs/ST- Medical wires 7c-44awg.pdf" },
  { name: "ST-AWG46 50ω data sheet", link: "/pdfs/ST-AWG46 50ω data sheet.pdf" },
  { name: "Sy25 Hf conn", link: "/pdfs/Sy25 Hf conn..pdf" },
  { name: "10 MTR ELECTRIC MAST", link: "/pdfs/10-MTR-ELECTRIC-MAST.pdf" },
  { name: "EQUIPMENT list", link: "/pdfs/EQUIPMENT PHOTO AND PRICE.pdf" },
  { name: "LOGIC ANALAYZER", link: "/pdfs/LOGIC ANALAYZER.pdf" },
  { name: "600-4200MHz 4.3-10 Female Directional Coupler", link: "/pdfs/600-4200MHz 4.3-10 Female Directional Coupler.pdf" },
  { name: "600-4200MHz DIN Female Directional Coupler", link: "/pdfs/600-4200MHz DIN Female Directional Coupler.pdf" },
  { name: "600-4200MHz N Female Directional Coupler", link: "/pdfs/600-4200MHz N Female Directional Coupler.pdf" },
  { name: "600-4200MHz 2in 2out 4.3-10F Hybrid Coupler", link: "/pdfs/600-4200MHz 2in 2out 4.3-10F Hybrid Coupler.pdf" },
  { name: "600-4200MHz 2in 2out DIN Female Hybrid Coupler", link: "/pdfs/600-4200MHz 2in 2out DIN Female Hybrid Coupler.pdf" },
  { name: "600-4200MHz 2in 2out N Female Hybrid Coupler", link: "/pdfs/600-4200MHz 2in 2out N Female Hybrid Coupler.pdf" },
  { name: "600-4200MHz 2Way 4.3-10 Female Power Splitter", link: "/pdfs/600-4200MHz 2Way 4.3-10 Female Power Splitter.pdf" },
  { name: "600-4200MHz 2Way DIN Female Power Splitter", link: "/pdfs/600-4200MHz 2Way DIN Female Power Splitter.pdf" },
  { name: "600-4200MHz 2Way N Female Power Splitter", link: "/pdfs/600-4200MHz 2Way N Female Power Splitter.pdf" },
  { name: "600-4200MHz 3Way DIN Female Power Splitter", link: "/pdfs/600-4200MHz 3Way DIN Female Power Splitter.pdf" },
  { name: "600-4200MHz 4Way 4.3-10 Female Power Splitter", link: "/pdfs/600-4200MHz 4Way 4.3-10 Female Power Splitter.pdf" },
  { name: "600-4200MHz 4Way DIN Female Power Splitter", link: "/pdfs/600-4200MHz 4Way DIN Female Power Splitter.pdf" },
  { name: "600-4200MHz 4Way N Female Power Splitter", link: "/pdfs/600-4200MHz 4Way N Female Power Splitter.pdf" },
  { name: "UHF ANTENNA", link: "/pdfs/UHF ANTENNA.pdf" },
  { name: "5  G INDOOR DIRECTIONAL PANEL ANTENNA", link: "/pdfs/5  G INDOOR DIRECTIONAL PANEL ANTENNA.pdf" },
  { name: "ANT and GNSS combined antenna", link: "/pdfs/ANT and GNSS combined antenna.pdf" },
  { name: "Horn Antenna-0.6-1GHz", link: "/pdfs/Horn Antenna-0.6-1GHz.pdf" },
  { name: "SMA-4.3-10-KJ(ST3.640.334)", link: "/pdfs/SMA-4.3-10-KJ(ST3.640.334).pdf" },
  { name: "ST-AT-18G-2W-NMF", link: "/pdfs/ST-AT-18G-2W-NMF.pdf" },
  { name: "Waveguide WR90-100-200-300mm", link: "/pdfs/Waveguide WR90-100-200-300mm.pdf" },
  { name: "UHF RFID  5400", link: "/pdfs/UHF RFID  5400.pdf" },
  { name: "UHF RFID 904", link: "/pdfs/UHF RFID 904.pdf" },
  { name: "UHF RFID 915", link: "/pdfs/UHF RFID 915.pdf" },
  { name: "6-8GHz 200W SSPA Specifications 0918", link: "/pdfs/6-8GHz 200W SSPA Specifications 0918.pdf" },
  { name: "6-18GHz 200W SSPA Specifications 0918", link: "/pdfs/6-18GHz 200W SSPA Specifications 0918.pdf" },
  { name: "Broadband High Power Amplifier Module (SSPA)", link: "/pdfs/Broadband High Power Amplifier Module (SSPA).pdf" },
  { name: "RF_Amplifier_KB60180M40", link: "/pdfs/RF_Amplifier_KB60180M40.pdf" },
  { name: "RF_Amplifier_KB60180M43C", link: "/pdfs/RF_Amplifier_KB60180M43C.pdf" },
  { name: "RF_Amplifier_KB60180M51A", link: "/pdfs/RF_Amplifier_KB60180M51A.pdf" },
  { name: "RF_Amplifier_Module_KB60", link: "/pdfs/RF_Amplifier_Module_KB60.pdf" },
  { name: "ST FILTER", link: "/pdfs/ST FILTER.pdf" },
  { name: "SMA-N-KKSY", link: "/pdfs/SMA-N-KKSY.pdf" },
  { name: "TEST AND MEASUREMENT EQUIPMENT", link: "/pdfs/TEST AND MEASUREMENT EQUIPMENT.pdf" },
  { name: "EQUIPMENT", link: "/pdfs/EQUIPMENT.pdf" },
  { name: "MAST PRICE LIST 2025 NEW", link: "/pdfs/MAST PRICE LIST 2025 NEW.pdf" },
  { name: "TEST & MEASUREMENT EQUIPMENT 2025", link: "/pdfs/TEST & MEASUREMENT EQUIPMENT 2025.pdf" },
  { name: "DR100-A13", link: "/pdfs/DR100-A13.pdf" },
  { name: "Panel antenna 136MHz-174 MHz", link: "/pdfs/Panel antenna 136MHz-174 MHz.pdf" },
  { name: "ST Coaxial Cable stripping machine 6806", link: "/pdfs/ST Coaxial Cable stripping machine 6806.pdf" },
  { name: "ST RG-6 Coaxial cable Cu finished", link: "/pdfs/ST RG-6 Coaxial cable Cu finished.pdf" },
  { name: "WR137 Waveguide Flexible 1000mm and 2000mm", link: "/pdfs/WR137 Waveguide Flexible 1000mm and 2000mm.pdf" },
  { name: "STK REPORT", link: "/pdfs/STK_REPORT.pdf" },
  { name: "Solar Catalogue", link: "/pdfs/Solar Catalogue.pdf" },
  { name: "STPL_Horn_Antennas", link: "/pdfs/STPL_Horn_Antennas.pdf" },
  { name: "STPL_IBS_DAS_Products_Catalouge1", link: "/pdfs/STPL_IBS_DAS_Products_Catalouge1.pdf" },
  { name: "STPL_RF_Components_Catalouge", link: "/pdfs/STPL_RF_Components_Catalouge.pdf" },
  { name: "Module Data Sheet-30W-28V", link: "/pdfs/Module Data Sheet-30W-28V.pdf" },
  { name: "Module Data Sheet-50W Module", link: "/pdfs/Module Data Sheet-50W Module.pdf" },
  { name: "Module Data Sheet-100W-28V-FUNC", link: "/pdfs/Module Data Sheet-100W-28V-FUNC.pdf" },
  { name: "ST-Ultra Wide Band Low Noise Amplifier", link: "/pdfs/ST-Ultra Wide Band Low Noise Amplifier.pdf" },
  { name: "SY-10W Wideband Power Amplifier", link: "/pdfs/SY-10W Wideband Power Amplifier.pdf" },
  { name: "SY-Ultra Wide Band Low Noise Amplifier", link: "/pdfs/SY-Ultra Wide Band Low Noise Amplifier.pdf" },
  { name: "GTF3000 Coaxial Fixed", link: "/pdfs/GTF3000 Coaxial Fixed.pdf" },
  { name: "SHX Quotation", link: "/pdfs/SHX Quotation.pdf" },
  { name: "TF3000 Coaxial Fixed", link: "/pdfs/TF3000 Coaxial Fixed.pdf" },
  { name: "1C X 1.5 Sqmm", link: "/pdfs/1C X 1.5 Sqmm.pdf" },
  { name: "1C X 2.0 Sqmm", link: "/pdfs/1C X 2.0 Sqmm.pdf" },
  { name: "1C X0.35 Sqmm", link: "/pdfs/1C X0.35 Sqmm.pdf" },
  { name: "1C X10 Sqmm", link: "/pdfs/1C X10 Sqmm.pdf" },
  { name: "RG58 AWG22 Solid copper", link: "/pdfs/RG58 AWG22 Solid copper.pdf" },
  { name: "TF5000 Coaxial Fixed Termination", link: "/pdfs/TF5000 Coaxial Fixed Termination.pdf" },
  { name: "WA770 RF Cable", link: "/pdfs/WA770 RF Cable.pdf" },

  
  

  




   
     


    

  

  
];

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

// Main Component
const ProductCatalogue = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // This filter is for the main catalogue view
  const filteredLinks = catalogueLinks.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // If a slug exists, we are on a single product's page.
  if (slug) {
    const product = catalogueLinks.find((item) => slugify(item.name) === slug);

    // If the product is not found, display a not-found message.
    if (!product) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
          <Helmet>
            <title>Product Not Found | Synergy Telecom</title>
          </Helmet>
          <h1 className="text-2xl font-bold text-gray-800">❌ Product Not Found</h1>
          <p className="mt-2 text-gray-500">The catalogue you requested does not exist.</p>
          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
            onClick={() => navigate("/product-catalogue")}
          >
            Back to Catalogue
          </button>
        </div>
      );
    }

    // Display the specific product's details in a centered and fuller layout.
    return (
     <div className="min-h-[80vh] flex items-center justify-center p-6">
  <Helmet>
    <title>{product.name} | Synergy Telecom</title>
  </Helmet>
  <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-xl p-8 text-center">
    <div className="mb-6 p-4 bg-blue-100 rounded-full text-blue-700 mx-auto w-20 h-20 flex items-center justify-center">
      <FiFileText size={48} />
    </div>
    <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
    <p className="text-lg text-gray-600 mb-8">
      Click the button below to view and download the product catalogue in PDF format.
    </p>
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
    >
      <FiFileText className="mr-3 h-6 w-6" />
      View PDF
    </a>
    <div className="mt-6">
      <button
        className="text-blue-600 hover:text-blue-800 hover:underline transition"
        onClick={() => navigate("/product-catalogue")}
      >
        ← Back to All Products
      </button>
    </div>
  </div>
</div>

    );
  }

  // If no slug is present, render the full catalogue with search functionality.
  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>Product Catalogue | Synergy Telecom</title>
      </Helmet>
      {/* Search Bar and Header */}
      <div className="max-w-xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Catalogue</h1>
        <p className="text-lg text-gray-600">
          Browse our comprehensive collection of product catalogues.
        </p>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search for a product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredLinks.length > 0 ? (
          filteredLinks.map((item, index) => (
            <Link
              key={index}
              to={`/product-catalogue/${slugify(item.name)}`}
              className="group bg-white border border-gray-200 hover:border-blue-500 rounded-lg shadow-md hover:shadow-xl p-6 flex flex-col justify-between text-center transition-transform transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4 p-4 bg-blue-100 rounded-full text-blue-700 group-hover:bg-blue-200 mx-auto">
                <FiFileText size={32} />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 leading-snug">
                {item.name}
              </h3>

              {/* Optional short description */}
              {item.description && (
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {item.description}
                </p>
              )}

              {/* File info */}
              <div className="mt-4 text-xs text-gray-400">
                📄 PDF — {item.size || "View & Download"}
              </div>
            </Link>
          ))
        ) : (
          <div className="sm:col-span-2 md:col-span-3 xl:col-span-4 text-center">
            <img
              src="/images/empty-search.svg"
              alt="No results"
              className="mx-auto w-40 mb-6 opacity-80"
            />
            <p className="text-gray-500 text-base mb-2">
              🚫 No matching catalogue found.
            </p>
            <p className="text-gray-400 text-sm">
              Try different keywords or browse all categories.
            </p>
          </div>
        )}
      </div>

      {/* Support Section */}
     <div className="mt-20 bg-white border border-gray-200 rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold text-blue-900 mb-3">
    Still can’t find what you’re looking for?
  </h2>
  <p className="text-gray-600 mb-6 max-w-xl mx-auto">
    Our product experts are here to help you select the right solution for your
    needs. Get in touch and we’ll send you the exact specifications you require.
  </p>
  <div className="flex justify-center"> {/* Add this div */}
    <StyledButton
      label="Contact Support"
      icon={true}
      className=""
      onClick={() => (window.location.href = "mailto:info@synergytpl.com")}
    />
  </div> {/* Close this div */}
</div>
    </div>
  );
};

export default ProductCatalogue;
