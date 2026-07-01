import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Stack } from "react-bootstrap";

const DiseaseCard = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card 
      className="diseaseCard"
      style={{
        backgroundColor: 'white',
        border: '1px solid #e0e0e0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <CardBody>
        <Image
          src={data.img}
          alt="disease"
          className="diseaseImg"
          style={{
            borderRadius: '8px',
            marginBottom: '16px',
            width: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
        />

        <Stack>
          <Heading 
            size="md" 
            style={{ 
              color: '#1a2e1a', // Dark green
              fontWeight: 'bold',
              fontSize: '1.2rem',
            }}
          >
            {data.diseaseName}
          </Heading>
        </Stack>

        {showMore && (
          <>
            <Divider my={3} style={{ backgroundColor: '#cbd5e0' }} />

            {data.description && (
              <Text style={{ color: '#2d3748', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#276749' }}>Description:</span> {data.description}
              </Text>
            )}
            
            {data.symptoms && (
              <Text style={{ color: '#2d3748', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#276749' }}>Symptoms:</span> {data.symptoms}
              </Text>
            )}
            
            {data.causes && (
              <Text style={{ color: '#2d3748', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#276749' }}>Causes:</span> {data.causes}
              </Text>
            )}
            
            {data.favourableConditions && (
              <Text style={{ color: '#2d3748', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#276749' }}>Favourable Conditions:</span> {data.favourableConditions}
              </Text>
            )}
            
            {data.prevention && (
              <Text style={{ color: '#2d3748', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#276749' }}>Prevention:</span> {data.prevention}
              </Text>
            )}
            
            {data.treatment && (
              <Text style={{ color: '#2d3748', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#276749' }}>Treatment:</span> {data.treatment}
              </Text>
            )}
            
            {data.impact && (
              <Text style={{ color: '#2d3748', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#276749' }}>Impact:</span> {data.impact}
              </Text>
            )}
            
            {data.facts && (
              <Text style={{ color: '#2d3748', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#276749' }}>Facts:</span> {data.facts}
              </Text>
            )}
            
            {data.identify && (
              <Text style={{ color: '#2d3748', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#276749' }}>Identify:</span> {data.identify}
              </Text>
            )}
          </>
        )}
      </CardBody>

      <Divider style={{ backgroundColor: '#cbd5e0' }} />

      <CardFooter>
        <Button
          className="showMore"
          onClick={() => setShowMore(!showMore)}
          style={{
            backgroundColor: '#276749',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '500',
            width: '100%',
          }}
          _hover={{
            backgroundColor: '#1e5736',
          }}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DiseaseCard;