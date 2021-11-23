import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pantherswap-libs/uikit'
import TranslatedText from '../TranslatedText'
import * as logo from './favicon.png';

const img = logo.default;

const Comp = ()=> {
    return <img src={img} alt="image" className="" />
}

const StyledNav = styled.div`
  margin-bottom: 40px;
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  
  <StyledNav>
    <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
      <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
        <TranslatedText translationId={8}>Swap</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
        <TranslatedText translationId={74}>Liquidity</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem
        id="pool-nav-link-ziege"
        as="a"
        href="https://www.binance.org/en/bridge?utm_source=PantherSwap"
        target="_blank"
        rel="noreferrer noopener"
      >
        Bridge
      </ButtonMenuItem>
    </ButtonMenu>
  </StyledNav>
)

export default Nav
