import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import { useFormik, FieldArray, FormikProvider } from "formik";
import {
  Work as WorkIcon,
  FamilyRestroom as FamilyIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import StyledTextField from "../../../ui/StyledTextField";
import SectionHeader from "../../../layout/SectionHeader";

const ProfessionalForm = () => {
  const formik = useFormik({
    initialValues: {
      qualification: "",
      occupation: "",
    },
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Box component="form" onSubmit={formik.handleSubmit}>

        {/* PROFESSIONAL BACKGROUND */}
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            mb: 3,
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <SectionHeader
              icon={<WorkIcon />}
              title="Professional Background"
              subtitle="Educational and professional information"
            />

            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  label="Qualification"
                  name="qualification"
                  value={formik.values.qualification}
                  onChange={formik.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <StyledTextField
                  label="Occupation"
                  name="occupation"
                  value={formik.values.occupation}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </FormikProvider>
  );
};

export default ProfessionalForm;
