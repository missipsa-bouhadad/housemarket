import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface InquiryEmailProps {
  ownerName: string;
  propertyTitle: string;
  propertyPrice: number;
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  senderMessage: string;
}

export default function InquiryEmail({
  ownerName,
  propertyTitle,
  propertyPrice,
  senderName,
  senderEmail,
  senderPhone,
  senderMessage,
}: InquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New inquiry for {propertyTitle}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-8">
          <Container className="bg-white mx-auto p-8 rounded-xl max-w-xl">
            <Heading className="text-xl font-bold text-gray-900">
              New Contact Request
            </Heading>

            <Text className="text-sm text-gray-700 leading-relaxed">
              Hello {ownerName},
            </Text>
            <Text className="text-sm text-gray-700 leading-relaxed">
              You have received a new inquiry regarding your property:
            </Text>

            <Section className="bg-gray-50 rounded-lg p-4 my-4">
              <Text className="text-base font-semibold m-0">
                {propertyTitle}
              </Text>
              <Text className="text-sm text-gray-500 m-0">
                {propertyPrice.toLocaleString("en-US")} €
              </Text>
            </Section>

            <Hr className="border-gray-200 my-5" />

            <Heading as="h2" className="text-base font-semibold text-gray-900">
              Requester Details
            </Heading>
            <Text className="text-sm text-gray-700">
              <strong>Name:</strong> {senderName}
            </Text>
            <Text className="text-sm text-gray-700">
              <strong>Email:</strong> {senderEmail}
            </Text>
            <Text className="text-sm text-gray-700">
              <strong>Phone:</strong> {senderPhone}
            </Text>

            <Hr className="border-gray-200 my-5" />

            <Heading as="h2" className="text-base font-semibold text-gray-900">
              Message
            </Heading>
            <Text className="text-sm text-gray-700 leading-relaxed">
              {senderMessage}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
