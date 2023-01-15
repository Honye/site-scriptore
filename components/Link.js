import { useCallback, useEffect, useState } from 'react';
import { Link as MLink } from '@mui/material';
import { invoke, runsInSafari } from '../utils/bridge';

const Link = (props) => {
  const { href, children, ...restProps } = props;
  const [isInSafari, setIsInSafari] = useState(false);
  
  useEffect(() => setIsInSafari(runsInSafari()), []);

  const onClick = useCallback(() => {
    if (!isInSafari) {
      invoke('safari', href);
    }
  }, [href, isInSafari]);

  return (
    <MLink href={isInSafari ? href : undefined} onClick={onClick} {...restProps}>{children}</MLink>
  );
};

export default Link;
