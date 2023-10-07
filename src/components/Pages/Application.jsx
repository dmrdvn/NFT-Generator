import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'

import SectionHeading from '../SectionHeading'
import Section from '../Section'
import Spacing from '../Spacing'

import CardStype2 from '../Card/CardDefault'

export default function Home2() {
  pageTitle('NFT Generator App');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      
      <Spacing lg='50' md='70'/>
      
     
      
      
      <Section className="container">
        <Section className="row">
          
          {/* Generetor Section */}
          <Section className="col-lg-8">
           

          <Section className="cs-form_field_wrap">
                
          <SectionHeading 
              title='NFT Generator'
              subtitle="Akıllı"
            />
                
                <hr/>
                <Spacing lg='25' md='25'/>
                <p>NFT oluşturmak için aşağıdaki formu doldurunuz. NFT'nin önizlemesini sağ bölümden görebilirsiniz.</p>
            </Section>
            <Spacing lg='25' md='25'/>

            <Section className="cs-form_field_wrap">
                <label>NFT Adı</label>
                <input type="text" className="cs-form_field" />
            </Section>

            <Spacing lg='25' md='25'/>

            <Section className="cs-form_field_wrap">
                <label>NFT Sayısı</label>
                <input type="number" className="cs-form_field" />
            </Section>

            <Spacing lg='25' md='25'/>
            
            <Section className="cs-form_field_wrap">
                <label>NFT Görseli</label>
                <input type="file" className="cs-form_field" />
            </Section>
            <Spacing lg='25' md='25'/>

            <Section className="col-lg-12">
              <button className="cs-btn cs-btn_filed cs-accent_btn">Oluştur</button>
            </Section>

            


            
           
          </Section>

          
          {/* Preview Section */}
          <Section className="col-lg-4">
          
            <Section className="text-left ">
              <SectionHeading 
                title='Önizleme'
                subtitle="Canlı"
              />
            </Section>

            <Spacing lg='25' md='25'/>
          
            <Section className='cs-card cs-style3 text-center cs-light_bg'>
            <img src="/images/nft-template-01.png" alt="About" />
            </Section>
        </Section>
      </Section>
      </Section>

     
      
      
    
    </>
  )
}
