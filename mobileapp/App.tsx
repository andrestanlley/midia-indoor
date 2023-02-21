import MidiaPlayer from './src/screens/MidiaPlayer';
import { AppProvider } from './src/Contexts/Context';

export default function App() {
  return (
    <AppProvider>
      <MidiaPlayer />
    </AppProvider>
  );
}
