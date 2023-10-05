import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Section from '../Section'
import Spacing from '../Spacing'

export default function BlogDetails() {
  pageTitle('Blog Details');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Spacing lg='95' md='65'/>
      <Section className="container">
        <Section className="row">
          <Section className="col-lg-8 offset-lg-2">
            <Section className="cs-blog_details">
              <Section className="cs-posted_by">
                <Icon icon="material-symbols:date-range-outline-rounded" />
                05 May 2022               
              </Section>
              <Spacing lg='10' md='10'/>
              <Section tag='h1'>What is the procedure for minting an NFT?</Section>
              <Section className="cs-blog_details_data">
                <img src="/images/blog_details1.jpeg" alt="Thumb" />
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.</p>
                <p>Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators End.</p>
                <ol>
                  <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                  <li>Randomised words which don't look even slightly believable.</li>
                  <li>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.</li>
                </ol>
                <blockquote>“When there is nothing left to add, but nothing left to take away, a designer knows he has reached perfection.”</blockquote>
                <img src="/images/blog_details2.jpeg" alt="Thumb" />
                <h2>How can I obtain NFTs?</h2>
                <ol>
                  <li>Many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                  <li>Randomised words which don't look even slightly believable.</li>
                  <li>Else you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.</li>
                </ol>
                <p>Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators word end.</p>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
      <Spacing lg='40' md='20'/>
      <Section className="cs-center">
        <Link to='cs-blog_btn cs-primary_font cs-primary_color cs-accent_color_hover'>
          Read More 
          <Icon icon="material-symbols:arrow-right-alt-rounded" style={{fontSize:'24px'}} />  
        </Link>
      </Section>
      <Spacing lg='100' md='70'/>
    </>
  )
}
