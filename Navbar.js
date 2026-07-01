// components/Navbar/Navbar.js
import React, { useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  IconButton,
  useToast,
  Divider,
} from '@chakra-ui/react';
import { 
  FaLeaf, 
  FaMapMarkerAlt, 
  FaLightbulb, 
  FaFlask, 
  FaShoppingBag, 
  FaNewspaper, 
  FaHome, 
  FaSearch,
  FaSeedling,
  FaTint,
  FaTree,
  FaStore,         // new icon for Shop dropdown
  FaChevronDown,
  FaCalendarAlt
} from 'react-icons/fa';
import UserContext from '../../context/UserContext';

// Array of random plant tips
const plantTips = [
  "Water your plants early in the morning to prevent fungal diseases.",
  "Most vegetables need at least 6-8 hours of direct sunlight daily.",
  "Test your soil pH regularly – most plants prefer 6.0–6.8.",
  "Rotate crops yearly to prevent soil-borne diseases.",
  "Neem oil is an effective organic pesticide for many pests.",
  "Companion planting can help deter pests naturally.",
  "Remove infected leaves immediately to stop disease spread.",
  "Use mulch to retain soil moisture and suppress weeds.",
  "Ladybugs are natural predators of aphids.",
  "Coffee grounds can be added to compost for nitrogen boost.",
];

const NavBar = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const openGardenCenters = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://www.google.com/maps/search/garden+centers/@${latitude},${longitude},12z`;
          window.location.href = url;
        },
        () => window.location.href = 'https://www.google.com/maps/search/garden+centers'
      );
    } else {
      window.location.href = 'https://www.google.com/maps/search/garden+centers';
    }
  };

  const showRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * plantTips.length);
    const tip = plantTips[randomIndex];
    toast({
      title: '🌱 Plant Tip',
      description: tip,
      status: 'info',
      duration: 5000,
      isClosable: true,
      position: 'top',
    });
  };

  return (
    <Box bg="white" px={6} py={3} boxShadow="lg" position="sticky" top={0} zIndex={10}>
      <Flex maxW="7xl" mx="auto" align="center" justify="space-between">
        {/* Left side: Logo with dropdown */}
        <HStack spacing={3}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FaLeaf size={30} />}
              variant="ghost"
              aria-label="Menu"
              fontSize="30px"
              color="green.600"
              _hover={{ bg: 'green.50', transform: 'scale(1.1)' }}
              transition="all 0.2s"
            />
            <MenuList>
              <MenuItem icon={<FaHome />} onClick={() => navigate('/dashboard')}>Dashboard</MenuItem>
              <MenuItem icon={<FaStore />} onClick={() => navigate('/admin-activity')}>Admin Activity</MenuItem>
            </MenuList>
          </Menu>
          <Text 
            fontSize="2xl" 
            fontWeight="bold" 
            as={RouterLink} 
            to="/" 
            color="green.700"
            _hover={{ color: 'green.500', textDecoration: 'none' }}
            transition="color 0.2s"
          >
            GreenGuard
          </Text>
        </HStack>

        {/* Center Navigation – with Shop after Soil Guide */}
        <HStack spacing={2}>
          <Button
            as={RouterLink}
            to="/"
            variant="ghost"
            leftIcon={<FaHome />}
            fontWeight="medium"
            _hover={{ bg: 'green.50', color: 'green.600' }}
            px={3}
            py={2}
          >
            Home
          </Button>
          <Button
            as={RouterLink}
            to="/news"
            variant="ghost"
            leftIcon={<FaNewspaper />}
            fontWeight="medium"
            _hover={{ bg: 'green.50', color: 'green.600' }}
            px={3}
            py={2}
          >
            News
          </Button>
          <Button
            as={RouterLink}
            to="/check"
            variant="ghost"
            leftIcon={<FaSearch />}
            fontWeight="medium"
            _hover={{ bg: 'green.50', color: 'green.600' }}
            px={3}
            py={2}
          >
            Check
          </Button>
          <Button
            as={RouterLink}
            to="/home-remedies"
            variant="ghost"
            leftIcon={<FaFlask />}
            fontWeight="medium"
            _hover={{ bg: 'green.50', color: 'green.600' }}
            px={3}
            py={2}
          >
            Remedies
          </Button>
          <Button
            as={RouterLink}
            to="/soil-guide"
            variant="ghost"
            leftIcon={<FaTint />}
            fontWeight="medium"
            _hover={{ bg: 'green.50', color: 'green.600' }}
            px={3}
            py={2}
          >
            Soil Guide
          </Button>
          <Button
            as={RouterLink}
            to="/seasonal-calendar"
            variant="ghost"
            leftIcon={<FaSeedling />}
            fontWeight="medium"
            _hover={{ bg: 'green.50', color: 'green.600' }}
            px={3}
            py={2}
          >
            Planting Calendar
          </Button>
          <Button
            as={RouterLink}
            to="/harvest-calculator"
            variant="ghost"
            leftIcon={<FaCalendarAlt />}
            fontWeight="medium"
            _hover={{ bg: 'green.50', color: 'green.600' }}
            px={3}
            py={2}
          >
            Harvest 
          </Button>

          {/* Shop Dropdown – now with icon and placed after Soil Guide */}
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={<FaStore />}
              rightIcon={<FaChevronDown />}
              variant="ghost"
              fontWeight="medium"
              _hover={{ bg: 'green.50', color: 'green.600' }}
              px={3}
              py={2}
            >
              Shop
            </MenuButton>
            <MenuList>
              <MenuItem icon={<FaShoppingBag />} onClick={() => navigate('/products')}>
                Products
              </MenuItem>
              <MenuItem icon={<FaSeedling />} onClick={() => navigate('/seeds')}>
                Seeds
              </MenuItem>
              <MenuItem icon={<FaTree />} onClick={() => navigate('/plants')}>
                Plants
              </MenuItem>
              <MenuItem icon={<FaFlask />} onClick={() => navigate('/fertilizer-guide')}>
                Fertilizers
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        {/* Right side: Action Icons + Authentication */}
        <HStack spacing={3}>
          <IconButton
            icon={<FaMapMarkerAlt size={20} />}
            variant="ghost"
            colorScheme="green"
            aria-label="Garden Centres"
            onClick={openGardenCenters}
            fontSize="20px"
            _hover={{ bg: 'green.50', transform: 'scale(1.1)' }}
            transition="all 0.2s"
          />
          <IconButton
            icon={<FaLightbulb size={20} />}
            variant="ghost"
            colorScheme="yellow"
            aria-label="Plant Tip"
            onClick={showRandomTip}
            fontSize="20px"
            _hover={{ bg: 'yellow.50', transform: 'scale(1.1)' }}
            transition="all 0.2s"
          />
          <IconButton
            icon={<FaShoppingBag size={20} />}
            variant="ghost"
            colorScheme="green"
            aria-label="Cart"
            onClick={() => navigate('/cart')}
            fontSize="20px"
            _hover={{ bg: 'green.50', transform: 'scale(1.1)' }}
            transition="all 0.2s"
          />
          <Divider orientation="vertical" height="30px" />

          {user ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
                _hover={{ transform: 'scale(1.05)' }}
                transition="all 0.2s"
              >
                <Avatar size="sm" name={user.name || 'User'} src={user.avatar} bg="green.500" />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <HStack spacing={2}>
              <Button
                as={RouterLink}
                to="/login"
                variant="ghost"
                colorScheme="green"
                size="sm"
                px={4}
              >
                Login
              </Button>
              <Button
                as={RouterLink}
                to="/signup"
                colorScheme="green"
                size="sm"
                px={4}
              >
                Sign Up
              </Button>
            </HStack>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;