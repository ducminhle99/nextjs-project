import { useEffect } from 'react';

type Props = {
  event: string;
  handler: () => void;
  passive?: boolean;
};

export const useEvent = ({ event, handler, passive = false }: Props) => {
  useEffect(() => {
    window.addEventListener(event, handler, passive);

    return function cleanUp() {
      window.removeEventListener(event, handler, passive);
    };
  });
};
