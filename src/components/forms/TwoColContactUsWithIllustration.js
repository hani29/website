import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

// const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`
// const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

// const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`
const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`


export default ({
  subheading = "Contact Us",
  heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</>,
  description = "107, CV Road, Bannimantap 'A' Layout, Mysore, Karnataka, 570015.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container id="Contact">
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}
            <span class="imageContainer" style={{display: "flex", margin: "10px 0px"}}><img src="/static/media/support-icon.f9253ffa.svg" alt="" style={{marginRight: 10}}/> 9900368007</span>
            <span class="imageContainer" style={{display: "flex", margin: "10px 0px"}}><img src="/static/media/support-icon.f9253ffa.svg" alt="" style={{marginRight: 10}}/> syedsha.techtron@gmail.com</span>
            <span class="imageContainer" style={{display: "flex"}}><img src="/static/media/support-icon.f9253ffa.svg" alt="" style={{marginRight: 10}}/> Download the  <span tw="text-primary-500" style={{marginLeft: 4, cursor: "pointer"}}><a href="https://play.google.com/store/apps/details?id=com.clivose.connect" target="_blank"> App</a></span></span>
            </Description>
            <Form action={formAction} method={formMethod}>
            {/* <Textarea name="message" placeholder="Your Review Here" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton> */}
              {/* <Input type="email" name="email" placeholder="Your Email Address" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton> */}
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
