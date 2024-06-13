import { Test_1 } from './tests/test1'
import { Test_2 } from './tests/test2'
import { Test_3 } from './tests/test3'
import { Test_4 } from './tests/test4'
import { Test_5 } from './tests/test5'

export default async function page() {
  const T1 = await Test_1()
  const T2 = await Test_2()
  const T3 = await Test_3()
  const T4 = await Test_4()
  const T5 = await Test_5()

  return (
    <div>
      {T1}
      {T2}
      {T3}
      {T4}
      {T5}
    </div>
  )
}
