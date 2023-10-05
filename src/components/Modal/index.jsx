import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import ConnectCard from '../ConnectCard';
import MintCard from '../MintCard';
import Section from '../Section';

export default function Modal({modalType, btnText, btnIcon}) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Section tag='span' className="cs-btn cs-btn_filed cs-accent_btn" onClick={()=>setModal(!modal)}>
        {btnIcon && <Icon icon="ion:wallet-outline" />}
        <Section tag='span'>{btnText}</Section>
      </Section>
      
      <Section className={modal ? "cs-modal active" : "cs-modal"}>
        <Section className="cs-modal_in">
          <Section className="cs-modal_container">
            <Section className="cs-modal_container_in cs-light_bg">
              <button className="cs-close_modal cs-center cs-primary_bg" onClick={()=>setModal(!modal)}>
                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L11.7071 1.70711ZM0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L0.292893 10.2929ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L10.2929 11.7071ZM10.2929 0.292893L0.292893 10.2929L1.70711 11.7071L11.7071 1.70711L10.2929 0.292893ZM0.292893 1.70711L10.2929 11.7071L11.7071 10.2929L1.70711 0.292893L0.292893 1.70711Z" fill="white" />
                </svg>            
              </button>
              {modalType==='mint' && <MintCard/>}
              {modalType==='connect' && <ConnectCard/>}
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  )
}
