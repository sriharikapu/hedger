import { BackgroundCard, Container, Page, PageTitle } from 'components'
import React from 'react'
import Straddle from './straddle.png'
import styled from 'styled-components'
import Button from '../components/Button'

const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export default function Writing () {
  return (
    <Page path='/' exact>
      <Container>
        <BackgroundCard>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{ display: 'flex', cursor: 'pointer', marginTop: '15px' }}
            >
              <StyledContainer>
                <PageTitle>Hedging ETH VOL</PageTitle>
                <div>
                  <div>ETH : DAI Market</div>
                  <div>Straddle</div>
                  <div>Strike Price 270 DAI</div>
                  <div>Expiration Date Feb 21st, 2020</div>
                </div>
              </StyledContainer>
              <div style={{ width: '50%' }}>
                <img src={Straddle} style={{ width: '100%' }} />
              </div>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Button>BUY</Button>
            </div>
          </div>
        </BackgroundCard>
      </Container>
    </Page>
  )
}
