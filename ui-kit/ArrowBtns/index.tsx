import { motion } from 'framer-motion';
import styled from 'styled-components';
import { styleProps } from 'components/store/lib/types';
import { devices } from 'components/store/lib/Devices';
import color from 'components/store/lib/ui.colors';
const ArrowBtns = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: ${(p: styleProps) => p.position};
  right: ${(p: styleProps) => p.right};
  left: ${(p: styleProps) => p.left};
  top: ${(p: styleProps) => p.top};
  background-color: #8733ff;
  box-shadow: ${(P: styleProps) => P.boxshadow};
  backdrop-filter: ${(P: styleProps) => P.filterdropback};
  -webkit-backdrop-filter: ${(P: styleProps) => P.filterdropback};
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  // &:hover {
  //   background-color: ${color.btnPrimary};
  // }
`;
// ${(P: styleProps) => P.bgcolor};
const ArrowSpan = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: rotate(${(p: styleProps) => p.rotate}deg);
`;

export { ArrowBtns, ArrowSpan };
