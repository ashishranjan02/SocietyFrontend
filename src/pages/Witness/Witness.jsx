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
  Gavel as WitnessIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useFormik } from "formik";
import StyledTextField from "../../ui/StyledTextField";
import SectionHeader from "../../layout/SectionHeader";

const Witness = () => {
  const membersList = [
    { id: 1, name: "Amit Sharma", membershipNo: "M001" },
    { id: 2, name: "Ravi Kumar", membershipNo: "M002" },
    { id: 3, name: "Neha Singh", membershipNo: "M003" },
  ];

  const [selectedMember, setSelectedMember] = useState("");
  const [witnesses, setWitnesses] = useState([
    { witnessName: "", witnessMobileNo: "" },
  ]);

  const formik = useFormik({
    initialValues: {
      memberName: "",
      membershipNumber: "",
      witnessName: "",
      witnessMobileNo: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Witness Details Submitted:", {
        member: selectedMember,
        witnesses,
      });
      alert("Witness details saved successfully!");
      resetForm();
      setSelectedMember("");
      setWitnesses([{ witnessName: "", witnessMobileNo: "" }]);
    },
  });

  // Handle member selection
  const handleMemberSelect = (event) => {
    const memberName = event.target.value;
    const selected = membersList.find((m) => m.name === memberName);
    setSelectedMember(memberName);
    formik.setFieldValue("memberName", memberName);
    formik.setFieldValue("membershipNumber", selected?.membershipNo || "");
  };

  // Add Witness
  const handleAddWitness = () => {
    setWitnesses([...witnesses, { witnessName: "", witnessMobileNo: "" }]);
  };

  // Remove Witness
  const handleRemoveWitness = (index) => {
    const updated = witnesses.filter((_, i) => i !== index);
    setWitnesses(updated);
  };

  // Update Witness fields
  const handleWitnessChange = (index, field, value) => {
    const updated = [...witnesses];
    updated[index][field] = value;
    setWitnesses(updated);
  };

  return (
    <Card sx={{ borderRadius: 3, boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
      <CardContent sx={{ p: 4 }}>
        <SectionHeader
          icon={<WitnessIcon />}
          title="Witness Information"
          subtitle="Select member and fill witness details"
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

        {/* Step 2: Show Witness Form after member selection */}
        {selectedMember && (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3} sx={{ py: 3 }}>
              {/* Name of Member (auto-filled) */}
              <Grid size={{xs:6, sm:6, md:3}}>
                <StyledTextField
                  label="Member Name"
                  name="memberName"
                  value={formik.values.memberName}
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

            {/* Dynamic Witness Fields */}
            {witnesses.map((w, index) => (
              <Grid container spacing={3} sx={{ py: 1 }} key={index}>
                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Witness Name"
                    name={`witnessName-${index}`}
                    value={w.witnessName}
                    onChange={(e) =>
                      handleWitnessChange(index, "witnessName", e.target.value)
                    }
                  />
                </Grid>

                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Witness Mobile No"
                    name={`witnessMobileNo-${index}`}
                    type="tel"
                    value={w.witnessMobileNo}
                    onChange={(e) =>
                      handleWitnessChange(index, "witnessMobileNo", e.target.value)
                    }
                  />
                </Grid>

                {/* Delete Button */}
                <Grid item xs={12} sm={1}>
                  {witnesses.length > 1 && (
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveWitness(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            ))}

            {/* Add Witness Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
              <Button
                startIcon={<AddIcon />}
                variant="outlined"
                color="primary"
                onClick={handleAddWitness}
                sx={{ borderRadius: 2 }}
              >
                Witness
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

export default Witness;
