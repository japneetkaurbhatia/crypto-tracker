import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CryptoTable from './CryptoTable';
import { useCryptoData } from '../hooks/useCryptoData';
import { RootState } from '@/app/store';
import { formatPrice } from '../utils/helper';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  height: 100%;
`;

const Title = styled.h2`
  color: #2d3748;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SubTitle = styled.h3`
  color: #2d3748;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const InfoContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
`;

const MainContent: React.FC = () => {
  const currentCode = useSelector((state: RootState) => state.crypto.currentCode);
  const { data, isLoading, error } = useCryptoData(currentCode);

  return (
    <ContentWrapper>
      <InfoContainer>
        <Image src={data?.[0].image} alt={currentCode} width={64} height={64} />
        <Title>{data?.[0].name} - {data?.[0].code}</Title>
        <Title>{data?.[0].symbol}</Title>
      </InfoContainer>
      <InfoContainer2>
  <SubTitle>All Time High Price</SubTitle>
  <SubTitle>{formatPrice(data?.[0].allTimeHighPrice)}</SubTitle>
</InfoContainer2>
      <CryptoTable data={data} />
    </ContentWrapper>
  );
};

export default MainContent;