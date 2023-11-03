import styled from 'styled-components'

const DefaultButton = styled.button`
 border:1px solid grey;
 padding:4px 10px 5px;
`

const Button = ({children, onClick})=>{
    return(
    <DefaultButton onClick={onClick}>
        {children}
    </DefaultButton>

    )
}

export default Button