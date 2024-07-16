import styled from 'styled-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setcurrentCode } from '../slices/cryptoSlice';
import { RootState } from '@/app/store';

const symbols = ["BTC", "ETH", "BNB", "AVAX", "ICP"];

const HeaderWrapper = styled.header`
  background-color: #1a202c;
  color: #f7fafc;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: #f7fafc;
  font-size: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled.a<{ isActive: boolean }>`
  color: ${props => props.isActive ? '#90cdf4' : '#f7fafc'};
  cursor: pointer;
  font-size: 1.2rem;
`;

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const currentCode = useSelector((state: RootState) => state.crypto.currentCode);

  const handleSymbolClick = (symbol: string) => {
    dispatch(setcurrentCode(symbol));
  };

  return (
    <HeaderWrapper>
      <Container>
        <Title>Crypto Tracker</Title>
        <nav>
          <NavList>
            {symbols.map((symbol) => (
              <NavItem key={symbol}>
                <NavLink
                  isActive={currentCode === symbol}
                  onClick={() => handleSymbolClick(symbol)}
                >
                  {symbol}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;