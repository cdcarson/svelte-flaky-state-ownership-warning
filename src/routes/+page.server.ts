import Prism from 'prismjs';
import typesCode from '$lib/types.ts?raw';

export const load = () => {
  
  const typesTs = Prism.highlight(typesCode, Prism.languages.javascript, 'javascript')
  return {
    typesTs
  };
};
