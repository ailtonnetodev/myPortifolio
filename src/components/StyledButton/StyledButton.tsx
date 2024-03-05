import styled from "@emotion/styled"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

    const StyledButton = styled("button")(() => ({
       backgroundColor: 'transparent',
       border: '1px solid black',
        borderRadius: "3px",  
        padding: "5px 15px",
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        color: "black",
        '&:hover': {
            backgroundColor: "#808080",
            color: "#ffffff"
        }
    }))

    return (
      <>
       <StyledButton>
        {children}
       </StyledButton>
      </>
    )
  }
  
  export default StyledButton