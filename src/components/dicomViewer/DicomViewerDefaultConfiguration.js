const config = {
    maxWebWorkers: navigator.hardwareConcurrency || 1, startWebWorkersOnDemand: true, taskConfiguration: {
        'decodeTask': { //Important
            initializeCodecsOnStartup: false, usePDFJS: false
        }
    }
};

const projectUrl = "http://localhost:3000/sampleMedicalImages";
//const projectUrl = "https://master-project-vs2.herokuapp.com/sampleMedicalImages";
//const projectUrl = "https://medical-assistent-viewer.herokuapp.com/sampleMedicalImages";
//dcm must be small writtenl!!!!!
const DICOM_brain = `wadouri:${projectUrl}/DICOM_brain.dcm`;
const DICOM_spine = `wadouri:${projectUrl}/DICOM_spine.dcm`;
const DICOM_spine_section = `wadouri:${projectUrl}/DICOM_spine_section.dcm`;
const DICOM_fraction = `wadouri:${projectUrl}/DICOM_fracture.dcm`;
const JPG_Renal_Cell_Carcinoma = `${projectUrl}/JPG_Renal_Cell_Carcinoma.jpeg`;
const PNG_brain = `${projectUrl}/PNG_brain.png`;

export default {
    config, DICOM_brain, DICOM_spine, DICOM_spine_section, DICOM_fraction, JPG_Renal_Cell_Carcinoma, PNG_brain
}