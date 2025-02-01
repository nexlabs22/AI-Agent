"use client"

import React, { useState } from "react"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Typography,
  SelectChangeEvent,
  Box,
} from "@mui/material"

interface VariableSettingsProps {
  label: string
  value: string
  setValue: (value: string) => void
  isMutable: boolean
  setIsMutable: (value: boolean) => void
  minValue: string
  setMinValue: (value: string) => void
  maxValue: string
  setMaxValue: (value: string) => void
  options: string[]
  error: string
}

const SmartContractForm = () => {
  const [frequency, setFrequency] = useState("")
  const [error, setError] = useState("")
  const [isMutable, setIsMutable] = useState(false)
  const [minFrequency, setMinFrequency] = useState("")
  const [maxFrequency, setMaxFrequency] = useState("")
  const [strategy, setStrategy] = useState("")
  const [assetCategories, setAssetCategories] = useState<string[]>([])

  const frequencyOptions = ["Minute", "Hour", "Day", "Week", "Month"]
  const assetCategoryOptions = ["All", "Category1", "Category2", "Category3"]

  // const handleFrequencyChange = (
  //   event: SelectChangeEvent<string>
  // ) => {
  //   setFrequency(event.target.value as string)
  // }

  // const handleMutableChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsMutable(event.target.checked)
  // }

  // const handleAssetCategoriesChange = (
  //   event: React.ChangeEvent<{ value: unknown }>
  // ) => {
  //   setAssetCategories(event.target.value as string[])
  // }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!frequency) {
      setError("Frequency is required.")
      return
    }
    setError("") // Clear error if frequency is selected
    // Handle form submission logic here
    console.log({
      frequency,
      isMutable,
      minFrequency,
      maxFrequency,
      strategy,
      assetCategories,
    })
  }

  const VariableSettings = ({
    label,
    value,
    setValue,
    isMutable,
    setIsMutable,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    options,
    error,
  }: VariableSettingsProps) => (
    <Box
      sx={{
        marginBottom: 4,
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        {label} Settings
      </Typography>
      <FormControl fullWidth margin="normal" error={!!error}>
        <InputLabel required>{`Update ${label}`}</InputLabel>
        <Select
          value={value}
          onChange={(event: SelectChangeEvent<string>) =>
            setValue(event.target.value)
          }
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        {error && <Typography color="error">{error}</Typography>}
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            checked={isMutable}
            onChange={(e) => setIsMutable(e.target.checked)}
          />
        }
        label={`Mutable ${label}`}
      />

      <TextField
        label={`Min ${label}`}
        value={minValue}
        onChange={(e) => setMinValue(e.target.value)}
        fullWidth
        margin="normal"
        disabled={!isMutable}
      />
      <TextField
        label={`Max ${label}`}
        value={maxValue}
        onChange={(e) => setMaxValue(e.target.value)}
        fullWidth
        margin="normal"
        disabled={!isMutable}
      />
    </Box>
  )

  return (
    <Box
      sx={{
        width: "600px",
        maxWidth: "1000px",
        margin: "0 auto", // Center the box
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid #ccc",
          padding: 8,
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%", // Ensure the form takes full height
        }}
      >
        <Typography variant="h6" marginBottom={4}>
          Smart Contract AI Agent Configuration
        </Typography>

        <VariableSettings
          label="Frequency"
          value={frequency}
          setValue={setFrequency}
          isMutable={isMutable}
          setIsMutable={setIsMutable}
          minValue={minFrequency}
          setMinValue={setMinFrequency}
          maxValue={maxFrequency}
          setMaxValue={setMaxFrequency}
          options={frequencyOptions}
          error={error}
        />

        <TextField
          label="Strategy"
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
          fullWidth
          margin="normal"
        />

        <FormControl
          // fullWidth
          margin="normal"
          key="assetCategories"
          sx={{ width: "100%", maxWidth: "400px" }}
        >
          <InputLabel>Asset Categories</InputLabel>
          <Select
            multiple
            value={assetCategories}
            onChange={(event: SelectChangeEvent<string[]>) =>
              setAssetCategories(event.target.value as string[])
            }
            renderValue={(selected) => (selected as string[]).join(", ")}
            sx={{ width: "100%" }}
          >
            {assetCategoryOptions.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={assetCategories.indexOf(option) > -1} />
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default SmartContractForm
