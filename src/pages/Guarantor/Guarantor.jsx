import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  MenuItem,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import {
  PersonAdd as GuarantorIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useFormik } from "formik";
import StyledTextField from "../../ui/StyledTextField";
import SectionHeader from "../../layout/SectionHeader";

const GuarantorPage = () => {
  const membersList = [
    { id: 1, name: "Amit Sharma", membershipNo: "M001" },
    { id: 2, name: "Ravi Kumar", membershipNo: "M002" },
    { id: 3, name: "Neha Singh", membershipNo: "M003" },
  ];

  const [selectedMember, setSelectedMember] = useState("");
  const [guarantors, setGuarantors] = useState([
    { guarantorName: "", guarantorMobileNo: "" },
  ]);

  const formik = useFormik({
    initialValues: {
      nameOfMember: "",
      membershipNumber: "",
      guarantorName: "",
      guarantorMobileNo: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Guarantor Details Submitted:", {
        member: selectedMember,
        guarantors,
      });
      resetForm();
      setSelectedMember("");
      setGuarantors([{ guarantorName: "", guarantorMobileNo: "" }]);
    },
  });

  const handleMemberSelect = (event) => {
    const memberName = event.target.value;
    const selected = membersList.find((m) => m.name === memberName);

    setSelectedMember(memberName);
    formik.setFieldValue("nameOfMember", memberName);
    formik.setFieldValue("membershipNumber", selected?.membershipNo || "");
  };

  //  Add Guarantor
  const handleAddGuarantor = () => {
    setGuarantors([...guarantors, { guarantorName: "", guarantorMobileNo: "" }]);
  };

  //  Remove Guarantor
  const handleRemoveGuarantor = (index) => {
    const updated = guarantors.filter((_, i) => i !== index);
    setGuarantors(updated);
  };

  //  Update Guarantor Fields
  const handleGuarantorChange = (index, field, value) => {
    const updated = [...guarantors];
    updated[index][field] = value;
    setGuarantors(updated);
  };

  return (
    <Card sx={{ borderRadius: 3, boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
      <CardContent sx={{ p: 4 }}>
        <SectionHeader
          icon={<GuarantorIcon />}
          title="Guarantor Information"
          subtitle="Select member and fill guarantor details"
        />

        {/* Step 1: Select Member */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid size={{xs:6, sm:6, md:3}}>
            <StyledTextField
              select
              label="Select Member"
              value={selectedMember}
              onChange={handleMemberSelect}
            >
              <MenuItem value="">Select Member</MenuItem>
              {membersList.map((member) => (
                <MenuItem key={member.id} value={member.name}>
                  {member.name}
                </MenuItem>
              ))}
            </StyledTextField>
          </Grid>
        </Grid>

        {/* Step 2: Show Guarantor Form after selection */}
        {selectedMember && (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3} sx={{ py: 3 }}>
              {/* Name of Member (auto-filled) */}
              <Grid size={{xs:6, sm:6, md:3}}>
                <StyledTextField
                  label="Name of Member"
                  name="nameOfMember"
                  value={formik.values.nameOfMember}
                  InputProps={{ readOnly: true }}
                />
              </Grid>

              {/* Membership Number (auto-filled) */}
              <Grid size={{xs:6, sm:6, md:3}}>
                <StyledTextField
                  label="Membership No."
                  name="membershipNumber"
                  value={formik.values.membershipNumber}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>

            {/* Dynamic Guarantor Fields */}
            {guarantors.map((g, index) => (
              <Grid container spacing={3} sx={{ py: 1 }} key={index}>
                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Guarantor Name"
                    name={`guarantorName-${index}`}
                    value={g.guarantorName}
                    onChange={(e) =>
                      handleGuarantorChange(index, "guarantorName", e.target.value)
                    }
                  />
                </Grid>

                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Guarantor Mobile No"
                    name={`guarantorMobileNo-${index}`}
                    type="tel"
                    value={g.guarantorMobileNo}
                    onChange={(e) =>
                      handleGuarantorChange(index, "guarantorMobileNo", e.target.value)
                    }
                  />
                </Grid>

                {/* Delete Button */}
                <Grid item xs={12} sm={1}>
                  {guarantors.length > 1 && (
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveGuarantor(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            ))}

            {/* Add Guarantor Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
              <Button
                startIcon={<AddIcon />}
                variant="outlined"
                color="primary"
                onClick={handleAddGuarantor}
                sx={{ borderRadius: 2 }}
              >
                Guarantor
              </Button>
            </Box>

            {/* Submit Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ borderRadius: 2, px: 3 }}
              >
                Save
              </Button>
            </Box>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default GuarantorPage;

