import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Import the same data and slugify function to find the product
const catalogueLinks = [
    { name: "3dbi Whip Antenna 2.4Ghz with UFL Cable 150mm", link: "https://www.rfconnector.in/catalog/IBS/WHIP_ANTENNA_RA_MOV_3DBI_2400Mhz_WITH_UFL.pdf" },
    { name: "Phoenix Contact Flashtrab (FLT N/PE CTRL -1.5)", link: "https://www.alibaba.com/product-detail/FLASHTRAB-FLT-100-N-PE-CTRL_50010804282.html" },
    { name: "Phoenix Contact Flashtrab (FLT 35 CTRL -1.5)", link: "https://www.alibaba.com/product-detail/FLT-35-CTRL-1-5_50010807454.html" },
    { name: "Phoenix Contact Valvetrab (VAL-MS 400 ST)", link: "https://www.alibaba.com/product-detail/VALVETRAB-VAL-MS-400-ST_50010807458.html" },
    { name: "Solar Panel Box (Flbox/All parts Enclosure)", link: "https://preview.alibaba.com/product/50010804268-100671662/SOLAR_PANEL_CONTROL_BOX.html" },
    { name: "Val MS 230 ST (Type 2 Surge protection Plug)", link: "https://www.alibaba.com/product-detail/VAL-MS-230-ST_50010754721.html" },
    { name: "Val MS 320 ST", link: "https://www.alibaba.com/product-detail/VAL-MS-320-ST_50010643684.html" },
    { name: "FMS - 12 ST", link: "https://preview.alibaba.com/product/50010643688-100671662/F_MS_12_ST.html" },
    { name: "FLT 100-260", link: "https://preview.alibaba.com/product/50010667007-100671662/FLT_100_260.html" },
    { name: "FLT 60-400", link: "https://www.alibaba.com/product-detail/FLT-60-400_50010643672.html" },
    { name: "32 mm HDPE Coupler", link: "https://preview.alibaba.com/product/50010642889-100671662/32_mm_HDPE_Coupler.html" },
    { name: "Feeder Clamp (HDG Telecom) 1 Way, 2 Way,3 Way, 6 Way for 1/2 inch and 7/8 inch", link: "https://rfconnector.in/showroom/feeder_clamp" },
    { name: "Huawei 16 port DDF MPX272-16 (Patch panel fully loaded)", link: "https://preview.alibaba.com/product/50010696517-100671662/HUAWEI_16_Port_DDF_MPX272_16.html" },
    { name: "CNT cable 15 cm (QMA(M) RA to QMA(M) RA with Rubber Boot)", link: "https://www.alibaba.com/product-detail/QMA-Male-Right-Angle-to-QMA_50010642871.html" },
    { name: "Old Test equipment Anritsu MS 710i 23 GHz spectrum Analyzer", link: "https://rfconnector.in/catalog/SOLAR_PRODUCT/spectrum_analyzer.pdf" },
    { name: "Anritsu Ma247 A Power meter", link: "https://rfconnector.in/catalog/SOLAR_PRODUCT/ML_2437A.pdf" },
    { name: "Anritsu Ma247X Diode sensor", link: "https://rfconnector.in/catalog/SOLAR_PRODUCT/STANDARD_DIODE_SENSORS.pdf" },
    { name: "Polyphase 400 MHz Surge Arrester NM-NF 60 Watts for VHF and UHF application", link: "https://rfconnector.in/catalog/IBS/Polyphaser_400mhz_surge_arrester_NM_NF_60WATTS_FOR_VHF_AND_UHF_Application.pdf" },
    { name: "Tilt Actuator factory set to AISG 2.0 Mode", link: "https://rfconnector.in/catalog/IBS/Teletilt_Actuator_Factory_set_to_AISG_2.0_Mode.pdf" },
    { name: "DCS-UMTS Diplexer", link: "https://rfconnector.in/catalog/IBS/DCS_UMTS_DIPLEXER.pdf" },
    { name: "RJ45 data canopy surge arrester", link: "https://rfconnector.in/catalog/Microwave_components/SURG_ARRESTER/DC1_Surge_suppressor_for_CMM5.pdf" },
    { name: '7/8" Feeder cable', link: "https://rfconnector.in/catalog/RF_Cable/7_8_LDF_Cable.pdf" },
    { name: "All Microwave IBS products", link: "https://rfconnector.in/catalog/RF_Cable/7_8_LDF_Cable.pdf" },
    { name: "Patch panel Antenna", link: "https://rfconnector.in/catalog/IBS/8DBI_PANEL_ANTENNA_700_3500MHz.pdf" },
    { name: "Omni Antenna", link: "https://rfconnector.in/catalog/IBS/Omni_Antenna_700-3500MHz.pdf" },
    { name: "2 Way Cavity Splitter", link: "https://rfconnector.in/catalog/IBS/2_way_cavity_splitter_700_3500_Mhz.pdf" },
    { name: "3 Way Cavity Splitter", link: "https://rfconnector.in/catalog/IBS/3_way_cavity_splitter_700_3500_Mhz.pdf" },
    { name: "4 Way Cavity Splitter", link: "https://rfconnector.in/catalog/IBS/4_way_cavity_splitter_700_3500_Mhz.pdf" },
    { name: "6 dB Coupler", link: "https://rfconnector.in/catalog/IBS/6db_cavity_directional_coupler_800-2500MHz.PDF" },
    { name: "10 dB Coupler", link: "https://rfconnector.in/catalog/IBS/10db_cavity_directional_coupler_800-2500MHz.PDF" },
    { name: "6 Way Feeder Clamp", link: "https://rfconnector.in/catalog/IBS/6_WAY_FEEDER_CLAMP_BS_7_8.pdf" },
    { name: "Surge Arrester", link: "https://rfconnector.in/catalog/IBS/Surge_Arrester.pdf" },
    { name: "Jumper Cable 1 Mtr (N-M to N-F, 1/4\" SF)", link: "https://rfconnector.in/catalog/IBS/N_M_N_F_1-4_SF_1MTR.pdf" },
    { name: "Jumper Cable 1 Mtr (N-M to N-M, 1/4\" SF)", link: "https://rfconnector.in/catalog/IBS/N_M_N_M_1-4_SF_1MTR.pdf" },
    { name: "Jumper Cable 1.5 Mtr (N-M to N-F, 1/4\" SF)", link: "https://rfconnector.in/catalog/IBS/N_M_N_F_1-4_SF_1.5MTR.pdf" },
    { name: "Jumper Cable 1.5 Mtr (N-M to N-M, 1/4\" SF)", link: "https://rfconnector.in/catalog/IBS/N_M_N_M_1-4_SF_1.5MTR.pdf" },
    { name: "Jumper Cable 1.5 Mtr (D-M to D-F, 1/2\" SF)", link: "https://rfconnector.in/catalog/IBS/D_M_D_F_1-2SF_1.5mtr.pdf" },
    { name: "Jumper Cable 2 Mtr (DIN-M to DIN-F, 1/2\" SF)", link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_F_1-2_S.F_2mtr.pdf" },
    { name: "Jumper Cable 2 Mtr (DIN-M RA to DIN-F, 1/2\" SF)", link: "https://rfconnector.in/catalog/IBS/DIN_M_RA_DIN_F_1-2SF_3mtr.pdf" },
    { name: "Jumper Cable 2.5 Mtr (DIN-F 4H to N-M RA, 1/4\" SF)", link: "https://rfconnector.in/catalog/IBS/DIN_F_4H__N_M_RA_1-4_S.F_2.5mtr.pdf" },
    { name: "Jumper Cable 3 Mtr (DIN-M to DIN-M, 1/2\" SF)", link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_M_1-2SF_3mtr.pdf" },
    { name: "Jumper Cable 3.5 Mtr", link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_F_1-2SF_3.5mtr.pdf" },
    { name: "Jumper Cable 4.5 Mtr (N-M to DIN-M)", link: "https://rfconnector.in/catalog/IBS/N_M_DIN_M_1-2SF_4.5mtr.pdf" },
    { name: "Jumper Cable 4.5 Mtr (N-M RA to DIN-M)", link: "https://rfconnector.in/catalog/IBS/N_M_RA_DIN_M_1-2SF_4.5mtr.pdf" },
    { name: "Jumper Cable 5 Mtr", link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_M_1-2SF_5mtr.pdf" },
    { name: "Jumper Cable 7 Mtr", link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_M_1-2SF_7mtr.pdf" },
    { name: "Jumper Cable 8 Mtr", link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_F_1-2SF_8mtr.pdf" },
    { name: "Waveguide", link: "https://rfconnector.in/catalog/IBS/F062MMS4.pdf" },
    { name: "S325D Cable Antenna Analyzers", link: "https://rfconnector.in/catalog/IBS/Anritsu_S325D.PDF" },
    { name: "MT822A Site Analyser", link: "https://rfconnector.in/catalog/IBS/MT8222A" },
    { name: "Calkit OSL N50-1", link: "https://rfconnector.in/catalog/IBS/Anritsu_OSLN50-1.PDF" },
    { name: "ICN50 Instacal Module", link: "https://rfconnector.in/catalog/IBS/Calibration-Accuracy.pdf" },
    { name: "15NNF50 -1.5C Testing Cable", link: "https://rfconnector.in/catalog/IBS/Calibration-Accuracy.pdf" },
    { name: "Power Sensor", link: "https://rfconnector.in/catalog/IBS/Anritsu_MA2472D_Data_Sheet.pdf" },
    { name: "RF Switch", link: "https://rfconnector.in/catalog/RF_Switch/RF_Switch_12V.pdf" },
    { name: "Bias Tee", link: "https://rfconnector.in/catalog/Microwave_components/Bias_T/DIN_M_DIN_F_WITH_SMA_F_BIAS_TEE.pdf" },
    { name: "GPS Amplifier", link: "https://rfconnector.in/catalog/IBS/GPS_Amplifier.PDF" },
    { name: "6 Way Feeder Clamp for 7/8\"", link: "https://rfconnector.in/catalog/Installation_Kit/Feeder_Clamp/6_Way_Feeder_Clamp_Double_Sided_for_7_8%2520Cable.pdf" },
    { name: "Power Meter", link: "https://rfconnector.in/catalog/IBS/Power_Meter.pdf" },
    { name: "Surge Protector 2.1~2.5Ghz", link: "https://rfconnector.in/catalog/Microwave_components/SURG_ARRESTER/T_Type/Surge_Protector_MHT-N5-2.pdf" },
    { name: "SFP", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "1.25 G - 1310 NM 10 KM SM (FINISAR + PDR CLASS)", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "1.25 G - 850 NM 0.5 KM MM (JDSU)", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "1.25 G - 850 NM 0.5 KM MM (SUMITOMO)", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "2.125 G - 850 NM 0.5 KM MM (FINISAR)", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "2.125 G - 850 NM 0.5 KM MM (JDSU)", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "4.25 G - 850 NM 0.5 KM MM (FINISAR)", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "4.25 G - 850 NM 0.5 KM MM (JDSU)", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "SFP 10 G 1310 Nm 10KM LC CONNECTOR", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "SFP 1.25 G 1310 Nm 10KM LC CONNECTOR", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "SFP 155 M 1310 Nm 15 KM AND OTHER WITH LC CONNECTOR", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "SFP 2.5 G 1310 Nm 15KM/40 KM LC CONNECTOR", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "SFP 6 G 1310 Nm 2KM LC CONNECTOR", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "SFP RJ 45 1000 Base T", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
    { name: "SFP TO SFP CABLE 1 MTR", link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf" },
];

const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

const HotProductDetails = () => {
    const { slug } = useParams();

    // Find the product that matches the slug
    const product = catalogueLinks.find((item) => slugify(item.name) === slug);

    // Render a 404 page or a "not found" message if the product doesn't exist
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-700">Product Not Found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-20 px-4">
            <Helmet>
                <title>{product.name} | Hot Products - Synergy Telecom</title>
                <meta name="description" content={`View details and datasheet for the hot product: ${product.name}.`} />
                <meta property="og:title" content={`${product.name} | Hot Products - Synergy Telecom`} />
                <meta property="og:description" content={`View details and datasheet for the hot product: ${product.name}.`} />
            </Helmet>

            <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
                <Link to="/-hot-products" className="text-red-600 font-semibold hover:underline mb-6 block">
                    ← Back to Hot Products
                </Link>
                <h1 className="text-4xl font-bold text-red-600 mb-4">{product.name}</h1>
                
                <div className="space-y-4">
                    <p className="text-lg text-gray-700">
                        This is the product page for **{product.name}**. You can find more detailed specifications and information in the linked datasheet.
                    </p>
                    <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
                    >
                        Download Datasheet
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HotProductDetails;

