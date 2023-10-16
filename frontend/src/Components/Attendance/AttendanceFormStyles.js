import styled from 'styled-components';

export const AttendanceFormContainer = styled.div`
max-width: 900px;
width: 100%;
background-color: #fff;
padding: 25px 30px;
border-radius: 5px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

export const AttendanceFormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AttendanceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const AttendanceTableHeader = styled.th`
  padding: 10px;
  background-color: var(--dark-color);
  color: #fff;
  text-align: left;
`;

export const AttendanceTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const AttendanceTableCell = styled.td`
  padding: 10px;
`;
export const AttendanceInput = styled.input`

height: 40px;
width: 100%;
outline: none;
font-size: 16px;
border-radius: 5px;
padding-left: 15px;
border: 1px solid #ccc;
border-bottom-width: 2px;
transition: all 0.3s ease
`;