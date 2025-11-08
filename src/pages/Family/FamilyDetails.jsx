import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  MenuItem,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { FamilyRestroom as FamilyIcon, Add as AddIcon } from "@mui/icons-material";
import { useFormik } from "formik";
import StyledTextField from "../../ui/StyledTextField";
import SectionHeader from "../../layout/SectionHeader";

const FamilyDetails = () => {
  const membersList = [
    { id: 1, name: "Amit Sharma" },
    { id: 2, name: "Ravi Kumar" },
    { id: 3, name: "Neha Singh" },
  ];

  const [selectedMember, setSelectedMember] = useState("");
  const [showExtraForm, setShowExtraForm] = useState(false);

  const formik = useFormik({
    initialValues: {
      selectedMember: "",
      memberName: "",
      relationship: "",
      familyMemberName: "",
      membershipNumber: "",
      mobileNo: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Family Member Details Submitted:", values);
      alert("Family member saved successfully!");
      resetForm();
      setSelectedMember("");
      setShowExtraForm(false);
    },
  });

  const handleMemberSelect = (event) => {
    const memberName = event.target.value;
    setSelectedMember(memberName);
    formik.setFieldValue("selectedMember", memberName);
    formik.setFieldValue("memberName", memberName);
  };

  const handleAddAnotherMember = () => {
    setShowExtraForm(true);
    formik.resetForm({
      values: {
        selectedMember: "",
        memberName: "",
        relationship: "",
        familyMemberName: "",
        membershipNumber: "",
        mobileNo: "",
      },
    });
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
          icon={<FamilyIcon />}
          title="Family Information"
          subtitle="Add family members related to the selected member"
        />

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {/* Select Member */}
            <Grid size={{xs:6, sm:6, md:3}}>
              <StyledTextField
                select
                label="Select Member"
                name="selectedMember"
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

            {/* Show Family Form after member selection */}
            {selectedMember && (
              <>
                {/* Member Name */}
                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Member Name"
                    name="memberName"
                    value={formik.values.memberName}
                    InputProps={{ readOnly: true }}
                  />
                </Grid>

                {/* Relationship */}
                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Relationship"
                    name="relationship"
                    value={formik.values.relationship}
                    onChange={formik.handleChange}
                  />
                </Grid>

                {/* Family Member Name */}
                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Family Member Name"
                    name="familyMemberName"
                    value={formik.values.familyMemberName}
                    onChange={formik.handleChange}
                  />
                </Grid>

                {/* Membership Number */}
                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Membership Number"
                    name="membershipNumber"
                    value={formik.values.membershipNumber}
                    onChange={formik.handleChange}
                  />
                </Grid>

                {/* Mobile Number */}
                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Mobile Number"
                    name="mobileNo"
                    type="tel"
                    value={formik.values.mobileNo}
                    onChange={formik.handleChange}
                  />
                </Grid>

                {/* Submit & Add Another Buttons */}
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
                      onClick={handleAddAnotherMember}
                      sx={{ borderRadius: 2 }}
                    >
                      Family Member
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

export default FamilyDetails;
