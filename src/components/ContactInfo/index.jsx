import { Icon } from '@iconify/react';
import React from 'react';
import Section from '../Section';
import Spacing from '../Spacing';

export default function ContactInfo() {
  return (
    <Section className="cs-contact_info">
      <Section tag="h2" className="cs-info_title">
        Hızlı İletişim Bilgileri
      </Section>
      <Spacing lg="30" md="30" />
      <Section className="cs-info_box">
        <Section className="cs-info_box_icon">
          <Icon icon="fa6-solid:phone" />
        </Section>
        <Section className="cs-info_box_right">
          <Section tag="h3">Sosyal Medya</Section>
          <Section tag="p">
            <span className="cs-medium">Discord:</span> <a href="https://discord.com/me/elontaylor1">@elontaylor</a>
          </Section>
          <Section tag="p">
            <span className="cs-medium">Telegram:</span> <a href="https://telegram.com/dmrdvn35">@dmrdvn35</a>
          </Section>
        </Section>
      </Section>
      <Spacing lg="20" md="20" />
      <Section className="cs-info_box">
        <Section className="cs-info_box_icon">
          <Icon icon="fa-solid:envelope" />
        </Section>
        <Section className="cs-info_box_right">
          <Section tag="h3">E-Posta</Section>
          <Section tag="p">
            <span className="cs-medium">Twitter:</span> <a href="https://twitter.com/elontaylor1">x/elontaylor1</a>
          </Section>
          <Section tag="p">
            <span className="cs-medium">E - Posta:</span> info@elontaylor.com
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
