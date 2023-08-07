
import React from 'react';
import styled from 'styled-components';

interface NavbarProps {
  children: React.ReactNode;
}

const NavbarMenu = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    a {
      color: var(--white);
      font-weight: 700;
      text-decoration: none;
      transition: 1s;
      text-transform: uppercase;
      &:hover {
        color: var(--purple);
      }
    }
    input, textarea, select {
      padding: .45rem .5rem;
      border-color: transparent;
      border-radius: 0.5rem;
      font-size: 0.8rem;
      line-height: 0.5rem;
      height: min-content;
      color: var(--black);
    }
  `;

const NavbarContainer = styled.div`
    position: absolute;
    width: 100%;
  `;

export const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }: NavbarProps) => (
  <NavbarContainer>
    <NavbarMenu>
      {children}
    </NavbarMenu>
  </NavbarContainer>
);

export default Navbar;
