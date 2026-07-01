// src/components/AboutUs/AboutUs.js
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Image,
  Button,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaLeaf,
  FaRocket,
  FaHeart,
  FaQuoteRight,
  FaAward
} from 'react-icons/fa';

const MotionBox = motion(Box);

// Beautiful glass card style with images
const glassCard = {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
  color: "white",
};

const AboutUs = () => {
  const features = [
    {
      icon: FaLeaf,
      title: '38 Diseases Detected',
      description: 'Comprehensive coverage of common plant diseases across multiple crop types.',
      color: 'green.300',
      image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7b3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: FaRocket,
      title: '87K+ Training Images',
      description: 'Robust dataset ensuring high accuracy and reliable predictions.',
      color: 'blue.300',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: FaAward,
      title: '95% Accuracy',
      description: 'State-of-the-art CNN model with proven performance on validation data.',
      color: 'purple.300',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Project Started',
      description: 'Began development with dataset collection and model training.',
      icon: FaRocket,
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2026',
      title: 'Model Completed',
      description: 'Successfully trained CNN model with 95% accuracy after 10 epochs.',
      icon: FaAward,
      image: 'https://images.unsplash.com/photo-1585336326001-65b4fd7085a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2026',
      title: 'App Launched',
      description: 'Full-stack web application deployed with React and Flask.',
      icon: FaHeart,
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <Box py={16} position="relative" overflow="hidden" minH="100vh">
      {/* Background Image Grid */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
        style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/3114705.jpg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        {/* Header Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={12}
          p={8}
          borderRadius="2xl"
          style={glassCard}
          _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
        >
          <Badge 
            colorScheme="green" 
            fontSize="lg" 
            px={4} 
            py={1} 
            borderRadius="full" 
            mb={4} 
            bg="rgba(255, 255, 255, 0.2)" 
            color="white"
            border="1px solid white"
          >
            About Us
          </Badge>
          <Heading as="h1" size="2xl" mb={4} color="white" textShadow="0 2px 4px rgba(0,0,0,0.3)">
            🌱 GreenGuard – Your AI-Powered
            <Text as="span" color="green.200" display="inline-block" ml={2}>
              Plant Doctor
            </Text>
          </Heading>
          <Text fontSize="xl" color="white" maxW="3xl" mx="auto" textShadow="0 1px 2px rgba(0,0,0,0.2)">
            We're on a mission to empower farmers and gardeners with cutting-edge AI technology 
            to detect plant diseases early and protect their crops effectively.
          </Text>
        </MotionBox>

        {/* Mission & Vision with Plant Backgrounds */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={16}>
          {/* Mission Card */}
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            p={8}
            borderRadius="2xl"
            style={{
              ...glassCard,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            position="relative"
            overflow="hidden"
            _hover={{ transform: 'translateY(-10px)', transition: '0.3s' }}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="rgba(0, 40, 0, 0.5)"
              backdropFilter="blur(8px)"
              zIndex={0}
            />
            <Box position="relative" zIndex={1}>
              <Icon as={FaRocket} boxSize={12} color="green.200" mb={4} />
              <Heading as="h3" size="lg" mb={3} color="white">
                Our Mission
              </Heading>
              <Text fontSize="lg" color="white">
                To democratize access to plant disease detection technology, making it affordable 
                and accessible for every farmer, gardener, and agricultural enthusiast.
              </Text>
            </Box>
          </MotionBox>

          {/* Vision Card */}
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            p={8}
            borderRadius="2xl"
            style={{
              ...glassCard,
              backgroundImage: 'url(https://images.unsplash.com/photo-1585336326001-65b4fd7085a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            position="relative"
            overflow="hidden"
            _hover={{ transform: 'translateY(-10px)', transition: '0.3s' }}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="rgba(0, 40, 0, 0.5)"
              backdropFilter="blur(8px)"
              zIndex={0}
            />
            <Box position="relative" zIndex={1}>
              <Icon as={FaHeart} boxSize={12} color="green.200" mb={4} />
              <Heading as="h3" size="lg" mb={3} color="white">
                Our Vision
              </Heading>
              <Text fontSize="lg" color="white">
                A world where no crop is lost to preventable diseases through AI-powered plant healthcare.
              </Text>
            </Box>
          </MotionBox>
        </SimpleGrid>

        {/* Story Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          mb={16}
          p={8}
          borderRadius="2xl"
          style={{
            ...glassCard,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          position="relative"
          overflow="hidden"
          _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 40, 0, 0.5)"
            backdropFilter="blur(8px)"
            zIndex={0}
          />
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} position="relative" zIndex={1}>
            <Box flex="1">
              <Heading as="h3" size="lg" mb={4} color="white">
                Our Story
              </Heading>
              <Text fontSize="lg" color="white" mb={4}>
                GreenGuard was born from a simple observation: farmers often discover plant diseases 
                too late. We realized AI could bridge this gap by providing instant, accurate diagnoses.
              </Text>
              <Text fontSize="lg" color="white">
                What started as a college project has grown into a comprehensive solution trained on 
                over 87,000 images covering 38 plant diseases, helping farmers and gardeners worldwide.
              </Text>
            </Box>
            <Box flex="1">
              <Image
                src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
                alt="Farmers in field"
                borderRadius="xl"
                boxShadow="2xl"
              />
            </Box>
          </Flex>
          <Box
            position="absolute"
            top="-20px"
            right="-20px"
            opacity={0.1}
            fontSize="200px"
            transform="rotate(15deg)"
            zIndex={0}
          >
            <FaQuoteRight color="white" />
          </Box>
        </MotionBox>

        {/* Key Features */}
        <Box mb={16}>
          <Heading as="h3" size="xl" textAlign="center" mb={10} color="white" textShadow="0 2px 4px rgba(0,0,0,0.3)">
            What Makes Us Different
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {features.map((feature, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                p={6}
                borderRadius="2xl"
                style={{
                  ...glassCard,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                position="relative"
                overflow="hidden"
                textAlign="center"
                whileHover={{ y: -10, scale: 1.02, transition: '0.3s' }}
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="rgba(0, 40, 0, 0.5)"
                  backdropFilter="blur(8px)"
                  zIndex={0}
                />
                <Box position="relative" zIndex={1}>
                  <Icon as={feature.icon} boxSize={12} color={feature.color} mb={4} />
                  <Heading as="h4" size="md" mb={2} color="white">
                    {feature.title}
                  </Heading>
                  <Text color="white">{feature.description}</Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>

        {/* Timeline */}
        <Box mb={16}>
          <Heading as="h3" size="xl" textAlign="center" mb={10} color="white" textShadow="0 2px 4px rgba(0,0,0,0.3)">
            Our Journey
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {milestones.map((milestone, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                p={6}
                borderRadius="2xl"
                style={{
                  ...glassCard,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                position="relative"
                overflow="hidden"
                borderLeft="4px solid"
                borderLeftColor="green.300"
                _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="rgba(0, 40, 0, 0.5)"
                  backdropFilter="blur(8px)"
                  zIndex={0}
                />
                <Box position="relative" zIndex={1}>
                  <Flex align="center" mb={3}>
                    <Icon as={milestone.icon} boxSize={6} color="green.200" mr={3} />
                    <Badge 
                      colorScheme="green" 
                      fontSize="lg" 
                      bg="rgba(255, 255, 255, 0.2)" 
                      color="white"
                      border="1px solid white"
                    >
                      {milestone.year}
                    </Badge>
                  </Flex>
                  <Heading as="h4" size="md" mb={2} color="white">
                    {milestone.title}
                  </Heading>
                  <Text color="white">{milestone.description}</Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>

        {/* Stats */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          p={10}
          borderRadius="2xl"
          style={{
            ...glassCard,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          position="relative"
          overflow="hidden"
          textAlign="center"
          mb={16}
          _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 40, 0, 0.5)"
            backdropFilter="blur(8px)"
            zIndex={0}
          />
          <Box position="relative" zIndex={1}>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
              <Box>
                <Text fontSize="5xl" fontWeight="bold" color="white">38</Text>
                <Text fontSize="lg" color="white">Diseases Detected</Text>
              </Box>
              <Box>
                <Text fontSize="5xl" fontWeight="bold" color="white">87k+</Text>
                <Text fontSize="lg" color="white">Training Images</Text>
              </Box>
              <Box>
                <Text fontSize="5xl" fontWeight="bold" color="white">95%</Text>
                <Text fontSize="lg" color="white">Model Accuracy</Text>
              </Box>
              <Box>
                <Text fontSize="5xl" fontWeight="bold" color="white">10</Text>
                <Text fontSize="lg" color="white">Training Epochs</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </MotionBox>

        {/* Call to Action */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          p={8}
          borderRadius="2xl"
          style={{
            ...glassCard,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 40, 0, 0.5)"
            backdropFilter="blur(8px)"
            zIndex={0}
          />
          <Box position="relative" zIndex={1}>
            <Heading as="h3" size="lg" mb={4} color="white">
              Join Us in Protecting Our Plants
            </Heading>
            <Text fontSize="lg" color="white" mb={6} maxW="2xl" mx="auto">
              Whether you're a farmer, gardener, or just love plants – try GreenGuard today and 
              never let a disease go undetected.
            </Text>
            <Button
              colorScheme="green"
              size="lg"
              rightIcon={<FaLeaf />}
              onClick={() => window.location.href = '/check'}
              bg="rgba(255, 255, 255, 0.2)"
              _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
              color="white"
              border="1px solid white"
            >
              Try Disease Detection
            </Button>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default AboutUs;