import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Button,
  Fade,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { Formik, Form } from "formik";

// Import step components
import FormHeader from "../../layout/FormHeader";
import FormStepper from "../../layout/FormStepper";
import PersonalInfoForm from "./form/PersonalInfoForm";
import AddressForm from "./form/AddressForm";
import IdentityVerificationForm from "./form/IdentityVerificationForm";
import ProfessionalForm from "./form/ProfessionalForm";
import BankGuaranteeForm from "./form/BankGuaranteeForm";
import RemarksForm from "./form/RemarksForm";

const MemberDossierForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  //  Formik Initial Values
  const initialValues = {
    personalInformation: {
      nameOfMember: "",
      membershipNumber: "",
      nameOfFather: "",
      nameOfMother: "",
      dateOfBirth: "",
      ageInYears: "",
      membershipDate: "",
      amountInCredit: "",
      gender: "",
      religion: "",
      maritalStatus: "",
      caste: "",
      phoneNo: "",
      alternatePhoneNo: "",
      emailId: "",
    },
    address: {
      permanentAddress: {
        flatHouseNo: "",
        areaStreetSector: "",
        locality: "",
        landmark: "",
        city: "",
        country: "",
        state: "",
        pincode: "",
        proofDocument: null,
      },
      sameAsPermanent: false,
      currentResidentialAddress: {
        flatHouseNo: "",
        areaStreetSector: "",
        locality: "",
        landmark: "",
        city: "",
        country: "",
        state: "",
        pincode: "",
        proofDocument: null,
      },
    },
    identityProofs: {
      passportSizePhoto: null,
      passportSizePreview: "",
      panNumber: "",
      panCardPhoto: null,
      panCardPreview: "",
      aadhaarCardNumber: "",
      aadhaarFrontPhoto: null,
      aadhaarBackPhoto: null,
      aadhaarFrontPreview: "",
      aadhaarBackPreview: "",
      rationCardNumber: "",
      rationFrontPhoto: null,
      rationBackPhoto: null,
      rationFrontPreview: "",
      rationBackPreview: "",
      drivingLicenseNumber: "",
      drivingFrontPhoto: null,
      drivingBackPhoto: null,
      drivingFrontPreview: "",
      drivingBackPreview: "",
      voterIdNumber: "",
      voterFrontPhoto: null,
      voterBackPhoto: null,
      voterFrontPreview: "",
      voterBackPreview: "",
      passportNumber: "",
      passportPhoto: null,
      passportPreview: "",
    },
    professionalDetails: {
      qualification: "",
      occupation: "",
      familyMemberMemberOfSociety: false,
      familyMembers: [{ name: "", membershipNo: "" }],
    },
    bankDetails: [
      { bankName: "", branch: "", accountNumber: "", ifscCode: "" },
    ],
    remarks: [
      { loanAmount: "", purposeOfLoan: "", loanDate: "" },
    ],
  };

  const steps = [
    { label: "Personal Info", icon: "👤" },
    { label: "Address & Contact", icon: "🏠" },
    { label: "Identity Proof", icon: "🆔" },
    { label: "Professional", icon: "💼" },
    { label: "Bank & Guarantee", icon: "🏦" },
    { label: "Remarks", icon: "📝" },
  ];

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = (values) => {
    console.log(" Form Submitted:", values);
    alert("Form Submitted! Check console for details.");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <FormHeader activeStep={activeStep} totalSteps={steps.length} />

        {/* Stepper */}
        <FormStepper activeStep={activeStep} steps={steps} />

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <Form>
              <Fade in={true} timeout={600}>
                <Box>
                  {/*  No map — explicit conditional rendering for each step */}
                  {activeStep === 0 && (
                    <PersonalInfoForm
                      values={values.personalInformation}
                      setFieldValue={setFieldValue}
                    />
                  )}

                  {activeStep === 1 && (
                    <AddressForm
                      values={values.address}
                      setFieldValue={setFieldValue}
                    />
                  )}

                  {activeStep === 2 && (
                    <IdentityVerificationForm
                      values={values.identityProofs}
                      setFieldValue={setFieldValue}
                    />
                  )}

                  {activeStep === 3 && (
                    <ProfessionalForm
                      values={values.professionalDetails}
                      setFieldValue={setFieldValue}
                    />
                  )}

                  {activeStep === 4 && (
                    <BankGuaranteeForm
                      values={values.bankDetails}
                      setFieldValue={setFieldValue}
                    />
                  )}

                  {activeStep === 5 && (
                    <RemarksForm
                      values={values.remarks}
                      setFieldValue={setFieldValue}
                    />
                  )}
                </Box>
              </Fade>

              {/* Navigation Buttons */}
              <Card
                sx={{
                  mt: 4,
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<ArrowBackIcon />}
                      onClick={handleBack}
                      disabled={activeStep === 0}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 3,
                        borderColor: "#667eea",
                        color: "#667eea",
                        "&:hover": {
                          borderColor: "#5a67d8",
                          backgroundColor: "#f0f4ff",
                        },
                      }}
                    >
                      Previous
                    </Button>

                    {activeStep === steps.length - 1 ? (
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        type="submit"
                        sx={{
                          px: 6,
                          py: 1.5,
                          borderRadius: 3,
                          background:
                            "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #059669 0%, #047857 100%)",
                            transform: "translateY(-2px)",
                            boxShadow:
                              "0 6px 20px rgba(16, 185, 129, 0.4)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        onClick={handleNext}
                        sx={{
                          px: 6,
                          py: 1.5,
                          borderRadius: 3,
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #5a67d8 0%, #6a4190 100%)",
                            transform: "translateY(-2px)",
                            boxShadow:
                              "0 6px 20px rgba(102, 126, 234, 0.4)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Next
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default MemberDossierForm;
