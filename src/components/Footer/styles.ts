import styled from 'styled-components'
import { cores } from '../../styles'
import { Cipher } from 'crypto'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
`

export const SectionTitle = styled.h4`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`

export const Link = styled.a`
  color: #a3a3a3;
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
