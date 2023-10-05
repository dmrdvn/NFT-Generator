import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import Section from '../Section'

export default function MintCard() {
  const [counter, setCounter] = useState(0)
  const handelSubtract = () => {
    if(counter>0) {
      setCounter(counter-1)
    }
  }
  return (
    <Section className="cs-mint_secton">
      <Section tag='h2' className="cs-font_22 text-uppercase cs-normal cs-m0 text-center">Collect your NFT before <br />the deadline.</Section>
      <Section className="cs-height_25 cs-height_lg_25" />
      <Section className="cs-mint_avatar text-center"><img src="/images/avatar_1.png" alt="" /></Section>
      <Section className="cs-height_50 cs-height_lg_30" />
      <ul className="cs-list cs-style2 cs-mp0 cs-primary_color cs-primary_font">
        <li>
          <Section className="cs-list_left">Remaining</Section>
          <Section className="cs-list_right">1 / 725 Minted</Section>
        </li>
        <li>
          <Section className="cs-list_left">Quantity / <span className="cs-accent_color">0.25 ETH</span></Section>
          <Section className="cs-list_right">
            <Section className="cs-quantity">
              <button className="cs-quantity_btn cs-center" onClick={handelSubtract}>
                <Icon icon="ic:round-minus" />
              </button>
              {counter}
              <button className="cs-quantity_btn cs-center" onClick={()=>setCounter(counter+1)}>
                <Icon icon="material-symbols:add-rounded" />
              </button>
            </Section>
          </Section>
        </li>
        <li>
          <Section className="cs-list_left">Total Price</Section>
          <Section className="cs-list_right">0.5 ETH</Section>
        </li>
      </ul>
      <Section className="cs-height_25 cs-height_lg_25" />
      <button className="cs-btn cs-btn_filed cs-accent_btn text-center text-uppercase w-100"><span>Mint Now</span></button>
      <Section className="cs-height_15 cs-height_lg_15" />
      <Section tag='p' className="cs-m0 text-center">Presale &amp; whitelist : Soldout</Section>
    </Section>
  )
}
