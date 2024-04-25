import { useRecoilState, useRecoilValue } from 'recoil';
import { hourSelector, minuteState } from './atoms';

function App() {
  const [miuntes, setMiuntes] = useRecoilState(minuteState);
  const onMiuntesChange = (event:React.FormEvent<HTMLInputElement>) => {
    setMiuntes(+event.currentTarget.value);// + 붙여서 string을 num으로 보냄
  }
  const hours = useRecoilValue(hourSelector);
  return (
    <div>
      <input value={miuntes} onChange={onMiuntesChange} type='number' placeholder='Miuntes'></input>
      <input value={hours} type='number' placeholder='Hours'></input>
    </div>
  );
}

export default App;