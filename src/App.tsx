import { useRecoilState, useRecoilValue } from 'recoil';
import { hourSelector, minuteState } from './atoms';

function App() {
  const [miuntes, setMiuntes] = useRecoilState(minuteState);
  const onMiuntesChange = (event:React.FormEvent<HTMLInputElement>) => {
    setMiuntes(+event.currentTarget.value);// + 붙여서 string을 num으로 보냄
  }
  // const hours = useRecoilValue(hourSelector);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onHoursChange = (event:React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  }
  return (
    <div>
      <input value={miuntes} onChange={onMiuntesChange} type='number' placeholder='Miuntes'></input>
      {/* onChangeEvent함수가 없어서 읽기 전용 input이다 */}
      <input onChange={onHoursChange} value={hours} type='number' placeholder='Hours'></input>
    </div>
  );
}

export default App;