import styled from "styled-components";

const CampoTextoStyled = styled.div`
  padding: 2px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: max-content;
  width: 500px;

  border: 2px solid #c98cf1;
  border-radius: 8px;

  input {
    background: none;
    border: none;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
  }

  img {
    width: 38px;
    height: 38px;
  }
`;

// eslint-disable-next-line react/prop-types
const CampoTexto = ({ placeholder }) => {
  return (
    <CampoTextoStyled>
      <input type="search" placeholder={placeholder} />
      <img src="/icones/search.png" alt="" />
    </CampoTextoStyled>
  );
};

export default CampoTexto;
