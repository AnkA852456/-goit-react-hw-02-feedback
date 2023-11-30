import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
      <Feedback />
      <Statistics />
    </>
  );
};