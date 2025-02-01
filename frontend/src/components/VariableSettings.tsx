import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material"
import { SelectChangeEvent } from "@mui/material"

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
}: VariableSettingsProps) => {
  return (
    <Box
      sx={{
        marginBottom: 4,
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "#f5f5f5", // Add a slightly greyer background
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        {label} Settings
      </Typography>
      <FormControl fullWidth margin="normal" error={!!error} variant="standard">
        <InputLabel required>{`Update ${label}`}</InputLabel>
        <Select
          value={value}
          onChange={(event: SelectChangeEvent<string>) =>
            setValue(event.target.value)
          }
          label={`Update ${label}`}
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
        type="number"
        margin="normal"
        disabled={!isMutable}
        color={isMutable ? "primary" : "error"}
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
}

export default VariableSettings
