import styled from "styled-components";
import _default from "../../themes/default";

// Container for the social media icons with spacing
export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

// Individual social media icon with hover effects and proper styling
export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
