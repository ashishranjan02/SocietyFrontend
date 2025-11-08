import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import { Gavel as WitnessIcon, Add as AddIcon } from "@mui/icons-material";
import { useFormik } from "formik";
import StyledTextField from "../../ui/StyledTextField";
import SectionHeader from "../../layout/SectionHeader";

const Witness = () => {
  const membersList = [
    { id: 1, name: "Amit Sharma" },
    { id: 2, name: "Ravi Kumar" },
    { id: 3, name: "Neha Singh" },
  ];

  const [showWitnessForm, setShowWitnessForm] = useState(false);

  const formik = useFormik({
    initialValues: {
      selectedMember: "",
      memberName: "",
      witnessName: "",
      witnessMobileNo: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Witness Details Submitted:", values);
      alert(" Witness details saved successfully!");
      resetForm();
      setShowWitnessForm(false);
    },
  });

  // Handle member selection
  const handleMemberSelect = (event) => {
    const memberName = event.target.value;
    formik.setFieldValue("selectedMember", memberName);
    formik.setFieldValue("memberName", memberName);
    setShowWitnessForm(true);
  };

  // Add new witness form
  const handleAddAnotherWitness = () => {
    formik.resetForm();
    setShowWitnessForm(false);
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <SectionHeader
          icon={<WitnessIcon />}
          title="Witness Information"
          subtitle="Add witness details for a selected member"
        />

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {/* Select Member */}
            <Grid size={{xs:6, sm:6, md:3}}>
              <StyledTextField
                select
                label="Select Member"
                name="selectedMember"
                value={formik.values.selectedMember}
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

            {/* Show witness details only after member selected */}
            {showWitnessForm && (
              <>
                {/* Member Name (read-only) */}
                <Grid item xs={12} sm={6} md={3}>
                  <StyledTextField
                    label="Member Name"
                    name="memberName"
                    value={formik.values.memberName}
                    InputProps={{ readOnly: true }}
                  />
                </Grid>

                {/* Witness Name */}
                <Grid item xs={12} sm={6} md={3}>
                  <StyledTextField
                    label="Witness Name"
                    name="witnessName"
                    value={formik.values.witnessName}
                    onChange={formik.handleChange}
                  />
                </Grid>

                {/* Witness Mobile No */}
                <Grid item xs={12} sm={6} md={3}>
                  <StyledTextField
                    label="Witness Mobile No"
                    name="witnessMobileNo"
                    type="tel"
                    value={formik.values.witnessMobileNo}
                    onChange={formik.handleChange}
                  />
                </Grid>

                {/* Buttons */}
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ borderRadius: 2, px: 3 }}
                    >
                      Save
                    </Button>

                    <Button
                      variant="outlined"
                      startIcon={<AddIcon />}
                      color="secondary"
                      onClick={handleAddAnotherWitness}
                      sx={{ borderRadius: 2 }}
                    >
                      Witness
                    </Button>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Witness;
