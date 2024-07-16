import React from 'react';
import { CryptoData } from '../hooks/types';
import { formatDate, formatPrice } from '../utils/helper';
import styled from 'styled-components';

interface CryptoTableProps {
  data: CryptoData[];
}

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  color: #2d3748;
  padding: 10px 20px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 10px 20px; 
`;

const CryptoTable: React.FC<CryptoTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
          <TableHeader>S.No</TableHeader>
            <TableHeader>Price (₹)</TableHeader>
            <TableHeader>Timestamp</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data?.map((crypto, index) => (
            <TableRow key={index}>
                <TableData>{index + 1}</TableData>
              <TableData>{formatPrice(crypto.price)}</TableData>
              <TableData>{formatDate(crypto.timestamp)}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable;