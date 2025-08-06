import React, { useState } from 'react';
import StyledButton from "../components/StyledButton";
import { Helmet } from "react-helmet-async";
import bandantenna from "/Datasheets/8-BAND_ATENNA_PATCH-PANEL.pdf";

const catalogueLinks = [
  { name: "ST-Antenna Catalog", link: "/pdfs/ST- Antenna Catalog.pdf" },
  { name: "ST-Technology  product catalog6.9", link: "/pdfs/ST-Technology  product catalog6.9.pdf" },
  { name: "LOGIC ANALAYZER", link: "/pdfs/LOGIC ANALAYZER.pdf" },
  { name: "NETWORK ANALYZER", link: "/pdfs/NETWORK ANALYZER.pdf" },
  { name: "OSCILLOSCOPE", link: "/pdfs/OSCILLOSCOPE.pdf" },
  { name: "SIGNAL GENERATOR", link: "/pdfs/SIGNAL GENERATOR.pdf" },
  { name: "SPECTRUM ANALAYZER", link: "/pdfs/SPECTRUM ANALAYZER.pdf" },



  
  
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





   
     


    

  

  
];


const ProductCatalogue = () => {
  const [search, setSearch] = useState("");

  const filteredLinks = catalogueLinks.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-12 px-4 sm:px-8 lg:px-20">
      <Helmet>
  <title>Product Catalogue | RF Connector - Synergy Telecom</title>
  <meta
    name="description"
    content="Browse and download a wide range of product catalogues including antennas, RF cables, connectors, waveguides, attenuators, and more from Synergy Telecom."
  />
  <meta
    name="keywords"
    content="RF product catalogue, Synergy Telecom PDF, RF antennas, RF connectors, microwave components, waveguide catalogue, telecom accessories"
  />
  <meta property="og:title" content="Product Catalogue | RF Connector - Synergy Telecom" />
  <meta
    property="og:description"
    content="Explore our complete collection of downloadable RF and telecom product catalogues in PDF format."
  />
  <meta property="og:url" content="https://panaceaticsynergy.com/product-catalogue" />
  <meta property="og:type" content="website" />
</Helmet>
      
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        Products Catalogue
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>

      {/* Search Bar */}
      <div className="mb-12 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search catalogue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-lg border border-blue-300 shadow focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-300 hover:border-blue-500 rounded-md shadow-sm hover:shadow-md p-5 flex items-center justify-center text-center h-28 sm:h-32 transition-transform transform hover:-translate-y-1 hover:bg-blue-50"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-700 leading-snug">
              {item.name}
            </h3>
          </a>
        ))}
      </div>

      {/* No Results Message */}
      {filteredLinks.length === 0 && (
        <p className="text-center text-gray-500 mt-16 text-base animate-pulse">
          🚫 No matching catalogue found.
        </p>
      )}

      {/* Contact Support Button */}
      <div className="mt-16 flex justify-center">
        <StyledButton
          label="Contact Support"
          icon={true}
          onClick={() =>
            (window.location.href = "mailto:info@synergytpl.com")
          }
        />
      </div>
    </div>
  );
};

export default ProductCatalogue;