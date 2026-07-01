// src/components/FloatingChat/FloatingChat.js
import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Input,
  Button,
  Text,
  Avatar,
  useDisclosure,
} from '@chakra-ui/react';
import { FaComment, FaLeaf } from 'react-icons/fa';

// Glass card style for chat drawer
const glassDrawer = {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
  color: "white",
};

// Glass style for messages
const glassMessage = {
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.2)",
};

const FloatingChat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [messages, setMessages] = useState([
    { id: 1, text: '🌱 Welcome to GreenGuard! I can help you with:\n\n• Disease detection\n• Products & fertilizers\n• Seeds & planting\n• Garden centres\n• Your dashboard\n• Plant care tips\n\nWhat would you like to know?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  // Comprehensive response function for all app features
  const getBotResponse = (userMessage) => {
    const lower = userMessage.toLowerCase();

    if (lower.includes('detect') || lower.includes('disease') || lower.includes('identify') || lower.includes('check page')) {
      return '🔍 **Disease Detection**\n\nGo to the **Check** page and upload a photo of the affected leaf. Our AI model will analyze it and tell you:\n• Disease name\n• Confidence score\n• Severity level\n• Treatment recommendations\n• Detailed disease information\n\nWe can detect 38 different plant diseases with ~95% accuracy!';
    }

    if (lower.includes('product') || lower.includes('fungicide') || lower.includes('buy') || lower.includes('shop')) {
      return '🛒 **Products Shop**\n\nVisit the **Products** page to find:\n• Fungicides (chemical & organic)\n• Neem oil & copper fungicides\n• Beneficial insects (ladybugs, nematodes)\n• Soil amendments\n\nAll products can be added to your cart and purchased through our checkout system.';
    }

    if (lower.includes('seed') || lower.includes('planting') || lower.includes('grow') || lower.includes('vegetable') || lower.includes('herb')) {
      return '🌱 **Seeds Shop**\n\nOur **Seeds** page offers:\n• Vegetable seeds (tomatoes, peppers, corn, etc.)\n• Fruit seeds (strawberries, watermelon)\n• Herb seeds (basil, cilantro)\n• Flower seeds (sunflowers, marigolds)\n\nEach seed includes planting instructions, days to maturity, sun/water requirements, and price. You can add them to your cart!';
    }

    if (lower.includes('fertilizer') || lower.includes('npk') || lower.includes('plant food') || lower.includes('feed')) {
      return '🧪 **Fertilizer Guide**\n\nThe **Fertilizer Guide** page helps you choose the right fertilizer for:\n• Tomatoes (5-10-10)\n• Corn (10-5-5)\n• Apples (6-2-4)\n• Peppers (3-5-5)\n• Strawberries (4-3-4)\n• General purpose (4-4-4)\n\nEach fertilizer can be added to your cart for purchase.';
    }

    if (lower.includes('garden centre') || lower.includes('garden center') || lower.includes('nearby') || lower.includes('local shop')) {
      return '🗺️ **Nearby Garden Centres**\n\nClick the **Garden Centres** button in the navbar (top right). It will:\n• Ask for your location\n• Open Google Maps\n• Show garden centres near you\n\nYou can find local shops for plants, seeds, fertilizers, and tools!';
    }

    if (lower.includes('dashboard') || lower.includes('history') || lower.includes('scan history') || lower.includes('order history')) {
      return '📊 **Your Dashboard**\n\nThe Dashboard shows:\n• Total scans & unique diseases\n• Recent scan history\n• Recent orders\n• Quick actions (New Scan, History, Shop, Remedies)\n\nAll your scans and orders are automatically saved and displayed here.';
    }

    if (lower.includes('remedy') || lower.includes('home remedy') || lower.includes('natural treatment') || lower.includes('organic treatment')) {
      return '🌿 **Home Remedies**\n\nVisit the **Home Remedies** page for natural treatments for:\n• Early blight\n• Powdery mildew\n• Aphids\n• Spider mites\n• And many more!\n\nEach remedy includes symptoms and step-by-step instructions.';
    }

    if (lower.includes('cart') || lower.includes('checkout') || lower.includes('buy') || lower.includes('order') || lower.includes('payment')) {
      return '🛍️ **Cart & Checkout**\n\n• Add items to cart from Products, Seeds, or Fertilizer pages\n• View cart anytime by clicking the cart icon\n• Adjust quantities or remove items\n• Proceed to checkout\n• Enter shipping address\n• Choose payment method (Card/UPI/Cash)\n• Review and place order\n\nAll orders are saved to your dashboard history.';
    }

    if (lower.includes('tip') || lower.includes('advice') || lower.includes('help') || lower.includes('how to')) {
      return '💡 **Plant Care Tips**\n\nClick the **lightbulb icon** in the navbar for random plant care tips!\n\nExamples:\n• Water plants early morning\n• Test soil pH regularly\n• Rotate crops yearly\n• Use neem oil for pests\n• Remove infected leaves immediately';
    }

    if (lower.includes('login') || lower.includes('signup') || lower.includes('account') || lower.includes('register')) {
      return '👤 **Account**\n\n• Click **Login/Signup** in the navbar\n• Create an account to save your history\n• Log in to access your dashboard\n• Your data is saved in your browser';
    }

    if (lower.includes('about') || lower.includes('what is') || lower.includes('tell me') || lower.includes('features')) {
      return '🌟 **About GreenGuard**\n\nGreenGuard is a complete plant care platform with:\n• AI disease detection (38 diseases)\n• Products & fertilizers shop\n• Seeds shop with planting guides\n• Floating chat for instant help\n• Dashboard with scan history\n• Garden centre locator\n• Home remedies\n• Plant care tips\n\nAll in one place!';
    }

    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('good morning')) {
      return 'Hello! 👋 How can I help you with your plants today? You can ask me about disease detection, products, seeds, fertilizers, or any other feature!';
    }

    if (lower.includes('thank')) {
      return "You're very welcome! 😊 Happy planting! Feel free to ask if you need anything else.";
    }

    if (lower.includes('bye') || lower.includes('goodbye')) {
      return 'Goodbye! 👋 Come back anytime for plant care help. Happy gardening! 🌱';
    }

    return 'I can help with all GreenGuard features:\n\n🌿 Disease Detection\n🛒 Products Shop\n🌱 Seeds Shop\n🧪 Fertilizer Guide\n🗺️ Garden Centres\n📊 Dashboard\n💡 Plant Tips\n🏪 Cart & Checkout\n\nWhat would you like to know more about?';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);

    const botReply = getBotResponse(input);
    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        text: botReply,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Box
        position="fixed"
        bottom="30px"
        right="30px"
        zIndex={1000}
        onClick={onOpen}
        cursor="pointer"
      >
        {/* Animated pulse effect */}
        <Box
          position="absolute"
          top="-5px"
          left="-5px"
          right="-5px"
          bottom="-5px"
          borderRadius="full"
          bg="green.400"
          opacity={0.3}
          animation="pulse 2s infinite"
          sx={{
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)', opacity: 0.3 },
              '70%': { transform: 'scale(1.2)', opacity: 0.1 },
              '100%': { transform: 'scale(1)', opacity: 0.3 },
            },
          }}
        />
        
        {/* Main button */}
        <IconButton
          icon={<FaComment size={32} />}
          size="lg"
          width="70px"
          height="70px"
          colorScheme="green"
          borderRadius="full"
          boxShadow="2xl"
          aria-label="Open chat"
          fontSize="32px"
          bg="rgba(72, 187, 120, 0.8)"
          border="2px solid rgba(255,255,255,0.3)"
          _hover={{ transform: 'scale(1.1)', bg: 'rgba(72, 187, 120, 1)' }}
          transition="all 0.2s"
        />
      </Box>

      {/* Bottom-aligned Chat Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay bg="rgba(0,0,0,0.4)" />
        <DrawerContent
          style={{
            ...glassDrawer,
            maxHeight: '60vh',
            top: 'auto',
            bottom: '10px',
            borderRadius: 'xl',
          }}
        >
          <DrawerCloseButton color="white" />
          <DrawerHeader bg="rgba(255,255,255,0.05)" borderBottom="1px solid rgba(255,255,255,0.1)" py={3}>
            <HStack>
              <FaLeaf color="#68D391" size={20} />
              <Text color="white" fontSize="lg" fontWeight="bold">GreenGuard Assistant</Text>
            </HStack>
          </DrawerHeader>

          <DrawerBody p={0} display="flex" flexDirection="column">
            <Box flex="1" p={3} overflowY="auto" bg="rgba(0,0,0,0.2)">
              <VStack spacing={3} align="stretch">
                {messages.map((msg) => (
                  <Box
                    key={msg.id}
                    alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
                    maxW="85%"
                  >
                    <HStack spacing={2} align="start">
                      {msg.sender === 'bot' && (
                        <Avatar size="xs" bg="green.500" icon={<FaLeaf />} />
                      )}
                      <Box
                        style={msg.sender === 'user' ? glassMessage : glassDrawer}
                        p={2}
                        borderRadius="lg"
                        bg={msg.sender === 'user' ? 'rgba(72, 187, 120, 0.3)' : 'rgba(255,255,255,0.05)'}
                        border={msg.sender === 'user' ? '1px solid rgba(72, 187, 120, 0.4)' : '1px solid rgba(255,255,255,0.1)'}
                      >
                        <Text color="white" whiteSpace="pre-line" fontSize="sm">
                          {msg.text}
                        </Text>
                      </Box>
                      {msg.sender === 'user' && (
                        <Avatar size="xs" bg="blue.500" name="You" />
                      )}
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>

            <Box p={3} borderTop="1px solid rgba(255,255,255,0.1)" bg="rgba(0,0,0,0.3)">
              <HStack>
                <Input
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  bg="rgba(255,255,255,0.1)"
                  border="1px solid rgba(255,255,255,0.2)"
                  color="white"
                  size="sm"
                  _placeholder={{ color: 'whiteAlpha.600' }}
                  _hover={{ borderColor: 'whiteAlpha.400' }}
                  _focus={{ borderColor: 'green.300', boxShadow: 'none' }}
                />
                <Button
                  colorScheme="green"
                  onClick={handleSend}
                  bg="rgba(72, 187, 120, 0.4)"
                  border="1px solid rgba(72, 187, 120, 0.6)"
                  _hover={{ bg: 'rgba(72, 187, 120, 0.6)' }}
                  color="white"
                  size="sm"
                >
                  Send
                </Button>
              </HStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FloatingChat;
