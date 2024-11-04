import React, { useState } from 'react';
import { ToggleButton, Product, Popper } from '../components';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

type TProduct = {
  text: string;
  price: number;
  description?: string;
  tags?: string[];
};

type AppProps = {
  products?: TProduct[];
};

const App = ({ products }: AppProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  // click on toggle button
  const handleToggle = (toggleAnchorEl: HTMLElement | null, toggle: boolean) => {
    setAnchorEl(toggle ? toggleAnchorEl : null);
  };

  return (
    <>
      <ToggleButton
        sx={{
          position: 'absolute',
          right: (theme) => theme.spacing(2),
          bottom: 20,
        }}
        onClick={handleToggle}
        label="Buy"
        startIcon={<MdOutlineAddShoppingCart />}
      />

      <ToggleButton
        sx={{
          position: 'absolute',
          right: (theme) => theme.spacing(2),
          top: '30%',
        }}
        onClick={handleToggle}
        label="Buy"
        startIcon={<MdOutlineAddShoppingCart />}
      />

      <ToggleButton onClick={handleToggle} label="Buy" startIcon={<MdOutlineAddShoppingCart />} />
      <Popper
        sx={[
          (theme) => ({
            margin: `${theme.spacing(0, 2)} !important`,
            width: `calc(100% - ${theme.spacing(4 + 5 + 2)})`,
            maxWidth: 300,
          }),
        ]}
        open={open}
        anchorEl={anchorEl}
        placement={'left'}
      >
        {({ animate }) =>
          (products || []).map((product, index) => (
            <Product
              key={index}
              sx={{
                transition: 'transform 0.4s ease',
                transform: animate ? 'translateY(0)' : `translateY(${((products || []).length - index) * 10}px)`,
              }}
              {...product}
            />
          ))
        }
      </Popper>
    </>
  );
};

export default App;
