import styled from "styled-components";

const Title = styled.div`
font-family: ${props => props.theme.typography.handwriting};
font-size: ${props => props.theme.size.size6};
margin: ${props => props.theme.size.size4} 0;
font-weight: 600;
`

const Subtitle = styled.div`
font-size: ${props => props.theme.size.size4};
font-weight: 600;
line-height: 2;
`

export { Title, Subtitle };
