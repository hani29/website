import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import TabGrid from "components/cards/TabCardGrid.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import SimpleContactUsForm from "components/forms/SimpleContactUs.js";

import Footer from "components/footers/FiveColumnWithBackground.js";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <SliderCard />

      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>Books.</HighlightedText>
          </>
        }
      />

      <Testimonial
        subheading="Testimonials"
        heading={
          <>
            Our Students <span tw="text-primary-500">Love Us.</span>
          </>
        }
        description="Here are what some of our amazing Students are saying about our marketing professionals."
        testimonials={[
          {
            imageSrc:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            quote:
              "Some students description.",
            customerName: "Charlotte Hale",
            customerTitle: "10th passout",
          },
          {
            imageSrc:
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, Nestle",
          },
        ]}
        textOnLeft={true}
      />
      <ContactUsForm />
      <SimpleContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
