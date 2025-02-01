import SmartContractForm from "@/components/SmartContractForm"
import { Container } from "@mui/material"
export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ marginY: 4 }}>
      <SmartContractForm />
    </Container>
  )
}
