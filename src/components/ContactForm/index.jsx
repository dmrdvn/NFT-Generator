import React from 'react'
import Section from '../Section'
import Spacing from '../Spacing'

export default function ContactForm() {
  return (
    <form>
      <Section className="row">
        <Section className="col-lg-6">
          <Section className="cs-form_field_wrap">
            <label>Adınız</label>
            <input type="text" className="cs-form_field" />
          </Section>
          <Spacing lg='30' md='30'/>
        </Section>
        <Section className="col-lg-6">
          <Section className="cs-form_field_wrap">
            <label>E-Posta Adresiniz</label>
            <input type="text" className="cs-form_field" />
          </Section>
          <Spacing lg='30' md='30'/>
        </Section>
        <Section className="col-lg-12">
          <Section className="cs-form_field_wrap">
            <label>Konu</label>
            <input type="text" className="cs-form_field" />
          </Section>
          <Spacing lg='30' md='30'/>
        </Section>
        <Section className="col-lg-12">
          <Section className="cs-form_field_wrap">
            <label>Mesajınız</label>
            <textarea className='cs-form_field' cols="30" rows="5"></textarea>
          </Section>
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-12">
          <button className="cs-btn cs-btn_filed cs-accent_btn">Gönder</button>
        </Section>
      </Section>
    </form>
  )
}
