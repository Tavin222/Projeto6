import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.div`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
`
