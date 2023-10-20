import NavigationContext from '../context/navigation';
import { useContext } from 'react';

function useNavigation() {
  const { currentPath, navigate } = useContext(NavigationContext);
  return { currentPath, navigate };
}

export default useNavigation;
