import { devices } from 'components/store/lib/Devices';
import color from 'components/store/lib/ui.colors';
import variants from 'components/store/lib/variants';
import {
  Container,
  Content,
  Wrapper,
} from 'components/store/storeLayout/common';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchBanner, fetchBrands } from 'redux/slicers/store/homePageSlicer';
import { THomePageState } from 'redux/types';
import styled from 'styled-components';
import Loading from 'ui-kit/Loading';
import ImageBanner from './ImageBanner';

const Banners = () => {
  const dispatch = useAppDispatch();
  const { banner } = useAppSelector<THomePageState>((state) => state.homePage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await dispatch(fetchBanner());
      setLoading(false);
    })();
  }, []);

  return (
    <Container
      variants={variants.fadInOut}
      key="container-home-banners"
      initial="start"
      animate="middle"
      exit="end"
      flex_direction="row"
      justify_content="center"
      position="relative"
      style={{
        overflow: 'hidden',
      }}
    >
      <SliderContainer>
        {!loading ? (
          <>
            <ImageBanner slides={banner?.slides} />
          </>
        ) : (
          <Loading />
        )}
      </SliderContainer>
    </Container>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${devices.laptopS} {
    height: 450px;
  }
  @media ${devices.tabletL} {
    height: 350px;
  }
  @media ${devices.tabletS} {
    height: 245px;
  }
  @media ${devices.mobileL} {
    height: 245px;
  }
  @media ${devices.mobileM} {
    height: 200px;
  }
  @media ${devices.mobileS} {
    height: 200px;
  }
`;

export default Banners;
