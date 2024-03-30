import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: davidgsongs@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Davysongs",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/en/davysongs",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [prevY, setPrevY] = useState(0);
  const headerRef = useRef(null);
  
  function handleScroll() {

    const currentY = window.scrollY;

    if (prevY <= currentY) {headerRef.current.style.transform = 'translateY(-200px)';}
    else {headerRef.current.style.transform = 'translateY(0)'};
    
    setPrevY(currentY);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll)}
  })


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const social_icons = socials.map(social => {
    return <a href={social.url} key={social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></a>
});

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex={1}

      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack>
            {social_icons}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href='#projects-section' onClick={handleClick} >Projects</a>
              <a href='#contactme-section' onclick={handleClick} >Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
